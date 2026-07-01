'use client'

import { useState } from 'react'
import RequestAccessModal from '@/components/RequestAccessModal'

const TICKER_ITEMS = [
  'USD → SGD  ·  $128,402.00  ·  agent-7f3a  ·  0.004s',
  'EUR → JPY  ·  ¥19,204,118  ·  agent-2c91  ·  0.006s',
  'GBP → USD  ·  $84,560.12  ·  agent-51de  ·  0.003s',
  'USD → BRL  ·  R$302,880.44  ·  agent-9b02  ·  0.005s',
  'CHF → USD  ·  $61,244.90  ·  agent-1a7f  ·  0.004s',
  'USD → INR  ·  ₹8,214,003  ·  agent-e620  ·  0.007s',
]

const CAPABILITIES = [
  {
    id: 'finance',
    tag: 'FIN',
    title: 'Finance',
    body: 'Hold, convert, and settle balances across 40+ currencies from a single programmable account.',
  },
  {
    id: 'operations',
    tag: 'OPS',
    title: 'Operations',
    body: 'Set spend policies and approval rules once — every agent transaction is checked against them automatically.',
  },
  {
    id: 'data-analytics',
    tag: 'DATA',
    title: 'Data & Analytics',
    body: 'Every movement is logged to an immutable ledger with real-time exports to your warehouse.',
  },
  {
    id: 'marketing-sales',
    tag: 'GTM',
    title: 'Marketing & Sales',
    body: 'Usage-based billing and payouts for AI products, reconciled automatically against live pricing.',
  },
]

const PILLARS = [
  {
    icon: 'flow',
    title: 'Liquidity Management',
    body: 'Capital is pre-positioned across corridors so agents never wait on a wire.',
  },
  {
    icon: 'globe',
    title: 'Global Treasury',
    body: 'One balance sheet, reconciled across every market and currency you operate in.',
  },
  {
    icon: 'bolt',
    title: 'Code Speed',
    body: 'Sub-10ms transaction execution, callable directly from your agent runtime.',
  },
]

function Icon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: '0 0 22 22', fill: 'none' } as const
  if (name === 'flow')
    return (
      <svg {...common}>
        <path d="M3 11c3 0 3-6 6-6s3 12 6 12 3-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )
  if (name === 'globe')
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 11h16M11 3c2.5 2.2 2.5 13.8 0 16M11 3c-2.5 2.2-2.5 13.8 0 16" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M12 2 4 13h6l-1 7 9-12h-6l1-6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export default function Home() {
  const [modal, setModal] = useState<null | 'start' | 'demo'>(null)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="min-h-screen bg-paper text-ink font-sans">
      {modal && <RequestAccessModal mode={modal} onClose={() => setModal(null)} />}

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-semibold tracking-tight">Fabric</span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-widest text-slate">TREASURY OS</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {CAPABILITIES.map((c) => (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                className="text-sm text-slate hover:text-ink transition"
              >
                {c.title}
              </button>
            ))}
          </div>
          <button
            onClick={() => setModal('start')}
            className="bg-ink text-paper text-sm font-medium px-5 py-2 rounded-lg hover:bg-ink/90 transition"
          >
            Get Started
          </button>
        </nav>

        {/* Hero */}
        <section className="pt-16 pb-14 text-center">
          <p className="font-mono text-xs tracking-widest text-teal mb-5">LIQUIDITY INFRASTRUCTURE</p>
          <h1 className="font-display text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] mb-6 max-w-3xl mx-auto">
            The liquidity layer for AI agents and global treasury
          </h1>
          <p className="text-lg text-slate mb-9 max-w-xl mx-auto">
            Powering autonomous commerce at code speed.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => scrollTo('capabilities')}
              className="bg-ink text-paper px-7 py-3 rounded-lg font-medium hover:bg-ink/90 transition"
            >
              Explore Fabric
            </button>
            <button
              onClick={() => setModal('demo')}
              className="border border-line text-ink px-7 py-3 rounded-lg font-medium hover:border-ink transition"
            >
              Schedule a Demo
            </button>
          </div>
        </section>
      </div>

      {/* Signature: live ticker strip */}
      <section aria-label="Live transaction feed (sample data)" className="border-y border-line bg-ink text-paper py-3 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="font-mono text-xs text-paper/70 px-8 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Pillars */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {PILLARS.map((p) => (
            <div key={p.title}>
              <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center mb-4">
                <Icon name={p.icon} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </section>

        {/* Capabilities — mirrors the nav, ledger-style rows */}
        <section id="capabilities" className="py-16 scroll-mt-20">
          <p className="font-mono text-xs tracking-widest text-teal mb-3">CAPABILITIES</p>
          <h2 className="font-display text-3xl font-semibold mb-10 max-w-lg">
            One ledger, every team&apos;s view of it
          </h2>
          <div className="border-t border-line">
            {CAPABILITIES.map((c) => (
              <div
                key={c.id}
                id={c.id}
                className="grid grid-cols-1 md:grid-cols-[100px_200px_1fr] gap-3 md:gap-8 py-7 border-b border-line items-start scroll-mt-24"
              >
                <span className="font-mono text-xs text-amber tracking-widest pt-1">{c.tag}</span>
                <h3 className="font-display text-lg font-semibold">{c.title}</h3>
                <p className="text-slate text-sm leading-relaxed max-w-md">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 mb-16 bg-ink text-paper rounded-2xl p-10 sm:p-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-4">Ready to get started?</h2>
          <p className="text-paper/70 mb-9 max-w-xl mx-auto">
            Join forward-thinking organizations leveraging Fabric for autonomous finance.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => setModal('start')}
              className="bg-teal text-ink px-7 py-3 rounded-lg font-medium hover:bg-teal/90 transition"
            >
              Get Started
            </button>
            <button
              onClick={() => setModal('demo')}
              className="border border-paper/30 text-paper px-7 py-3 rounded-lg font-medium hover:border-paper transition"
            >
              Schedule a Demo
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-line py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate text-xs font-mono">
          <span>© {new Date().getFullYear()} FABRIC</span>
          <span>BUILT FOR AGENTIC COMMERCE</span>
        </footer>
      </div>
    </main>
  )
}
