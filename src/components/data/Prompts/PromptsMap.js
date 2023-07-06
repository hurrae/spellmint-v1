const PromptsMap = {
  "Software Product": {
    Product: [
      {
        name: "Prompt 1",
        prompt: `Generate an overview of a product that includes three sections: Product Description, Scenario (explained in a way a 5-year old would understand), and Use-cases.\n\nPurpose and Scope: "{{PurposeAndScope-Software}}"\n\nProduct Description: "{{ProductDescription-Software}}"`,
        replacePart: [
          "PurposeAndScope-Software",
          "ProductDescription-Software",
        ],
      },
      {
        name: "Prompt 2",
        prompt: `Based on the given input, generate a table outlining a user persona with the following details: Demographic Information, Behavior Patterns, Motivations, and Goals.\n\nKey Users: "{{KeyUsers-Software}}"`,
        replacePart: ["KeyUsers-Software"],
      },
      {
        name: "Prompt 3",
        prompt: `Generate a user-action table with the following Key Users and corresponding Actions.\n\nKey Users: "{{KeyUsers-Software}}"\nUser Actions: "{{UserActions-Software}}"`,
        replacePart: ["KeyUsers-Software", "UserActions-Software"],
      },
      {
        name: "Prompt 4",
        prompt: `Generate a Customer Interface Requirements table with the 'Requirement' and 'Description' for the following customer interface requirements: "{{CustomerInterfaceRequirements-Software}}"`,
        opPrompt: `Generate a Customer Interface Requirements table with the 'Requirement' and 'Description'.`,
        replacePart: ["CustomerInterfaceRequirements-Software"],
      },
      {
        name: "Prompt 5",
        prompt: `Generate a table outlining the details of this specific feature within the product, including Feature name, Feature Description, Functional Requirements, Edge Cases, Happy Flows, and Unhappy Flows. \n\nFeature: "{{Features}}"`,
        replacePart: ["Features"],
      },
      {
        name: "Prompt 6",
        prompt: `Generate a table of environments the product should support.\n\nEnvironments: "{{Environments-Software}}"`,
        replacePart: ["Environments-Software"],
      },
      {
        name: "Prompt 7",
        prompt: `Generate a table of third-party integrations required for the product.\n\nThird-party Integrations: "{{ThirdPartyIntegrations-Software}}"`,
        replacePart: ["ThirdPartyIntegrations-Software"],
      },
      {
        name: "Prompt 8",
        prompt: `Generate a table of report requirements for the product.\n\nReport Requirements: "{{ReportRequirements-Software}}"`,
        replacePart: ["ReportRequirements-Software"],
      },
      {
        name: "Prompt 9",
        prompt: `Generate a table of admin requirements for the product.\n\nAdmin Requirements: "{{AdminRequirements-Software}}"`,
        replacePart: ["AdminRequirements-Software"],
      },
      {
        name: "Prompt 10",
        prompt: `Generate a table of customer support requirements for the product.\n\nCustomer Support Requirements: "{{CustomerSupportRequirements-Software}}"`,
        replacePart: ["CustomerSupportRequirements-Software"],
      },
      {
        name: "Prompt 11",
        prompt: `Generate a table of data collection requirements for the product.\n\nData Collection Requirements: "{{DataCollectionRequirements-Software}}"`,
        replacePart: ["DataCollectionRequirements-Software"],
      },
      {
        name: "Prompt 12",
        prompt: `Generate a elaborate go-to-market strategy for the product.\n\nGo-to-Market Strategy: "{{GoToMarketStrategy-Software}}"`,
        replacePart: ["GoToMarketStrategy-Software"],
      },
      {
        name: "Prompt 13",
        prompt: `Generate a table of open questions that still need to be addressed.\n\nOpen Questions: "{{OpenQuestions-Software}}"`,
        replacePart: ["OpenQuestions-Software"],
      },
    ],
    Engineering: [
      {
        name: "Prompt 14",
        prompt: `Elaborate on the system architecture of the software product.\n\nSystem Architecture: "{{SystemArchitecture-Software}}"`,
        replacePart: ["SystemArchitecture-Software"],
      },
      {
        name: "Prompt 15",
        prompt: `Elaborate on the technology stack that will be used in the software product.\n\nTechnology Stack: "{{TechnologyStack-Software}}"`,
        replacePart: ["TechnologyStack-Software"],
      },
      {
        name: "Prompt 16",
        prompt: `Elaborate on the development methodology that will be used to guide the engineering work.\n\nDevelopment Methodology: "{{DevelopmentMethodology-Software}}"`,
        replacePart: ["DevelopmentMethodology-Software"],
      },
      {
        name: "Prompt 17",
        prompt: `Elaborate on the deployment strategy that will be used to deliver the software product.\n\nDeployment Strategy: "{{DeploymentStrategy-Software}}"`,
        replacePart: ["DeploymentStrategy-Software"],
      },
    ],
    Marketing: [
      {
        name: "Prompt 18",
        prompt: `As a marketing expert, provide a detailed analysis of the market for the software product.\n\nMarket Analysis: "{{MarketAnalysis-Software}}"`,
        replacePart: ["MarketAnalysis-Software"],
      },
      {
        name: "Prompt 19",
        prompt: `Elaborate on the channels you plan to use for marketing the software product. Please provide a table with each channel and a brief description of the marketing strategy for it.\n\nMarketing Channels: "{{MarketingChannels-Software}}"`,
        replacePart: ["MarketingChannels-Software"],
      },
      {
        name: "Prompt 20",
        prompt: `Describe in detail the Unique Selling Proposition (USP) of the software product.\n\nUSP: "{{USP-Software}}"`,
        replacePart: ["USP-Software"],
      },
      {
        name: "Prompt 21",
        prompt: `Provide a comprehensive budget breakdown for the initial campaign of the software product.\n\nBudget: "{{Budget-Software}}"`,
        replacePart: ["Budget-Software"],
      },
      {
        name: "Prompt 22",
        prompt: `Generate a table outlining the Key Performance Indicators (KPIs) that will be used to measure the success of the marketing efforts.\n\nKPIs: "{{KPIs-Software}}"`,
        replacePart: ["KPIs-Software"],
      },
    ],
    Sales: [
      {
        name: "Prompt 23",
        prompt: `Elaborate on the sales targets for the software product. Be specific about the metrics and timeline. \n\nSales Targets: "{{SalesTargets-Software}}"`,
        replacePart: ["SalesTargets-Software"],
      },
      {
        name: "Prompt 24",
        prompt: `As a sales expert, provide a comprehensive explanation of the pricing strategy for the software product.\n\nPricing Strategy: "{{PricingStrategy-Software}}"`,
        replacePart: ["PricingStrategy-Software"],
      },
      {
        name: "Prompt 25",
        prompt: `Elaborate on the sales channels to be used for the software product. Provide a table with each channel and its importance in the sales strategy.\n\nSales Channels: "{{SalesChannels-Software}}"`,
        replacePart: ["SalesChannels-Software"],
      },
      {
        name: "Prompt 26",
        prompt: `Provide a detailed breakdown of the key selling points of the software product.\n\nKey Selling Points: "{{KeySellingPoints-Software}}"`,
        replacePart: ["KeySellingPoints-Software"],
      },
    ],
    HR: [
      {
        name: "Prompt 27",
        prompt: `Provide a comprehensive breakdown of the job roles needed for the software product. Be sure to include the role's title and its purpose in the project. \n\nJob Roles: "{{JobRoles-Software}}"`,
        replacePart: ["JobRoles-Software"],
      },
      {
        name: "Prompt 28",
        prompt: `As an HR expert, generate a detailed table for the job descriptions of each role identified for the software product project.\n\nJob Descriptions: "{{JobDescriptions-Software}}"`,
        replacePart: ["JobDescriptions-Software"],
      },
      {
        name: "Prompt 29",
        prompt: `Elaborate on the hiring channels that will be used to find the perfect candidates for the job roles. Provide a detailed explanation of why each channel is chosen.\n\nHiring Channels: "{{HiringChannels-Software}}"`,
        replacePart: ["HiringChannels-Software"],
      },
      {
        name: "Prompt 30",
        prompt: `Provide a comprehensive explanation of the selection process for the job roles. Be sure to detail each step and its purpose in finding the right candidates.\n\nSelection Process: "{{SelectionProcess-Software}}"`,
        replacePart: ["SelectionProcess-Software"],
      },
    ],
    Legal: [
      {
        name: "Prompt 31",
        prompt: `As a legal expert, please elaborate on the key regulatory compliances applicable to the software product. Highlight why each regulation is important and how it impacts the product. \n\nRegulatory Compliance: "{{RegulatoryCompliance-Software}}"`,
        replacePart: ["RegulatoryCompliance-Software"],
      },
      {
        name: "Prompt 32",
        prompt: `Generate a detailed description of the Intellectual Property involved with the software product. This can include patents, copyrights, trademarks, or trade secrets. Be sure to include why each piece of Intellectual Property is critical. \n\nIntellectual Property: "{{IntellectualProperty-Software}}"`,
        replacePart: ["IntellectualProperty-Software"],
      },
      {
        name: "Prompt 33",
        prompt: `Provide a comprehensive breakdown of the user agreements that will be necessary for the software product. This should include a detailed explanation of the terms and why they are important. \n\nUser Agreements: "{{UserAgreements-Software}}"`,
        replacePart: ["UserAgreements-Software"],
      },
    ],
    Finance: [
      {
        name: "Prompt 34",
        prompt: `Elaborate on the key revenue sources for the software product. Include why each revenue source is critical and how it contributes to the overall financial health of the project. \n\nRevenue Sources: "{{RevenueSources-Software}}"`,
        replacePart: ["RevenueSources-Software"],
      },
      {
        name: "Prompt 35",
        prompt: `Provide a detailed breakdown of the major expenses associated with the software product. Explain why each expense is necessary and how it affects the financial performance of the product. \n\nMajor Expenses: "{{MajorExpenses-Software}}"`,
        replacePart: ["MajorExpenses-Software"],
      },
      {
        name: "Prompt 36",
        prompt: `As a financial expert, provide an elaborate financial forecast for the software product. Describe the key factors and assumptions behind the forecast. \n\nFinancial Forecast: "{{FinancialForecast-Software}}"`,
        replacePart: ["FinancialForecast-Software"],
      },
      {
        name: "Prompt 37",
        prompt: `Provide a comprehensive break-even analysis for the software product. Include the assumptions behind the analysis and why the break-even point is important. \n\nBreak-even Analysis: "{{BreakevenAnalysis-Software}}"`,
        replacePart: ["BreakevenAnalysis-Software"],
      },
    ],
  },
  "Digital Agency": {
    Design: [
      {
        name: "Prompt 1",
        prompt: `Provide an elaborate overview of the design project. Include its context, key goals, and how it fits into the broader business strategy.\n\nProject Overview: "{{ProjectOverview-Agency}}"`,
        replacePart: ["ProjectOverview-Agency"],
      },
      {
        name: "Prompt 2",
        prompt: `Detail the design objectives for this project. Explain why each is important and how they contribute to the overall success of the project.\n\nDesign Objectives: "{{DesignObjectives-Agency}}"`,
        replacePart: ["DesignObjectives-Agency"],
      },
      {
        name: "Prompt 3",
        prompt: `Describe the target audience for this design project. Include demographic details, motivations, and behavior patterns.\n\nTarget Audience: "{{TargetAudience-Agency}}"`,
        replacePart: ["TargetAudience-Agency"],
      },
      {
        name: "Prompt 4",
        prompt: `Outline the key design elements to be included in the project. Explain the purpose of each element and how it contributes to the overall design.\n\nDesign Elements: "{{DesignElements-Agency}}"`,
        replacePart: ["DesignElements-Agency"],
      },
      {
        name: "Prompt 5",
        prompt: `Specify the deliverables expected at the conclusion of the design project. Explain why each deliverable is important.\n\nDeliverables: "{{Deliverables-Agency}}"`,
        replacePart: ["Deliverables-Agency"],
      },
    ],
    Marketing: [
      {
        name: "Prompt 6",
        prompt: `Provide a detailed description of the market for this digital agency project. Include information on market size, growth rate, and key trends.\n\nMarket Description: "{{MarketDescription-Agency}}"`,
        replacePart: ["MarketDescription-Agency"],
      },
      {
        name: "Prompt 7",
        prompt: `Detail the marketing goals for this project. Explain how these goals align with the overall business objectives.\n\nMarketing Goals: "{{MarketingGoals-Agency}}"`,
        replacePart: ["MarketingGoals-Agency"],
      },
      {
        name: "Prompt 8",
        prompt: `Elaborate on the Unique Selling Proposition (USP) for this project. Explain how it differentiates the project in the marketplace.\n\nUnique Selling Proposition: "{{UniqueSellingProposition-Agency}}"`,
        replacePart: ["UniqueSellingProposition-Agency"],
      },
      {
        name: "Prompt 9",
        prompt: `Detail the marketing channels to be used for this project. Explain the advantages and potential reach of each channel.\n\nMarketing Channels: "{{MarketingChannels-Agency}}"`,
        replacePart: ["MarketingChannels-Agency"],
      },
      {
        name: "Prompt 10",
        prompt: `Provide a detailed overview of the budget allocated for this project. Break it down by marketing channel and explain how it aligns with marketing goals.\n\nBudget: "{{Budget-Agency}}"`,
        replacePart: ["Budget-Agency"],
      },
    ],
    Sales: [
      {
        name: "Prompt 11",
        prompt: `Describe the target market for this digital agency's services. Include demographic, geographic, and behavioral factors.\n\nTarget Market: "{{TargetMarket-Agency}}"`,
        replacePart: ["TargetMarket-Agency"],
      },
      {
        name: "Prompt 12",
        prompt: `Detail the Key Performance Indicators (KPIs) for sales in this digital agency. Explain how each KPI is measured and why it's important.\n\nKey Performance Indicators: "{{KeyPerformanceIndicators-Agency}}"`,
        replacePart: ["KeyPerformanceIndicators-Agency"],
      },
      {
        name: "Prompt 13",
        prompt: `Outline the sales channels for this digital agency. Describe the advantages and potential reach of each channel.\n\nSales Channels: "{{SalesChannels-Agency}}"`,
        replacePart: ["SalesChannels-Agency"],
      },
      {
        name: "Prompt 14",
        prompt: `Detail the pricing strategy for this digital agency. Explain how it aligns with the overall business objectives.\n\nPricing Strategy: "{{PricingStrategy-Agency}}"`,
        replacePart: ["PricingStrategy-Agency"],
      },
      {
        name: "Prompt 15",
        prompt: `Elaborate on the sales goals for this digital agency. Explain how these goals align with the overall business strategy.\n\nSales Goals: "{{SalesGoals-Agency}}"`,
        replacePart: ["SalesGoals-Agency"],
      },
    ],
    HR: [
      {
        name: "Prompt 16",
        prompt: `Describe the hiring needs for this digital agency. Outline the roles needed, the skills required for each role, and why they are important.\n\nHiring Needs: "{{HiringNeeds-Agency}}"`,
        replacePart: ["HiringNeeds-Agency"],
      },
      {
        name: "Prompt 17",
        prompt: `Provide detailed job descriptions for each role that this digital agency is looking to fill. Include responsibilities, skills, and qualifications.\n\nJob Descriptions: "{{JobDescriptions-Agency}}"`,
        replacePart: ["JobDescriptions-Agency"],
      },
      {
        name: "Prompt 18",
        prompt: `Outline the hiring channels for this digital agency. Explain why each channel is effective and how it will reach the target audience.\n\nHiring Channels: "{{HiringChannels-Agency}}"`,
        replacePart: ["HiringChannels-Agency"],
      },
      {
        name: "Prompt 19",
        prompt: `Detail the recruitment timeline for this digital agency. Provide a schedule of key dates and explain their significance.\n\nRecruitment Timeline: "{{RecruitmentTimeline-Agency}}"`,
        replacePart: ["RecruitmentTimeline-Agency"],
      },
      {
        name: "Prompt 20",
        prompt: `Explain the onboarding process for new hires at this digital agency. Detail the steps involved and the intended outcomes.\n\nOnboarding Process: "{{OnboardingProcess-Agency}}"`,
        replacePart: ["OnboardingProcess-Agency"],
      },
    ],
    Finance: [
      {
        name: "Prompt 21",
        prompt: `Elaborate on the key revenue sources for this digital agency. Include why each revenue source is critical and how it contributes to the overall financial health.\n\nRevenue Sources: "{{RevenueSources-Agency}}"`,
        replacePart: ["RevenueSources-Agency"],
      },
      {
        name: "Prompt 22",
        prompt: `Provide a detailed breakdown of the major expenses associated with running this digital agency. Explain why each expense is necessary and how it impacts the financial performance.\n\nMajor Expenses: "{{MajorExpenses-Agency}}"`,
        replacePart: ["MajorExpenses-Agency"],
      },
      {
        name: "Prompt 23",
        prompt: `Provide a detailed projection of the agency's revenue. Include assumptions, growth rate, and key revenue drivers.\n\nProjected Revenue: "{{ProjectedRevenue-Agency}}"`,
        replacePart: ["ProjectedRevenue-Agency"],
      },
      {
        name: "Prompt 24",
        prompt: `Detail the projected expenses for the digital agency. Break down by category, explain the reasons for each expense, and how it will be managed.\n\nProjected Expenses: "{{ProjectedExpenses-Agency}}"`,
        replacePart: ["ProjectedExpenses-Agency"],
      },
      {
        name: "Prompt 25",
        prompt: `Provide a detailed break-even analysis for the digital agency. Include the assumptions, calculations, and how the agency plans to reach the break-even point.\n\nBreak-Even Analysis: "{{BreakEvenAnalysis-Agency}}"`,
        replacePart: ["BreakEvenAnalysis-Agency"],
      },
    ],
    Legal: [
      {
        name: "Prompt 26",
        prompt: `Describe the type of contracts that this digital agency will use with its clients. Explain why this contract type is chosen and how it protects the interests of both parties.\n\nContract Type: "{{ContractType-Agency}}"`,
        replacePart: ["ContractType-Agency"],
      },
      {
        name: "Prompt 27",
        prompt: `List and describe the parties involved in the contract. Include their roles and responsibilities within the contract.\n\nParties Involved: "{{PartiesInvolved-Agency}}"`,
        replacePart: ["PartiesInvolved-Agency"],
      },
      {
        name: "Prompt 28",
        prompt: `Provide a detailed description of the services provided as stated in the contract. Include any deliverables or outputs expected from the agency.\n\nServices Provided: "{{ServicesProvided-Agency}}"`,
        replacePart: ["ServicesProvided-Agency"],
      },
      {
        name: "Prompt 29",
        prompt: `Detail the payment terms for this digital agency as specified in the contract. Include payment schedule, method, and any penalties for late payment.\n\nPayment Terms: "{{PaymentTerms-Agency}}"`,
        replacePart: ["PaymentTerms-Agency"],
      },
      {
        name: "Prompt 30",
        prompt: `Describe the confidentiality clause in the contract. Explain why it is necessary and how it protects both the agency and the client.\n\nConfidentiality Clause: "{{ConfidentialityClause-Agency}}"`,
        replacePart: ["ConfidentialityClause-Agency"],
      },
    ],
  },
  Education: {
    Product: [
      {
        name: "Prompt 1",
        prompt:
          'Detail the objective of the course. Include what skills or knowledge the student is expected to gain by the end of the course.\n\nCourse Objective: "{{CourseObjective-Education}}"',
        replacePart: ["CourseObjective-Education"],
      },
      {
        name: "Prompt 2",
        prompt:
          'Describe the target audience for the course. Consider age range, prior knowledge or skills, and what motivations they might have for taking this course.\n\nTarget Audience: "{{TargetAudience-Education}}"',
        replacePart: ["TargetAudience-Education"],
      },
      {
        name: "Prompt 3",
        prompt:
          'Provide an outline of the course. Include the key topics or modules and how each contributes to the overall course objective.\n\nCourse Outline: "{{CourseOutline-Education}}"',
        replacePart: ["CourseOutline-Education"],
      },
      {
        name: "Prompt 4",
        prompt:
          'State the duration of the course. Include the total hours, number of sessions, and the length of each session.\n\nCourse Duration: "{{CourseDuration-Education}}"',
        replacePart: ["CourseDuration-Education"],
      },
      {
        name: "Prompt 5",
        prompt:
          'Outline the assessment methods used in the course. Include how they measure the student\'s understanding or skills and how they contribute to the final grade.\n\nAssessment Methods: "{{AssessmentMethods-Education}}"',
        replacePart: ["AssessmentMethods-Education"],
      },
    ],
    Marketing: [
      {
        name: "Prompt 6",
        prompt:
          'Detail the target demographics for the course. Consider factors such as age, education level, profession, and interests.\n\nTarget Demographics: "{{TargetDemographics-Education}}"',
        replacePart: ["TargetDemographics-Education"],
      },
      {
        name: "Prompt 7",
        prompt:
          'List the marketing channels to be used. Explain the advantages of each channel and how it reaches the target audience.\n\nMarketing Channels: "{{MarketingChannels-Education}}"',
        replacePart: ["MarketingChannels-Education"],
      },
      {
        name: "Prompt 8",
        prompt:
          'Describe the key marketing messages for the course. Include how they align with the course\'s objectives and appeal to the target audience.\n\nKey Marketing Messages: "{{KeyMarketingMessages-Education}}"',
        replacePart: ["KeyMarketingMessages-Education"],
      },
      {
        name: "Prompt 9",
        prompt:
          'State the marketing budget. Include a breakdown of how it will be allocated across different marketing activities.\n\nBudget: "{{Budget-Education}}"',
        replacePart: ["Budget-Education"],
      },
      {
        name: "Prompt 10",
        prompt:
          'Detail the metrics that will be used to measure the success of the marketing campaign. Explain how they align with marketing objectives.\n\nSuccess Metrics: "{{SuccessMetrics-Education}}"',
        replacePart: ["SuccessMetrics-Education"],
      },
    ],
    Sales: [
      {
        name: "Prompt 11",
        prompt:
          'Detail the sales targets for the course. Include the number of enrolments expected and any other relevant targets.\n\nSales Targets: "{{SalesTargets-Education}}"',
        replacePart: ["SalesTargets-Education"],
      },
      {
        name: "Prompt 12",
        prompt:
          'List the key selling points of the course. Consider what differentiates it from other similar courses and what value it offers to students.\n\nKey Selling Points: "{{KeySellingPoints-Education}}"',
        replacePart: ["KeySellingPoints-Education"],
      },
      {
        name: "Prompt 13",
        prompt:
          'List the sales channels for the course. Include both online and offline channels and their advantages.\n\nSales Channels: "{{SalesChannels-Education}}"',
        replacePart: ["SalesChannels-Education"],
      },
      {
        name: "Prompt 14",
        prompt:
          'Describe the pricing strategy for the course. Include the price point, any discounts or promotional offers, and the reasons for this pricing strategy.\n\nPricing Strategy: "{{PricingStrategy-Education}}"',
        replacePart: ["PricingStrategy-Education"],
      },
      {
        name: "Prompt 15",
        prompt:
          'Describe the follow-up strategy for potential students who have shown interest but have not yet enrolled. Include methods of communication and key messages.\n\nFollow-up Strategy: "{{Follow-upStrategy-Education}}"',
        replacePart: ["Follow-upStrategy-Education"],
      },
    ],
    HR: [
      {
        name: "Prompt 16",
        prompt:
          'List the qualifications required for educators for this course. Include educational background, certifications, and experience.\n\nRequired Qualifications: "{{RequiredQualifications-Education}}"',
        replacePart: ["RequiredQualifications-Education"],
      },
      {
        name: "Prompt 17",
        prompt:
          'Describe the job responsibilities of educators for this course. Include tasks related to course preparation, teaching, and student assessment.\n\nJob Responsibilities: "{{JobResponsibilities-Education}}"',
        replacePart: ["JobResponsibilities-Education"],
      },
      {
        name: "Prompt 18",
        prompt:
          'Detail the sources for hiring educators for this course. Include online platforms, recruitment agencies, and networking events.\n\nHiring Sources: "{{HiringSources-Education}}"',
        replacePart: ["HiringSources-Education"],
      },
      {
        name: "Prompt 19",
        prompt:
          'Describe the selection process for educators for this course. Include screening, interviews, and any tests or demonstrations required.\n\nSelection Process: "{{SelectionProcess-Education}}"',
        replacePart: ["SelectionProcess-Education"],
      },
    ],
    Finance: [
      {
        name: "Prompt 20",
        prompt:
          'Provide a detailed breakdown of the costs of developing the course. Include costs for content creation, educator salaries, and technology.\n\nDevelopment Costs: "{{DevelopmentCosts-Education}}"',
        replacePart: ["DevelopmentCosts-Education"],
      },
      {
        name: "Prompt 21",
        prompt:
          'State the expected marketing costs for the course. Include costs for promotional materials, advertising, and marketing personnel.\n\nMarketing Costs: "{{MarketingCosts-Education}}"',
        replacePart: ["MarketingCosts-Education"],
      },
      {
        name: "Prompt 22",
        prompt:
          'List the operational costs for the course. Include costs for administration, technology maintenance, and student support.\n\nOperational Costs: "{{OperationalCosts-Education}}"',
        replacePart: ["OperationalCosts-Education"],
      },
      {
        name: "Prompt 23",
        prompt:
          'Provide revenue projections for the course. Include the expected number of enrolments, price per enrolment, and any other sources of revenue.\n\nRevenue Projections: "{{RevenueProjections-Education}}"',
        replacePart: ["RevenueProjections-Education"],
      },
      {
        name: "Prompt 24",
        prompt:
          'Perform a break-even analysis for the course. Include the number of enrolments required to cover costs and how long it will take to reach this point.\n\nBreak Even Analysis: "{{BreakEvenAnalysis-Education}}"',
        replacePart: ["BreakEvenAnalysis-Education"],
      },
    ],
    Legal: [
      {
        name: "Prompt 25",
        prompt:
          'Detail the intellectual property rights for the course. Include who owns the course content and any restrictions on its use.\n\nIntellectual Property Rights: "{{IntellectualPropertyRights-Education}}"',
        replacePart: ["IntellectualPropertyRights-Education"],
      },
      {
        name: "Prompt 26",
        prompt:
          'Describe how student data will be protected. Include the measures in place to ensure privacy and compliance with data protection laws.\n\nData Protection: "{{DataProtection-Education}}"',
        replacePart: ["DataProtection-Education"],
      },
      {
        name: "Prompt 27",
        prompt:
          'Detail the terms of service for the course. Include payment terms, cancellation policy, and any rules or guidelines for student behavior.\n\nTerms Of Service: "{{TermsOfService-Education}}"',
        replacePart: ["TermsOfService-Education"],
      },
      {
        name: "Prompt 28",
        prompt:
          'Describe the dispute resolution process for any disagreements between the institution and the student.\n\nDispute Resolution: "{{DisputeResolution-Education}}"',
        replacePart: ["DisputeResolution-Education"],
      },
    ],
  },
  Finance: {
    Product: [
      {
        name: "Prompt 1",
        prompt:
          'Describe the main goal of the financial product. Consider its purpose, its benefits for users, and its potential impact on the market.\n\nProduct Goal: "{{ProductGoal-Finance}}"',
        replacePart: ["ProductGoal-Finance"],
      },
      {
        name: "Prompt 2",
        prompt:
          'List and describe the main features of the financial product. Be specific about what each feature does and how it benefits the user.\n\nProduct Features: "{{ProductFeatures-Finance}}"',
        replacePart: ["ProductFeatures-Finance"],
      },
      {
        name: "Prompt 3",
        prompt:
          'Describe the typical user of the financial product. Include details like age, profession, income level, and financial goals.\n\nUser Persona: "{{UserPersona-Finance}}"',
        replacePart: ["UserPersona-Finance"],
      },
      {
        name: "Prompt 4",
        prompt:
          'Conduct a competitor analysis for the financial product. Consider similar products on the market, their strengths and weaknesses, and how the product can distinguish itself.\n\nCompetitor Analysis: "{{CompetitorAnalysis-Finance}}"',
        replacePart: ["CompetitorAnalysis-Finance"],
      },
    ],
    Marketing: [
      {
        name: "Prompt 5",
        prompt:
          'Identify the target audience for the financial product\'s marketing efforts. Consider factors like age, profession, income level, and financial goals.\n\nTarget Audience: "{{TargetAudience-Finance}}"',
        replacePart: ["TargetAudience-Finance"],
      },
      {
        name: "Prompt 6",
        prompt:
          'Identify the unique selling proposition of the financial product. What makes it different from and better than competing products?\n\nUnique Selling Proposition: "{{UniqueSellingProposition-Finance}}"',
        replacePart: ["UniqueSellingProposition-Finance"],
      },
      {
        name: "Prompt 7",
        prompt:
          'List the marketing channels to be used to promote the financial product. Include both online and offline channels.\n\nMarketing Channels: "{{MarketingChannels-Finance}}"',
        replacePart: ["MarketingChannels-Finance"],
      },
      {
        name: "Prompt 8",
        prompt:
          'List the key performance indicators for the marketing efforts. These could include metrics like conversion rates, cost per acquisition, and return on marketing investment.\n\nKey Performance Indicators: "{{KeyPerformanceIndicators-Finance}}"',
        replacePart: ["KeyPerformanceIndicators-Finance"],
      },
    ],
    Sales: [
      {
        name: "Prompt 9",
        prompt:
          'State the sales targets for the financial product. Include a timeline and metrics like the number of sales or the amount of revenue.\n\nSales Targets: "{{SalesTargets-Finance}}"',
        replacePart: ["SalesTargets-Finance"],
      },
      {
        name: "Prompt 10",
        prompt:
          'List the key selling points of the financial product. What are the main reasons a customer would choose this product over a competitor\'s?\n\nKey Selling Points: "{{KeySellingPoints-Finance}}"',
        replacePart: ["KeySellingPoints-Finance"],
      },
      {
        name: "Prompt 11",
        prompt:
          'List the sales channels for the financial product. Include both online and offline channels, as well as any partnerships or alliances.\n\nSales Channels: "{{SalesChannels-Finance}}"',
        replacePart: ["SalesChannels-Finance"],
      },
      {
        name: "Prompt 12",
        prompt:
          'Describe the pricing strategy for the financial product. Include the price point, the reasoning behind it, and any discounts or promotions.\n\nPricing Strategy: "{{PricingStrategy-Finance}}"',
        replacePart: ["PricingStrategy-Finance"],
      },
    ],
    HR: [
      {
        name: "Prompt 13",
        prompt:
          'List the qualifications required for roles related to the financial product. Include education, experience, skills, and any certifications.\n\nRequired Qualifications: "{{RequiredQualifications-Finance}}"',
        replacePart: ["RequiredQualifications-Finance"],
      },
      {
        name: "Prompt 14",
        prompt:
          'Describe the job responsibilities for roles related to the financial product. Be specific about what each role will be expected to do.\n\nJob Responsibilities: "{{JobResponsibilities-Finance}}"',
        replacePart: ["JobResponsibilities-Finance"],
      },
      {
        name: "Prompt 15",
        prompt:
          'List the sources where potential hires for the financial product will be sought. Include job boards, recruitment agencies, and any industry-specific sources.\n\nHiring Sources: "{{HiringSources-Finance}}"',
        replacePart: ["HiringSources-Finance"],
      },
      {
        name: "Prompt 16",
        prompt:
          'Describe the selection process for roles related to the financial product. Include stages like screening, interviews, and any assessments or tests.\n\nSelection Process: "{{SelectionProcess-Finance}}"',
        replacePart: ["SelectionProcess-Finance"],
      },
    ],
    Finance: [
      {
        name: "Prompt 17",
        prompt:
          'List the development costs associated with the financial product. Include costs like research and development, production, and software development.\n\nDevelopment Costs: "{{DevelopmentCosts-Finance}}"',
        replacePart: ["DevelopmentCosts-Finance"],
      },
      {
        name: "Prompt 18",
        prompt:
          'List the marketing costs for the financial product. Include costs like advertising, promotional materials, and events.\n\nMarketing Costs: "{{MarketingCosts-Finance}}"',
        replacePart: ["MarketingCosts-Finance"],
      },
      {
        name: "Prompt 19",
        prompt:
          'List the operational costs for the financial product. Include costs like salaries, rent, utilities, and maintenance.\n\nOperational Costs: "{{OperationalCosts-Finance}}"',
        replacePart: ["OperationalCosts-Finance"],
      },
      {
        name: "Prompt 20",
        prompt:
          'Provide projections for the financial product\'s revenue. Include the expected number of sales, price per sale, and any other sources of revenue.\n\nRevenue Projections: "{{RevenueProjections-Finance}}"',
        replacePart: ["RevenueProjections-Finance"],
      },
      {
        name: "Prompt 21",
        prompt:
          'Perform a break-even analysis for the financial product. Include the number of sales required to cover costs and how long it will take to reach this point.\n\nBreak Even Analysis: "{{BreakEvenAnalysis-Finance}}"',
        replacePart: ["BreakEvenAnalysis-Finance"],
      },
    ],
    Legal: [
      {
        name: "Prompt 22",
        prompt:
          'Describe the regulatory compliance requirements for the financial product. Include any relevant laws, regulations, or industry standards.\n\nRegulatory Compliance: "{{RegulatoryCompliance-Finance}}"',
        replacePart: ["RegulatoryCompliance-Finance"],
      },
      {
        name: "Prompt 23",
        prompt:
          'Describe the disclosure requirements for the financial product. Include any information that must be disclosed to customers, investors, or regulators.\n\nDisclosure Requirements: "{{DisclosureRequirements-Finance}}"',
        replacePart: ["DisclosureRequirements-Finance"],
      },
      {
        name: "Prompt 24",
        prompt:
          'Describe the governance of the financial product\'s fund. Include information about oversight, decision-making, and reporting.\n\nFund Governance: "{{FundGovernance-Finance}}"',
        replacePart: ["FundGovernance-Finance"],
      },
      {
        name: "Prompt 25",
        prompt:
          'Describe the dispute resolution process for the financial product. Include procedures for addressing complaints, disputes, and any potential legal action.\n\nDispute Resolution: "{{DisputeResolution-Finance}}"',
        replacePart: ["DisputeResolution-Finance"],
      },
    ],
  },
  Healthcare: {
    Product: [
      {
        name: "Prompt 1",
        prompt:
          'Describe the main goal of the healthcare product. What problem does it solve and how does it improve the health of its users?\n\nProduct Goal: "{{ProductGoal-Healthcare}}"',
        replacePart: ["ProductGoal-Healthcare"],
      },
      {
        name: "Prompt 2",
        prompt:
          'Describe the key features of the healthcare product. Include its capabilities, functions, and benefits for users.\n\nProduct Features: "{{ProductFeatures-Healthcare}}"',
        replacePart: ["ProductFeatures-Healthcare"],
      },
      {
        name: "Prompt 3",
        prompt:
          'Describe the typical user of the healthcare product. Include demographics, health needs, and how they will use the product.\n\nUser Persona: "{{UserPersona-Healthcare}}"',
        replacePart: ["UserPersona-Healthcare"],
      },
      {
        name: "Prompt 4",
        prompt:
          'Perform a competitor analysis for the healthcare product. Include other products in the market, their features, and their strengths and weaknesses.\n\nCompetitor Analysis: "{{CompetitorAnalysis-Healthcare}}"',
        replacePart: ["CompetitorAnalysis-Healthcare"],
      },
    ],
    Marketing: [
      {
        name: "Prompt 5",
        prompt:
          'Describe the target audience for the healthcare product. Include their demographics, health needs, and where they can be reached.\n\nTarget Audience: "{{TargetAudience-Healthcare}}"',
        replacePart: ["TargetAudience-Healthcare"],
      },
      {
        name: "Prompt 6",
        prompt:
          'Describe the unique selling proposition for the healthcare product. What makes it different from other products in the market?\n\nUnique Selling Proposition: "{{UniqueSellingProposition-Healthcare}}"',
        replacePart: ["UniqueSellingProposition-Healthcare"],
      },
      {
        name: "Prompt 7",
        prompt:
          'Describe the marketing channels for the healthcare product. Include both online and offline channels.\n\nMarketing Channels: "{{MarketingChannels-Healthcare}}"',
        replacePart: ["MarketingChannels-Healthcare"],
      },
      {
        name: "Prompt 8",
        prompt:
          'List the key performance indicators for the healthcare product\'s marketing efforts. These could include conversion rates, customer acquisition costs, and return on investment.\n\nKey Performance Indicators: "{{KeyPerformanceIndicators-Healthcare}}"',
        replacePart: ["KeyPerformanceIndicators-Healthcare"],
      },
    ],
    Sales: [
      {
        name: "Prompt 9",
        prompt:
          'List the sales targets for the healthcare product. Include the number of units to be sold and the revenue to be generated.\n\nSales Targets: "{{SalesTargets-Healthcare}}"',
        replacePart: ["SalesTargets-Healthcare"],
      },
      {
        name: "Prompt 10",
        prompt:
          'Describe the key selling points of the healthcare product. What are the main reasons customers should choose it over competitors?\n\nKey Selling Points: "{{KeySellingPoints-Healthcare}}"',
        replacePart: ["KeySellingPoints-Healthcare"],
      },
      {
        name: "Prompt 11",
        prompt:
          'Describe the sales channels for the healthcare product. Include both online and offline channels, as well as any partnerships or alliances.\n\nSales Channels: "{{SalesChannels-Healthcare}}"',
        replacePart: ["SalesChannels-Healthcare"],
      },
      {
        name: "Prompt 12",
        prompt:
          'Describe the pricing strategy for the healthcare product. Consider factors like production costs, competitor pricing, and customer willingness to pay.\n\nPricing Strategy: "{{PricingStrategy-Healthcare}}"',
        replacePart: ["PricingStrategy-Healthcare"],
      },
    ],
    HR: [
      {
        name: "Prompt 13",
        prompt:
          'List the qualifications required for roles related to the healthcare product. Include education, skills, experience, and any certifications or licenses.\n\nRequired Qualifications: "{{RequiredQualifications-Healthcare}}"',
        replacePart: ["RequiredQualifications-Healthcare"],
      },
      {
        name: "Prompt 14",
        prompt:
          'Describe the job responsibilities for roles related to the healthcare product. Include tasks, duties, and expected outcomes.\n\nJob Responsibilities: "{{JobResponsibilities-Healthcare}}"',
        replacePart: ["JobResponsibilities-Healthcare"],
      },
      {
        name: "Prompt 15",
        prompt:
          'Describe the sources for hiring for roles related to the healthcare product. Include job boards, recruitment agencies, social media, and any other methods.\n\nHiring Sources: "{{HiringSources-Healthcare}}"',
        replacePart: ["HiringSources-Healthcare"],
      },
      {
        name: "Prompt 16",
        prompt:
          'Describe the selection process for roles related to the healthcare product. Include screening, interviews, assessments, and final decision-making.\n\nSelection Process: "{{SelectionProcess-Healthcare}}"',
        replacePart: ["SelectionProcess-Healthcare"],
      },
    ],
    Finance: [
      {
        name: "Prompt 17",
        prompt:
          'List the development costs for the healthcare product. Include costs for research, design, testing, production, and any other relevant expenses.\n\nDevelopment Costs: "{{DevelopmentCosts-Healthcare}}"',
        replacePart: ["DevelopmentCosts-Healthcare"],
      },
      {
        name: "Prompt 18",
        prompt:
          'List the marketing costs for the healthcare product. Include costs for advertising, promotions, public relations, and any other relevant expenses.\n\nMarketing Costs: "{{MarketingCosts-Healthcare}}"',
        replacePart: ["MarketingCosts-Healthcare"],
      },
      {
        name: "Prompt 19",
        prompt:
          'List the operational costs for the healthcare product. Include costs for production, distribution, customer service, and any other relevant expenses.\n\nOperational Costs: "{{OperationalCosts-Healthcare}}"',
        replacePart: ["OperationalCosts-Healthcare"],
      },
      {
        name: "Prompt 20",
        prompt:
          'Provide revenue projections for the healthcare product. Include expected sales, price points, and growth rates.\n\nRevenue Projections: "{{RevenueProjections-Healthcare}}"',
        replacePart: ["RevenueProjections-Healthcare"],
      },
      {
        name: "Prompt 21",
        prompt:
          'Provide a break-even analysis for the healthcare product. When will the product start generating profit considering both fixed and variable costs?\n\nBreak Even Analysis: "{{BreakEvenAnalysis-Healthcare}}"',
        replacePart: ["BreakEvenAnalysis-Healthcare"],
      },
    ],
    Legal: [
      {
        name: "Prompt 22",
        prompt:
          'Describe the regulatory compliance required for the healthcare product. Include relevant laws, standards, and regulations.\n\nRegulatory Compliance: "{{RegulatoryCompliance-Healthcare}}"',
        replacePart: ["RegulatoryCompliance-Healthcare"],
      },
      {
        name: "Prompt 23",
        prompt:
          'Describe the privacy policies for the healthcare product. Include how user data is collected, used, stored, and shared.\n\nPrivacy Policies: "{{PrivacyPolicies-Healthcare}}"',
        replacePart: ["PrivacyPolicies-Healthcare"],
      },
      {
        name: "Prompt 24",
        prompt:
          'Describe the terms of service for the healthcare product. Include usage rules, responsibilities, and liabilities.\n\nService Terms: "{{ServiceTerms-Healthcare}}"',
        replacePart: ["ServiceTerms-Healthcare"],
      },
      {
        name: "Prompt 25",
        prompt:
          'Describe the dispute resolution process for the healthcare product. Include the steps to be followed when a disagreement arises.\n\nDispute Resolution: "{{DisputeResolution-Healthcare}}"',
        replacePart: ["DisputeResolution-Healthcare"],
      },
    ],
  },
  Retail: {
    Product: [
      {
        name: "Prompt 1",
        prompt:
          'Describe the goals for your product line. What customer needs are you trying to address? How do these products fit into your overall retail strategy?\n\nProduct Line Goal: "{{ProductLineGoal-Retail}}"',
        replacePart: ["ProductLineGoal-Retail"],
      },
      {
        name: "Prompt 2",
        prompt:
          'Describe the features of your products. What makes them unique or valuable to customers? How do they compare to competing products?\n\nProduct Features: "{{ProductFeatures-Retail}}"',
        replacePart: ["ProductFeatures-Retail"],
      },
      {
        name: "Prompt 3",
        prompt:
          'Describe your customer persona. What are their demographics, behaviors, and needs? How do your products address these needs?\n\nCustomer Persona: "{{CustomerPersona-Retail}}"',
        replacePart: ["CustomerPersona-Retail"],
      },
      {
        name: "Prompt 4",
        prompt:
          'Describe your competitor analysis. Who are your main competitors? How do your products compare to theirs in terms of features, pricing, and marketing?\n\nCompetitor Analysis: "{{CompetitorAnalysis-Retail}}"',
        replacePart: ["CompetitorAnalysis-Retail"],
      },
    ],
    Marketing: [
      {
        name: "Prompt 5",
        prompt:
          'Describe your target audience. Who are they? What are their interests, needs, and shopping habits? How will you reach them with your marketing?\n\nTarget Audience: "{{TargetAudience-Retail}}"',
        replacePart: ["TargetAudience-Retail"],
      },
      {
        name: "Prompt 6",
        prompt:
          'Describe your unique selling proposition. What sets your products apart from the competition? Why should customers choose your products over others?\n\nUnique Selling Proposition: "{{UniqueSellingProposition-Retail}}"',
        replacePart: ["UniqueSellingProposition-Retail"],
      },
      {
        name: "Prompt 7",
        prompt:
          'Describe your marketing channels. How will you reach your target audience? Which platforms or methods will you use? How will these choices help you achieve your marketing goals?\n\nMarketing Channels: "{{MarketingChannels-Retail}}"',
        replacePart: ["MarketingChannels-Retail"],
      },
      {
        name: "Prompt 8",
        prompt:
          'Describe your key performance indicators. What metrics will you use to measure the success of your marketing efforts? How will these metrics help you adjust your strategy if necessary?\n\nKey Performance Indicators: "{{KeyPerformanceIndicators-Retail}}"',
        replacePart: ["KeyPerformanceIndicators-Retail"],
      },
    ],
    Sales: [
      {
        name: "Prompt 9",
        prompt:
          'Describe your sales targets. How many units do you aim to sell in a given period? How will you track progress toward these targets?\n\nSales Targets: "{{SalesTargets-Retail}}"',
        replacePart: ["SalesTargets-Retail"],
      },
      {
        name: "Prompt 10",
        prompt:
          'Describe your key selling points. What are the main benefits or features that you will emphasize to customers? How do these points support your unique selling proposition?\n\nKey Selling Points: "{{KeySellingPoints-Retail}}"',
        replacePart: ["KeySellingPoints-Retail"],
      },
      {
        name: "Prompt 11",
        prompt:
          'Describe your sales channels. Where will you sell your products? How do these channels align with your target audience and product features?\n\nSales Channels: "{{SalesChannels-Retail}}"',
        replacePart: ["SalesChannels-Retail"],
      },
      {
        name: "Prompt 12",
        prompt:
          'Describe your pricing strategy. How will you price your products? How does your pricing compare to the competition? How will your pricing strategy drive sales and profits?\n\nPricing Strategy: "{{PricingStrategy-Retail}}"',
        replacePart: ["PricingStrategy-Retail"],
      },
    ],
    HR: [
      {
        name: "Prompt 13",
        prompt:
          'Describe the roles you need to fill. What positions are you hiring for? How do these roles support your business goals?\n\nRequired Roles: "{{RequiredRoles-Retail}}"',
        replacePart: ["RequiredRoles-Retail"],
      },
      {
        name: "Prompt 14",
        prompt:
          'Describe the responsibilities for each role. What tasks will each position involve? What skills and experience are required?\n\nJob Responsibilities: "{{JobResponsibilities-Retail}}"',
        replacePart: ["JobResponsibilities-Retail"],
      },
      {
        name: "Prompt 15",
        prompt:
          'Describe your hiring sources. Where will you look for candidates? How will these sources help you find qualified applicants?\n\nHiring Sources: "{{HiringSources-Retail}}"',
        replacePart: ["HiringSources-Retail"],
      },
      {
        name: "Prompt 16",
        prompt:
          'Describe your selection process. How will you evaluate candidates? What steps will they need to go through before they are hired?\n\nSelection Process: "{{SelectionProcess-Retail}}"',
        replacePart: ["SelectionProcess-Retail"],
      },
    ],
    Finance: [
      {
        name: "Prompt 17",
        prompt:
          'Describe your production costs. How much will it cost to produce your products? What are the main cost drivers? How will these costs affect your pricing and profitability?\n\nProduction Costs: "{{ProductionCosts-Retail}}"',
        replacePart: ["ProductionCosts-Retail"],
      },
      {
        name: "Prompt 18",
        prompt:
          'Describe your marketing costs. How much will you spend on marketing? What will you spend it on? How will these costs affect your profitability?\n\nMarketing Costs: "{{MarketingCosts-Retail}}"',
        replacePart: ["MarketingCosts-Retail"],
      },
      {
        name: "Prompt 19",
        prompt:
          'Describe your operational costs. What costs will you incur to operate your business, beyond production and marketing? How will these costs affect your profitability?\n\nOperational Costs: "{{OperationalCosts-Retail}}"',
        replacePart: ["OperationalCosts-Retail"],
      },
      {
        name: "Prompt 20",
        prompt:
          'Describe your revenue projections. How much revenue do you expect to generate? How will you achieve these revenues? How do these projections compare to your costs?\n\nRevenue Projections: "{{RevenueProjections-Retail}}"',
        replacePart: ["RevenueProjections-Retail"],
      },
      {
        name: "Prompt 21",
        prompt:
          'Describe your break-even analysis. How many units do you need to sell to cover your costs? How does this break-even point compare to your sales targets?\n\nBreak Even Analysis: "{{BreakEvenAnalysis-Retail}}"',
        replacePart: ["BreakEvenAnalysis-Retail"],
      },
    ],
    Legal: [
      {
        name: "Prompt 22",
        prompt:
          'Describe your regulatory compliance. What laws and regulations must you comply with? How will you ensure compliance? What risks do you face if you fail to comply?\n\nRegulatory Compliance: "{{RegulatoryCompliance-Retail}}"',
        replacePart: ["RegulatoryCompliance-Retail"],
      },
      {
        name: "Prompt 23",
        prompt:
          'Describe your return policy. What conditions must customers meet to return products? How will you handle returns and refunds? How will this policy affect your customer service and profitability?\n\nReturn Policy: "{{ReturnPolicy-Retail}}"',
        replacePart: ["ReturnPolicy-Retail"],
      },
      {
        name: "Prompt 24",
        prompt:
          'Describe your approach to intellectual property. Do you own any patents, trademarks, or copyrights? How will you protect your intellectual property rights? How do these rights give you a competitive advantage?\n\nIntellectual Property: "{{IntellectualProperty-Retail}}"',
        replacePart: ["IntellectualProperty-Retail"],
      },
      {
        name: "Prompt 25",
        prompt:
          'Describe your dispute resolution process. How will you handle disputes with customers, suppliers, or employees? How will this process help you maintain positive relationships and protect your legal rights?\n\nDispute Resolution: "{{DisputeResolution-Retail}}"',
        replacePart: ["DisputeResolution-Retail"],
      },
    ],
  },
  "E-commerce": {
    Product: [
      {
        name: "Prompt 1",
        prompt:
          'Describe the purpose of your platform. What problem does it solve for users? Why is it needed in the market?\n\nPlatform Purpose: "{{PlatformPurpose-Ecommerce}}"',
        replacePart: ["PlatformPurpose-Ecommerce"],
      },
      {
        name: "Prompt 2",
        prompt:
          'Describe the key features of your platform. What are its main functionalities? How do these features benefit users?\n\nKey Features: "{{KeyFeatures-Ecommerce}}"',
        replacePart: ["KeyFeatures-Ecommerce"],
      },
      {
        name: "Prompt 3",
        prompt:
          'Describe your user personas. Who are your ideal users? What are their needs and preferences?\n\nUser Persona: "{{UserPersona-Ecommerce}}"',
        replacePart: ["UserPersona-Ecommerce"],
      },
      {
        name: "Prompt 4",
        prompt:
          'Describe your competitor analysis. Who are your main competitors? What are their strengths and weaknesses? How does your platform differentiate from them?\n\nCompetitor Analysis: "{{CompetitorAnalysis-Ecommerce}}"',
        replacePart: ["CompetitorAnalysis-Ecommerce"],
      },
    ],
    Marketing: [
      {
        name: "Prompt 5",
        prompt:
          'Describe your target audience. Who are you marketing to? What are their characteristics and interests?\n\nTarget Audience: "{{TargetAudience-Ecommerce}}"',
        replacePart: ["TargetAudience-Ecommerce"],
      },
      {
        name: "Prompt 6",
        prompt:
          'Describe your unique selling proposition. What makes your platform unique? Why should users choose your platform over others?\n\nUnique Selling Proposition: "{{UniqueSellingProposition-Ecommerce}}"',
        replacePart: ["UniqueSellingProposition-Ecommerce"],
      },
      {
        name: "Prompt 7",
        prompt:
          'Describe your marketing channels. Where will you promote your platform? How do these channels align with your target audience?\n\nMarketing Channels: "{{MarketingChannels-Ecommerce}}"',
        replacePart: ["MarketingChannels-Ecommerce"],
      },
      {
        name: "Prompt 8",
        prompt:
          'Describe your key performance indicators. What metrics will you use to measure your marketing success? How do these metrics align with your business goals?\n\nKey Performance Indicators: "{{KeyPerformanceIndicators-Ecommerce}}"',
        replacePart: ["KeyPerformanceIndicators-Ecommerce"],
      },
    ],
    Growth: [
      {
        name: "Prompt 9",
        prompt:
          'Describe your growth objectives. What are your goals for user growth? How do these objectives align with your overall business goals?\n\nGrowth Objectives: "{{GrowthObjectives-Ecommerce}}"',
        replacePart: ["GrowthObjectives-Ecommerce"],
      },
      {
        name: "Prompt 10",
        prompt:
          'Describe your growth tactics. What strategies will you use to achieve your growth objectives? How will these tactics attract and retain users?\n\nGrowth Tactics: "{{GrowthTactics-Ecommerce}}"',
        replacePart: ["GrowthTactics-Ecommerce"],
      },
      {
        name: "Prompt 11",
        prompt:
          'Describe your key growth metrics. What metrics will you use to measure your growth success? How do these metrics reflect user acquisition, activation, retention, and revenue?\n\nKey Growth Metrics: "{{KeyGrowthMetrics-Ecommerce}}"',
        replacePart: ["KeyGrowthMetrics-Ecommerce"],
      },
    ],
    UserInterface: [
      {
        name: "Prompt 12",
        prompt:
          'Describe your user interface goals. What experience do you want to create for users? How do these goals align with your platform purpose and user needs?\n\nUser Interface Goals: "{{UserInterfaceGoals-Ecommerce}}"',
        replacePart: ["UserInterfaceGoals-Ecommerce"],
      },
      {
        name: "Prompt 13",
        prompt:
          'Describe your key design elements. What elements will you use to create a cohesive and engaging user interface? How do these elements reflect your brand and user preferences?\n\nKey Design Elements: "{{KeyDesignElements-Ecommerce}}"',
        replacePart: ["KeyDesignElements-Ecommerce"],
      },
      {
        name: "Prompt 14",
        prompt:
          'Describe your user experience flow. How will users navigate your platform? How does this flow facilitate user goals and reduce friction?\n\nUser Experience Flow: "{{UserExperienceFlow-Ecommerce}}"',
        replacePart: ["UserExperienceFlow-Ecommerce"],
      },
    ],
    Technical: [
      {
        name: "Prompt 15",
        prompt:
          'Describe your platform architecture. What is the structural design of your platform? How does this design support your platform features and performance?\n\nPlatform Architecture: "{{PlatformArchitecture-Ecommerce}}"',
        replacePart: ["PlatformArchitecture-Ecommerce"],
      },
      {
        name: "Prompt 16",
        prompt:
          'Describe your key technologies. What technologies will you use to build your platform? Why are these technologies suitable for your platform?\n\nKey Technologies: "{{KeyTechnologies-Ecommerce}}"',
        replacePart: ["KeyTechnologies-Ecommerce"],
      },
      {
        name: "Prompt 17",
        prompt:
          'Describe your security requirements. What measures will you take to protect user data and prevent breaches? How do these measures comply with data protection regulations?\n\nSecurity Requirements: "{{SecurityRequirements-Ecommerce}}"',
        replacePart: ["SecurityRequirements-Ecommerce"],
      },
    ],
    Finance: [
      {
        name: "Prompt 18",
        prompt:
          'Describe your development costs. How much will you spend to build your platform? What are your major cost items?\n\nDevelopment Costs: "{{DevelopmentCosts-Ecommerce}}"',
        replacePart: ["DevelopmentCosts-Ecommerce"],
      },
      {
        name: "Prompt 19",
        prompt:
          'Describe your marketing costs. How much will you spend to promote your platform? What are your major cost items?\n\nMarketing Costs: "{{MarketingCosts-Ecommerce}}"',
        replacePart: ["MarketingCosts-Ecommerce"],
      },
      {
        name: "Prompt 20",
        prompt:
          'Describe your operational costs. How much will you spend to maintain and operate your platform? What are your major cost items?\n\nOperational Costs: "{{OperationalCosts-Ecommerce}}"',
        replacePart: ["OperationalCosts-Ecommerce"],
      },
      {
        name: "Prompt 21",
        prompt:
          'Describe your revenue streams. How will your platform generate revenue? What are your major income sources?\n\nRevenue Streams: "{{RevenueStreams-Ecommerce}}"',
        replacePart: ["RevenueStreams-Ecommerce"],
      },
    ],
    Sales: [
      {
        name: "Prompt 22",
        prompt:
          'Describe your target customers. Who are you selling to? What are their characteristics and buying behaviors?\n\nTarget Customers: "{{TargetCustomers-Ecommerce}}"',
        replacePart: ["TargetCustomers-Ecommerce"],
      },
      {
        name: "Prompt 23",
        prompt:
          'Describe your sales tactics. How will you convince users to buy from your platform? What sales channels will you use?\n\nSales Tactics: "{{SalesTactics-Ecommerce}}"',
        replacePart: ["SalesTactics-Ecommerce"],
      },
      {
        name: "Prompt 24",
        prompt:
          'Describe your revenue projections. How much revenue do you expect to generate in the first year? How will this revenue grow over time?\n\nRevenue Projections: "{{RevenueProjections-Ecommerce}}"',
        replacePart: ["RevenueProjections-Ecommerce"],
      },
    ],
    Legal: [
      {
        name: "Prompt 25",
        prompt:
          'Describe your regulatory compliance. What laws and regulations does your platform need to comply with? How will you ensure compliance?\n\nRegulatory Compliance: "{{RegulatoryCompliance-Ecommerce}}"',
        replacePart: ["RegulatoryCompliance-Ecommerce"],
      },
      {
        name: "Prompt 26",
        prompt:
          'Describe your terms of service. What terms and conditions will users agree to when using your platform? How do these terms protect your business and user rights?\n\nTerms of Service: "{{TermsOfService-Ecommerce}}"',
        replacePart: ["TermsOfService-Ecommerce"],
      },
      {
        name: "Prompt 27",
        prompt:
          'Describe your privacy policy. What data do you collect from users? How do you use, store, and protect this data?\n\nPrivacy Policy: "{{PrivacyPolicy-Ecommerce}}"',
        replacePart: ["PrivacyPolicy-Ecommerce"],
      },
    ],
    HR: [
      {
        name: "Prompt 28",
        prompt:
          'Describe your required roles. What roles do you need to hire for your team? What skills and experiences are needed for these roles?\n\nRequired Roles: "{{RequiredRoles-Ecommerce}}"',
        replacePart: ["RequiredRoles-Ecommerce"],
      },
      {
        name: "Prompt 29",
        prompt:
          'Describe your job responsibilities. What are the main duties and responsibilities for each role? How do these responsibilities contribute to your platform success?\n\nJob Responsibilities: "{{JobResponsibilities-Ecommerce}}"',
        replacePart: ["JobResponsibilities-Ecommerce"],
      },
      {
        name: "Prompt 30",
        prompt:
          'Describe your hiring sources. Where will you find candidates for your roles? What methods will you use to attract and recruit candidates?\n\nHiring Sources: "{{HiringSources-Ecommerce}}"',
        replacePart: ["HiringSources-Ecommerce"],
      },
      {
        name: "Prompt 31",
        prompt:
          'Describe your selection process. How will you evaluate and select candidates? What criteria will you use to make hiring decisions?\n\nSelection Process: "{{SelectionProcess-Ecommerce}}"',
        replacePart: ["SelectionProcess-Ecommerce"],
      },
    ],
  },
};

export default PromptsMap;
