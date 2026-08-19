import { cn } from "@/lib/cn";

export function Reveal({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("reveal", className)}>{children}</div>;
}
