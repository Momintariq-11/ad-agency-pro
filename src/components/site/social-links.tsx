import { LINKS } from "@/lib/site";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./icons";

const socials = [
  { label: "Instagram", handle: "@the.ad.agency", href: LINKS.instagram, Icon: InstagramIcon },
  { label: "TikTok", handle: "The Ad Agency", href: LINKS.tiktok, Icon: TikTokIcon },
  { label: "Facebook", handle: "The Ad Agency", href: LINKS.facebook, Icon: FacebookIcon },
  { label: "WhatsApp", handle: "Message us directly", href: LINKS.whatsapp, Icon: WhatsAppIcon },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SocialCards({ className = "" }: { className?: string }) {
  return (
    <ul className={`grid gap-px border border-border bg-border sm:grid-cols-2 ${className}`}>
      {socials.map(({ label, handle, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-background p-5 transition-colors hover:bg-surface"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-semibold text-foreground">{label}</span>
              <span className="block truncate text-sm text-muted-foreground">{handle}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
