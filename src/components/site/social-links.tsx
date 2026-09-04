import { LINKS } from "@/lib/site";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./icons";

const socials = [
  { label: "Instagram", href: LINKS.instagram, Icon: InstagramIcon },
  { label: "TikTok", href: LINKS.tiktok, Icon: TikTokIcon },
  { label: "Facebook", href: LINKS.facebook, Icon: FacebookIcon },
  { label: "WhatsApp", href: LINKS.whatsapp, Icon: WhatsAppIcon },
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
