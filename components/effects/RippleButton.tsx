"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

type LinkProps = BaseProps & { href: string; external?: boolean };
type ButtonProps = BaseProps & { onClick?: () => void; type?: "button" | "submit" };

function rippleClass(variant: BaseProps["variant"]) {
  if (variant === "secondary") return "btn-secondary ripple-btn";
  if (variant === "ghost") return "btn-ghost ripple-btn";
  return "btn-primary ripple-btn";
}

function attachRipple(e: React.MouseEvent<HTMLElement>) {
  const btn = e.currentTarget;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const r = btn.getBoundingClientRect();
  const size = Math.max(r.width, r.height) * 2;
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - r.left - size / 2}px`;
  ripple.style.top = `${e.clientY - r.top - size / 2}px`;
  btn.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

export function RippleLink({ href, children, className, variant = "primary", external }: LinkProps) {
  const reduced = useReducedMotion();

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(rippleClass(variant), className)}
        onClick={reduced ? undefined : attachRipple}
      >
        <span className="ripple-btn__label">{children}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={cn(rippleClass(variant), className)} onClick={reduced ? undefined : attachRipple}>
      <span className="ripple-btn__label">{children}</span>
    </Link>
  );
}

export function RippleButton({ children, className, variant = "primary", onClick, type = "button" }: ButtonProps) {
  const reduced = useReducedMotion();

  return (
    <button
      type={type}
      className={cn(rippleClass(variant), className)}
      onClick={(e) => {
        if (!reduced) attachRipple(e);
        onClick?.();
      }}
    >
      <span className="ripple-btn__label">{children}</span>
    </button>
  );
}
