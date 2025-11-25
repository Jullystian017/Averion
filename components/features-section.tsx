'use client'

import { HeroBadge } from "@/components/ui/hero-badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Globe } from "lucide-react"

export function FeaturesSection() {
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
    <section
      id="features"
      className="relative overflow-hidden border-t border-white/5 bg-gradient-to-b from-background via-background/98 to-background/96 py-24 sm:py-28"
    >
      {/* Purple glow effects - extra soft */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.12)_0,_transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-96 w-96 bg-purple-500/15 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-80 w-80 bg-violet-500/12 blur-[100px] rounded-full" style={{ animationDelay: '1s' }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-purple-600/12 blur-[150px] rounded-full" style={{ animationDelay: '2s' }} />
      <div className="pointer-events-none absolute left-1/3 bottom-1/3 -z-10 h-72 w-72 bg-fuchsia-500/10 blur-[90px] rounded-full" style={{ animationDelay: '1.5s' }} />
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:gap-16">
        <div className="text-center">
          <HeroBadge
            className="mx-auto"
            contentClassName="text-sm"
          >
            Features
          </HeroBadge>
          <div className="mt-6 max-w-3xl sm:mt-7 mx-auto">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-6xl">
             Transform Ideas Into Intelligent Systems
            </h2>
            <p className="mt-4 max-w-2xl text-balance text-base text-muted-foreground/90 sm:text-lg text-center mx-auto">
             From task automation to predictive insight, Averion’s AI suite drives efficiency, innovation, and enterprise-grade scalability.
            </p>
          </div>
        </div>

        <div className="mx-auto grid w-full gap-3 sm:grid-cols-5" onMouseMove={handleMouseMove}>
          <Card className="bento-card group relative overflow-hidden rounded-2xl border-zinc-700/40 bg-gradient-to-br from-zinc-950/90 via-zinc-900/85 to-zinc-950/80 shadow-2xl shadow-purple-500/10 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/60 hover:shadow-purple-400/20 hover:scale-[1.02] sm:col-span-3 before:absolute before:inset-0 before:-z-10 before:bg-purple-500/3 before:blur-lg after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100 after:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(168,85,247,0.08),transparent_45%)]">
            <CardHeader>
              <div className="md:p-6">
                <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Advanced tracking system</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed">Quick AI lives a single hotkey away - ready to quickly appear as a floating window above your other apps.</p>
              </div>
            </CardHeader>

            <div className="relative h-fit pl-6 md:pl-12">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]"></div>

              <div className="bg-zinc-950/70 overflow-hidden rounded-tl-lg border-l border-t border-zinc-700/40 pl-2 pt-2 shadow-lg shadow-purple-500/5 dark:bg-zinc-950/70">
                <img
                  src="https://tailark.com/_next/image?url=%2Fmail2.png&w=3840&q=75"
                  className="hidden dark:block"
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <img
                  src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                  className="shadow dark:hidden"
                  alt="payments illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </Card>

          <Card className="bento-card group relative overflow-hidden rounded-2xl border-zinc-700/40 bg-gradient-to-br from-zinc-950/90 via-zinc-900/85 to-zinc-950/80 shadow-2xl shadow-purple-500/10 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/60 hover:shadow-purple-400/20 hover:scale-[1.02] sm:col-span-2 before:absolute before:inset-0 before:-z-10 before:bg-purple-500/3 before:blur-lg after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100 after:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(168,85,247,0.08),transparent_45%)]">
            <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent sm:text-2xl md:p-6">Advanced UX, Instantly locate all your assets.</p>

            <CardContent className="mt-auto h-fit">
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                <div className="aspect-[76/59] overflow-hidden rounded-r-lg border border-zinc-700/40 shadow-lg shadow-purple-500/5">
                  <img
                    src="https://tailark.com/_next/image?url=%2Forigin-cal-dark.png&w=3840&q=75"
                    className="hidden dark:block"
                    alt="payments illustration dark"
                    width={1207}
                    height={929}
                  />
                  <img
                    src="https://tailark.com/_next/image?url=%2Forigin-cal.png&w=3840&q=75"
                    className="shadow dark:hidden"
                    alt="payments illustration light"
                    width={1207}
                    height={929}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bento-card group relative p-6 rounded-2xl border-zinc-700/40 bg-gradient-to-br from-zinc-950/90 via-zinc-900/85 to-zinc-950/80 shadow-2xl shadow-purple-500/10 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/60 hover:shadow-purple-400/20 hover:scale-[1.02] sm:col-span-2 md:p-12 before:absolute before:inset-0 before:-z-10 before:bg-purple-500/3 before:blur-lg after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100 after:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(168,85,247,0.08),transparent_45%)]">
            <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent sm:text-2xl">Advanced UX, Instantly locate all your assets.</p>

            <div className="flex justify-center gap-6">
              <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border border-zinc-700/40 p-3 shadow-lg shadow-purple-500/10 ring transition-all hover:border-purple-500/40 hover:shadow-purple-500/20 dark:shadow-white/5 dark:ring-black">
                <span className="absolute right-2 top-1 block text-sm text-purple-400">fn</span>
                <Globe className="mt-auto size-4 text-purple-400" />
              </div>
              <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border border-zinc-700/40 p-3 shadow-lg shadow-purple-500/10 ring transition-all hover:border-purple-500/40 hover:shadow-purple-500/20 dark:shadow-white/5 dark:ring-black">
                <span className="text-purple-400 font-semibold">K</span>
              </div>
            </div>
          </Card>

          <Card className="bento-card group relative rounded-2xl border-zinc-700/40 bg-gradient-to-br from-zinc-950/90 via-zinc-900/85 to-zinc-950/80 shadow-2xl shadow-purple-500/10 backdrop-blur-sm transition-all duration-500 hover:border-purple-400/60 hover:shadow-purple-400/20 hover:scale-[1.02] sm:col-span-3 before:absolute before:inset-0 before:-z-10 before:bg-purple-500/3 before:blur-lg after:absolute after:inset-0 after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100 after:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(168,85,247,0.08),transparent_45%)]">
            <CardHeader className="p-6 md:p-12">
              <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Advanced tracking system</p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm leading-relaxed">Quick AI lives a single hotkey away apps.</p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                <div className="rounded-lg aspect-square border border-dashed border-zinc-700/40"></div>
                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border border-zinc-700/40 p-4 shadow-md shadow-purple-500/5 transition-all hover:border-purple-500/40 hover:shadow-purple-500/10">
                  <img
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/linear.svg"
                    alt="Linear logo"
                    width="32"
                    height="32"
                  />
                </div>
                <div className="rounded-lg aspect-square border border-dashed border-zinc-700/40"></div>
                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border border-zinc-700/40 p-4 shadow-md shadow-purple-500/5 transition-all hover:border-purple-500/40 hover:shadow-purple-500/10">
                  <img
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/netlify.svg"
                    alt="Netlify logo"
                    width="32"
                    height="32"
                  />
                </div>
                <div className="rounded-lg aspect-square border border-dashed border-zinc-700/40"></div>
                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border border-zinc-700/40 p-4 shadow-md shadow-purple-500/5 transition-all hover:border-purple-500/40 hover:shadow-purple-500/10">
                  <img
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/github.svg"
                    alt="github logo"
                    width="32"
                    height="32"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
