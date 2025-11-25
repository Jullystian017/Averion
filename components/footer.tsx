"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black pb-64 pt-20 sm:pb-80 sm:pt-24">
      {/* Subtle background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.9)_0%,rgba(0,0,0,1)_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,24,27,0.6)_0%,transparent_60%)] opacity-60"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Top: brand + nav columns */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand block */}
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src="/averion-icon.png"
                alt="Averion Icon"
                width={44}
                height={44}
                className="h-14 w-14 object-contain"
              />
              <span className="text-2xl font-semibold tracking-tight text-white">Averion</span>
            </div>

            <p className="mt-1 text-sm leading-relaxed text-muted-foreground/85">
              AI-powered automation for modern businesses. Build workflows instantly from a single prompt.
            </p>

            <p className="text-xs text-muted-foreground/60">
              {new Date().getFullYear()} Averion Inc. All rights reserved.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid flex-1 gap-10 text-left text-sm sm:grid-cols-3">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Product</p>
              <ul className="space-y-2.5">
                <li><a href="#features" className="text-muted-foreground/80 transition-colors hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground/80 transition-colors hover:text-white">Pricing</a></li>
                <li><a href="#use-cases" className="text-muted-foreground/80 transition-colors hover:text-white">Use Cases</a></li>
                <li><a href="#integrations" className="text-muted-foreground/80 transition-colors hover:text-white">Integrations</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Legal</p>
              <ul className="space-y-2.5">
                <li><a href="#terms" className="text-muted-foreground/80 transition-colors hover:text-white">Terms of Service</a></li>
                <li><a href="#privacy" className="text-muted-foreground/80 transition-colors hover:text-white">Privacy Policy</a></li>
                <li><a href="#security" className="text-muted-foreground/80 transition-colors hover:text-white">Security</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Others</p>
              <ul className="space-y-2.5">
                <li><a href="#status" className="text-muted-foreground/80 transition-colors hover:text-white">Status</a></li>
                <li><a href="#changelog" className="text-muted-foreground/80 transition-colors hover:text-white">Changelog</a></li>
                <li><a href="#docs" className="text-muted-foreground/80 transition-colors hover:text-white">Docs</a></li>
                <li><a href="#404" className="text-muted-foreground/80 transition-colors hover:text-white">404</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle: social row */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-sm backdrop-blur-md">
          <div className="flex flex-col divide-y divide-white/10 sm:flex-row sm:divide-y-0 sm:divide-x">
            <a href="#" className="flex flex-1 items-center gap-3 px-6 py-4 text-muted-foreground/80 transition-all hover:bg-white/[0.05] hover:text-white">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                  <path d="M18.9 4.5h-2.4l-3 3.6-3-3.6H8.1L11.9 9 7 14.9h2.4l3.1-3.7 3.1 3.7h2.4L13.7 9l4.8-4.5z" />
                </svg>
              </span>
              <span className="font-medium">Twitter</span>
            </a>
            <a href="#" className="flex flex-1 items-center gap-3 px-6 py-4 text-muted-foreground/80 transition-all hover:bg-white/[0.05] hover:text-white">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                  <path d="M4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V7z" />
                  <path d="M11 10.5v5l4-2.5-4-2.5z" className="fill-background" />
                </svg>
              </span>
              <span className="font-medium">YouTube</span>
            </a>
            <a href="#" className="flex flex-1 items-center gap-3 px-6 py-4 text-muted-foreground/80 transition-all hover:bg-white/[0.05] hover:text-white">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-current">
                  <path d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5zm3.4 6.3h2.1v7.4H8.4v-7.4zm1-1.8a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zM13.1 10.3h2v1h.1c.3-.6 1.1-1.3 2.3-1.3 2.4 0 2.9 1.6 2.9 3.6v4H18v-3.6c0-.9-.1-2-1.3-2-1.3 0-1.5 1-1.5 2.1v3.5h-2.1v-7.3z" />
                </svg>
              </span>
              <span className="font-medium">LinkedIn</span>
            </a>
            <a href="#" className="flex flex-1 items-center gap-3 px-6 py-4 text-muted-foreground/80 transition-all hover:bg-white/[0.05] hover:text-white">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current">
                  <rect x="4" y="4" width="16" height="16" rx="4" ry="4" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="3.4" strokeWidth="1.6" />
                  <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom giant wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-32 select-none text-center text-[12rem] font-bold tracking-tighter text-transparent sm:-bottom-36 sm:text-[14rem] md:text-[16rem] lg:text-[22rem]"
      >
        <div className="relative inline-flex items-center justify-center">
          {/* Shadow glow under wordmark */}
          <div
            className="pointer-events-none absolute inset-x-8 bottom-[-5rem] h-28 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.95)_0%,rgba(0,0,0,0.98)_40%,transparent_80%)] opacity-90 blur-3xl"
          />

          {/* Gradient wordmark text */}
          <span className="block bg-[linear-gradient(to_bottom,rgba(248,250,252,0.95)_0%,rgba(233,213,255,0.9)_18%,rgba(196,181,253,0.75)_32%,rgba(129,140,248,0.45)_50%,rgba(148,163,184,0.22)_70%,rgba(15,23,42,0.1)_100%)] bg-clip-text">
            Averion
          </span>

          {/* Black overlay that hides lower part of letters */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.75)_40%,rgba(0,0,0,0.98)_100%)]"
          />

        </div>
      </div>

      {/* Footer bottom shadow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_55%,rgba(0,0,0,0.98)_100%)]"
      />
    </footer>
  )
}
