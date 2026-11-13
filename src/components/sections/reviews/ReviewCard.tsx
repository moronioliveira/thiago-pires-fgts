import type { Review } from "@/types/content";

interface ReviewCardProps {
  review: Review;
  /** Cópia usada só para a rolagem contínua (oculta para leitores de tela) */
  hidden?: boolean;
}

export function ReviewCard({ review, hidden = false }: ReviewCardProps) {
  return (
    <figure
      aria-hidden={hidden || undefined}
      className="mr-5 flex w-[300px] shrink-0 flex-col justify-between gap-5.5 rounded-2xl border border-line bg-surface p-6 md:w-[380px] md:p-7"
    >
      <blockquote className="leading-relaxed">“{review.text}”</blockquote>
      <figcaption className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/45 bg-gold/12 font-bold text-gold-light"
        >
          {review.name.charAt(0).toUpperCase()}
        </span>
        <span>
          <strong className="block text-[15px]">{review.name}</strong>
          <span className="text-[13px] text-muted">Avaliação no Google</span>
        </span>
      </figcaption>
    </figure>
  );
}
