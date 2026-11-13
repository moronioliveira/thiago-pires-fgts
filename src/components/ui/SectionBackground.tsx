import Image from "next/image";

type Overlay = "hero" | "panel" | "veins";

const overlayClass: Record<Overlay, string> = {
  hero: "overlay-hero",
  panel: "overlay-panel",
  veins: "overlay-veins",
};

interface SectionBackgroundProps {
  src: string;
  overlay: Overlay;
  /** Leve movimento de profundidade ao rolar */
  parallax?: boolean;
  /** Use apenas na primeira dobra (carrega a imagem antes) */
  priority?: boolean;
  imageClassName?: string;
}

/**
 * Imagem de fundo decorativa de uma seção.
 * A seção que usa este componente precisa ter: relative isolate overflow-hidden
 */
export function SectionBackground({
  src,
  overlay,
  parallax = false,
  priority = false,
  imageClassName = "",
}: SectionBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute -z-10 ${parallax ? "-inset-y-[8%] inset-x-0 scroll-parallax" : "inset-0"}`}
    >
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        quality={75}
        className={`object-cover ${imageClassName}`}
      />
      <div className={`absolute inset-0 ${overlayClass[overlay]}`} />
    </div>
  );
}
