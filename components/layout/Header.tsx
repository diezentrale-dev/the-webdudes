"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BOOKING, NAV_LINKS, SITE } from "@/lib/config";
import { v2Href } from "@/lib/v2-routes";
import { cn } from "@/lib/cn";
import { springGentle } from "@/lib/motion-presets";

export function Header() {
  const pathname = usePathname();
  const homeHref = v2Href(pathname, "/");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-b border-[var(--rule)] bg-[var(--bg-paper)]/92 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[var(--page-max)] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={homeHref}
          className="group inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label={`${SITE.name} – Startseite`}
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--rule)] bg-[var(--bg-white)] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
            <Image
              src={SITE.logoSrc}
              alt=""
              width={370}
              height={357}
              className="h-full w-full object-contain"
              priority
              sizes="44px"
              unoptimized
            />
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-[var(--ink)] sm:text-base">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {NAV_LINKS.map((link) => {
            const href = v2Href(pathname, link.href);
            const active =
              link.href === "/"
                ? pathname === "/v2" || pathname === "/v2/"
                : pathname === href;
            return (
              <Fragment key={link.href}>
                <Link
                  href={href}
                  className={cn(
                    "relative px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                    active ? "text-[var(--ink)]" : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                  )}
                >
                  {link.label}
                  {active ? (
                    <span className="absolute inset-x-2 -bottom-px h-px bg-[var(--accent)]" />
                  ) : null}
                </Link>
              </Fragment>
            );
          })}
          <a
            href={BOOKING.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-3 !px-4 !py-2.5 text-sm"
          >
            {BOOKING.ctaLabel}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-[var(--rule)] bg-[var(--bg-white)] text-[var(--ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={springGentle}
            className="fixed inset-0 top-[var(--header-h)] z-40 flex flex-col gap-2 border-t border-[var(--rule)] bg-[var(--bg-paper)] px-4 py-6 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, i) => {
                const href = v2Href(pathname, link.href);
                const active =
                  link.href === "/"
                    ? pathname === "/v2" || pathname === "/v2/"
                    : pathname === href;
                return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...springGentle, delay: i * 0.05 }}
                >
                  <Link
                    href={href}
                    className={cn(
                      "block px-4 py-3.5 text-base font-medium transition-colors",
                    active
                      ? "rounded-[var(--radius-sm)] bg-[var(--bg-white)] text-[var(--ink)]"
                      : "rounded-[var(--radius-sm)] text-[var(--ink-soft)] hover:text-[var(--ink)]"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
              })}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springGentle, delay: NAV_LINKS.length * 0.05 }}
              >
                <a
                  href={BOOKING.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4 block text-center"
                >
                  {BOOKING.ctaLabel}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
