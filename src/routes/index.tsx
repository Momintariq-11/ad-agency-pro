import { createFileRoute } from "@tanstack/react-router";
import {
  Monitor,
  Megaphone,
  Share2,
  PenTool,
  Film,
  Sparkles,
  Check,
} from "lucide-react";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { Portfolio } from "@/components/site/portfolio";
import { SocialLinks } from "@/components/site/social-links";
import { WhatsAppIcon } from "@/components/site/icons";
import { LINKS } from "@/lib/site";
import logo from "@/assets/logo.png.asset.json";

const TITLE = "The Ad Agency — Websites, Advertising & Creative Services";
const DESCRIPTION =
  "The Ad Agency builds websites, creates and manages advertisements, runs social media, and handles graphic design, photo and video editing, and AI work for businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

const SERVICE_GROUPS = [
  {
    icon: Monitor,
    title: "Digital Presence",
    text: "Websites that look professional and give your business a proper home online.",
    items: ["Business Websites", "Landing Pages", "Portfolio Websites", "Responsive Design"],
  },
  {
    icon: Megaphone,
    title: "Advertising",
    text: "Ads that are built to be seen, from the first idea to the running campaign.",
    items: ["Ad Creation", "Ad Management", "Promotional Campaigns", "Product Ads"],
  },
  {
    icon: Share2,
    title: "Social Media",
    text: "Your pages stay active, consistent and worth following.",
    items: ["Instagram", "Facebook", "TikTok", "Content & Post Management"],
  },
  {
    icon: PenTool,
    title: "Creative Design",
    text: "Clean, well-made design work for everything your business puts its name on.",
    items: ["Logo Design", "Visiting Cards", "Posters & Flyers", "Banners & Social Graphics"],
  },
  {
    icon: Film,
    title: "Media Editing",
    text: "Photos and videos prepared properly before they go out to your customers.",
    items: ["Photo Editing", "Product Retouching", "Video Editing", "Reels & Short Videos"],
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    text: "AI-assisted work for businesses that want to move faster on content and everyday tasks.",
    items: ["AI Content Solutions", "AI Creative Work", "AI Business Assistance", "Custom Requests"],
  },
];

const REASONS = [
  {
    title: "Professional Work",
    text: "We focus on clean, business-oriented work that fits how you want your company to be seen.",
  },
  {
    title: "Affordable Rates",
    text: "Professional services at competitive prices, with clear costs agreed before we start.",
  },
  {
    title: "Complete Digital Services",
    text: "Websites, ads, social media and creative work handled under one roof, by one team.",
  },
  {
    title: "Customer Satisfaction",
    text: "Our goal is work that matches what you asked for, not just work that is finished.",
  },
  {
    title: "Creative Approach",
    text: "Every business is different, so the solution is built around your requirements.",
  },
  {
    title: "Reliable Support",
    text: "We stay in touch through the project so you always know where things stand.",
  },
];

