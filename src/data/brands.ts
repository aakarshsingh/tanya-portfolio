export interface Brand {
  name: string;
  /** Filename (without .svg) to look for in public/logos/. Drop a file there
   *  and it is auto-used as a monochrome ink mark. */
  slug: string;
  /** Fallback: simple-icons export key, used when no dropped file exists. */
  iconKey?: string;
}

// Worked-with roster across research, brand, and creator marketing.
// Rendering priority per brand: dropped public/logos/<slug>.svg (any colour,
// masked to ink) > simple-icons mark > Archivo wordmark.
export const brands: Brand[] = [
  { name: "SOLO", slug: "solo" },
  { name: "Philips", slug: "philips" },
  { name: "Tinder", slug: "tinder", iconKey: "siTinder" },
  { name: "PaperBoat", slug: "paperboat" },
  { name: "Fold Money", slug: "fold-money" },
  { name: "The Bear House", slug: "bear-house" },
  { name: "Sunroooof", slug: "sunroooof" },
  { name: "Costa Coffee", slug: "costa-coffee" },
  { name: "IKEA", slug: "ikea", iconKey: "siIkea" },
  { name: "Burger King", slug: "burger-king", iconKey: "siBurgerking" },
  { name: "Maruti Suzuki", slug: "maruti-suzuki" },
  { name: "Nissan", slug: "nissan", iconKey: "siNissan" },
  { name: "Vivo", slug: "vivo", iconKey: "siVivo" },
  { name: "RSPL", slug: "rspl" },
  { name: "7up", slug: "7up" },
  { name: "Lays", slug: "lays" },
  { name: "MagicBricks", slug: "magicbricks" },
  { name: "Honeywell", slug: "honeywell" },
];
