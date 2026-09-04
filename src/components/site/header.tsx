import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { LINKS, NAV } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="The Ad Agency home">
          <img src={logo.url} alt="The Ad Agency logo" className="h-12 w-12 object-contain" />
          <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground sm:block">
            The Ad Agency
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Start Your Project
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-border last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-sm uppercase tracking-widest text-muted-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Start Your Project
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
