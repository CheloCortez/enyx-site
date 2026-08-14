import type { IconName } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export function Button({
  href,
  variant = "primary",
  icon,
  external = false,
  className,
  children,
}: {
  href: string;
  variant?: "primary" | "secondary";
  icon?: IconName;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-colors duration-200",
        variant === "primary"
          ? "bg-accent text-bg hover:bg-accent/90"
          : "border border-border bg-transparent text-text hover:border-border-soft hover:bg-surface",
        className,
      )}
    >
      {children}
      {icon ? <Icon name={icon} className="size-4" /> : null}
    </a>
  );
}
