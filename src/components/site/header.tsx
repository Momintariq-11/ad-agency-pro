import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { LINKS, NAV } from "@/lib/site";

const BRAND = "The . Ad . Agency";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typed, setTyped] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (timer.current) clearInterval(timer.current);
    if (!scrolled) {
      setTyped(0);
      return;
    }
    timer.current = setInterval(() => {
      setTyped((n) => {
        if (n >= BRAND.length) {
          if (timer.current) clearInterval(timer.current);
          return n;
        }
        return n + 1;
      });
    }, 55);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div
        key={scrolled ? "compact" : "top"}
        className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 sm:px-8 ${
          scrolled ? "h-16 animate-fade-in" : "h-20"
        }`}
      >
        <a href="#top" className="flex items-center gap-3" aria-label="The Ad Agency home">
          <img
            src={logo.url}
            alt="The Ad Agency logo"
            className="object-contain transition-all duration-500 ease-out"
            style={{
              height: scrolled ? "2.5rem" : "3.5rem",
              width: scrolled ? "2.5rem" : "3.5rem",
              transform: scrolled ? "scale(1)" : "scale(1.05)",
            }}
          />
          <span
            className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-foreground sm:text-sm"
            aria-label="The Ad Agency"
          >
            <span aria-hidden="true">{scrolled ? BRAND.slice(0, typed) : BRAND}</span>
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
            className="hidden bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
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
