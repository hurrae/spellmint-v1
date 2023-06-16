const FieldsMap = {
  "Software Product": {
    Product: [
      "PurposeAndScope",
      "ProductDescription",
      "KeyUsers",
      "UserActions",
      "CustomerInterfaceRequirements",
      "LocalizedRequirements",
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

export default FieldsMap;
