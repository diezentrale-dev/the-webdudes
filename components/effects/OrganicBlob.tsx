type Props = {
  className?: string;
  tone?: "warm" | "mint" | "mixed";
};

export function OrganicBlob({ className = "", tone = "mixed" }: Props) {
  const toneClass =
    tone === "warm" ? "organic-blob--warm" : tone === "mint" ? "organic-blob--mint" : "organic-blob--mixed";

  return <div className={`organic-blob pointer-events-none ${toneClass} ${className}`} aria-hidden />;
}
