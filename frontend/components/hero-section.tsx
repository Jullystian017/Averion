"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Sparkles } from "lucide-react"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { LearnMoreButton } from "@/components/ui/learn-more-button"
import { AnimatedGroup, type AnimatedGroupVariants } from "@/components/ui/animated-group"
import { ContainerScroll } from "@/components/ui/container-scroll"
import { HeroNavbar } from "./hero-navbar"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"
import { HeroBadge } from "@/components/ui/hero-badge"

const brandLogos = [
  { name: "OpenAI", src: "/brands/openai.png" },
  { name: "Scale", src: "https://assets.themuse.com/uploaded/companies/11832/small_logo.png" },
  { name: "Meta", src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png", width: 180, height: 52, sizeClass: "h-14" },
  { name: "Oracle", src: "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png", width: 180, height: 52, sizeClass: "h-14" },
  { name: "Google", src: "/brands/google.png" },
  { name: "Microsoft", src: "/brands/microsoft.png" },
  { name: "Amazon", src: "https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png", width: 180, height: 52, sizeClass: "h-14" },
]

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.1,
      },
    },
  },
} satisfies NonNullable<AnimatedGroupVariants>

const staggeredContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.35,
    },
  },
} satisfies NonNullable<AnimatedGroupVariants>["container"]

type RippleConfig = {
  rows: number
  cols: number
  cellSize: number
}

const getRippleConfig = (width: number): RippleConfig => {
  if (width <= 640) {
    return { rows: 6, cols: 12, cellSize: 58 }
  }

  if (width <= 1024) {
    return { rows: 7, cols: 14, cellSize: 62 }
  }

  return { rows: 8, cols: 16, cellSize: 66 }
}

