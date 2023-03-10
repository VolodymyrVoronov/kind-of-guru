const roles = Object.freeze({
  PM: "PM",
  Developer: "Developer",
  Designer: "Designer",
  QA: "QA",
  ID: "ID",
  Dev_Ops: "DevOps",
  Sales_Manager: "Sales Manager",
  Product_Owner: "Product Owner",
  Team_Lead: "Team Lead",
  UX_Designer: "UX Designer",
  UI_Designer: "UI Designer",
});

const levels = Object.freeze({
  Unknown: "Unknown",
  Intern: "Intern",
  Junior: "Junior Developer",
  Middle: "Middle Developer",
  Senior: "Senior Developer",
  TeamLead: "Team Lead",
});

const clients = Object.freeze({
  Unknown: "Unknown",
  Audi: "Audi",
  BMW: "BMW",
  Porsche: "Porsche",
  Vodafone: "Vodafone",
  Seat: "Seat",
  Aldi: "Aldi",
  Edeka: "Edeka",
  DB: "DB",
  DHL: "DHL",
  DPD: "DPD",
});

const priorities = Object.freeze({
  low: "Low",
  medium: "Medium",
  high: "High",
  severe: "Severe",
});

const packages = Object.freeze({
  basic: "Basic",
  standard: "Standard",
  premium: "Premium",
});

export { roles, levels, clients, priorities, packages };
