export interface Reframe {
  /** The bloated, generic marketing line. */
  obvious: string;
  /** Her sharp, single-thought rewrite. */
  reframe: string;
}

// Curated output that shows how she sharpens a line. This is her writing
// craft on display — NOT the tan-trum skill. The logic that produces work
// like this is never shipped to the client.
export const reframes: Reframe[] = [
  {
    obvious:
      "During the festive season, brands have a unique opportunity to celebrate the invaluable contribution of women who work tirelessly behind the scenes to make every celebration special for the whole family.",
    reframe:
      "Women don't just do all the work during festivals. Women ARE the festival. Remove them, and it's just another day.",
  },
  {
    obvious:
      "Our influencer marketing solution leverages a curated network of premium content creators to deliver authentic, high-impact brand storytelling at scale across all major social platforms.",
    reframe:
      "Creators don't sell your brand. They let it live in their world for a day. The good ones make you belong there.",
  },
  {
    obvious:
      "Costa Coffee aims to position itself as a premium yet approachable destination that resonates with the modern Indian consumer seeking quality, comfort, and a memorable experience.",
    reframe:
      "People don't pick a café for the coffee. They pick it for who they become while sitting in it. Vibes attract tribes.",
  },
];
