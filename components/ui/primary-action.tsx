import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function PrimaryAction({ children, className, ...props }: ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "inline-flex min-h-14 max-w-full items-center justify-center gap-5 rounded-xl bg-brand-highlight px-6 py-4 text-center text-base font-bold text-ink transition-all duration-200 hover:-translate-y-1 hover:bg-[#c9f34a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-highlight motion-reduce:transform-none motion-reduce:transition-none sm:min-h-16 sm:px-9 sm:text-lg",
        className,
      )}
      {...props}
    >
      <span className="min-w-0 text-balance">{children}</span>
      <ArrowUpRight className="size-5 shrink-0 sm:size-6" aria-hidden="true" />
    </a>
  );
}
