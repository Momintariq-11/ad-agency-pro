import { LINKS } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with The Ad Agency on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-background shadow-lg shadow-black/40 transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
