"use client"

import React from "react"
import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import { HeroBadge } from "@/components/ui/hero-badge"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

const testimonialsRow1 = [
  {
    id: "t1",
    name: "Rudi",
    role: "COO logistics startup",
    company: "LogiFlow",
    companyLogo: "/brands/openai.png",
    avatar: "/avatars/rudi.png",
    quote:
      "Averion turned our scattered SOPs into one coherent automation system. Ticket resolution time dropped by 42% without adding headcount.",
  },
  {
    id: "t2",
    name: "Sarah",
    role: "Head of RevOps",
    company: "Nimbus SaaS",
    companyLogo: "https://assets.themuse.com/uploaded/companies/11832/small_logo.png",
    avatar: "/avatars/sarah.png",
    quote:
      "We built a full sales follow-up engine in days instead of quarters. Our team now focuses on strategy, not manual workflows.",
  },
  {
    id: "t3",
    name: "Andi",
    role: "CTO fintech",
    company: "Paylynx",
    companyLogo: "https://static.vecteezy.com/system/resources/previews/055/210/885/non_2x/meta-logo-free-download-meta-logo-free-png.png",
    avatar: "/avatars/andi.png",
    quote:
      "Averion's integration layer finally brought all our data into sync. Operational errors dropped dramatically, and audits became far easier.",
  },
]

const testimonialsRow2 = [
  {
    id: "t4",
    name: "Lina",
    role: "Customer Experience Lead",
    company: "Helio Retail",
    companyLogo: "/oracle-logo.png",
    avatar: "/avatars/lina.png",
    quote:
      "Averion's autonomous support now handles over 60% of incoming tickets automatically, without sacrificing our brand tone or personalization.",
  },
  {
    id: "t5",
    name: "Prakash",
    role: "VP Operations",
    company: "Nova Commerce",
    companyLogo: "/brands/google.png",
    avatar: "/avatars/prakash.png",
    quote:
      "Approval flows and order routing that used to be fully manual now run on their own. We can scale without adding a huge operations team.",
  },
  {
    id: "t6",
    name: "Maya",
    role: "Founder",
    company: "Studio Kinetik",
    companyLogo: "/brands/microsoft.png",
    avatar: "/avatars/maya.png",
    quote:
      "As a small team, Averion is our leverage. From prospecting to follow-up, everything is orchestrated automatically.",
  },
]

const testimonials = [...testimonialsRow1, ...testimonialsRow2]

const marqueeVariants: Variants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 70,
      ease: "linear",
    },
  },
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden border-t border-white/5 bg-linear-to-b from-background via-background/95 to-background/98 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-16 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.85)_0,rgba(129,140,248,0.6)_32%,transparent_80%)] blur-xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <HeroBadge className="mx-auto" contentClassName="text-sm">
            Testimonials
          </HeroBadge>
          <div className="mx-auto mt-6 max-w-3xl sm:mt-7">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-6xl">
              Hear from our customers
              <br className="hidden sm:inline" /> & their success stories
            </h2>
            <p className="mt-3 text-balance text-base text-muted-foreground/90 sm:text-lg">
              Real teams using Averion to streamline operations, reduce manual work, and ship better customer experiences
              faster.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-14 lg:mt-16 relative">
        {/* Diagonal purple stripe behind the testimonial cards */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[20%] right-[20%] top-[60%] h-12 -translate-y-1/2 transform -rotate-30 bg-[linear-gradient(110deg,rgba(76,29,149,0)_0%,rgba(124,58,237,0.85)_35%,rgba(147,51,234,0.9)_70%,rgba(168,85,247,0.78)_88%,transparent_100%)] opacity-60 blur-2xl"
        />

        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background via-background/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background via-background/80 to-transparent" />

            <motion.div
              variants={marqueeVariants}
              animate="animate"
              className="relative flex min-w-max gap-4"
            >
              {[...testimonials, ...testimonials].map((t, index) => (
                <TestimonialCard key={`row-${t.id}-${index}`} testimonial={t} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  companyLogo: string
  avatar: string
  quote: string
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="group relative flex min-w-[260px] max-w-[320px] min-h-[340px] sm:min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-white/5 px-9 py-9 shadow-[0_18px_45px_rgba(15,23,42,0.75)] backdrop-blur-lg">
      <CardHeader className="border-b-0 px-0 pt-0 pb-4">
        <div className="flex flex-col gap-6 text-left">
          <div className="flex items-center">
            <Image
              src={testimonial.companyLogo}
              alt={`${testimonial.company} logo`}
              width={96}
              height={32}
              className="h-8 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-[15px] leading-relaxed text-white/90">
            {testimonial.quote}
          </p>
        </div>
      </CardHeader>
      <CardContent className="px-0 pb-0 pt-0">
        <div className="mt-8 flex items-center gap-3 text-left">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/15 bg-zinc-900/80">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white/90">{testimonial.name}</span>
            <span className="text-[12px] text-white/60">{testimonial.role}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
