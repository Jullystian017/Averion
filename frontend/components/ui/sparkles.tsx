"use client"

import { cn } from "@/lib/utils"

interface SparklesProps {
  className?: string
  size?: number
  minSize?: number | null
  density?: number
  speed?: number
  minSpeed?: number | null
  opacity?: number
  opacitySpeed?: number
  minOpacity?: number | null
  color?: string
  background?: string
  direction?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any
}

export function Sparkles({
  className,
  size = 1,
  minSize = null,
  density = 800,
  speed = 1,
  minSpeed = null,
  opacity = 1,
  opacitySpeed = 3,
  minOpacity = null,
  color = "#FFFFFF",
  background = "transparent",
  options = {},
}: SparklesProps) {
  return (
    <div
      className={cn(
        "pointer-events-none bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.55)_0%,transparent_65%)] opacity-40 blur-3xl",
        className,
      )}
    />
  )
}
