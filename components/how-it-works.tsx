"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion"
import { HeroBadge } from "@/components/ui/hero-badge"
import { cn } from "@/lib/utils"
import { Bot, MessageSquareText, LineChart } from "lucide-react"

const steps = [
  {
    id: 0,
    label: "Step 1",
    title: "Describe Your Goal",
    description:
      "Tulis tujuan bisnis Anda — misalnya ‘otomasi follow‑up lead dari email ke CRM’. AION mem‑parsing bahasa natural, mengekstrak intent, entitas, dan batasan, lalu menyarankan output & KPI. Anda bisa memilih template yang relevan atau memulai dari kosong; semua tetap dapat disesuaikan.",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=1600&q=80",
    icon: MessageSquareText,
  },
  {
    id: 1,
    label: "Step 2",
    title: "AION Builds It for You",
    description:
      "Dengan satu klik, AION menyusun blok otomasi, koneksi API, kredensial, dan error handling. Integrasi umum (Gmail, Slack, Notion, HubSpot, Webhooks, Database) langsung dikenali. Validasi skema dan uji cepat dijalankan otomatis sebelum dipublikasikan.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    icon: Bot,
  },
  {
    id: 2,
    label: "Step 3",
    title: "Manage & Improve Effortlessly",
    description:
      "Pantau eksekusi real‑time, throughput, error rate, dan bottleneck. Tweak kondisi, tambahkan A/B path, atau sematkan model AI baru untuk meningkatkan akurasi. Insight berbasis data membantu Anda mengoptimalkan SLA dan biaya secara berkelanjutan.",
    image:
      "https://images.unsplash.com/photo-1551281044-8af0b1b89a5a?auto=format&fit=crop&w=1600&q=80",
    icon: LineChart,
  },
]

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const leftStickyRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [navHeight, setNavHeight] = useState(72)
  const [isPinned, setIsPinned] = useState(false)
  const [bleedLeft, setBleedLeft] = useState(0)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  })
  const progressY = useTransform(scrollYProgress, [0, 1], [0, 1])
  // Make the timeline feel slower: compress the range a bit and add a spring lag
  const compressedProgressY = useTransform(progressY, (v) => v * 0.75)
  const slowProgressY = useSpring(compressedProgressY, { stiffness: 40, damping: 22, mass: 1.6 })

  // Update active step when the progress bar passes each step's icon
  useEffect(() => {
    const updateByProgress = () => {
      const container = timelineRef.current
      if (!container) return
      const containerRect = container.getBoundingClientRect()
      const barHeight = Math.max(0, Math.min(1, slowProgressY.get())) * containerRect.height

      let newIndex = 0
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const iconOffset = 12 // px adjustment to approximate the icon center
        const targetY = rect.top - containerRect.top + iconOffset
        if (barHeight >= targetY) newIndex = i
      })

      if (newIndex !== activeStep) setActiveStep(newIndex)
    }

    updateByProgress()
    const unsub = slowProgressY.on("change", updateByProgress)
    return () => {
      if (typeof unsub === 'function') unsub()
    }
  }, [slowProgressY, activeStep])

  useEffect(() => {
    const updateNav = () => {
      const header = document.querySelector('header') as HTMLElement | null
      setNavHeight(header?.offsetHeight ?? 72)
    }
    updateNav()
    window.addEventListener('resize', updateNav)
    window.addEventListener('scroll', updateNav)
    return () => {
      window.removeEventListener('resize', updateNav)
      window.removeEventListener('scroll', updateNav)
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const el = leftStickyRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      setIsPinned(rect.top <= navHeight + 1)
      const ctr = containerRef.current
      if (ctr) {
        const cRect = ctr.getBoundingClientRect()
        setBleedLeft(Math.max(0, Math.round(cRect.left)))
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true } as any)
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [navHeight])

  const Visual = useMemo(() => {
    const current = steps[activeStep]
    const Icon = current.icon
    return (
      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700/40 bg-linear-to-br from-zinc-950/90 via-zinc-900/85 to-zinc-950/80 shadow-2xl shadow-purple-500/10 backdrop-blur-sm"
      >
        <div className="pointer-events-none absolute -inset-24 -z-10 bg-[radial-gradient(120px_120px_at_var(--mouse-x,50%)_20%,rgba(168,85,247,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute left-1/3 top-1/4 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[100px]" />

        <div className="flex items-center gap-3 p-5 md:p-6">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-foreground/90">
            {current.label}
          </span>
          <span className="h-1 w-1 rounded-full bg-foreground/60" />
          <p className="text-sm text-muted-foreground/80">Live preview</p>
        </div>

        <div className="relative mx-5 mb-5 mt-2 h-[76vh] rounded-xl border border-white/10 bg-linear-to-b from-white/5 to-white/3 p-5 md:mx-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="size-2 rounded-full bg-rose-400/70" />
            <span className="size-2 rounded-full bg-amber-400/70" />
            <span className="size-2 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-xs text-muted-foreground/70">AION • Automated Workflow</span>
          </div>

          <div className="grid h-[calc(70vh-2rem)] grid-cols-12 gap-3">
            <div className="col-span-4 rounded-lg border border-white/10 bg-white/4 p-3">
              <div className="mb-3 flex items-center gap-2">
                <div className="rounded-md bg-linear-to-b from-primary/20 to-primary/10 p-2 ring-1 ring-inset ring-white/10">
                  <Icon className="size-4 text-primary" />
                </div>
                <p className="text-xs font-medium text-foreground/90">{current.title}</p>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-9/12 rounded bg-white/10" />
                <div className="h-2 w-7/12 rounded bg-white/10" />
                <div className="h-2 w-10/12 rounded bg-white/10" />
              </div>
            </div>
            <div className="col-span-8 rounded-lg border border-white/10 bg-white/2 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs text-foreground/80">Live Automation</p>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground/70">
                  <span className="size-2 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(52,211,153,0.55)]" />
                  Running
                </div>
              </div>
              <div className="relative h-[70%] rounded-md bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.08)_1px,transparent_1.5px)] bg-size-[16px_16px]">
                <motion.div
                  className="absolute left-6 top-6 h-10 w-10 rounded-lg bg-linear-to-b from-primary/25 to-primary/10 ring-1 ring-white/10"
                  animate={{ boxShadow: [
                    "0 0 0 0 rgba(168,85,247,0.25)",
                    "0 0 0 8px rgba(168,85,247,0.0)",
                  ] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute left-1/2 top-1/3 h-10 w-10 -translate-x-1/2 rounded-lg bg-linear-to-b from-violet-400/20 to-violet-400/10 ring-1 ring-white/10"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-6 right-6 h-10 w-10 rounded-lg bg-linear-to-b from-fuchsia-400/20 to-fuchsia-400/10 ring-1 ring-white/10"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                />
                <svg className="absolute inset-0" viewBox="0 0 400 240" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="glow" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgb(168 85 247 / 0.65)" />
                      <stop offset="100%" stopColor="rgb(236 72 153 / 0.4)" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M40 40 C 140 40, 120 100, 200 80 S 300 140, 360 200"
                    fill="none"
                    stroke="url(#glow)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.2, ease: "easeOut" }}
                    strokeLinecap="round"
                    strokeDasharray="1 4"
                    opacity={0.8}
                  />
                </svg>
              </div>
              <div className="mt-3 h-2 w-11/12 rounded bg-white/7" />
              <div className="mt-2 h-2 w-8/12 rounded bg-white/7" />
            </div>
          </div>
        </div>
      </motion.div>
    )
  }, [activeStep])

  return (
    <section id="how-it-works" className="relative overflow-hidden border-t border-white/5 bg-linear-to-b from-background via-background/98 to-background/96 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.12)_0,transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-purple-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-violet-500/12 blur-[100px]" />

      <div ref={containerRef} className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <HeroBadge href="#how-it-works" className="mx-auto" contentClassName="text-sm">How It Works</HeroBadge>
          <div className="mx-auto mt-6 max-w-3xl sm:mt-7">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-6xl">
              How Averion Works in 3 simple steps
            </h2>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:mt-20 lg:grid-cols-12">
          <div
            ref={leftStickyRef}
            className="relative mx-auto w-full max-w-5xl min-h-[60vh] lg:sticky lg:col-span-7 xl:col-span-8"
            style={{ top: navHeight }}
          >
            <AnimatePresence mode="wait">{Visual}</AnimatePresence>
          </div>

          <div ref={timelineRef} className="relative mx-auto mt-2 w-full max-w-3xl lg:col-span-5 xl:col-span-4 lg:mt-0 lg:ml-4">
            <div className="absolute left-3 top-0 h-full w-px bg-linear-to-b from-white/10 via-white/10 to-white/10" />
            <motion.div
              style={{ scaleY: slowProgressY }}
              className="absolute left-3 top-0 h-full w-[3px] origin-top rounded-full bg-linear-to-b from-primary/80 via-violet-400/80 to-fuchsia-400/80 shadow-[0_0_24px_rgba(168,85,247,0.35)]"
            />
            <div className="space-y-40 pl-12 lg:space-y-56">
              {steps.map((s, i) => {
                const Icon = s.icon
                const isActive = activeStep === i
                return (
                  <div
                    key={s.id}
                    ref={(el) => {
                      stepRefs.current[i] = el
                    }}
                    data-index={i}
                    className="relative"
                  >
                    <motion.div
                      aria-hidden
                      className={cn(
                        "absolute -left-9 -translate-x-1/2 top-1.5 z-10 flex items-center justify-center rounded-full ring-4 ring-background bg-black",
                        isActive
                          ? "size-10 shadow-[0_0_24px_rgba(168,85,247,0.45)]"
                          : "size-8",
                      )}
                      animate={{ scale: isActive ? 1.05 : 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                      <Icon className={cn("text-primary", isActive ? "size-5" : "size-4 opacity-90")} />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                      className="relative"
                    >
                      <h3 className="text-lg font-semibold sm:text-xl">{s.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground/90 sm:text-base">{s.description}</p>

                      
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
