"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, type Variants } from "framer-motion"

interface TimelineContentProps {
  children: ReactNode
  className?: string
  animationNum?: number
  timelineRef?: React.RefObject<HTMLDivElement | null>
  customVariants?: Variants
  as?: keyof JSX.IntrinsicElements
}

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function TimelineContent({
  children,
  className,
  animationNum = 0,
  timelineRef,
  customVariants,
  as: ComponentTag = "div",
}: TimelineContentProps) {
  const localRef = useRef<HTMLDivElement | null>(null)
  const targetRef = timelineRef?.current ? timelineRef : localRef

  useEffect(() => {
    const node = targetRef.current
    if (!node) return

    // Placeholder for scroll-based timeline logic.
    // In this simplified version we rely on framer-motion viewport.
  }, [targetRef])

  const variants = customVariants || defaultVariants

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      custom={animationNum}
      as={ComponentTag as never}
    >
      {children}
    </motion.div>
  )
}
