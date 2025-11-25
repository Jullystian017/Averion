"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

import { Card, CardContent, CardHeader } from "./ui/card"
import { TimelineContent } from "./ui/timeline-animation"
import { VerticalCutReveal } from "./ui/vertical-cut-reveal"
import { HeroBadge } from "@/components/ui/hero-badge"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    description:
      "Great for small businesses and startups looking to get started with AI",
    price: 12,
    yearlyPrice: 99,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    includes: [
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
    ],
  },
  {
    name: "Business",
    description:
      "Best value for growing businesses that need more advanced features",
    price: 48,
    yearlyPrice: 399,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced plan with enhanced security and unlimited access for large teams",
    price: 96,
    yearlyPrice: 899,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    includes: [
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
    ],
  },
]

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0")

  const handleSwitch = (value: string) => {
    setSelected(value)
    onSwitch(value)
  }

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 shadow-sm shadow-purple-500 border-purple-500 bg-linear-to-t from-purple-500 to-purple-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 shadow-sm shadow-purple-500 border-purple-500 bg-linear-to-t from-purple-500 to-purple-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Yearly</span>
        </button>
      </div>
    </div>
  )
}

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)
  const pricingRef = useRef<HTMLDivElement | null>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  }

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1)

  return (
    <section
      id="pricing"
      className="relative min-h-screen mx-auto overflow-x-hidden bg-linear-to-b from-background via-background/98 to-background/96"
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="pointer-events-none absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]"
      >
        <div className="absolute inset-x-0 bottom-0 top-16 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]" />
      </TimelineContent>

      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="pointer-events-none absolute left-0 top-[-114px] z-0 flex h-[113.625vh] w-full flex-none flex-col flex-nowrap items-start justify-start gap-2.5 overflow-hidden p-0"
      >
        <div className="relative h-full w-full">
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] rounded-full"
            style={{
              border: "200px solid rgba(124,58,237,0.55)",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
          />
          <div
            className="absolute left-[-568px] right-[-568px] top-0 h-[2053px] rounded-full"
            style={{
              border: "200px solid rgba(124,58,237,0.55)",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
            }}
          />
        </div>
      </TimelineContent>

      <article className="relative z-10 mx-auto mb-6 max-w-3xl space-y-2 pt-32 text-center">
        <HeroBadge className="mx-auto" contentClassName="text-sm">
          Pricing
        </HeroBadge>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-6xl">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Plans that works best for Your Business
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="mt-3 text-balance text-base text-muted-foreground/90 sm:text-lg"
        >
          From small teams to large enterprises, AION offers flexible plans designed to replace manual work and reduce operational cost.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #a855f7 0%, transparent 70%)",
          opacity: 0.4,
          mixBlendMode: "screen",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-4 py-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={cn(
                "relative text-white",
                plan.popular
                  ? "border border-purple-500/60 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0px_-10px_260px_0px_rgba(124,58,237,0.55)] z-20"
                  : "border border-neutral-800 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 z-10",
              )}
            >
              <CardHeader className="text-left">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-3xl">{plan.name}</h3>
                  {plan.popular && (
                    <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-purple-200">
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold">
                    ${isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="ml-1 text-gray-300">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                <p className="mb-4 text-sm text-gray-300">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  className={cn(
                    "group/gsb mb-6 w-full rounded-xl p-4 text-xl transition-all duration-300",
                    plan.popular
                      ? "bg-linear-to-t from-purple-500 to-purple-600 border border-purple-500 text-white shadow-md shadow-purple-700 hover:shadow-[0_0_32px_rgba(148,89,242,0.6)] hover:scale-[1.03] active:scale-[0.98] hover:border-white/40"
                      : plan.buttonVariant === "outline"
                        ? "bg-gradient-to-t from-neutral-950 to-neutral-600 border border-neutral-800 text-white shadow-md shadow-neutral-900 hover:shadow-[0_0_28px_rgba(148,163,184,0.35)] hover:scale-[1.03] active:scale-[0.98] hover:border-white/30"
                        : "",
                  )}
                >
                  <span className="relative inline-block overflow-hidden text-nowrap">
                    <span className="block transition-transform duration-300 group-hover/gsb:delay-100 group-hover/gsb:-translate-y-full">
                      {plan.buttonText}
                    </span>
                    <span className="block absolute left-0 top-full transition-transform duration-300 group-hover/gsb:delay-100 group-hover/gsb:-translate-y-full">
                      {`${plan.buttonText} →`}
                    </span>
                  </span>
                </button>

                <div className="space-y-3 border-t border-neutral-700 pt-4">
                  <h4 className="mb-3 text-base font-medium">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <span className="grid h-2.5 w-2.5 place-content-center rounded-full bg-neutral-500" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </section>
  )
}
