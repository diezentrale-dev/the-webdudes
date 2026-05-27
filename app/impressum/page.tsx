import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LEGAL, phoneTelHref } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum der ${LEGAL.company}`,
};

export default function ImpressumPage() {
  return (
    <LegalPageLayout>
      <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
        Impressum
      </h1>
      <p className="text-sm text-ink-700/90">
        Impressum für die Marke The WebDudes (Anbieter siehe unten).
      </p>

      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        {LEGAL.company}
        <br />
        {LEGAL.street}
        <br />
        {LEGAL.city}
      </p>

      <h2>Kontakt</h2>
      <p>
        Tel:{" "}
        <a href={phoneTelHref(LEGAL.phone)} className="text-ocean underline-offset-2 hover:underline">
          {LEGAL.phone}
        </a>
        <br />
        E-Mail:{" "}
        <a href={`mailto:${LEGAL.email}`} className="break-all">
          {LEGAL.email}
        </a>
      </p>

      <h2>Vertreten durch</h2>
      <p>
        {LEGAL.managingDirector} (Geschäftsführer)
      </p>

      <h2>Eintragung im Handelsregister</h2>
      <p>
        Registergericht: {LEGAL.registerCourt}
        <br />
        Registernummer: {LEGAL.registerNumber}
      </p>

      <h2>Umsatzsteuer-Identifikationsnummer</h2>
      <p>{LEGAL.vatId}</p>

      <h2>Haftungsausschluss</h2>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
        externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
        verantwortlich.
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" rel="noopener noreferrer" target="_blank">
          https://ec.europa.eu/consumers/odr/
        </a>
        .
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPageLayout>
  );
}
