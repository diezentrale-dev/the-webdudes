import type { Metadata } from "next";
import { KontaktContent } from "@/components/kontakt/KontaktContent";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Mail, Telefon oder kurzes Meet. Marcel oder Tiziano melden sich persönlich zurück.",
};

export default function KontaktV2Page() {
  return (
    <div className="mesh-bg min-h-[50vh]">
      <KontaktContent />
    </div>
  );
}
