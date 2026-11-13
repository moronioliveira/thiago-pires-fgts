import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main className="grid min-h-[100dvh] place-items-center py-20">
      <Container className="text-center">
        <p className="font-display text-7xl font-extrabold text-gold">404</p>
        <h1 className="mt-4 text-3xl font-bold">Página não encontrada</h1>
        <p className="mt-3 text-muted">O endereço pode ter mudado ou não existe mais.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-gold px-6 py-3.5 font-bold text-ink transition-transform hover:-translate-y-0.5"
        >
          Voltar para a página inicial
        </Link>
      </Container>
    </main>
  );
}
