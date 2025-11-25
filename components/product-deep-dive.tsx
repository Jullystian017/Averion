"use client"

import React from "react"
import { motion } from "framer-motion"
import { HeroBadge } from "@/components/ui/hero-badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { cn } from "@/lib/utils"
import { Bot, Plug, LayoutDashboard, LineChart, Shield, Users, Sparkles } from "lucide-react"

const features = [
  {
    id: "flow-builder",
    title: "AI Flow Builder",
    description:
      "Build complex, multi-step automations just by describing your goal in plain language, including branches, retries, and human approvals.",
    icon: Bot,
    accent: "from-purple-500/20 via-violet-500/15 to-fuchsia-500/10",
  },
  {
    id: "integration-layer",
    title: "Smart Integration Layer",
    description:
      "Connect your stack (Gmail, Slack, Notion, HubSpot, databases, custom APIs) with schema-aware mapping so data always lands in the right place.",
    icon: Plug,
    accent: "from-violet-500/20 via-indigo-500/15 to-cyan-500/10",
  },
  {
    id: "visual-dashboard",
    title: "Visual Workflow Dashboard",
    description:
      "Manage, monitor, and tweak automations in a live canvas, seeing every run, path, and bottleneck without digging through raw logs.",
    icon: LayoutDashboard,
    accent: "from-fuchsia-500/20 via-purple-500/15 to-violet-500/10",
  },
  {
    id: "insight-engine",
    title: "Data Insight Engine",
    description:
      "Learn from execution history to optimize SLAs and costs over time, with recommendations on steps, routing logic, and model choices.",
    icon: LineChart,
    accent: "from-purple-500/20 via-cyan-500/15 to-emerald-500/10",
  },
  {
    id: "security",
    title: "Security & Role Access",
    description:
      "Apply enterprise-grade controls with SSO, audit trails, and granular roles so every flow stays compliant and tightly permissioned.",
    icon: Shield,
    accent: "from-violet-500/20 via-purple-500/15 to-sky-500/10",
  },
  {
    id: "collaboration",
    title: "Realtime Collaboration",
    description:
      "Build and iterate bersama tim langsung di Averion, dengan komentar, status, dan perubahan yang tersinkronisasi secara real time.",
    icon: Users,
    accent: "from-fuchsia-500/20 via-violet-500/15 to-cyan-500/10",
  },
]

