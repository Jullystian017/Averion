"use client"

import React from "react"
import { HeroBadge } from "@/components/ui/hero-badge"
import { LearnMoreButton } from "@/components/ui/learn-more-button"

const ICONS_ROW1 = [
  "https://cdn-icons-png.flaticon.com/512/5968/5968854.png",
  "https://cdn-icons-png.flaticon.com/512/732/732221.png",
  "https://cdn-icons-png.flaticon.com/512/733/733609.png",
  "https://cdn-icons-png.flaticon.com/512/732/732084.png",
  "https://cdn-icons-png.flaticon.com/512/733/733585.png",
  "https://cdn-icons-png.flaticon.com/512/281/281763.png",
  "https://cdn-icons-png.flaticon.com/512/888/888879.png",
]

const ICONS_ROW2 = [
  "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  "https://cdn-icons-png.flaticon.com/512/906/906324.png",
  "https://cdn-icons-png.flaticon.com/512/888/888841.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
  "https://cdn-icons-png.flaticon.com/512/906/906361.png",
  "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  "https://cdn-icons-png.flaticon.com/512/888/888847.png",
]

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) =>
  Array.from({ length: repeat }).flatMap(() => icons)

export function IntegrationSection() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden border-t border-white/5 bg-linear-to-b from-background via-background/98 to-background/96 py-24 sm:py-28"
    >
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-size-[24px_24px]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <HeroBadge className="mx-auto" contentClassName="text-sm">
          Integrations
        </HeroBadge>
        <div className="mx-auto mt-6 max-w-3xl sm:mt-7">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-6xl">
            Integrate with your Favorite Tools
          </h2>
          <p className="mt-3 text-balance text-base text-muted-foreground/90 sm:text-lg">
            250+ top apps are available to integrate seamlessly with your workflow.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-12 overflow-hidden relative pb-2">
          {/* Row 1 */}
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
              <div
                key={`row1-${src}-${i}`}
                className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <img
                  src={src}
                  alt="integration icon"
                  className="h-9 w-9 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="mt-6 flex gap-10 whitespace-nowrap animate-scroll-right">
            {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
              <div
                key={`row2-${src}-${i}`}
                className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-md dark:border-white/15 dark:bg-white/5"
              >
                <img
                  src={src}
                  alt="integration icon"
                  className="h-9 w-9 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Fade overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-background to-transparent" />
        </div>

        <div className="mt-10 flex justify-center">
          <LearnMoreButton 
          label="Explore All"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
