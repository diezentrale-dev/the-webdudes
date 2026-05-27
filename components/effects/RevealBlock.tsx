"use client";

import { cn } from "@/lib/cn";
import { useReveal } from "@/hooks/useReveal";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  delay?: number;
};

export function RevealBlock({ children, className, as: Tag = "div", delay = 0 }: Props) {
  const ref = useReveal<HTMLElement>({});

  return (
    <Tag
      // @ts-expect-error polymorphic ref for section | article | li | div
      ref={ref}
      className={cn("reveal-block", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      data-reveal
    >
      {children}
    </Tag>
  );
}
