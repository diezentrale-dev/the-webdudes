"use client";

const ITEMS = [
  "Demo kostenlos",
  "Projekt ab 99 €",
  "Frankfurt · Rhein-Main",
  "Kein Kleingedrucktes",
  "Webseite geschenkt",
  "Im Meet seht ihr die fertige Seite",
];

export function MarqueeBand() {
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
