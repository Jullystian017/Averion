"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

type HoverBorderGradientProps = React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
    disableDefaults?: boolean;
    overlayClassName?: string;
    disableAnimation?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>;

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  disableDefaults = false,
  disableAnimation = false,
  overlayClassName,
  ...props
}: HoverBorderGradientProps) {
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  useEffect(() => {
    if (disableAnimation) {
      return;
    }

    const interval = setInterval(() => {
      setDirection((prevState) => rotateDirection(prevState));
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [duration, clockwise, disableAnimation]);

  const Component = Tag as React.ElementType;

  return (
    <Component
      className={cn(
        "relative flex w-fit items-center justify-center overflow-visible rounded-full border p-px box-decoration-clone transition duration-500",
        disableDefaults ? null : "bg-white/10 dark:bg-black/20",
        containerClassName,
      )}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 flex items-center gap-2 rounded-[inherit] px-4 py-2",
          disableDefaults ? null : "bg-white text-black dark:bg-black dark:text-white",
          className,
        )}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 z-0 flex-none overflow-hidden rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: disableAnimation ? movingMap["TOP"] : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div
        className={cn(
          "absolute inset-0.5 z-1 flex-none rounded-full",
          disableDefaults ? "bg-transparent" : "bg-black dark:bg-white",
          overlayClassName,
        )}
      />
    </Component>
  );
}
