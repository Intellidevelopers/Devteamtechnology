import { useState, useEffect } from 'react'
import type { Page } from '../App'

interface Props {
  currentPage: Page
  navigate: (to: Page) => void
}

const NAV_LINKS: { label: string; page: Page; anchor?: string }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Services', page: 'home', anchor: 'services' },
  { label: 'Portfolio', page: 'portfolio' },
  { label: 'About', page: 'home', anchor: 'about' },
  { label: 'Contact', page: 'contact' },
]

export default function Navbar({ currentPage, navigate }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on resize past md
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const handleLink = (page: Page, anchor?: string) => {
    setOpen(false)
    navigate(page)
    if (anchor) {
      setTimeout(() => {
        document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
    }
  }

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-orange-pale border-b border-line hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <span className="text-orange font-bold text-xs tracking-widest uppercase">Innovate · Build · Grow</span>
          <span className="text-gray-body text-xs">Premium Software Engineering Agency based in Lagos, Nigeria</span>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'border-b border-line'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <button
            onClick={() => handleLink('home')}
            className="flex items-center gap-2.5 flex-shrink-0 min-w-0"
            aria-label="Devteam home"
          >
            <div className="w-9 h-9 md:w-10 md:h-10 bg-orange rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-black text-lg md:text-xl leading-none select-none">D</span>
            </div>
            <div className="flex flex-col items-start leading-none gap-0.5">
              <span className="font-black text-navy text-[15px] md:text-base tracking-tight leading-none">DEVTEAM</span>
              <span className="text-gray-body text-[8px] md:text-[9px] tracking-[0.18em] font-semibold uppercase leading-none">
                Technology Solutions
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Primary navigation">
            {NAV_LINKS.map(({ label, page, anchor }) => {
              const active = currentPage === page && !anchor
              return (
                <button
                  key={label}
                  onClick={() => handleLink(page, anchor)}
                  className={`relative text-[13px] lg:text-sm font-semibold transition-colors duration-150 pb-0.5 ${
                    active ? 'text-orange' : 'text-navy hover:text-orange'
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-orange rounded-full" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLink('contact')}
              className="hidden md:inline-flex items-center gap-1.5 bg-orange text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-hover transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
            >
              Get Started <span aria-hidden>+</span>
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 -mr-2 text-navy rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="border-t border-line bg-white px-4 pb-6 pt-3 space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, page, anchor }) => {
              const active = currentPage === page && !anchor
              return (
                <button
                  key={label}
                  onClick={() => handleLink(page, anchor)}
                  className={`w-full text-left py-3 px-3 rounded-xl text-base font-semibold transition-colors ${
                    active ? 'text-orange bg-orange-pale' : 'text-navy hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              )
            })}
            <div className="pt-3">
              <button
                onClick={() => handleLink('contact')}
                className="w-full bg-orange text-white py-3.5 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors"
              >
                Get Started +
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
