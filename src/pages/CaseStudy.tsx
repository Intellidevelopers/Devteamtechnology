import { useState } from 'react'
import type { NavProps } from '../App'
import SectionLabel from '../components/SectionLabel'
import CTABanner from '../components/CTABanner'
import { PROJECTS } from '../data/projects'

interface Props extends NavProps {
  project: string
}

const CASE_STUDY_DATA: Record<string, {
  category: string
  title: string
  description: string
  heroImage: string
  platform: string
  industry: string
  duration: string
  overview: string
  goals: string[]
  features: { icon: string; title: string; description: string }[]
  technologies: { name: string; role: string; icon: string }[]
  gallery: { src: string; caption: string }[]
  results: { value: string; label: string }[]
}> = {
  default: {
    category: 'Mobile App Development',
    title: 'Food Delivery Mobile App',
    description:
      'An ultra-modern, lightning-fast food delivery application designed from scratch. It features rich restaurant cataloging, custom menu configurations, smart real-time transit tracking, and highly secure payment gateways to empower local Lagos eateries and hungry consumers alike.',
    heroImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=560&fit=crop&auto=format',
    platform: 'iOS & Android',
    industry: 'Food & Beverage',
    duration: '3 Months',
    overview:
      "We engineered a performant mobile application that simplifies the lifecycle of ordering local dishes and quick snacks. The app maps nearby culinary options cleanly, integrates custom checkout logic, and synchronises real-time status updates from the kitchen range straight to the diner's doorstep.",
    goals: [
      'Provide a seamless and intuitive food ordering experience',
      'Enable real-time order tracking and notifications',
      'Support multiple payment options securely',
      'Help restaurants manage orders and menus efficiently',
    ],
    features: [
      {
        icon: '🍽️',
        title: 'Easy Food Ordering',
        description: 'Browse local restaurants, configure specific dishes, and place checkout actions within seconds.',
      },
      {
        icon: '📍',
        title: 'Real-Time Tracking',
        description: 'Keep track of dispatch riders in real-time from active preparation through route transit.',
      },
      {
        icon: '💳',
        title: 'Secure Payments',
        description: 'Pay with localised checkout pathways, wallets, or structured cash-on-delivery systems safely.',
      },
      {
        icon: '📊',
        title: 'User & Restaurant Dashboards',
        description: 'Separate user portals enable smooth analytics and live menu alterations for quick management.',
      },
      {
        icon: '🔔',
        title: 'Push Notifications',
        description: 'Stay fully up to date with customised automated alert triggers regarding daily meals.',
      },
    ],
    technologies: [
      { name: 'Flutter', role: 'Mobile App', icon: '📱' },
      { name: 'Firebase', role: 'Backend', icon: '🔥' },
      { name: 'Node.js', role: 'API Gateway', icon: '⚙️' },
      { name: 'MongoDB', role: 'Database', icon: '🍃' },
      { name: 'Git', role: 'Version Control', icon: '🔀' },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop&auto=format', caption: 'Splash & Onboarding' },
      { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&auto=format', caption: 'Home Feed Catalog' },
      { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop&auto=format', caption: 'Restaurant Details' },
      { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format', caption: 'Cart Configuration' },
      { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&auto=format', caption: 'Live Order Tracking' },
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format', caption: 'Order Confirmed' },
    ],
    results: [
      { value: '98%', label: 'Client Satisfaction' },
      { value: '2.4s', label: 'Avg Load Time' },
      { value: '50k+', label: 'App Downloads' },
      { value: '3mo', label: 'Delivered On Time' },
    ],
  },
}

export default function CaseStudy({ navigate, project }: Props) {
  const data = CASE_STUDY_DATA[project] ?? CASE_STUDY_DATA.default
  const projectData = PROJECTS.find((p) => p.id === project)
  const [galleryIndex, setGalleryIndex] = useState(0)

  return (
    <>
      {/* ── BREADCRUMB + HERO ────────────────────────── */}
      <section className="relative overflow-hidden bg-orange-pale">
        {/* Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div
            className="absolute -top-16 -right-16 w-[360px] h-[360px] rounded-full opacity-40"
            style={{ background: 'radial-gradient(circle, #F65A0030 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pb-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8 flex-wrap" aria-label="Breadcrumb">
            <button
              onClick={() => navigate('home')}
              className="text-gray-body hover:text-orange transition-colors"
            >
              Home
            </button>
            <span className="text-gray-body" aria-hidden>›</span>
            <button
              onClick={() => navigate('portfolio')}
              className="text-gray-body hover:text-orange transition-colors"
            >
              Portfolio
            </button>
            <span className="text-gray-body" aria-hidden>›</span>
            <span className="text-orange font-medium">{projectData?.title ?? data.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3 py-1.5 rounded-full mb-5">
                <span className="font-bold text-xs uppercase tracking-wider">{data.category}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-4">
                {projectData?.title ?? data.title}
              </h1>
              <p className="text-gray-body leading-relaxed mb-8 max-w-md">{data.description}</p>

              {/* Meta */}
              <div className="flex flex-wrap gap-6">
                {[
                  { label: 'Platform', value: data.platform, icon: '📱' },
                  { label: 'Industry', value: data.industry, icon: '🏢' },
                  { label: 'Duration', value: data.duration, icon: '⏱️' },
                ].map(({ label, value, icon }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="text-orange text-base" aria-hidden>{icon}</span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-body">{label}</p>
                      <p className="font-bold text-navy text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: hero image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
              <img
                src={projectData?.image ?? data.heroImage}
                alt={projectData?.title ?? data.title}
                className="w-full h-auto object-cover"
                width={700}
                height={490}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW ─────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Overview */}
            <div>
              <SectionLabel text="Project Overview" className="mb-5" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-5 leading-tight">
                Building a Seamless {projectData?.title ?? 'Product'} Experience
              </h2>
              <p className="text-gray-body leading-relaxed mb-8">{data.overview}</p>

              {/* Goals card */}
              <div className="bg-orange-pale border border-line rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-navy text-base">Project Goals</h3>
                </div>
                <ul className="space-y-3">
                  {data.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-body text-sm leading-relaxed">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="font-black text-navy text-xl mb-6">Key Features</h3>
              <div className="space-y-5">
                {data.features.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm mb-1">{f.title}</h4>
                      <p className="text-gray-body text-sm leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel text="Technologies Used" className="mb-5" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-5 leading-tight">
                Built with Modern Technologies
              </h2>
              <p className="text-gray-body leading-relaxed mb-8">
                We utilise production-proven frameworks and scalable database layouts to keep latency extremely minimal.
              </p>

              <div className="flex flex-wrap gap-4">
                {data.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-2 bg-white border border-line rounded-2xl p-4 w-24 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span className="text-2xl" aria-hidden>{tech.icon}</span>
                    <span className="font-black text-navy text-xs">{tech.name}</span>
                    <span className="text-gray-body text-[10px] uppercase tracking-wider font-medium leading-tight">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&h=480&fit=crop&auto=format"
                  alt="Development environment and modern technology stack"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={700}
                  height={480}
                />
              </div>
              {/* Floating badges */}
              <div className="absolute top-4 right-4 bg-white rounded-xl shadow-md px-3.5 py-2.5 flex items-center gap-2">
                <span className="text-orange text-base" aria-hidden>⚡</span>
                <span className="font-bold text-navy text-xs">Fast Performance</span>
              </div>
              <div className="absolute bottom-12 right-4 bg-white rounded-xl shadow-md px-3.5 py-2.5 flex items-center gap-2">
                <span className="text-orange text-base" aria-hidden>🛡️</span>
                <span className="font-bold text-navy text-xs">Secure & Reliable</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-md px-3.5 py-2.5 flex items-center gap-2">
                <span className="text-orange text-base" aria-hidden>📈</span>
                <span className="font-bold text-navy text-xs">Scalable Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <SectionLabel text="Project Gallery" className="mb-3" />
              <h2 className="text-3xl font-black text-navy">App Screenshots</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setGalleryIndex((i) => Math.max(0, i - 1))}
                disabled={galleryIndex === 0}
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center hover:border-orange hover:text-orange transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous screenshot"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setGalleryIndex((i) => Math.min(data.gallery.length - 1, i + 1))}
                disabled={galleryIndex >= data.gallery.length - 1}
                className="w-9 h-9 rounded-full bg-orange flex items-center justify-center text-white hover:bg-orange-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next screenshot"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {data.gallery.map((item, i) => (
              <button
                key={item.caption}
                onClick={() => setGalleryIndex(i)}
                className={`group rounded-xl overflow-hidden border-2 transition-all duration-150 focus-visible:ring-2 focus-visible:ring-orange ${
                  galleryIndex === i ? 'border-orange shadow-md' : 'border-transparent hover:border-orange/40'
                }`}
                aria-label={`View screenshot: ${item.caption}`}
                aria-current={galleryIndex === i}
              >
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] font-semibold text-gray-body text-center py-1.5 px-1 truncate">{item.caption}</p>
              </button>
            ))}
          </div>

          {/* Enlarged view */}
          {data.gallery[galleryIndex] && (
            <div className="mt-6 rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <img
                src={data.gallery[galleryIndex].src.replace('w=400&h=300', 'w=1200&h=700')}
                alt={data.gallery[galleryIndex].caption}
                className="w-full max-h-[480px] object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel text="Project Impact" className="mb-4 justify-center" center />
          <h2 className="text-3xl md:text-4xl font-black text-navy mb-12">Results & Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.results.map(({ value, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 shadow-sm border border-line">
                <p className="text-4xl md:text-5xl font-black text-orange mb-2">{value}</p>
                <p className="text-gray-body text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <CTABanner
        label="Have a Project in Mind?"
        title="Let's Build Something Amazing Together"
        description="Turn your custom ideas into performant mobile apps and web tools. Talk with our senior engineers and digital product designers today."
        buttonText="Start Your Project"
        onButtonClick={() => navigate('contact')}
      />
    </>
  )
}
