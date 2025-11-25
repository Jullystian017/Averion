"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { GetStartedButton } from "@/components/ui/get-started-button"
import { cn } from "@/lib/utils"

type MenuItem = {
  name: string
  href: string
}

const defaultMenuItems: MenuItem[] = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "#docs" },
  { name: "Contact", href: "#contact" },
]

export type HeroNavbarProps = {
  menuItems?: MenuItem[]
}

export function HeroNavbar({ menuItems = defaultMenuItems }: HeroNavbarProps) {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const headerRef = React.useRef<HTMLElement | null>(null)
  const [headerHeight, setHeaderHeight] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    const updateHeaderHeight = () => {
      setHeaderHeight(headerRef.current?.offsetHeight ?? 0)
    }

    updateHeaderHeight()
    window.addEventListener("resize", updateHeaderHeight)
    window.addEventListener("scroll", updateHeaderHeight)

    return () => {
      window.removeEventListener("resize", updateHeaderHeight)
      window.removeEventListener("scroll", updateHeaderHeight)
    }
  }, [])

  React.useEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight ?? 0)
  }, [menuState, isScrolled])

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-30 border-b border-transparent bg-background/45 backdrop-blur-md transition-all duration-300",
        isScrolled && "border-white/10 bg-background/85 shadow-lg shadow-primary/5 backdrop-blur-xl",
      )}
    >
      <nav data-state={menuState && "active"} className="group">
        <div className="mx-auto w-full max-w-6xl px-5 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:hidden">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center gap-0"
            >
              <Image
                src="/averion-icon.png"
                alt="Averion Icon"
                width={52}
                height={52}
                className="h-14 w-14"
                priority
              />
              <span className="text-xl font-medium text-white -ml-1">
                Averion
              </span>
            </Link>

            <button
              onClick={() => setMenuState((open) => !open)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              aria-expanded={menuState}
              aria-controls="mobile-menu"
              className={cn(
                "relative z-20 flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden",
                menuState && "text-primary"
              )}
            >
              <span className="sr-only">{menuState ? "Close menu" : "Open menu"}</span>
              <span className="relative h-3.5 w-6">
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300 ease-out",
                    menuState && "top-1/2 -translate-y-1/2 rotate-45"
                  )}
                />
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 bottom-0 h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300 ease-out",
                    menuState && "bottom-1/2 translate-y-1/2 -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>

          <div className="relative hidden items-center lg:flex">
            <Link
              href="/"
              aria-label="home"
              className="flex items-center gap-0"
            >
              <Image
                src="/averion-icon.png"
                alt="Averion Icon"
                width={52}
                height={52}
                className="h-14 w-14"
                priority
              />
              <span className="text-2xl font-medium text-white -ml-1">
                Averion
              </span>
            </Link>

            <div className="absolute left-1/2 flex -translate-x-1/2 items-center">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="block rounded-md px-2 py-1 text-muted-foreground transition-colors duration-200 hover:text-white hover:bg-white/5 hover:[text-shadow:0_0_12px_rgba(139,92,246,0.6)]">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <GetStartedButton
                href="#"
                label="Get Started"
                variant="purpleGlass"
                className="rounded-[inherit] px-4 py-2 text-sm font-semibold"
              />
            </div>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={cn(
            "pointer-events-none fixed inset-x-0 hidden bg-background/95 px-5 pb-10 shadow-lg shadow-primary/10 backdrop-blur-xl transition-opacity duration-300 ease-out lg:hidden z-20",
            "opacity-0",
            "group-data-[state=active]:pointer-events-auto group-data-[state=active]:block group-data-[state=active]:opacity-100"
          )}
          style={{
            top: headerHeight || undefined,
            minHeight: headerHeight ? `calc(100vh - ${headerHeight}px)` : undefined,
          }}
        >
          <div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/15 bg-background/95 px-5 py-6 shadow-lg shadow-primary/10 backdrop-blur-xl">
            <ul className="space-y-6 text-base">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-1 text-muted-foreground transition-colors duration-200 hover:text-white hover:bg-white/5 hover:[text-shadow:0_0_12px_rgba(139,92,246,0.6)]"
                    onClick={() => setMenuState(false)}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-1.5">
              <GetStartedButton
                href="#"
                label="Get Started"
                variant="purpleGlass"
                className="w_[132px] rounded-[inherit] px-3.5 py-2 text-sm font-semibold justify-center"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export { defaultMenuItems as heroNavbarMenuItems }
