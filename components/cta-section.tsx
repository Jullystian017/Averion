"use client"

import { HeroBadge } from "@/components/ui/hero-badge"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { LearnMoreButton } from "@/components/ui/learn-more-button"

export function CTASection() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden border-t border-white/5 bg-[url('/bg-cta.avif')] bg-cover bg-center bg-no-repeat py-20 sm:py-24"
    >
      <div aria-hidden className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <div className="mx-auto mt-5 max-w-3xl sm:mt-6">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ship operations that run themselves
          </h2>
          <p className="mt-3 text-balance text-base text-white/85 sm:text-lg">
            Connect your tools, orchestrate workflows, and let Averion handle the busywork so your team can focus on what matters most.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:flex-nowrap sm:gap-4">
          
          <LearnMoreButton
          label="Start Now"
          />
        </div>

      </div>
    </section>
  )
}
