"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"

type LearnMoreButtonProps = {
  href?: string
  label?: string
  className?: string
  linkClassName?: string
  title?: string
  hoverLabel?: string
}

export function LearnMoreButton({
  href = "#learn-more",
  label = "Learn More",
  className,
  linkClassName,
  title,
  hoverLabel,
}: LearnMoreButtonProps) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <Link
        href={href}
        className={cn(
          "group relative inline-flex min-h-10 items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-2 text-sm sm:text-base font-semibold text-white shadow-[0_0_18px_rgba(190,198,214,0.35)] backdrop-blur-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:min-h-[3.1rem] sm:px-8 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_28px_rgba(168,85,247,0.5)] hover:scale-[1.03] active:scale-[0.98]",
          className,
        )}
        title={title ?? label}
      >
        <span className={cn("relative z-10 inline-block overflow-hidden text-nowrap transition-transform duration-300", linkClassName)}>
          <span className="block transition-transform duration-300 group-hover:delay-100 group-hover:-translate-y-full">
            {label}
          </span>
          <span className="block absolute left-0 top-full transition-transform duration-300 group-hover:delay-100 group-hover:-translate-y-full">
            {hoverLabel ?? `${label} →`}
          </span>
        </span>
        <span className="pointer-events-none absolute -inset-full z-0 rounded-[inherit] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35)_0%,rgba(168,85,247,0.35)_40%,transparent_80%)] opacity-60 blur-3xl transition-all duration-300 ease-out group-hover:opacity-80 group-hover:scale-110" />
      </Link>
    </div>
  )
}
