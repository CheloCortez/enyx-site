import { cn } from "@/lib/cn";

export function Section({
  id,
  alt = false,
  className,
  labelledBy,
  children,
}: {
  id?: string;
  alt?: boolean;
  className?: string;
  labelledBy?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "py-16 md:py-24 lg:py-28",
        alt ? "bg-bg-alt" : "bg-bg",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
