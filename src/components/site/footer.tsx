import logo from "@/assets/logo.png.asset.json";
import { NAV } from "@/lib/site";
import { SocialLinks } from "./social-links";

const services = [
  "Website Development",
  "Advertisement Creation",
  "Advertisement Management",
  "Social Media Management",
  "Graphic Design",
  "Photo Editing",
  "Video Editing",
  "AI Services",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="The Ad Agency logo" className="h-14 w-14 object-contain" />
            <span className="font-display text-lg font-semibold uppercase tracking-[0.16em]">
              The Ad Agency
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Creative solutions for businesses that want to build, promote and grow.
          </p>
          <SocialLinks className="mt-6" />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">Services</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em]">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </footer>
  );
}
