"use client"

import React from "react"
import Image from "next/image"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { HeroBadge } from "@/components/ui/hero-badge"
import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack"
import {
  Zap,
  Settings2,
  Sparkles,
  CheckCircle2,
  MessageCircle,
  GitMerge,
  Inbox,
  BarChart3,
  Workflow,
  ShoppingCart,
  Database,
  Bell,
  Search,
  Mail,
  RefreshCw,
  LineChart,
} from "lucide-react"

const useCases = [
  {
    id: "autonomous-support",
    icon: Zap,
    title: "Autonomous Customer Support",
    subtitle: "",
    description: "AION builds a fully automated customer service system from a single prompt.",
    items: [
      "Auto-responses",
      "Routing & escalation",
      "Multi-channel inbox",
      "Daily performance reports",
    ],
  },
  {
    id: "operations-automation",
    icon: Settings2,
    title: "Smart Operations Automation",
    subtitle: "",
    description:
      "AION creates end-to-end internal workflows without needing a large operations team.",
    items: [
      "Approval flows",
      "Order processing",
      "Data syncing",
      "Alerts & monitoring",
    ],
  },
  {
    id: "sales-engine",
    icon: Sparkles,
    title: "Automated Sales Engine",
    subtitle: "",
    description:
      "AION generates a complete sales engine that runs 24/7 and nurtures leads automatically.",
    items: [
      "Prospecting",
      "Cold outreach",
      "Follow-ups",
      "Lead scoring + CRM updates",
    ],
  },
]

const useCaseItemIcons: Record<string, React.ElementType[]> = {
  "autonomous-support": [MessageCircle, GitMerge, Inbox, BarChart3],
  "operations-automation": [Workflow, ShoppingCart, Database, Bell],
  "sales-engine": [Search, Mail, RefreshCw, LineChart],
}

export function UseCasesSection() {
  return (
    <section id="use-cases" className="relative overflow-hidden border-t border-white/5 bg-linear-to-b from-background via-background/98 to-background/96 py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.14)_0,transparent_68%)] blur-2xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <HeroBadge className="mx-auto" contentClassName="text-sm">Use Cases</HeroBadge>
          <div className="mx-auto mt-6 max-w-3xl sm:mt-7">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Built to cover your most important workflows
            </h2>
            <p className="mt-3 text-balance text-base text-muted-foreground/90 sm:text-lg">
              Three core scenarios where AION delivers immediate impact: customer support, internal operations,
              and always-on sales.
            </p>
          </div>
        </div>

        <div className="mt-14 md:mt-24">
          <ScrollStack
            className="bg-transparent [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            itemDistance={70}
            itemScale={0.035}
            itemStackDistance={26}
            stackPosition="22%"
            scaleEndPosition="10%"
            baseScale={0.9}
            useWindowScroll
          >
            {useCases.map((uc) => (
              <ScrollStackItem
                key={uc.id}
                itemClassName="bg-transparent p-0 h-auto my-10 rounded-3xl shadow-none border-none"
              >
                <Card className="group relative flex h-full min-h-[380px] sm:min-h-[460px] flex-col bg-black/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2.5 hover:border-purple-400/90 hover:shadow-purple-400/60">
                  <CardHeader
                    className={`flex h-full flex-col gap-10 md:flex-row md:items-stretch ${
                      uc.id === "operations-automation" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={
                        uc.id === "sales-engine" || uc.id === "autonomous-support" || uc.id === "operations-automation"
                          ? "flex flex-1 md:max-w-[46%]"
                          : "flex flex-1 flex-col items-center md:items-start md:max-w-[32%]"
                      }
                    >
                      {uc.id === "sales-engine" ? (
                        <div className="relative h-full w-full min-h-[260px] overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-lg shadow-purple-500/25">
                          <Image
                            src="/usecase3.avif"
                            alt="Automated Sales Engine use case"
                            fill
                            className="object-cover"
                            sizes="256px"
                          />
                        </div>
                      ) : uc.id === "autonomous-support" ? (
                        <div className="relative h-full w-full min-h-[260px] overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-lg shadow-purple-500/25">
                          <Image
                            src="/usecase1.avif"
                            alt="Autonomous Customer Support use case"
                            fill
                            className="object-cover"
                            sizes="256px"
                          />
                        </div>
                      ) : uc.id === "operations-automation" ? (
                        <div className="relative h-full w-full min-h-[260px] overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-lg shadow-purple-500/25">
                          <Image
                            src="/usecase2.avif"
                            alt="Smart Operations Automation use case"
                            fill
                            className="object-cover"
                            sizes="256px"
                          />
                        </div>
                      ) : (
                        <CardDecorator />
                      )}
                    </div>

                    <div
                      className={`mt-4 flex-1 space-y-6 md:mt-0 md:max-w-[54%] py-9 sm:py-11 lg:py-14 pr-9 sm:pr-11 lg:pr-14 text-left ${
                        uc.id === "operations-automation" ? "md:pl-8" : ""
                      }`}
                    >
                      <CardTitle className="text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-tight text-white">
                        {uc.title}
                      </CardTitle>

                      <p className="text-[16px] sm:text-[19px] leading-relaxed text-muted-foreground/90">
                        {uc.description}
                      </p>

                      <div className="space-y-3">
                        <ul className="space-y-2 text-sm sm:text-[17px] text-muted-foreground/90">
                          {uc.items.map((item, index) => {
                            const IconsForCase = useCaseItemIcons[uc.id] ?? []
                            const Icon = IconsForCase[index] ?? CheckCircle2

                            return (
                              <li key={item} className="flex gap-2">
                                <div className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-md border border-white/10 bg-white/5">
                                  <Icon className="h-3.5 w-3.5 text-primary" aria-hidden />
                                </div>
                                <span className="leading-snug">{item}</span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  )
}

const CardDecorator = () => (
  <div
    aria-hidden
    className="relative mx-auto h-28 w-28 overflow-hidden rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.45)_0,rgba(15,23,42,1)_60%)] shadow-lg shadow-purple-500/25"
  >
    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0)_0,rgba(15,23,42,0.85)_75%,rgba(15,23,42,1)_100%)]" />
  </div>
)
