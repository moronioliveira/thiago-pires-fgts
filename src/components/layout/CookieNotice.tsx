"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "aviso-cookies-visto";

function readSeen(): boolean {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return true;
  }
}

/**
 * Aviso simples de cookies (LGPD).
 * Aparece uma vez e some depois que a pessoa clica em "Entendi".
 */
export function CookieNotice() {
  const seen = useSyncExternalStore(
    () => () => {},
    readSeen,
    () => true,
  );

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* armazenamento indisponível: apenas esconde */
    }
    const element = document.getElementById("aviso-cookies");
    if (element) element.hidden = true;
  }

  if (seen) return null;

  return (
    <div
      id="aviso-cookies"
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-4 bottom-24 z-40 mx-auto max-w-xl rounded-2xl border border-line bg-surface p-5 text-sm leading-relaxed text-muted shadow-2xl md:bottom-6 md:left-6 md:mx-0"
    >
      <p>
        Usamos cookies para medir o desempenho da página e dos anúncios. Saiba mais na{" "}
        <Link href="/politica-de-privacidade" className="text-gold-light underline underline-offset-2">
          política de privacidade
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="mt-3 rounded-full bg-gold px-5 py-2 text-sm font-bold text-ink transition-transform active:scale-[.98]"
      >
        Entendi
      </button>
    </div>
  );
}
