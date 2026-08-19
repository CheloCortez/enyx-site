import { cn } from "@/lib/cn";

/**
 * `emphasis` is optional and rendered in italic accent green only when the
 * caller passes it explicitly (Hero, CtaStats, Contact). In Services,
 * Differentials, Portfolio, Process and About, `titleEmphasis` is instead
 * concatenated into the plain `text` prop by the section itself — that's a
 * deliberate content decision (the accented `<em>` treatment is reserved
 * for those three sections), not a bug or an oversight to "fix" by wiring
 * `emphasis` through everywhere.
 */
export function Heading({
  as: Tag = "h2",
  id,
  text,
  emphasis,
  className,
}: {
  as?: "h1" | "h2";
  id?: string;
  text: string;
  emphasis?: string;
  className?: string;
}) {
  const size =
    Tag === "h1"
      ? "text-[clamp(2.5rem,7vw,4.5rem)]"
      : "text-[clamp(2rem,4.5vw,3rem)]";

  return (
    <Tag
      id={id}
      className={cn(
        size,
        "font-extrabold leading-[1.08] tracking-tight text-balance",
        className,
      )}
    >
      {text}
      {emphasis ? (
        <>
          {" "}
          <em className="italic text-accent">{emphasis}</em>
        </>
      ) : null}
    </Tag>
  );
}
