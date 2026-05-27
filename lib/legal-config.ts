/**
 * Verbindliche Unternehmens- und Kontaktdaten (Impressum, Datenschutz, Footer).
 * Bei Änderungen nur hier anpassen.
 */
export const LEGAL = {
  company: "Theis Business Consulting UG (haftungsbeschränkt)",
  street: "Berger Straße 175",
  city: "60385 Frankfurt am Main",
  country: "Deutschland",
  /** Anzeige & Impressum */
  phone: "+49 69 87203705",
  /** Öffentliche Kontakt-E-Mail (Website, Footer, Kontaktseite) */
  email: "kontakt@thewebdudes.de",
  managingDirector: "Marcel Dominick Theis",
  registerCourt: "Amtsgericht Frankfurt am Main",
  registerNumber: "HRB 126168",
  vatId: "DE350368463",
} as const;

/** Base64(UTF-8) – leichte Obfuscation für clientseitige Mailto-Zusammenfügung */
export const CONTACT_EMAIL_B64 = "a29udGFrdEB0aGV3ZWJkdWRlcy5kZQ==";

/** Für <a href="tel:…"> – Leerzeichen entfernen */
export function phoneTelHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
