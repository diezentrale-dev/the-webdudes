import type { Metadata } from "next";
import { KontaktContent } from "@/components/kontakt/KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Mail, Telefon oder Calendly-Meet. kontakt@thewebdudes.de, +49 69 87203705.",
};

export default function KontaktPage() {
  return (
    <div className="mesh-bg min-h-[50vh]">
      <KontaktContent />
    </div>
  );
}
