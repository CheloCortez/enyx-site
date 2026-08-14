import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";

export default function NotFound() {
  return (
    <main className="container-page flex min-h-dvh flex-col items-center justify-center text-center">
      <Logo />
      <p className="mt-8 font-mono text-5xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-2xl font-bold">Página não encontrada</h1>
      <p className="mt-3 max-w-sm text-sm text-muted">
        O endereço que você acessou não existe ou foi movido.
      </p>
      <Button href="/" className="mt-8" icon="arrowRight">
        Voltar para o início
      </Button>
    </main>
  );
}
