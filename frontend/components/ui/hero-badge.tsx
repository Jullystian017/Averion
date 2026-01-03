import Link from "next/link"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type HeroBadgeProps = {
  href?: string
  icon?: ReactNode
  children: ReactNode
  className?: string
  contentClassName?: string
  iconWrapperClassName?: string
  linkProps?: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "children">
}

export function HeroBadge({
  href = "#features",
  icon,
  children,
  className,
  contentClassName,
  iconWrapperClassName,
  linkProps,
}: HeroBadgeProps) {
  return (
    <Link
      href={href}
      className={cn(
        "glass-badge group flex w-fit items-center gap-3 rounded-full border border-white/20 bg-linear-to-r from-white/12 to-white/8 px-4 py-1.5 shadow-xl shadow-primary/25 backdrop-blur-2xl transition-all duration-300",
        className,
      )}
      {...linkProps}
    >
      {icon ? (
        <span className={cn("flex items-center", iconWrapperClassName)}>{icon}</span>
      ) : null}
      <span
        className={cn(
          "text-sm font-semibold leading-tight bg-linear-to-r from-foreground/90 via-foreground/85 to-foreground/70 bg-clip-text text-transparent",
          contentClassName,
        )}
      >
        {children}
      </span>
    </Link>
  )
}
