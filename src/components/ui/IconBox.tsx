import type { IconName } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export function IconBox({
  name,
  size = "md",
}: {
  name: IconName;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent",
        size === "md" ? "size-10" : "size-9",
      )}
    >
      <Icon name={name} className={size === "md" ? "size-5" : "size-4"} />
    </span>
  );
}
