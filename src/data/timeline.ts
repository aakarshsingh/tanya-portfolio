export interface Job {
  period: string;
  company: string;
  role: string;
}

// Full history, verified against docs/TS-LinkedIn.pdf. Includes the early
// internships (per .state/requirements.md content decision).
export const timeline: Job[] = [
  { period: "2024 – Now", company: "SOLO (WLDD)", role: "Brand Lead & Founding Member" },
  { period: "2024", company: "Tjori", role: "Freelance Strategy" },
  { period: "2023 – 2024", company: "Leo Burnett Orchard", role: "Brand Strategy Partner" },
  { period: "2022 – 2023", company: "82.5", role: "Planning Group Head" },
  { period: "2020 – 2022", company: "FoxyMoron", role: "Assoc. Creative Strategy Manager" },
  { period: "2019 – 2020", company: "Kantar IMRB", role: "Associate Research Manager" },
  { period: "2018", company: "Wunderman Thompson", role: "Account Planning Intern" },
  { period: "2017", company: "MSLGROUP India", role: "Intern" },
];
