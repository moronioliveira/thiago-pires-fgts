import { reviews, reviewsSection } from "@/content/reviews";
import { Container } from "@/components/ui/Container";
import { StarIcon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReviewCard } from "./ReviewCard";

/**
 * Avaliações do Google em uma faixa que rola sozinha.
 * A lista é repetida duas vezes para a rolagem ser contínua; a cópia fica oculta para leitores de tela.
 */
export function Reviews() {
  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-titulo" className="bg-ink-2 pt-21 pb-24 md:pt-30 md:pb-32">
      <Container>
        <p className="scroll-reveal mb-4.5 flex items-center gap-2.5 text-[15px] font-semibold text-muted">
          <span className="flex gap-0.5 text-gold" aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) => (
              <StarIcon key={index} className="size-4" />
            ))}
          </span>
          {reviewsSection.label}
        </p>
        <SectionHeading>
          <span id="avaliacoes-titulo">{reviewsSection.title}</span>
        </SectionHeading>
      </Container>

      <div className="group mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_7%,#000_93%,transparent)] motion-reduce:overflow-x-auto">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
          {reviews.map((review) => (
            <ReviewCard key={`${review.name}-copia`} review={review} hidden />
          ))}
        </div>
      </div>
    </section>
  );
}
