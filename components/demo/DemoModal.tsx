"use client";

import { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  /** iframe src für Live-Demos; ohne src nur Bild/Info */
  src?: string;
  /** Vorschaubild vor dem Klick auf „Vorschau laden“ */
  posterImageUrl?: string;
  imageUrl?: string;
  imageAlt?: string;
  footnote?: string;
  /** true: Demo-iframe sofort ohne Zwischen-Schritt „Vorschau laden“ */
  loadIframeImmediately?: boolean;
};

/** Sandbox: Demos brauchen Skripte; kein Top-Navigation zu vollem Ursprung nötig */
const IFRAME_SANDBOX =
  "allow-scripts allow-same-origin allow-popups allow-forms allow-modals";

export function DemoModal({
  open,
  onClose,
  title,
  src,
  posterImageUrl,
  imageUrl,
  imageAlt,
  footnote,
  loadIframeImmediately = false,
}: DemoModalProps) {
  const [iframeActive, setIframeActive] = useState(false);
  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onKey]);

  useEffect(() => {
    if (!open) setIframeActive(false);
    else if (open && loadIframeImmediately && src) setIframeActive(true);
  }, [open, loadIframeImmediately, src]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink-900/45 backdrop-blur-sm"
            aria-label="Dialog schließen"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            className="relative z-10 m-0 flex h-[min(92vh,880px)] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-glow sm:m-4 sm:rounded-3xl"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-ink-900/10 px-4 py-3 sm:px-6">
              <h2 id="demo-modal-title" className="font-display text-lg font-semibold text-ink-900">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-cream-50 text-ink-900 transition hover:bg-white"
                aria-label="Schließen"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative min-h-0 flex-1 bg-cream-50">
              {src ? (
                iframeActive ? (
                  <iframe
                    title={title}
                    src={src}
                    className="h-full min-h-[480px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    sandbox={IFRAME_SANDBOX}
                  />
                ) : (
                  <div className="flex h-full min-h-[480px] flex-col items-center justify-center gap-6 p-6 sm:p-10">
                    {posterImageUrl ? (
                      <div className="relative aspect-video w-full max-w-2xl overflow-hidden rounded-2xl border border-ink-900/10 bg-cream-100 shadow-soft">
                        <Image
                          src={posterImageUrl}
                          alt={imageAlt ?? ""}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 896px"
                        />
                      </div>
                    ) : null}
                    <p className="max-w-lg text-center text-sm leading-relaxed text-ink-700">
                      Beim Klick wird eine externe Vorschau geladen. Dabei können Daten an den
                      anbietenden Server übertragen werden.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIframeActive(true)}
                      className="rounded-full bg-ink-900 px-8 py-3 text-sm font-semibold text-cream-50 shadow-soft transition hover:bg-ocean"
                    >
                      Vorschau laden
                    </button>
                  </div>
                )
              ) : imageUrl ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl}
                    alt={imageAlt ?? ""}
                    className="max-h-[55vh] w-full max-w-2xl rounded-2xl object-cover shadow-soft"
                  />
                  {footnote ? (
                    <p className="max-w-md text-sm text-ink-700">{footnote}</p>
                  ) : null}
                </div>
              ) : (
                <p className="p-6 text-sm text-ink-700">Keine Vorschau verfügbar.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
