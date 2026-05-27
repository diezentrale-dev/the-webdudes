import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LEGAL } from "@/lib/legal-config";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen",
};

/**
 * AGB als branchenübliche Vorlage für Webdesign/Webentwicklung.
 * Vor produktivem Einsatz anwaltlich prüfen lassen.
 */
export default function AgbPage() {
  return (
    <LegalPageLayout>
      <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
        Allgemeine Geschäftsbedingungen (AGB)
      </h1>
      <p className="text-sm text-ink-700/90">
        Stand: April 2026 · {LEGAL.company} · Diese AGB sind eine Vorlage und sollen vor Launch
        anwaltlich geprüft werden.
      </p>
      <p className="mt-4 text-ink-900">
        Diese AGB gelten für alle Leistungen, die wir unter der Marke <strong>The WebDudes</strong>{" "}
        anbieten. Anbieter ist die {LEGAL.company}.
      </p>

      <h2>§ 1 Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der{" "}
        {LEGAL.company} (nachfolgend „Auftragnehmer“) und ihren Kunden (nachfolgend „Auftraggeber“)
        über die Erstellung, Anpassung und den Betrieb von Webseiten, Landingpages und damit
        zusammenhängende Leistungen, soweit nicht ausdrücklich etwas anderes vereinbart wurde.
      </p>

      <h2>§ 2 Vertragsgegenstand / Leistungen</h2>
      <p>
        Gegenstand des Vertrags ist die Erstellung und Übergabe bzw. der Betrieb von Webauftritten,
        insbesondere Landingpages und kleineren Webseiten, entsprechend dem vereinbarten Paket
        oder Angebot.
      </p>
      <p>
        Es werden zwei Leistungsmodelle mit jeweils eigener Vergütung angeboten:
      </p>
      <ul>
        <li>
          <strong>Kostenlose Demo-Webseite</strong> (0 €): unverbindliche Demo im WebDudes-Stil zur
          Vorstellung der Arbeit; Übergabe erfolgt mit Dateien zum Download für die Unterlagen des
          Auftraggebers.
        </li>
        <li>
          <strong>Individuelle Webseite</strong>: Erstellung und Übergabe bzw. Einrichtung einer
          maßgeschneiderten Webseite nach Angebot; der Preis beginnt bei <strong>99 € einmalig</strong>
          und wird je nach Umfang im jeweiligen Angebot beziffert.
        </li>
      </ul>
      <p>
        Zusätzlich können <strong>Wartungs-, Pflege- oder Hosting-Leistungen</strong> gesondert und
        schriftlich vereinbart werden. Diese sind <strong>keine Pflicht</strong> und{" "}
        <strong>kein automatischer Bestandteil</strong> der beiden Modelle. Umfang und Vergütung
        ergeben sich aus der jeweiligen Vereinbarung. Ein kompletter Relaunch oder ein neues
        Designkonzept sind nicht automatisch Bestandteil laufender Pflege und werden gesondert
        angeboten.
      </p>
      <p>
        Der Auftraggeber entscheidet frei, ob er nach der Demo oder nach einem Projekt weitere
        Leistungen bucht. Zusatzleistungen erfolgen nach Aufwand oder nach Angebot. Individuelle
        Anforderungen können zu Preisanpassungen führen, wie auf der Leistungsseite dargestellt.
      </p>

      <h2>§ 3 Vertragsabschluss</h2>
      <p>
        Der Vertrag kommt durch Annahme eines Angebots des Auftragnehmers oder durch
        schriftliche/e-mail-seitige Bestätigung einer Bestellung zustande. Maßgeblich sind die
        jeweils vereinbarte Leistungsbeschreibung und diese AGB. Der Auftragnehmer erbringt seine
        Leistungen mit der Sorgfalt einer ordentlichen IT- und Webdienstleistung; der Auftraggeber
        wirkt bei der Bereitstellung von Inhalten und Freigaben mit.
      </p>

      <h2>§ 4 Mitwirkungspflichten des Auftraggebers</h2>
      <p>
        Der Auftraggeber stellt Texte, Bilder, Logos und sonstige Inhalte rechtzeitig und in
        brauchbarer Form bereit. Der Auftraggeber ist dafür verantwortlich, dass er über die
        erforderlichen Rechte an den gelieferten Inhalten verfügt und keine Rechte Dritter
        verletzt. Verzögerungen aufgrund verspäteter Mitwirkung können zu Terminverschiebungen
        führen.
      </p>

      <h2>§ 5 Vergütung und Zahlungsbedingungen</h2>
      <p>
        Die Vergütung für ein individuelles Projekt wird mit Abnahme der vereinbarten Leistung bzw.
        nach den im Angebot genannten Fälligkeiten fällig, sofern nichts Abweichendes vereinbart
        wurde. Die kostenlose Demo-Webseite ist unentgeltlich.
      </p>
      <p>
        Für gesondert vereinbarte laufende Leistungen (z. B. Wartung, Pflege) gilt die jeweils
        schriftlich vereinbarte Vergütung und Abrechnungsperiode. Es besteht keine automatische
        Kopplung an die Demo oder das Projektangebot.
      </p>
      <p>
        Bei Zahlungsverzug gelten die gesetzlichen Regelungen; der Auftragnehmer ist berechtigt,
        die Leistung nach Mahnung vorübergehend einzustellen.
      </p>

      <h2>§ 6 Laufzeit und Kündigung</h2>
      <p>
        Die Erstellung und Abnahme eines individuellen Projekts sowie die Bereitstellung der
        kostenlosen Demo sind auf den jeweils vereinbarten Leistungsumfang ausgerichtet und
        begründen <strong>keine unbefristete Laufzeit</strong> für die Erstellung selbst; mit
        Abnahme der vereinbarten Leistung ist der Werkvertrag über die Erstellung abgeschlossen,
        soweit nichts anderes vereinbart.
      </p>
      <p>
        Gesondert vereinbarte fortlaufende Leistungen können vom Auftraggeber gekündigt werden,
        soweit eine Kündigungsregelung vereinbart wurde; andernfalls gelten die gesetzlichen
        Regelungen. Ohne aktive Vereinbarung laufender Vergütungen entstehen nach Abnahme der
        Webseite keine weiteren Vergütungsansprüche des Auftragnehmers aus diesen AGB; etwaige
        Kosten bei externen Anbietern (Domain, Hosting) bleiben davon unberührt.
      </p>
      <p>
        Nach Beendigung gesonderter Betreuungsvereinbarungen bleibt die Webseite grundsätzlich
        bestehen; Auswirkungen auf Hosting, Domain und technischen Betrieb werden im Einzelfall
        vertraglich geregelt.
      </p>

      <h2>§ 7 Nutzungsrechte</h2>
      <p>
        Mit vollständiger Zahlung der vereinbarten Vergütung räumt der Auftragnehmer dem
        Auftraggeber die einfachen Nutzungsrechte an der gelieferten Webseite ein, soweit eine
        Übertragung möglich ist. Fremdinhalte (z. B. Stock-Materialien) unterliegen den jeweiligen
        Lizenzbedingungen der Anbieter.
      </p>

      <h2>§ 8 Haftung</h2>
      <p>
        Der Auftragnehmer haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei
        Verletzung von Leben, Körper oder Gesundheit. Im Übrigen haftet der Auftragnehmer nur bei
        Verletzung wesentlicher Vertragspflichten und begrenzt auf den typischerweise
        vorhersehbaren Schaden, soweit gesetzlich zulässig; die Haftung für leichte Fahrlässigkeit
        ist ausgeschlossen, soweit gesetzlich zulässig.
      </p>

      <h2>§ 9 Referenznutzung</h2>
      <p>
        Der Auftragnehmer darf die erstellte Webseite in Portfolio und Referenzen nennen und
        verlinken, sofern der Auftraggeber dem nicht ausdrücklich widerspricht.
      </p>

      <h2>§ 10 Änderungen der AGB</h2>
      <p>
        Der Auftragnehmer kann diese AGB mit Wirkung für die Zukunft anpassen. Der Auftraggeber wird
        hierüber informiert; widerspricht er nicht innerhalb einer angemessenen Frist, gelten die
        geänderten AGB; auf das Widerspruchsrecht wird hingewiesen.
      </p>

      <h2>§ 11 Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Sofern
        der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder
        öffentlich-rechtliches Sondervermögen ist, ist Gerichtsstand für alle Streitigkeiten
        Frankfurt am Main, soweit zulässig. Sollten einzelne Bestimmungen unwirksam sein, bleibt die
        Wirksamkeit der übrigen Regelungen unberührt (Salvatorische Klausel).
      </p>
    </LegalPageLayout>
  );
}
