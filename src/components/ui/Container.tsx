import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Limita a largura do conteúdo e aplica as margens laterais padrão. */
export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 md:px-10 ${className}`}>{children}</div>;
}
