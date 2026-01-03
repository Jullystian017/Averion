"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { HeroBadge } from "@/components/ui/hero-badge"
import { cn } from "@/lib/utils"
import { Bot, MessageSquareText, LineChart } from "lucide-react"

type Feature = {
  id: number
  label: string
  title: string
  subtitle: string
  description: string
  bullets: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const features: Feature[] = [
  {
    id: 0,
    label: "Meeting Assistant",
    title: "Smart and effortless scheduling",
    subtitle: "now it's more easy",
    description:
      "Our AI agent doesn't just answer questions—it books meetings in real time. It finds the right time slots, handles reschedules, and keeps every calendar in sync.",
    bullets: [
      "Smart and effortless scheduling now it's more easy",
      "Context‑aware suggestions based on previous conversations",
    ],
    icon: MessageSquareText,
  },
  {
    id: 1,
    label: "Scheduler & Lead Router",
    title: "Route every lead automatically",
    subtitle: "with zero manual work",
    description:
      "Qualify, score, and route leads to the right owner in seconds. Build rules once and let the system keep your pipeline flowing 24/7.",
    bullets: [
      "Automatic lead qualification and routing",
      "Works with your existing CRM and channels",
    ],
    icon: Bot,
  },
  {
    id: 2,
    label: "Conversation Intelligence",
    title: "Understand every interaction",
    subtitle: "without reading every log",
    description:
      "Automatically summarize calls and chats, surface risks, and highlight next steps so your team can act instead of digging through transcripts.",
    bullets: [
      "AI summaries for calls, chats, and emails",
      "Risk and opportunity signals in one view",
    ],
    icon: LineChart,
  },
  {
    id: 3,
    label: "Revenue Intelligence",
    title: "See what drives revenue",
    subtitle: "across the whole journey",
    description:
      "Connect every touchpoint to pipeline and revenue. Spot what works, what stalls, and where to focus to hit your targets faster.",
    bullets: [
      "Full‑funnel visibility from lead to renewal",
      "Insights that plug directly into your workflow",
    ],
    icon: LineChart,
  },
]

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [activeId, setActiveId] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const rafRef = useRef<number | null>(null)

  const CYCLE_DURATION = 4444 // ms

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.3)
      },
      {
        threshold: [0, 0.15, 0.3, 0.6, 1],
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      setProgress(0)
      return
    }

    const start = performance.now()

    const step = (ts: number) => {
      const elapsed = ts - start
      const pct = Math.min(1, elapsed / CYCLE_DURATION)
      setProgress(pct)

      if (pct >= 1) {
        const nextId = (activeId + 1) % features.length
        setActiveId(nextId)
        setProgress(0)
        return
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [activeId, isInView])

  const progressFor = (id: number) => {
    if (activeId === id) return progress
    return 0
  }

  const current = useMemo(() => {
    return features.find((f) => f.id === activeId) ?? features[0]
  }, [activeId])

  const CurrentIcon = current.icon

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative overflow-hidden border-t border-white/5 bg-background py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <HeroBadge className="mx-auto" contentClassName="text-sm">
            How it works
          </HeroBadge>
          <div className="mx-auto mt-6 max-w-3xl sm:mt-7">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-6xl">
              How our AI chat works in 3 simple steps
            </h2>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-2 py-1 shadow-[0_22px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl">
            {features.map((feature) => {
              const Icon = feature.icon
              const isActive = feature.id === activeId
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveId(feature.id)}
                  className={cn(
                    "relative flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors sm:text-sm",
                    isActive
                      ? "bg-[#050716] text-white shadow-[0_0_0_1px_rgba(148,163,184,0.18)]"
                      : "text-muted-foreground hover:text-white/90 hover:bg-white/5",
                  )}
                >
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/5">
                    <Icon className="size-3.5 text-primary" />
                  </span>
                  <span>{feature.label}</span>
                  <span className="pointer-events-none absolute inset-x-3 -bottom-1 h-0.5 overflow-hidden rounded-full bg-white/10">
                    <span
                      className="absolute left-0 top-0 h-full w-full origin-left bg-violet-500 transition-opacity"
                      style={{
                        transform: `scaleX(${progressFor(feature.id)})`,
                        opacity: progressFor(feature.id) > 0 ? 1 : 0,
                      }}
                    />
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-purple-500/35 bg-[radial-gradient(circle_at_top,#050816_0%,#070018_55%,#050816_100%)] px-5 py-8 shadow-[0_0_80px_rgba(148,89,242,0.55)] sm:px-8 sm:py-10 lg:mt-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-stretch">
            <div className="flex flex-col justify-between gap-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-violet-300/80">
                  {current.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                  {current.title}
                  <br />
                  <span className="text-white/80">{current.subtitle}</span>
                </h3>
                <p className="mt-4 max-w-xl text-sm text-muted-foreground/90 sm:text-base">
                  {current.description}
                </p>
              </div>

              <div className="mt-4 space-y-3">
                {current.bullets.map((bullet, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-full bg-[#080b1c] px-3 py-2.5 text-xs text-white/90 shadow-[0_14px_40px_rgba(15,23,42,0.9)] sm:px-4 sm:text-sm"
                  >
                    <div className="flex size-8 items-center justify-center rounded-full bg-linear-to-b from-primary/20 to-primary/5 ring-1 ring-white/10">
                      <CurrentIcon className="size-4 text-primary" />
                    </div>
                    <p className="flex-1 text-left text-[0.8rem] sm:text-[0.85rem]">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-violet-500/25 blur-3xl" />
              <div className="pointer-events-none absolute -right-4 bottom-0 h-32 w-32 rounded-full bg-fuchsia-500/25 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,#111827_0,#020617_55%)] px-6 py-6 shadow-[0_26px_70px_rgba(15,23,42,0.95)]">
                <div className="flex flex-1 items-center justify-center">
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-3xl border border-white/10 bg-white/5/20 shadow-[0_18px_45px_rgba(15,23,42,0.95)]">
                    <div className="absolute inset-3 rounded-2xl border border-white/5 bg-[radial-gradient(circle_at_top,#4c1d95_0,transparent_70%)] opacity-80" />
                    <div className="relative flex flex-col items-center gap-2">
                      <CurrentIcon className="size-7 text-primary" />
                      <div className="h-1.5 w-20 rounded-full bg-white/16" />
                      <div className="h-1 w-14 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-4">
                  {[0, 1, 2, 3, 4].map((i) => {
                    const isActiveAvatar = i === 2
                    return (
                      <div
                        key={i}
                        className={cn(
                          "relative flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5/80",
                          isActiveAvatar &&
                            "border-violet-400/70 bg-violet-500/20 shadow-[0_0_0_6px_rgba(76,29,149,0.45)]",
                        )}
                      >
                        <span className="size-6 rounded-full bg-[radial-gradient(circle_at_top,#e5e7eb_0,#6b7280_80%)]" />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
