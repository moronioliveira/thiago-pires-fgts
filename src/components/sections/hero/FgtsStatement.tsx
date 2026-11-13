import type { CSSProperties } from "react";
import { hero, statementMonths } from "@/content/hero";
import { Icon } from "@/components/ui/Icon";

/** Extrato ilustrativo de 12 meses: os meses sem depósito aparecem piscando. */
export function FgtsStatement() {
  const missing = statementMonths.filter((month) => !month.deposited).length;

  return (
    <div
      role="img"
      aria-label={`${hero.statementCaption} com ${missing} meses sem depósito ao longo de um ano`}
      className="my-8 max-w-[640px] animate-fade-up rounded-2xl border border-line bg-surface p-3.5 [animation-delay:700ms] md:px-5 md:pt-4.5 md:pb-5"
    >
      <div className="mb-3.5 flex flex-wrap items-center justify-between gap-4 text-[13px] text-muted">
        <span>{hero.statementCaption}</span>
        <span className="flex gap-3.5">
          <span className="inline-flex items-center gap-1.5">
            <i className="size-2.5 rounded-[3px] bg-gold" /> Depositado
          </span>
          <span className="inline-flex items-center gap-1.5">
            <i className="size-2.5 rounded-[3px] border-[1.5px] border-dashed border-text/50" /> Sem depósito
          </span>
        </span>
      </div>

      <div aria-hidden="true" className="grid grid-cols-6 gap-1.5 sm:grid-cols-12">
        {statementMonths.map((month, index) => (
          <div
            key={month.label}
            style={{ "--i": index } as CSSProperties}
            className={`flex h-12 flex-col items-center justify-center gap-1 rounded-[10px] text-[11px] font-bold tracking-wide [animation-delay:calc(var(--i)*70ms+900ms)] md:h-14 ${
              month.deposited
                ? "animate-pop bg-gold text-ink"
                : "animate-blink border-[1.5px] border-dashed border-text/40 text-muted"
            }`}
          >
            <Icon
              name={month.deposited ? "check" : "circle"}
              strokeWidth={month.deposited ? 2.4 : 2}
              className="size-3.5"
            />
            {month.label}
          </div>
        ))}
      </div>
    </div>
  );
}
