import { useState, useRef } from 'react'
import type { NavProps } from '../App'
import SectionLabel from '../components/SectionLabel'
import CTABanner from '../components/CTABanner'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS, CATEGORIES } from '../data/projects'

const DARK_STATS = [
  { value: '100+', label: 'Happy Clients' },
  { value: '150+', label: 'Mobile Apps Delivered' },
  { value: '200+', label: 'Websites Launched' },
  { value: '5.0', label: 'Client Satisfaction' },
]

export default function Portfolio({ navigate }: NavProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const filterRef = useRef<HTMLDivElement>(null)

  const filtered =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.categorySlug === activeCategory)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-orange-pale">
        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-40"
            style={{ background: 'radial-gradient(circle, #F65A0030 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 right-[10%] w-56 h-56 rounded-full opacity-40"
            style={{ background: 'radial-gradient(circle, #F65A0025 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="max-w-xl">
              <SectionLabel text="Our Work" className="mb-5" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-[1.05] tracking-tight mb-5">
                Projects We're{' '}
                <span className="text-orange">Proud Of</span>
              </h1>
              <p className="text-gray-body leading-relaxed mb-8 max-w-md">
                Explore our portfolio of high-performing mobile apps and custom enterprise websites.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: '✦', label: 'Innovative Solutions' },
                  { icon: '✦', label: 'Clean & Modern Designs' },
                  { icon: '✦', label: 'Scalable Architecture' },
                  { icon: '✦', label: 'Client Satisfaction' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="text-orange text-xs" aria-hidden>{icon}</span>
                    <span className="text-navy font-semibold text-sm">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center gap-1.5 bg-orange text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors duration-150"
                >
                  Get Started <span aria-hidden>+</span>
                </button>
                <button
                  onClick={() => filterRef.current?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-1.5 border-2 border-navy text-navy px-7 py-3.5 rounded-full font-bold text-sm hover:bg-navy hover:text-white transition-colors duration-150"
                >
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Right: mockup */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&h=500&fit=crop&auto=format"
                    alt="Portfolio of mobile and web projects"
                    className="w-full h-auto object-cover"
                    width={700}
                    height={500}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=300&fit=crop&auto=format"
                    alt="Mobile app mockup"
                    className="w-full h-auto object-cover"
                    width={200}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS ──────────────────────────────── */}
      <section ref={filterRef} className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Scrollable filter row */}
          <div
            className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-none"
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
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-150 focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-1 ${
                    active
                      ? 'bg-orange text-white shadow-sm'
                      : 'bg-white border border-line text-navy hover:border-orange hover:text-orange'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>

          {/* Project grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.length > 0 ? (
              filtered.map((project) => (
                <ProjectCard key={project.id} project={project} navigate={navigate} />
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-gray-body">
                No projects in this category yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── STATS (dark) ─────────────────────────────── */}
      <section className="bg-navy py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
            <div className="flex-shrink-0">
              <SectionLabel text="Our Impact" className="mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight max-w-xs">
                Numbers That Speak for Themselves
              </h2>
            </div>
            <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8 w-full">
              {DARK_STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-black text-4xl md:text-5xl text-white leading-none mb-1">
                    {value}
                  </p>
                  <p className="text-white/50 text-xs font-medium">{label}</p>
                </div>
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
        description="We are ready to design and engineer a premium product that propels your business ahead of the competition. Talk with our experts today."
        buttonText="Get Started"
        onButtonClick={() => navigate('contact')}
      />
    </>
  )
}
