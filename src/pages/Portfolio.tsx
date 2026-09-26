import { useState, useRef } from "react"

import { ArrowRight, Sparkles, Palette, GitBranch, Star } from "lucide-react"

import type { NavProps } from "../App"

import AnimateIn from "../components/AnimateIn"

import SectionLabel from "../components/SectionLabel"

import CTABanner from "../components/CTABanner"

import TestimonialsSection from "../components/TestimonialsSection"

import ProjectCard from "../components/ProjectCard"

import { PROJECTS, CATEGORIES } from "../data/projects"

const HERO_BULLETS = [
  { Icon: Sparkles, label: "Innovative Solutions" },

  { Icon: Palette, label: "Clean & Modern Designs" },

  { Icon: GitBranch, label: "Scalable Architecture" },

  { Icon: Star, label: "Client Satisfaction" },
]

const DARK_STATS = [
  { value: "100+", label: "Happy Clients" },

  { value: "150+", label: "Mobile Apps Delivered" },

  { value: "200+", label: "Websites Launched" },

  { value: "5.0", label: "Client Satisfaction" },
]

export default function Portfolio({ navigate, openQuotation }: NavProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  const filterRef = useRef<HTMLDivElement>(null)

  const filtered =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categorySlug === activeCategory)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-orange-pale">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, #F65A00 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <AnimateIn>
              <SectionLabel text="Our Work" className="mb-5" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-[1.04] tracking-tight mb-5">
                Projects We're <span className="text-orange">Proud Of</span>
              </h1>
              <p className="text-gray-body leading-relaxed mb-8 max-w-md text-[15px]">
                Explore our portfolio of high-performing mobile apps and custom
                enterprise websites built for clients across Africa and beyond.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
                {HERO_BULLETS.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-orange" strokeWidth={1.75} />
                    <span className="text-navy font-semibold text-sm">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={openQuotation}
                  className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded-full font-bold text-[13px] hover:bg-orange-hover transition-colors duration-150"
                >
                  Request Quotation <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    filterRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 border-2 border-navy text-navy px-7 py-3.5 rounded-full font-bold text-[13px] hover:bg-navy hover:text-white transition-colors duration-150"
                >
                  View Case Studies
                </button>
              </div>
            </AnimateIn>

            {/* Right */}
            <AnimateIn from="right" delay={100} className="hidden lg:block">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&h=500&fit=crop&auto=format"
                    alt="Portfolio of mobile and web projects"
                    className="w-full h-auto object-cover"
                    width={700}
                    height={500}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-28 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=300&fit=crop&auto=format"
                    alt="Mobile app mockup"
                    className="w-full h-auto object-cover"
                    width={200}
                    height={300}
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ────────────────────────────── */}
      <section ref={filterRef} className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-none mb-10"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {CATEGORIES.map(({ label, slug }) => {
              const active = activeCategory === slug

              return (
                <button
                  key={slug}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(slug)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-150 whitespace-nowrap ${
                    active
                      ? "bg-orange text-white"
                      : "bg-white border border-line text-navy hover:border-orange/50 hover:text-orange"
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.length > 0 ? (
              filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  navigate={navigate}
                  delay={i * 50}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-gray-body">
                No projects in this category yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── STATS DARK ───────────────────────────────── */}
      <section className="bg-navy py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
            <AnimateIn className="flex-shrink-0">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-orange font-bold text-sm" aria-hidden>
                  →
                </span>
                <span className="text-orange font-semibold text-[11px] tracking-[0.18em] uppercase">
                  Our Impact
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight max-w-xs">
                Numbers That Speak for Themselves
              </h2>
            </AnimateIn>
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {DARK_STATS.map(({ value, label }, i) => (
                <AnimateIn key={label} delay={i * 80} className="text-center">
                  <p className="font-black text-4xl md:text-5xl text-white leading-none mb-1.5">
                    {value}
                  </p>
                  <p className="text-white/40 text-xs font-medium">{label}</p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <TestimonialsSection />

      {/* ── CTA ──────────────────────────────────────── */}
      <CTABanner
        label="Let's Work Together"
        title="Have a Project in Mind?"
        description="We are ready to design and engineer a premium product that propels your business ahead of the competition."
        buttonText="Request Quotation"
        onButtonClick={openQuotation}
      />
    </>
  )
}
