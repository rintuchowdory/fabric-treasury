'use client'

import { useEffect, useRef, useState } from 'react'

type Mode = 'start' | 'demo'

export default function RequestAccessModal({
  mode,
  onClose,
}: {
  mode: Mode
  onClose: () => void
}) {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const dialogRef = useRef<HTMLDivElement>(null)
  const firstFieldRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    firstFieldRef.current?.focus()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const copy =
    mode === 'demo'
      ? {
          eyebrow: 'SCHEDULE · 30 MIN',
          title: 'Talk to the team',
          body: "Tell us where funds move in your stack and we'll show you how Fabric routes them.",
          cta: 'Request a time',
        }
      : {
          eyebrow: 'ACCESS · SANDBOX',
          title: 'Get started with Fabric',
          body: "We'll set up a sandbox account with test liquidity so your agents can start moving funds today.",
          cta: 'Request access',
        }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* backdrop */}
      <button
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm cursor-default"
      />

      <div
        ref={dialogRef}
        className="relative w-full max-w-md bg-paper border border-line rounded-2xl shadow-2xl p-8"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-slate hover:text-ink transition"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <p className="font-mono text-xs tracking-widest text-teal mb-3">{copy.eyebrow}</p>
            <h2 id="modal-title" className="font-display text-2xl font-semibold text-ink mb-2">
              {copy.title}
            </h2>
            <p className="text-slate text-sm mb-6 leading-relaxed">{copy.body}</p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="work-email" className="block text-xs font-mono text-slate mb-1.5">
                  WORK EMAIL
                </label>
                <input
                  ref={firstFieldRef}
                  id="work-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-slate/60 focus:border-teal outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-mono text-slate mb-1.5">
                  COMPANY
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Acme, Inc."
                  className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-slate/60 focus:border-teal outline-none transition"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink text-paper font-medium rounded-lg py-3 hover:bg-ink/90 transition"
              >
                {copy.cta}
              </button>
            </form>
          </>
        ) : (
          <div className="py-4 text-center">
            <div className="w-12 h-12 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto mb-4">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 11.5L9 16.5L18 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="font-display text-xl font-semibold text-ink mb-2">You&apos;re on the list</h2>
            <p className="text-slate text-sm mb-6">
              We sent a confirmation to <span className="text-ink font-medium">{email}</span>. Someone from the team
              will follow up within one business day.
            </p>
            <button
              onClick={onClose}
              className="text-sm font-mono text-teal hover:text-ink transition"
            >
              CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