export function HeroSection() {
  const [rippleConfig, setRippleConfig] = React.useState<RippleConfig>(() => getRippleConfig(1440))
  const isMounted = React.useRef(false)

  const generateGlowCells = React.useCallback(() => {
    if (!isMounted.current) {
      return []
    }

    const selected: { row: number; col: number }[] = []

    const { rows: rippleRows, cols: rippleCols } = rippleConfig

    const exclusionPaddingRows = Math.max(1, Math.floor(rippleRows * 0.08))
    const exclusionPaddingCols = Math.max(1, Math.floor(rippleCols * 0.08))

    const exclusionZone = {
      rowStart: Math.max(0, Math.floor(rippleRows * 0.28) - exclusionPaddingRows),
      rowEnd: Math.min(rippleRows - 1, Math.floor(rippleRows * 0.68) + exclusionPaddingRows),
      colStart: Math.max(0, Math.floor(rippleCols * 0.3) - exclusionPaddingCols),
      colEnd: Math.min(rippleCols - 1, Math.floor(rippleCols * 0.7) + exclusionPaddingCols),
    }

    const availableCells: Array<{ row: number; col: number }> = []

    for (let row = 0; row < rippleRows; row++) {
      for (let col = 0; col < rippleCols; col++) {
        const inExclusionZone =
          row >= exclusionZone.rowStart &&
          row <= exclusionZone.rowEnd &&
          col >= exclusionZone.colStart &&
          col <= exclusionZone.colEnd

        if (!inExclusionZone) {
          availableCells.push({ row, col })
        }
      }
    }

    const target = Math.min(4, availableCells.length)
    const usedIndices = new Set<number>()

    while (selected.length < target && usedIndices.size < availableCells.length) {
      const index = Math.floor(Math.random() * availableCells.length)
      if (usedIndices.has(index)) continue

      usedIndices.add(index)
      selected.push(availableCells[index])
    }

    return selected
  }, [rippleConfig])

  const [glowCells, setGlowCells] = React.useState<{ row: number; col: number }[]>([])

  React.useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  React.useEffect(() => {
    if (!isMounted.current) return

    setGlowCells(generateGlowCells())
  }, [generateGlowCells])

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setGlowCells(generateGlowCells())
    }, 16000)

    return () => window.clearInterval(interval)
  }, [generateGlowCells])

  React.useEffect(() => {
    const updateConfig = () => {
      const next = getRippleConfig(window.innerWidth)
      setRippleConfig((prev) => {
        if (prev.rows === next.rows && prev.cols === next.cols && prev.cellSize === next.cellSize) {
          return prev
        }

        return next
      })
    }

    updateConfig()
    window.addEventListener("resize", updateConfig)
    window.addEventListener("orientationchange", updateConfig)

    return () => {
      window.removeEventListener("resize", updateConfig)
      window.removeEventListener("orientationchange", updateConfig)
    }
  }, [])

  const heroGlowPattern = React.useCallback(
    (row: number, col: number) => {
      return glowCells.some((cell) => cell.row === row && cell.col === col)
    },
    [glowCells],
  )

  return (
    <>
      <HeroNavbar />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="z-2 absolute inset-0 pointer-events-none isolate opacity-75 contain-strict hidden lg:block"
        >
          <div className="w-140 h-300 absolute -left-40 -top-24 -rotate-35 rounded-full bg-[radial-gradient(70%_68%_at_62%_38%,hsla(280,100%,65%,.35)_0,hsla(270,95%,60%,.18)_45%,transparent_80%)] [translate:12%_-55%] blur-2xl" />
          <div className="h-260 absolute -left-24 -top-12 -rotate-20 w-48 rounded-full bg-[radial-gradient(60%_60%_at_55%_45%,hsla(275,100%,68%,.28)_0,hsla(265,90%,58%,.12)_65%,transparent_95%)] [translate:22%_-35%] blur-xl" />
          <div className="w-120 h-260 absolute -right-28 -top-12 rotate-18 rounded-full bg-[radial-gradient(70%_68%_at_38%_32%,hsla(285,100%,68%,.38)_0,hsla(275,95%,62%,.20)_45%,transparent_80%)] [translate:-18%_-50%] blur-2xl" />
          <div className="h-240 absolute -right-16 -top-8 w-48 rotate-10 rounded-full bg-[radial-gradient(58%_58%_at_45%_45%,hsla(280,100%,70%,.30)_0,hsla(270,90%,60%,.14)_65%,transparent_95%)] [translate:-12%_-38%] blur-xl" />
        </div>

        <section>
          <div className="relative pt-14 md:pt-22">
            {/* Animated Glow Effects */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
            >
              {/* Center glow orb */}
              <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.4)_0%,rgba(99,102,241,0.25)_35%,transparent_70%)] blur-3xl animate-pulse" 
                style={{ animationDuration: '4s' }}
              />
              
              {/* Left accent glow */}
              <div className="absolute left-0 top-1/3 -translate-x-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.35)_0%,rgba(99,102,241,0.2)_40%,transparent_75%)] blur-2xl animate-pulse"
                style={{ animationDuration: '5s', animationDelay: '1s' }}
              />
              
              {/* Right accent glow */}
              <div className="absolute right-0 top-1/2 translate-x-1/4 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.3)_0%,rgba(139,92,246,0.18)_45%,transparent_80%)] blur-2xl animate-pulse"
                style={{ animationDuration: '6s', animationDelay: '2s' }}
              />
              
              {/* Subtle top glow */}
              <div className="absolute left-1/3 top-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25)_0%,rgba(79,70,229,0.15)_50%,transparent_85%)] blur-3xl animate-pulse"
                style={{ animationDuration: '7s', animationDelay: '0.5s' }}
              />
            </div>
            <BackgroundRippleEffect
              interactive={false}
              rows={rippleConfig.rows}
              cols={rippleConfig.cols}
              cellSize={rippleConfig.cellSize}
              className="pointer-events-none absolute inset-y-0 left-1/2 right-auto -z-5 w-screen -translate-x-1/2 opacity-95 mix-blend-lighten"
              borderColor="rgba(168,85,247,0.55)"
              fillColor="rgba(139,92,246,0.34)"
              shadowColor="rgba(99,102,241,0.45)"
              glowPattern={heroGlowPattern}
              glowDurationRange={[3200, 6800]}
              stretchToViewport
            />

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />
            <div className="mx-auto max-w-7xl px-6">
              <ContainerScroll
                className="pt-10 sm:pt-14 lg:pt-18"
                titleComponent={
                  <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                    <AnimatedGroup variants={transitionVariants}>
                      <HeroBadge
                        icon={<Sparkles className="size-4 text-primary" />}
                        className="mx-auto"
                      >
                        Efficiency powered by Averion.
                      </HeroBadge>

                      <h1 className="mt-3 max-w-4xl mx-auto text-balance text-4xl tracking-tight md:mt-1 md:text-5xl lg:mt-5 lg:text-6xl xl:text-[4.7rem] font-semibold bg-linear-to-b from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent drop-shadow-sm">
                     Powering your business with automation.
                      </h1>
                      <p className="mx-auto mt-3 max-w-2xl text-balance text-base text-muted-foreground/90 leading-relaxed">
                        Averion blends automation and AI to create self-optimizing workflows that grow with you.
                        Smarter operations, seamless efficiency, and innovation.
                      </p>
                    </AnimatedGroup>

                    <AnimatedGroup
                      variants={{
                        container: staggeredContainerVariants,
                        ...transitionVariants,
                      }}
                      className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 sm:flex-nowrap sm:gap-4"
                    >
                      <GetStartedButton
                        label="Start Now"
                        variant="purpleGlass"
                        containerClassName="px-0"
                        className="rounded-[inherit] px-7 py-2 text-sm sm:px-9 sm:py-2.5 sm:text-base"
                      />
                      <LearnMoreButton />
                    </AnimatedGroup>
                  </div>
                }
                cardClassName="relative w-full max-w-7xl border-none bg-transparent p-0 shadow-none will-change-transform mt-8 sm:mt-14 md:mt-22"
                innerClassName="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-card/50 to-card/30 p-1.5 sm:p-3 shadow-2xl shadow-primary/10 backdrop-blur-md hover:shadow-primary/20 transition-all duration-500 before:absolute before:-inset-[3.5rem] before:-z-10 before:rounded-[3.5rem] before:bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.5)_0,_rgba(129,140,248,0.22)_45%,_transparent_78%)] before:opacity-90 before:blur-3xl before:content-[''] ring-1 ring-white/10"
              >
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <img
                  className="bg-linear-to-b from-card to-background aspect-video relative rounded-2xl w-full h-auto object-cover"
                  src="/App.png"
                  alt="Hero section showcase"
                  width="2700"
                  height="1440"
                />
              </ContainerScroll>
            </div>
          </div>
        </section>

        <section className="bg-background pb-4 pt-0 -mt-16 md:pb-8 md:pt-0 md:-mt-20 lg:-mt-24">
          <div className="relative mx-auto max-w-10xl overflow-hidden px-6">
            <p className="mb-2 pb-8 text-center text-base font-medium  tracking-wider text-muted-foreground/60">
              Trusted by Leading Companies
            </p>
            <div className="relative flex overflow-hidden">
              <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-16">
                {brandLogos.map((brand) => (
                  <Image
                    key={brand.name}
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    width={brand.width ?? 120}
                    height={brand.height ?? 36}
                    className={`${brand.sizeClass ?? "h-10"} w-auto object-contain opacity-80 transition-all duration-300 filter brightness-0 invert hover:opacity-100`}
                  />
                ))}
                <span className="w-4" aria-hidden />
              </div>
              <div aria-hidden className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-16">
                {brandLogos.map((brand) => (
                  <Image
                    key={`${brand.name}-duplicate`}
                    src={brand.src}
                    alt={`${brand.name} logo`}
                    width={brand.width ?? 120}
                    height={brand.height ?? 36}
                    className={`${brand.sizeClass ?? "h-10"} w-auto object-contain opacity-80 transition-all duration-300 filter brightness-0 invert hover:opacity-100`}
                  />
                ))}
                <span className="w-4" aria-hidden />
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </>
  )
}

