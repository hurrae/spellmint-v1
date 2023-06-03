// import openai from "@/utils/openai";
import { OpenAIApi, Configuration } from "openai";
import prompts from "@/components/data/Prompts";

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const { PurposeAndScope, ProductDescription, KeyUsers, UserActions } =
      req.body;

    const generatedPrompts = prompts.map((prompt) => ({
      ...prompt,
      prompt:
        prompt.prompt
          .replace("{{purposeAndScope}}", PurposeAndScope)
          .replace("{{productDescription}}", ProductDescription)
          .replace("{{keyUsers}}", KeyUsers)
          .replace("{{userActions}}", UserActions) +
        "\n\nNote: \n1. As an AI with extensive training, generate comprehensive and accurate information. \n2. Modify, correct, or suggest additional details as necessary to ensure completeness. \n3. Always provide detailed responses, and structure the outputs as numbered points for easy comprehension.",
    }));
    console.log("Prompts: ", generatedPrompts);

    const responses = await Promise.all(
      generatedPrompts.map((prompt) => {
        return openai.createCompletion({
          model: "text-davinci-003",
          prompt: prompt.prompt,
          max_tokens: 500,
        });
      })
    );

    const generatedResponses = responses.map((response, index) => ({
      name: generatedPrompts[index].name,
      text: response.data.choices[0].text,
    }));
    console.log("Gen Responses: ", generatedResponses);

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
