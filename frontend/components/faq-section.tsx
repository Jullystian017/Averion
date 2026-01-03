import { HeroBadge } from "@/components/ui/hero-badge"

const faqs = [
  {
    question: "What is Averion and how does it help my business?",
    answer:
      "Averion automates your operational workflows end-to-end, from internal approvals to customer support. It connects the tools you already use and removes repetitive, manual steps so your team can focus on higher-value work.",
  },
  {
    question: "Is Averion suitable for small teams or only large enterprises?",
    answer:
      "Averion is built for both. Smaller teams can start with a few automated flows and scale as they grow, while larger organizations can orchestrate complex, multi-team processes across departments.",
  },
  {
    question: "How long does it take to get up and running?",
    answer:
      "Most teams ship their first live automations within days, not months. Our opinionated templates and integrations help you move fast without needing a long implementation project.",
  },
  {
    question: "Do I need engineering resources to maintain the automations?",
    answer:
      "You don’t need to be a developer to manage Averion day-to-day. Ops, CX, and growth teams can build and adjust flows with a visual-first experience, while engineers can still plug in custom logic where needed.",
  },
  {
    question: "Is there a trial period or a way to start small?",
    answer:
      "Yes. You can start on the Starter plan and upgrade only when you need more volume, teams, or advanced features. This lets you validate impact before committing to a bigger rollout.",
  },
]

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden border-t border-white/5 bg-linear-to-b from-background via-background/98 to-background/96 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <HeroBadge className="mx-auto" contentClassName="text-sm">
            FAQ
          </HeroBadge>
          <div className="mx-auto mt-6 max-w-3xl sm:mt-7">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-balance text-base text-muted-foreground/90 sm:text-lg">
              Answers to common questions about how Averion fits into your stack and how teams get value from it.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-4 sm:mt-12">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:px-5 sm:py-4 backdrop-blur-md transition-colors hover:border-white/20"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-left text-sm font-medium text-foreground sm:text-base">
                  {faq.question}
                </span>
                <span className="shrink-0 text-lg font-semibold text-muted-foreground group-open:hidden">
                  +
                </span>
                <span className="hidden shrink-0 text-lg font-semibold text-muted-foreground group-open:inline">
                  -
                </span>
              </summary>
              <div className="mt-3 text-sm leading-relaxed text-muted-foreground/90 sm:text-[0.95rem]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