export function ProductDeepDiveSection() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.querySelectorAll('.bento-card')
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
      ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
    })
  }

  return (
    <section id="deep-dive" className="relative overflow-hidden bg-linear-to-b from-background via-background/98 to-background/96 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.12)_0,transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-96 w-96 rounded-full bg-purple-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-violet-500/12 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/12 blur-[150px]" />

      {/* Purple radar background (semicircle) */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center">
        <div className="relative w-5xl max-w-[94vw] h-[680px] -translate-y-28 sm:-translate-y-46 md:-translate-y-60 lg:-translate-y-72 xl:-translate-y-88">
          {/* rotating sector (wedge) */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 origin-[50%_100%] h-full w-full animate-[spin_6.5s_cubic-bezier(0.45,0.05,0.15,1)_infinite]">
            <div className="relative mx-auto aspect-square w-full max-w-[900px]">
              {/* needle beam */}
              <div className="absolute inset-0 flex items-end justify-center pb-[4%]">
                <div className="relative h-[78%] w-6 blur-[0.5px]">
                  {/* main beam shaft */}
                  <div className="absolute inset-x-1/2 bottom-0 h-full w-1 -translate-x-1/2 rounded-full bg-linear-to-t from-purple-600/0 via-purple-400/85 to-purple-200/95" />
                  {/* tip highlight */}
                  <div className="absolute inset-x-1/2 bottom-[2%] h-3 w-3 -translate-x-1/2 rounded-full bg-purple-300/80" />
                </div>
              </div>
            </div>
          </div>

          {/* rings + radial lines */}
          <svg viewBox="0 0 1100 550" className="absolute inset-0 h-full w-full opacity-95 mix-blend-screen blur-[0.5px]">
            <defs>
              <radialGradient id="ring-gradient" cx="50%" cy="100%" r="50%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.06" />
              </radialGradient>
            </defs>
            {/* soft semicircle fill */}
            <path d="M0,550 A550,550 0 0,1 1100,550 L 1100,550 L 0,550 Z" fill="url(#ring-gradient)" />
            {/* concentric rings with subtle gradient */}
            <path d="M0,550 A550,550 0 0,1 1100,550" fill="none" stroke="#a855f7" strokeWidth="1.6" opacity="0.85" className="animate-pulse animation-duration-[4s]" />
            <path d="M100,550 A450,450 0 0,1 1000,550" fill="none" stroke="#a855f7" strokeWidth="1.4" opacity="0.78" />
            <path d="M190,550 A360,360 0 0,1 910,550" fill="none" stroke="#a855f7" strokeWidth="1.2" opacity="0.70" />
            <path d="M260,550 A290,290 0 0,1 840,550" fill="none" stroke="#a855f7" strokeWidth="1.0" opacity="0.62" />
            <path d="M330,550 A220,220 0 0,1 770,550" fill="none" stroke="#a855f7" strokeWidth="0.9" opacity="0.56" />
            <path d="M400,550 A150,150 0 0,1 700,550" fill="none" stroke="#a855f7" strokeWidth="0.8" opacity="0.50" />

            {/* radial lines with stronger presence */}
            <line x1="550" y1="550" x2="1030" y2="355" stroke="#8b5cf6" strokeWidth="1.0" opacity="0.72" />
            <line x1="550" y1="550" x2="940" y2="185" stroke="#8b5cf6" strokeWidth="1.0" opacity="0.66" />
            <line x1="550" y1="550" x2="760" y2="70" stroke="#8b5cf6" strokeWidth="1.0" opacity="0.60" />
            <line x1="550" y1="550" x2="340" y2="70" stroke="#8b5cf6" strokeWidth="1.0" opacity="0.60" />
            <line x1="550" y1="550" x2="160" y2="185" stroke="#8b5cf6" strokeWidth="1.0" opacity="0.66" />
            <line x1="550" y1="550" x2="70" y2="355" stroke="#8b5cf6" strokeWidth="1.0" opacity="0.72" />
          </svg>

        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center -mt-4 sm:-mt-6 lg:-mt-8">
          <HeroBadge className="mx-auto" contentClassName="text-sm">Benefits</HeroBadge>
          <div className="mx-auto mt-6 max-w-3xl sm:mt-7">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-6xl">Why Choose Us?</h2>
            <p className="mt-3 text-balance text-base text-muted-foreground/90 sm:text-lg">A closer look at the world’s smartest business automation platform. Averion unifies AI reasoning, workflow orchestration, and visual management into a single powerful system.</p>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-14 lg:mt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-7 -bottom-36 mx-auto max-w-6xl rounded-[48px] border border-white/5 bg-black/75 shadow-[0_0_120px_rgba(15,10,35,0.55)] backdrop-blur-[140px]"
          />
          <motion.div
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <Card
                  key={f.id}
                  className={cn(
                    "bento-card group relative overflow-hidden rounded-2xl border-zinc-700/40 bg-black shadow-2xl shadow-purple-500/15 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/60 hover:shadow-purple-400/25 hover:scale-[1.02]",
                    "before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:bg-[radial-gradient(120%_120%_at_50%_-10%,rgba(168,85,247,0.10)_0%,transparent_60%)] before:opacity-90 before:blur-2xl",
                    "after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100",
                    "after:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(168,85,247,0.12),transparent_45%)]"
                  )}
                >
                  <CardHeader className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-linear-to-b from-primary/25 to-primary/10 ring-1 ring-inset ring-white/10">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg sm:text-xl font-semibold tracking-tight text-white">
                          {f.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
                          {f.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </motion.div>
        </div>

        
      </div>
    </section>
  )
}
