import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LEGAL, phoneTelHref } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung gemäß DSGVO",
};

export default function DatenschutzPage() {
  return (
    <LegalPageLayout>
      <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
        Datenschutzerklärung
      </h1>
      <p className="text-sm text-ink-700/90">
        Diese Datenschutzerklärung gilt für die unter der Marke The WebDudes betriebene Webseite.
      </p>
      <p className="mt-3 text-sm text-ink-700/90">
        Stand: April 2026. Diese Erklärung ist als Standardvorlage gedacht und sollte vor dem
        produktiven Einsatz anwaltlich geprüft werden.
      </p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Webseite ist:
        <br />
        <br />
        {LEGAL.company}
        <br />
        {LEGAL.street}
        <br />
        {LEGAL.city}
        <br />
        Telefon:{" "}
        <a href={phoneTelHref(LEGAL.phone)} className="text-ocean underline-offset-2 hover:underline">
          {LEGAL.phone}
        </a>
        <br />
        E-Mail:{" "}
        <a href={`mailto:${LEGAL.email}`} className="break-all">
          {LEGAL.email}
        </a>
      </p>

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer
        funktionsfähigen Webseite, unserer Inhalte und Leistungen erforderlich ist oder Sie in die
        Verarbeitung eingewilligt haben. Rechtsgrundlage ist – soweit nicht anders angegeben –
        Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren und effizienten
        Bereitstellung unseres Onlineangebots) bzw. Art. 6 Abs. 1 lit. a DSGVO bei Einwilligungen.
      </p>

      <h2>3. Hosting (Vercel)</h2>
      <p>
        Diese Webseite wird über die Plattform <strong>Vercel Inc.</strong> (USA / globales CDN)
        gehostet. Beim Aufruf der Seite werden technisch notwendige Daten (z. B. IP-Adresse in
        Server-Logfiles, Zeitstempel, angeforderte Datei) verarbeitet. Mit Vercel besteht ein
        Auftragsverarbeitungsvertrag im Rahmen der DSGVO, soweit erforderlich. Eine
        Datenübermittlung in die USA kann erfolgen; die Rechtsgrundlage für entsprechende
        Übermittlungen sind Standardvertragsklauseln und/oder Angemessenheitsbeschlüsse der EU-
        Kommission, soweit anwendbar.
      </p>
      <p>
        Weitere Informationen:{" "}
        <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung von Vercel
        </a>
        .
      </p>

      <h2>4. Server-Logfiles</h2>
      <p>
        Der Provider der Seite erhebt und speichert automatisch Informationen in sogenannten
        Server-Logfiles, die Ihr Browser übermittelt (z. B. Browsertyp/-version, verwendetes
        Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der
        Serveranfrage, IP-Adresse). Die Speicherung dient der Systemsicherheit und Stabilität;
        die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden nach einer begrenzten
        Zeit gelöscht, soweit keine sicherheitsrelevante Aufbewahrung erforderlich ist.
      </p>

      <h2>5. Cookies & Tracking</h2>
      <p>
        Beim ersten Besuch erscheint ein Cookie-Banner. Dort kannst du wählen, ob nur technisch
        notwendige Funktionen erlaubt sind oder du zusätzlich zukünftige Erweiterungen (z. B.
        Statistik) akzeptierst. Die Auswahl wird im Browser gespeichert (localStorage, Schlüssel{" "}
        <code className="rounded bg-ink-900/5 px-1 py-0.5 text-xs">the-webdudes-cookie-consent</code>
        ), bis du sie zurücksetzt (z. B. durch Löschen der Websitedaten in den Browsereinstellungen).
      </p>
      <p>
        Diese Webseite setzt <strong>keine</strong> zustimmungspflichtigen Tracking- oder
        Marketing-Cookies und verwendet <strong>keine</strong> Analyse-Tools von Drittanbietern im
        Live-Betrieb. Technisch notwendige Cookies können von Hosting oder Framework genutzt
        werden, soweit unvermeidbar.
      </p>
      <p className="rounded-xl border border-ink-900/10 bg-cream-100/50 p-4 text-sm">
        <strong>Hinweis für spätere Aktivierung von Analytics (z. B. Vercel Analytics):</strong>{" "}
        Sollte ein Analyse-Dienst eingebunden werden, erfolgt dies nur nach vorheriger, aktiver
        Einwilligung (Opt-in) und wird hier gesondert beschrieben. Bis dahin bleibt dieser Abschnitt
        ohne Wirkung.
      </p>

      <h2>6. Schriftarten (lokal gehostet)</h2>
      <p>
        Die auf dieser Webseite verwendeten Schriftarten werden <strong>lokal</strong> ausgeliefert
        (Dateien auf unserem Server). Es findet <strong>keine</strong> Verbindung zu Google Fonts
        oder anderen Schrift-Anbietern beim Seitenaufruf statt; insbesondere werden keine
        IP-Adressen zu diesem Zweck an Google übermittelt.
      </p>

      <h2>7. Kontakt per E-Mail</h2>
      <p>
        Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten (E-Mail-
        Adresse, Inhalt der Nachricht, ggf. Ihr Name) zur Bearbeitung der Anfrage verarbeitet und
        bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
        Maßnahmen bzw. Vertrag) bzw. Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald
        die Anfrage abschließend bearbeitet ist, sofern keine gesetzlichen Aufbewahrungsfristen
        entgegenstehen.
      </p>

      <h2>8. Eingebettete Inhalte (Portfolio / Vorschauen)</h2>
      <p>
        Auf der Seite „Portfolio“ können eingebettete Vorschauen (iframes) anderer Webprojekte gezeigt
        werden. Die eingebetteten Inhalte werden <strong>geladen, sobald Sie aktiv „Website ansehen“
        wählen</strong> und sich der Dialog öffnet. Dabei können Daten an den jeweiligen
        Server übertragen werden (z. B. IP-Adresse, technische Metadaten). Für Inhalte Dritter gelten
        deren Datenschutzhinweise.
      </p>

      <h2>9. Ihre Rechte</h2>
      <p>Sie haben – soweit die gesetzlichen Voraussetzungen erfüllt sind – insbesondere:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
        <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>

      <h2>10. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig
        ist insbesondere die für unseren Sitz zuständige Behörde, z. B. der{" "}
        <strong>Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)</strong>,{" "}
        <a href="https://www.datenschutz.hessen.de/" target="_blank" rel="noopener noreferrer">
          www.datenschutz.hessen.de
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
