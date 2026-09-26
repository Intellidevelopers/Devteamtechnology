import { useState } from 'react'
import {
  ChevronLeft, ChevronRight,
  Smartphone, Flame, Server, Database, GitBranch,
  UtensilsCrossed, Navigation, CreditCard, LayoutDashboard, Bell,
  CheckCircle2, Zap, Shield, TrendingUp,
} from 'lucide-react'
import type { NavProps } from '../App'
import AnimateIn from '../components/AnimateIn'
import SectionLabel from '../components/SectionLabel'
import CTABanner from '../components/CTABanner'
import { PROJECTS } from '../data/projects'

interface Props extends NavProps { project: string }

const CASE_STUDY_DATA = {
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
      "We engineered a performant mobile application that simplifies the lifecycle of ordering local dishes and quick snacks. The app maps nearby culinary options cleanly, integrates custom checkout logic, and synchronises real-time status updates from the kitchen straight to the diner's doorstep.",
    goals: [
      'Provide a seamless and intuitive food ordering experience',
      'Enable real-time order tracking and push notifications',
      'Support multiple payment options securely',
      'Help restaurants manage orders and menus efficiently',
    ],
    features: [
      { Icon: UtensilsCrossed, title: 'Easy Food Ordering', description: 'Browse local restaurants, configure specific dishes, and place checkout actions within seconds.' },
      { Icon: Navigation, title: 'Real-Time Tracking', description: 'Keep track of dispatch riders in real-time from active preparation through route transit.' },
      { Icon: CreditCard, title: 'Secure Payments', description: 'Pay with localised checkout pathways, wallets, or structured cash-on-delivery systems safely.' },
      { Icon: LayoutDashboard, title: 'User & Restaurant Dashboards', description: 'Separate portals enable smooth analytics and live menu alterations for quick management.' },
      { Icon: Bell, title: 'Push Notifications', description: 'Stay up to date with customised automated alert triggers regarding daily meals and promotions.' },
    ],
    technologies: [
      { name: 'Flutter', role: 'Mobile App', Icon: Smartphone },
      { name: 'Firebase', role: 'Backend', Icon: Flame },
      { name: 'Node.js', role: 'API Gateway', Icon: Server },
      { name: 'MongoDB', role: 'Database', Icon: Database },
      { name: 'Git', role: 'Version Control', Icon: GitBranch },
    ],
    gallery: [
      { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=360&h=760&fit=crop&crop=center&auto=format', caption: 'Splash & Onboarding' },
      { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=360&h=760&fit=crop&crop=center&auto=format', caption: 'Home Feed Catalog' },
      { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=360&h=760&fit=crop&crop=center&auto=format', caption: 'Restaurant Details' },
      { src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=360&h=760&fit=crop&crop=center&auto=format', caption: 'Cart Configuration' },
      { src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=360&h=760&fit=crop&crop=center&auto=format', caption: 'Live Order Tracking' },
      { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=360&h=760&fit=crop&crop=face&auto=format', caption: 'Order Confirmed' },
    ],
    results: [
      { value: '98%', label: 'Client Satisfaction' },
      { value: '2.4s', label: 'Average Load Time' },
      { value: '50k+', label: 'App Downloads' },
      { value: '3 mo', label: 'Delivered On Schedule' },
    ],
  },
}

export default function CaseStudy({ navigate, project, openQuotation }: Props) {
  const data = CASE_STUDY_DATA[project as keyof typeof CASE_STUDY_DATA] ?? CASE_STUDY_DATA.default
  const projectData = PROJECTS.find((p) => p.id === project)
  const [activeShot, setActiveShot] = useState(0)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-orange-pale">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-16 -right-16 w-[360px] h-[360px] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #F65A00 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pb-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-10 flex-wrap" aria-label="Breadcrumb">
            <button onClick={() => navigate('home')} className="text-gray-body hover:text-orange transition-colors">Home</button>
            <span className="text-gray-body/40" aria-hidden>›</span>
            <button onClick={() => navigate('portfolio')} className="text-gray-body hover:text-orange transition-colors">Portfolio</button>
            <span className="text-gray-body/40" aria-hidden>›</span>
            <span className="text-orange font-medium">{projectData?.title ?? data.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 bg-orange/10 text-orange px-3.5 py-1.5 rounded-full mb-5">
                <span className="font-bold text-[10px] uppercase tracking-[0.18em]">{data.category}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-4">
                {projectData?.title ?? data.title}
              </h1>
              <p className="text-gray-body leading-relaxed mb-8 text-[15px] max-w-md">{data.description}</p>
              <div className="flex flex-wrap gap-6">
                {[
                  { Icon: Smartphone, label: 'Platform', value: data.platform },
                  { Icon: LayoutDashboard, label: 'Industry', value: data.industry },
                  { Icon: TrendingUp, label: 'Duration', value: data.duration },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-orange" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-body">{label}</p>
                      <p className="font-bold text-navy text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn from="right" delay={100} className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
              <img
                src={projectData?.image ?? data.heroImage}
                alt={projectData?.title ?? data.title}
                className="w-full h-auto object-cover"
                width={700}
                height={490}
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── PROJECT OVERVIEW ─────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimateIn>
              <SectionLabel text="Project Overview" className="mb-5" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-5 leading-tight">
                Building a Seamless {projectData?.category ?? 'Product'} Experience
              </h2>
              <p className="text-gray-body leading-relaxed mb-8 text-[15px]">{data.overview}</p>

              {/* Goals card */}
              <div className="bg-orange-pale border border-orange/15 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 bg-orange rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-black text-navy text-base">Project Goals</h3>
                </div>
                <ul className="space-y-3.5">
                  {data.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                      <span className="text-gray-body text-sm leading-relaxed">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn from="right" delay={100}>
              <h3 className="font-black text-navy text-xl mb-6">Key Features</h3>
              <div className="space-y-5">
                {data.features.map(({ Icon, title, description }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-orange" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-[14px] mb-1">{title}</h4>
                      <p className="text-gray-body text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateIn>
              <SectionLabel text="Technologies Used" className="mb-5" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-5 leading-tight">
                Built with Modern Technologies
              </h2>
              <p className="text-gray-body leading-relaxed mb-8 text-[15px]">
                We utilise production-proven frameworks and scalable database layouts to keep latency extremely minimal.
              </p>
              <div className="flex flex-wrap gap-3">
                {data.technologies.map(({ name, role, Icon }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center gap-2 bg-white border border-line rounded-2xl p-4 w-24 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="w-9 h-9 bg-orange/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-orange" strokeWidth={1.5} />
                    </div>
                    <span className="font-black text-navy text-xs">{name}</span>
                    <span className="text-gray-body text-[9px] uppercase tracking-wider font-medium leading-tight">{role}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn from="right" delay={100}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&h=480&fit=crop&auto=format"
                    alt="Modern development environment"
                    loading="lazy"
                    className="w-full h-auto object-cover"
                    width={700}
                    height={480}
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-xl shadow-md px-3.5 py-2.5 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-orange" />
                  <span className="font-bold text-navy text-xs">Fast Performance</span>
                </div>
                <div className="absolute bottom-14 right-4 bg-white rounded-xl shadow-md px-3.5 py-2.5 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-orange" />
                  <span className="font-bold text-navy text-xs">Secure & Reliable</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-md px-3.5 py-2.5 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange" />
                  <span className="font-bold text-navy text-xs">Scalable Architecture</span>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── APP STORE–STYLE GALLERY ───────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex items-center justify-between mb-10">
            <div>
              <SectionLabel text="Project Gallery" className="mb-3" />
              <h2 className="text-3xl font-black text-navy">App Screenshots</h2>
              <p className="text-gray-body text-sm mt-1">
                Swipe through the key screens of the delivered application.
              </p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={() => setActiveShot((i) => Math.max(0, i - 1))}
                disabled={activeShot === 0}
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center hover:border-orange hover:text-orange transition-colors disabled:opacity-30"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveShot((i) => Math.min(data.gallery.length - 1, i + 1))}
                disabled={activeShot >= data.gallery.length - 1}
                className="w-9 h-9 rounded-full bg-orange flex items-center justify-center text-white hover:bg-orange-hover transition-colors disabled:opacity-30"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </AnimateIn>

          {/*
            App Store–style portrait screenshots
            Aspect ratio 9:19 = portrait phone screen proportions
          */}
          <div className="overflow-x-auto scrollbar-none -mx-4 px-4 sm:-mx-0 sm:px-0">
            <div className="flex gap-3 md:gap-4 pb-4 min-w-max sm:min-w-0 sm:justify-start">
              {data.gallery.map((item, i) => (
                <button
                  key={item.caption}
                  onClick={() => setActiveShot(i)}
                  aria-label={`Screenshot: ${item.caption}`}
                  aria-current={activeShot === i}
                  className={`flex-shrink-0 flex flex-col gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 rounded-[20px] ${
                    activeShot === i ? 'scale-105' : 'opacity-70 hover:opacity-100 hover:scale-102'
                  } transition-all duration-200`}
                >
                  {/* Portrait phone screenshot — 9:19 aspect ratio */}
                  <div
                    className={`relative rounded-[20px] overflow-hidden bg-gray-900 shadow-md ring-2 transition-all duration-200 ${
                      activeShot === i ? 'ring-orange shadow-lg' : 'ring-transparent'
                    }`}
                    style={{ width: '120px', aspectRatio: '9 / 19' }}
                  >
                    <img
                      src={item.src}
                      alt={item.caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Subtle phone screen glare */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)',
                      }}
                      aria-hidden
                    />
                  </div>
                  <p className="text-[10px] font-semibold text-gray-body text-center w-[120px] truncate">
                    {item.caption}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Active screenshot full size */}
          <AnimateIn className="mt-8">
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-md">
              <img
                src={data.gallery[activeShot].src.replace('w=360&h=760', 'w=1400&h=700')}
                alt={data.gallery[activeShot].caption}
                className="w-full max-h-[440px] object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/20 to-transparent" aria-hidden />
              <span className="absolute bottom-4 left-4 text-white font-bold text-sm">
                {data.gallery[activeShot].caption}
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── RESULTS ──────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn>
            <SectionLabel text="Project Impact" center className="mb-4 justify-center" />
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-12">Results &amp; Impact</h2>
          </AnimateIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {data.results.map(({ value, label }, i) => (
              <AnimateIn key={label} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-line">
                  <p className="text-4xl md:text-5xl font-black text-orange mb-2">{value}</p>
                  <p className="text-gray-body text-sm font-medium">{label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <CTABanner
        label="Have a Project in Mind?"
        title="Let's Build Something Amazing Together"
        description="Turn your ideas into a high-performance mobile app or web platform. Talk with our senior engineers today."
        buttonText="Request Quotation"
        onButtonClick={openQuotation}
      />
    </>
  )
}
