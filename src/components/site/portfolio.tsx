import { useState } from "react";
import { ImageIcon } from "lucide-react";

const CATEGORIES = [
  "All",
  "Advertisements",
  "Social Media Designs",
  "Logos",
  "Visiting Cards",
  "Posters",
  "Websites",
  "Photo Editing",
  "Video Editing",
] as const;

type Category = (typeof CATEGORIES)[number];

const ITEMS: { title: string; category: Exclude<Category, "All">; ratio: string }[] = [
  { title: "Product Advertisement", category: "Advertisements", ratio: "aspect-[4/5]" },
  { title: "Campaign Creative", category: "Advertisements", ratio: "aspect-[4/3]" },
  { title: "Instagram Post Set", category: "Social Media Designs", ratio: "aspect-square" },
  { title: "Facebook Cover Design", category: "Social Media Designs", ratio: "aspect-[4/3]" },
  { title: "Brand Logo Mark", category: "Logos", ratio: "aspect-square" },
  { title: "Business Visiting Card", category: "Visiting Cards", ratio: "aspect-[4/3]" },
  { title: "Promotional Poster", category: "Posters", ratio: "aspect-[4/5]" },
  { title: "Business Website", category: "Websites", ratio: "aspect-[4/3]" },
  { title: "Landing Page Design", category: "Websites", ratio: "aspect-[4/3]" },
  { title: "Product Photo Retouch", category: "Photo Editing", ratio: "aspect-square" },
  { title: "Short-Form Video Edit", category: "Video Editing", ratio: "aspect-[4/5]" },
  { title: "Promotional Video", category: "Video Editing", ratio: "aspect-[4/3]" },
];

export function Portfolio() {
  const [active, setActive] = useState<Category>("All");
  const items = active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <div>
      <div className="mt-10 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`border px-4 py-2 text-xs uppercase tracking-[0.12em] transition-colors ${
              active === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure key={item.title} className="group border border-border bg-card">
            <div
              className={`flex ${item.ratio} w-full flex-col items-center justify-center gap-3 bg-muted text-muted-foreground`}
            >
              <ImageIcon className="h-7 w-7" strokeWidth={1.25} />
              <span className="text-[11px] uppercase tracking-[0.16em]">Image placeholder</span>
            </div>
            <figcaption className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
              <span className="text-sm text-foreground">{item.title}</span>
              <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {item.category}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
