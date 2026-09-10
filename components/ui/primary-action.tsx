import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PrimaryActionProps = ComponentProps<"a"> & {
  labelClassName?: string;
};

export function PrimaryAction({
  children,
  className,
  labelClassName,
  ...props
}: PrimaryActionProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-14 max-w-full items-center justify-center gap-5 rounded-lg bg-brand-highlight px-6 py-4 text-center text-base font-bold text-ink shadow-[0_14px_34px_rgba(185,229,50,0.16)] transition-[transform,background-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:bg-[#c9f34a] hover:shadow-[0_18px_42px_rgba(185,229,50,0.23)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-highlight motion-reduce:transform-none motion-reduce:transition-none sm:min-h-16 sm:px-8 sm:text-lg",
        className,
      )}
      {...props}
    >
      <span className={cn("min-w-0 text-balance", labelClassName)}>
        {children}
      </span>
      <ArrowUpRight className="size-5 shrink-0 sm:size-6" aria-hidden="true" />
    </a>
  );
}
