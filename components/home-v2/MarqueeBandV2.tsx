"use client";

const ITEMS = [
  "Vorschau im Meet · kostenlos",
  "20 €/Monat Betreuung",
  "1 Änderung pro Monat inkl.",
  "Frankfurt & Rhein-Main",
  "Kein Baukasten-Look",
  "Kein Einmal-Bau-und-Tschüss",
];

export function MarqueeBandV2() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-band border-y border-[var(--rule)] bg-[var(--bg-paper-deep)] py-4" aria-hidden>
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
