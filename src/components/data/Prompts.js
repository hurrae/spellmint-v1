const allPrompts = [
  {
    name: "Prompt 1",
    prompt: `Generate an overview of a product that includes three sections: Product Description, Scenario (explained in a way a 5-year old would understand), and Use-cases.\n\nPurpose and Scope: "{{purposeAndScope}}"\n\nProduct Description: "{{productDescription}}"`,
  },
  {
    name: "Prompt 2",
    prompt: `Based on the given input, generate a table outlining a user persona with the following details: Demographic Information, Behavior Patterns, Motivations, and Goals.\n\nKey Users: "{{keyUsers}}"`,
  },
  {
    name: "Prompt 3",
    prompt: `Generate a user-action table with the following Key Users and corresponding Actions.\n\nKey Users: "{{keyUsers}}"\nUser Actions: "{{userActions}}"`,
  },
];

export default allPrompts;
