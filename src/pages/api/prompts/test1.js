// import openai from "@/utils/openai";
import { OpenAIApi, Configuration } from "openai";

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt:
        "Generate an overview of a product that includes three sections: Product Description, Scenario (explained in a way a 5-year old would understand), and Use-cases. \nPurpose and Scope: “To build a reliable ride-hailing app”\nProduct Description: “An app connecting drivers and passengers for efficient city travel”\nNote: \n1. As an AI with extensive training, generate comprehensive and accurate information.\n2. Modify, correct, or suggest additional details as necessary to ensure completeness.\n3. Always provide detailed responses, and structure the outputs as numbered points for easy comprehension.",
      max_tokens: 500,
    });
    console.log(completion.data.choices);
    console.log(completion.data.choices[0].text);
    res.status(200).json({ txt: completion.data.choices[0].text });
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
