"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";

type GetStartedButtonVariant = "default" | "purpleGlass"

type GetStartedButtonProps = {
  href?: string;
  label?: string;
  icon?: ReactNode;
  containerClassName?: string;
  className?: string;
  linkClassName?: string;
  duration?: number;
  children?: ReactNode;
  linkProps?: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "children">;
  variant?: GetStartedButtonVariant;
  overlayClassName?: string;
  hoverLabel?: string;
};

export function GetStartedButton({
  href = "#get-started",
  label = "Get Started",
  icon,
  containerClassName,
  className,
  linkClassName,
  duration = 0.8,
  children,
  linkProps,
  variant = "default",
  overlayClassName,
  hoverLabel,
}: GetStartedButtonProps) {
  const isPurpleGlass = variant === "purpleGlass";

  const baseContainerClasses = isPurpleGlass
    ? "group/gsb rounded-2xl border border-white/25 bg-[linear-gradient(135deg,#C084FC_0%,#9333EA_45%,#6D28D9_100%)] shadow-[0_0_28px_rgba(148,89,242,0.42)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_0_36px_rgba(168,85,247,0.6)] hover:scale-[1.03] hover:border-white/40 active:scale-[0.98]"
    : "group/gsb rounded-2xl border border-white/25 bg-[linear-gradient(135deg,#8B5CF6_0%,#7C3AED_40%,#5B21B6_100%)] shadow-[0_0_24px_rgba(91,33,182,0.38)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_32px_rgba(139,92,246,0.55)] hover:scale-[1.03] hover:border-white/40 active:scale-[0.98]";

  const baseInnerClasses = isPurpleGlass
    ? "flex items-center gap-2 rounded-[inherit] bg-[rgba(76,29,149,0.78)] px-8 py-2.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[rgba(76,29,149,0.88)]"
    : "flex items-center gap-2 rounded-[inherit] bg-[rgba(64,34,130,0.82)] px-7 py-2 text-base font-semibold text-white transition-all duration-300 hover:bg-[rgba(64,34,130,0.92)]";

  return (
    <HoverBorderGradient
      containerClassName={cn(baseContainerClasses, containerClassName)}
      className={cn(baseInnerClasses, className)}
      duration={duration}
      disableDefaults
      disableAnimation
      overlayClassName={
        isPurpleGlass
          ? overlayClassName ?? "bg-[rgba(24,10,48,0.55)]"
          : overlayClassName ?? "bg-[rgba(27,14,52,0.55)]"
      }
    >
      <Link
        href={href}
        className={cn(
          "flex items-center gap-2 transition-transform duration-300",
          isPurpleGlass ? "text-white" : "text-foreground",
          linkClassName,
        )}
        {...linkProps}
      >
        {children ?? (
          <>
            {label && (
              <span className="relative inline-block overflow-hidden text-nowrap">
                <span className="block transition-transform duration-300 group-hover/gsb:delay-100 group-hover/gsb:-translate-y-full">
                  {label}
                </span>
                <span className="block absolute left-0 top-full transition-transform duration-300 group-hover/gsb:delay-100 group-hover/gsb:-translate-y-full">
                  {hoverLabel ?? `${label} →`}
                </span>
              </span>
            )}
            {icon}
          </>
        )}
      </Link>
    </HoverBorderGradient>
  );
}
