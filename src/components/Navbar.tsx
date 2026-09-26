import { useState, useEffect } from "react"

import { Menu, X } from "lucide-react"

import type { NavProps, Page } from "../App"

import logoImg from "../assets/logo.png"

const NAV_LINKS: { label: string; page: Page; anchor?: string }[] = [
  { label: "Home", page: "home" },

  { label: "Services", page: "home", anchor: "services" },

  { label: "Portfolio", page: "portfolio" },

  { label: "About", page: "about" },

  { label: "Contact", page: "contact" },
]

export default function Navbar({
  currentPage,
  navigate,
  openQuotation,
}: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)

    window.addEventListener("scroll", handler, { passive: true })

    return () => window.removeEventListener("scroll", handler)
  }, [])

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }

    window.addEventListener("resize", handler)

    return () => window.removeEventListener("resize", handler)
  }, [])

  const handleLink = (page: Page, anchor?: string) => {
    setOpen(false)

    navigate(page)

    if (anchor) {
      setTimeout(() => {
        document
          .getElementById(anchor)
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 120)
    }
  }

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-navy/95 border-b border-white/5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-2">
          <span className="text-orange font-bold text-[11px] tracking-[0.2em] uppercase">
            Innovate · Build · Grow
          </span>
          <span className="text-white/40 text-[11px] tracking-wide">
            Premium Software Engineering Agency based in Ilorin Kwara, Nigeria
            <span className="mx-2 text-white/20">·</span>
            <span className="text-white/60 font-semibold">
              RC&#8209;9764498
            </span>
          </span>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled
            ? "shadow-[0_2px_24px_rgba(0,0,0,0.07)]"
            : "border-b border-line"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <button
            onClick={() => handleLink("home")}
            className="flex items-center gap-2.5 flex-shrink-0 min-w-0"
            aria-label="Devteam home"
          >
            <img
              src={logoImg}
              alt="Devteam Technology Solutions"
              className="w-40 sm:w-48 h-auto"
            />
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map(({ label, page, anchor }) => {
              const active = currentPage === page && !anchor

              return (
                <button
                  key={label}
                  onClick={() => handleLink(page, anchor)}
                  className={`relative text-[13px] lg:text-sm font-semibold transition-colors duration-150 pb-0.5 ${
                    active ? "text-orange" : "text-navy hover:text-orange"
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
              onClick={openQuotation}
              className="hidden md:inline-flex items-center gap-1.5 bg-orange text-white px-5 py-2.5 rounded-full text-[13px] font-bold hover:bg-orange-hover transition-colors duration-150 whitespace-nowrap"
            >
              Request Quotation
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 -mr-1 text-navy rounded-xl hover:bg-gray-100 transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open
              ? "max-h-[480px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <nav
            className="border-t border-line bg-white px-4 pb-6 pt-3"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1 mb-4">
              {NAV_LINKS.map(({ label, page, anchor }) => {
                const active = currentPage === page && !anchor

                return (
                  <button
                    key={label}
                    onClick={() => handleLink(page, anchor)}
                    className={`w-full text-left py-3 px-3 rounded-xl text-[15px] font-semibold transition-colors ${
                      active
                        ? "text-orange bg-orange-pale"
                        : "text-navy hover:bg-gray-50"
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
            <button
              onClick={() => {
                setOpen(false)
                openQuotation()
              }}
              className="w-full bg-orange text-white py-3.5 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors"
            >
              Request Quotation
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}
