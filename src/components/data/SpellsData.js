const SpellTypes = [
  {
    id: 1,
    name: "Product",
    color: "[#0568FD]",
  },
  {
    id: 2,
    name: "Marketing",
    color: "[#46BD0E]",
  },
  {
    id: 3,
    name: "Growth",
    color: "[#EE0A18]",
  },
  {
    id: 4,
    name: "Design",
    color: "",
  },
  {
    id: 5,
    name: "Engineering",
    color: "",
  },
  {
    id: 6,
    name: "Finance",
    color: "",
  },
  {
    id: 7,
    name: "Sales",
    color: "",
  },
  {
    id: 8,
    name: "Legal",
    color: "",
  },
  {
    id: 9,
    name: "HR",
    color: "",
  },
  {
    id: 10,
    name: "Content",
    color: "",
  },
  {
    id: 11,
    name: "Website",
    color: "",
  },
];

export const CatSpellMap = {
  "Software Product": [
    "Product",
    "Marketing",
    "Growth",
    "Design",
    "Engineering",
    "Finance",
    "Sales",
    "Legal",
    "HR",
  ],
  "Digital Agency": ["Design", "Marketing", "Sales", "HR", "Finance", "Legal"],
  Education: ["Product", "Marketing", "Sales", "HR", "Finance", "Legal"],
  Finance: ["Product", "Marketing", "Sales", "HR", "Legal", "Finance"],
  Healthcare: ["Product", "Marketing", "Sales", "HR", "Legal", "Finance"],
  Retail: ["Product", "Marketing", "Sales", "HR", "Legal", "Finance"],
  "E-Commerce": [
    "Product",
    "Marketing",
    "Growth",
    "Design",
    "Engineering",
    "Finance",
    "Sales",
    "Legal",
    "HR",
  ],
  "Media & Entertainment": ["Marketing", "Sales", "HR", "Finance", "Legal"],
  Hospitality: ["Marketing", "Sales", "HR", "Legal", "Finance"],
  "Legal Services": ["Marketing", "Sales", "HR", "Legal", "Finance"],
  Insurance: ["Product", "Marketing", "Sales", "HR", "Legal", "Finance"],
  "Sports & Fitness": [
    "Product",
    "Marketing",
    "Sales",
    "HR",
    "Legal",
    "Finance",
  ],
};

export default SpellTypes;
