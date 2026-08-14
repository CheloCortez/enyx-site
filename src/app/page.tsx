export default function Home() {
  return (
    <main className="container-page py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Verificação de tokens
      </p>
      <h1 className="mt-4 text-5xl font-extrabold tracking-tight">
        Transformando ideias em{" "}
        <em className="italic text-accent">produtos</em>
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        Se este parágrafo está cinza-azulado sobre fundo quase preto, com a
        palavra acima em verde-menta itálico, os tokens estão corretos.
      </p>
      <div className="mt-8 rounded-xl border border-border bg-surface p-6">
        <span className="font-mono text-sm text-muted">card de superfície</span>
      </div>
    </main>
  );
}
