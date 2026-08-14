import { cn } from "@/lib/cn";

export function Card({
  className,
  interactive = false,
  children,
}: {
  className?: string;
  interactive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface",
        interactive &&
          "transition-colors duration-200 hover:border-border-soft hover:bg-surface-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
