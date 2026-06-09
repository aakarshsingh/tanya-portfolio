export interface Metric {
  big: string;
  cap: string;
}

export interface Accounts {
  label: string;
  bold: string;
  tail?: string;
}

export interface CaseStudy {
  client: string;
  role: string;
  tension: string;
  pattern: string;
  strategy: string;
  metrics?: Metric[];
  accounts: Accounts;
}

// Verified against docs/TS-LinkedIn.pdf — see .state/requirements.md
// "Content Verification". Metrics and accounts are taken verbatim.
export const cases: CaseStudy[] = [
  {
    client: "SOLO",
    role: "Brand Lead & Founding Member / 2024 – Now",
    tension:
      "Brands wanted reach. Creators wanted freedom. Both walked away unhappy.",
    pattern: "People trust the creator's world, not the brand's script.",
    strategy:
      "Creator-first storytelling. The brand enables the story. It doesn't dominate it.",
    metrics: [
      { big: "₹3L → ₹1.5Cr+", cap: "Pilot scaled" },
      { big: "₹80K → ₹5Cr", cap: "In under a year" },
      { big: "0 → ₹22L", cap: "Budgets in 60 days" },
      { big: "₹0.05", cap: "Cost per view" },
    ],
    accounts: {
      label: "Won:",
      bold: "Philips · Tinder · PaperBoat · Fold Money · The Bear House · Sunroooof",
    },
  },
  {
    client: "Costa Coffee",
    role: "Planning Group Head, 82.5 / 2022 – 2023",
    tension: "Strong legacy recall. Weak present-day relevance.",
    pattern: "In India, a café is an identity. Not a drink.",
    strategy:
      "YOUxCOSTA. Built on individuality and self-expression. Vibes attract tribes.",
    accounts: {
      label: "Across",
      bold: "OOH · print · digital · social · brand films · in-store",
      tail: ". Research ran through Starbucks, Third Wave, and Blue Tokai.",
    },
  },
  {
    client: "The Research Spine",
    role: "Associate Research Manager, Kantar IMRB / 2019 – 2020",
    tension: "Categories grow on motivation, not features.",
    pattern: "People adopt what fits their life first. Then they explain it.",
    strategy:
      "Trigger and barrier studies across India. Findings turned into decisions, not decks.",
    accounts: {
      label: "Studies for",
      bold: "RSPL · Maruti Suzuki · Nissan · Vivo",
      tail: ". In-person, telephonic, and WhatsApp interviews across children, men, and families.",
    },
  },
];
