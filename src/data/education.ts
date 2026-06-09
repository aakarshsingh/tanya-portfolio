export interface Edu {
  period: string;
  school: string;
  detail: string;
}

// Verified against docs/TS-LinkedIn.pdf.
export const education: Edu[] = [
  {
    period: "2017 – 2019",
    school: "The Delhi School of Communication",
    detail: "PG Diploma, Integrated Marketing Communication",
  },
  {
    period: "2014 – 2017",
    school: "Amity University",
    detail: "B.A. Journalism",
  },
];
