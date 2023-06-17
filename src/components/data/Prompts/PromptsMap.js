const PromptsMap = {
  "Software Product": {
    Product: [
      {
        name: "Prompt 1",
        prompt: `Generate an overview of a product that includes three sections: Product Description, Scenario (explained in a way a 5-year old would understand), and Use-cases.\n\nPurpose and Scope: "{{PurposeAndScope}}"\n\nProduct Description: "{{ProductDescription}}"`,
        replacePart: ["PurposeAndScope", "ProductDescription"],
      },
      {
        name: "Prompt 2",
        prompt: `Based on the given input, generate a table outlining a user persona with the following details: Demographic Information, Behavior Patterns, Motivations, and Goals.\n\nKey Users: "{{KeyUsers}}"`,
        replacePart: ["KeyUsers"],
      },
      {
        name: "Prompt 3",
        prompt: `Generate a user-action table with the following Key Users and corresponding Actions.\n\nKey Users: "{{KeyUsers}}"\nUser Actions: "{{UserActions}}"`,
        replacePart: ["KeyUsers", "UserActions"],
      },
      {
        name: "Prompt 4",
        prompt: `Generate a Customer Interface Requirements table with the 'Requirement' and 'Description' for the following customer interface requirements: "{{CustomerInterfaceRequirements}}"`,
        opPrompt: `Generate a Customer Interface Requirements table with the 'Requirement' and 'Description'.`,
        replacePart: ["CustomerInterfaceRequirements"],
      },
    ],
    Marketing: ["LocalizedRequirements", "Environments"],
    Growth: [],
  },
  "Digital Agency": {
    Design: ["ProductDescription", "KeyUsers", "TargetMarket"],
    Content: ["KeyUsers", "UserActions"],
    Website: [
      "PurposeAndScope",
      "ProductDescription",
      "KeyUsers",
      "UserActions",
    ],
  },
};

export default PromptsMap;