const PROCESS = [
  { no: "01", title: "Discuss", text: "We start by understanding your requirements and what you want the work to achieve." },
  { no: "02", title: "Plan", text: "We decide the right creative or digital approach and agree on the scope." },
  { no: "03", title: "Create", text: "We design, develop, edit or manage the work that was agreed." },
  { no: "04", title: "Review", text: "You review the work and we make the changes you ask for." },
  { no: "05", title: "Deliver", text: "You get the final files, pages or campaign, ready to use." },
];

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "base",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  tone?: "base" | "surface";
}) {
  return (
    <section
      id={id}
      className={`border-t border-border ${tone === "surface" ? "bg-surface" : "bg-background"}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
        {intro && <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Header />
      <FloatingWhatsApp />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="eyebrow">Ideas · Creative · Results</p>
              <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
                Your Business.
                <br />
                <span className="text-primary">Our Creativity.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                From professional websites and advertising to social media management, graphic
                design, photo &amp; video editing, and AI solutions — The Ad Agency helps businesses
                build, promote, and grow their digital presence.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Start Your Project
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center border border-border-strong px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  View Our Services
                </a>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                We handle your digital presence from creation to promotion.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <img
                src={logo.url}
                alt="The Ad Agency"
                className="w-full object-contain"
                loading="eager"
              />
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-8">
            <ul className="grid gap-px border border-border bg-border text-center sm:grid-cols-4">
              {["Websites", "Advertising", "Social Media", "Design & Editing"].map((label) => (
                <li
                  key={label}
                  className="bg-background px-4 py-5 text-xs uppercase tracking-[0.16em] text-muted-foreground"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Services */}
        <Section
          id="services"
          eyebrow="What We Do"
          title="Everything your business needs to look good and get noticed."
          intro="We don't only make advertisements. We can build the website, design the graphics, create and manage the ads, run your social pages, edit your photos and videos, and take on AI-related work."
          tone="surface"
        >
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_GROUPS.map(({ icon: Icon, title, text, items }) => (
              <article key={title} className="bg-surface p-8">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                <ul className="mt-5 space-y-2">
                  {items.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* About */}
        <Section id="about" eyebrow="About Us" title="One agency for the work most businesses need done.">
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                The Ad Agency works with businesses that want a proper digital presence without
                dealing with five different people to get it. A website from one place, ads from
                another, and design from somewhere else usually ends up costing more time than it
                saves.
              </p>
              <p>
                We keep it simple. Tell us what your business needs, and we handle the creation and
                the promotion — the website, the advertisements, the social media pages, the
                graphics, the photo and video editing, and AI-related work when it makes sense for
                you.
              </p>
              <p>
                Our positioning is straightforward: professional services, affordable rates, and
                results our customers are happy with.
              </p>
            </div>
            <div className="grid gap-px self-start border border-border bg-border sm:grid-cols-2">
              {[
                ["Professional quality", "Work you can put your business name on."],
                ["Affordable pricing", "Competitive rates agreed up front."],
                ["Complete services", "Creation and promotion in one place."],
                ["Reliable service", "Clear communication from start to delivery."],
              ].map(([title, text]) => (
                <div key={title} className="bg-background p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Work */}
        <Section
          id="work"
          eyebrow="Our Work"
          title="A look at the kind of work we produce."
          intro="Browse by category. These spaces are reserved for our own project images and will be filled with real client work."
          tone="surface"
        >
          <Portfolio />
        </Section>

        {/* Why us */}
        <Section
          id="why-us"
          eyebrow="Why Choose Us"
          title="Reasons businesses keep working with us."
        >
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r) => (
              <div key={r.title} className="bg-background p-8">
                <h3 className="text-lg">{r.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section
          id="process"
          eyebrow="Our Process"
          title="Five clear steps, from first message to final delivery."
          tone="surface"
        >
          <ol className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step) => (
              <li key={step.no} className="bg-surface p-7">
                <span className="font-display text-3xl text-primary">{step.no}</span>
                <h3 className="mt-4 text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Customer satisfaction */}
        <Section id="satisfaction" eyebrow="Customer Satisfaction" title="Finishing the job isn't the same as doing it right.">
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p className="border-l-2 border-primary pl-6 text-lg text-foreground">
                Our goal isn't simply to complete a project. It's to make sure our customers are
                satisfied with the final result.
              </p>
              <p>
                We review the work with you before it is delivered, make the changes you ask for,
                and keep the conversation open after delivery. If something needs adjusting, we
                would rather hear it and fix it.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {[1, 2].map((n) => (
                <blockquote key={n} className="border border-dashed border-border p-6">
                  <p className="text-sm italic text-muted-foreground">
                    Client testimonial will appear here.
                  </p>
                </blockquote>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          eyebrow="Contact"
          title="Let's Work Together"
          intro="Have a project in mind? Tell us what you need and let's create something professional for your business."
          tone="surface"
        >
          <div className="mt-10 flex flex-col items-start gap-8 border border-border bg-background p-8 sm:p-12">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Contact Us on WhatsApp
            </a>
            <div>
              <p className="text-sm text-muted-foreground">Or find us on social media</p>
              <SocialLinks className="mt-4" />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
