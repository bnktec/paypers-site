import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-4">
        <h1 className="text-[72px] font-bold text-primary leading-none mb-4">404</h1>
        <h2 className="text-[24px] font-semibold text-foreground mb-4">Página não encontrada</h2>
        <p className="text-muted-foreground text-[16px] mb-8">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-lg px-8 h-[48px] text-[15px] transition-colors"
        >
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
}
