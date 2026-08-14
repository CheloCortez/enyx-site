import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}
