import { site } from "@/content/site";

const KW = "text-accent";
const FN = "text-accent";
const VAR = "text-text";
const PUNC = "text-muted";
const COMMENT = "text-muted/70";

export function CodeCard() {
  return (
    <div className="rounded-xl border border-border bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">
          {site.hero.codeTitle}
        </span>
      </div>

      <div className="overflow-x-auto px-4 py-5 sm:px-6">
        <pre className="font-mono text-[0.8125rem] leading-relaxed sm:text-sm">
          <code>
            <span className={KW}>const</span> <span className={VAR}>projeto</span>{" "}
            <span className={PUNC}>=</span> <span className={KW}>await</span>{" "}
            <span className={VAR}>{site.hero.codeIdentifier}</span>
            {"\n  "}
            <span className={PUNC}>.</span>
            <span className={FN}>analisar</span>
            <span className={PUNC}>(requisitos)</span>
            {"\n  "}
            <span className={PUNC}>.</span>
            <span className={FN}>projetar</span>
            <span className={PUNC}>(arquitetura)</span>
            {"\n  "}
            <span className={PUNC}>.</span>
            <span className={FN}>desenvolver</span>
            <span className={PUNC}>(features)</span>
            {"\n  "}
            <span className={PUNC}>.</span>
            <span className={FN}>entregar</span>
            <span className={PUNC}>(produção);</span>
            {"\n"}
            <span className={COMMENT}>{"// resultado: produto pronto ✓"}</span>
            {"\n"}
            <span className={VAR}>console</span>
            <span className={PUNC}>.</span>
            <span className={FN}>log</span>
            <span className={PUNC}>(projeto.status);</span>
          </code>
        </pre>
      </div>

      <div className="flex items-center justify-between border-t border-border px-4 py-4 sm:px-6">
        <span className="font-mono text-xs text-muted">
          {site.hero.deliveryLabel}
        </span>
        <span className="font-mono text-2xl font-bold text-accent">
          {site.hero.deliveryValue}
        </span>
      </div>
    </div>
  );
}
