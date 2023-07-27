// import openai from "@/utils/openai";
import { OpenAIApi, Configuration } from "openai";
import allPrompts from "@/components/data/Prompts";
import PromptsMap from "@/components/data/Prompts/PromptsMap";

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const {
      inputs,
      category,
      spell_type,
      proj_name,
      proj_description,
      featureNo,
    } = req.body;
    console.log("Req Body: ", category, spell_type);

    const pInputs = JSON.parse(inputs);
    let prompts;

    if (PromptsMap[category] && PromptsMap[category][spell_type]) {
      prompts = PromptsMap[category][spell_type];
    } else {
      prompts = allPrompts;
    }

    let featureString = "";
    if (featureNo.length > 0) {
      featureNo.map((el, index) => {
        featureString += `\nFeature ${index + 1}: "${
          pInputs[`FeatureTitle${el}`]
        }"\nFeature ${index + 1} Description: "${
          pInputs[`FeatureDescription${el}`]
        }"\n`;
      });
    }
    console.log("Feature String: ", featureString);

    const generatedPrompts = prompts.map((prompt) => {
      let updatedPrompt = prompt.prompt
        .replace("{{ProjectName}}", proj_name)
        .replace("{{ProjectDescription}}", proj_description)
        .replace("{{ProjectCategory}}", category);

      if (prompt.replacePart) {
        prompt.replacePart.forEach((part) => {
          if (!pInputs[part]) {
            if (part == "Features") {
              updatedPrompt = updatedPrompt.replace(
                "{{Features}}",
                featureString
              );
            }
            if (prompt.opPrompt) {
              updatedPrompt = prompt.opPrompt;
            }
          } else {
            updatedPrompt = updatedPrompt.replace(
              `{{${part}}}`,
              pInputs[part] ? pInputs[part] : ""
            );
          }
        });
      }

      return {
        ...prompt,
        prompt: updatedPrompt,
      };
    });

    // console.log("Prompts: ", generatedPrompts);
    const responses = await Promise.all(
      generatedPrompts.map((prompt) => {
        return openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content:
                "For all the next prompts, consider the following before responding: " +
                `\nProject Name: "${proj_name}"` +
                `\nProject Description: "${proj_description}"` +
                `\nProject Category: "${category}" ` +
                "\n\nNote: \n1. As an AI with extensive training, generate elaborate and accurate information. \n2. Modify, correct, or suggest additional details as necessary to ensure completeness. \n3. Always provide detailed responses, and structure the outputs as numbered points for easy comprehension." +
                "\n\nGive response of the text after performing modifications stated below: \n1. If any heading present in content, add <strong> starting and closing tag around the heading.\n2. If there is data in points then add <ol> starting and closing tag around around set of all the points and <li> starting and closing tag around each point. \n3. If there are minor headings in pointers, then add <strong> opening and closing tag around that heading.\n4. Add <p> starting and closing tag and  <br> line break tag wherever necessary.\n\nGive only modified output string nothing else as response.",
            },
            {
              role: "user",
              content: prompt.prompt,
            },
          ],
        });
      })
    );

    const generatedResponses = responses.map((response, index) => ({
      name: generatedPrompts[index].name,
      text: response.data.choices[0].message.content,
      usage: response.data.usage,
    }));
    // console.log("Gen Responses: ", generatedResponses);

    res.status(200).json({ prd: generatedResponses });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({ msg: "An error occured" });
  }
}
