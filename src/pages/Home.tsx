import {
  Smartphone, Monitor, Layers, LifeBuoy,
  ShieldCheck, Users, Clock,
  ArrowRight, CheckCircle2,
} from 'lucide-react'
import type { NavProps } from '../App'
import AnimateIn from '../components/AnimateIn'
import SectionLabel from '../components/SectionLabel'
import CTABanner from '../components/CTABanner'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

const SERVICES = [
  {
    Icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Premium iOS and Android experiences native-engineered to delight your audience and scale smoothly under real-world conditions.',
  },
  {
    Icon: Monitor,
    title: 'Web Development',
    description:
      'Secure enterprise platforms and custom web applications built on modern stacks, optimised for speed and global traffic.',
  },
  {
    Icon: Layers,
    title: 'UI/UX Design',
    description:
      'Stunning visuals paired with research-backed user flows that guide users naturally toward the actions that matter.',
  },
  {
    Icon: LifeBuoy,
    title: 'Support',
    description:
      '24/7 monitoring, security patches, performance tuning, and proactive updates to keep your systems healthy and current.',
  },
]

export default function Home({ navigate, openQuotation }: NavProps) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-orange-pale">
        {/* Subtle background shape */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute top-0 right-0 w-[55%] h-full opacity-40"
            style={{
              background:
                'radial-gradient(ellipse at 80% 40%, #F65A0018 0%, transparent 65%)',
            }}
          />
          <div
            className="absolute bottom-0 right-[8%] w-72 h-72 rounded-full opacity-25"
            style={{ background: 'radial-gradient(circle, #F65A0035 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <AnimateIn>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-4 h-px bg-orange" aria-hidden />
                <span className="text-orange font-bold text-[11px] tracking-[0.2em] uppercase">
                  Innovate · Build · Grow
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[3.75rem] xl:text-7xl font-black text-navy leading-[1.02] tracking-tight mb-5">
                We Build{' '}
                <span className="text-orange">Mobile Apps</span>
                <br />
                <span className="text-orange">&amp; Websites</span>
              </h1>

              <p className="text-navy font-bold text-xl md:text-2xl mb-4 tracking-tight">
                Modern. Fast. Scalable.
              </p>

              <p className="text-gray-body leading-relaxed mb-9 max-w-md text-[15px]">
                Devteam is Lagos' premier digital engineering partner. We craft beautiful, high-performing apps and custom web platforms that scale your business, optimise complex operations, and delight users globally.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={openQuotation}
                  className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded-full font-bold text-[13px] hover:bg-orange-hover transition-colors duration-150"
                >
                  Request Quotation
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('portfolio')}
                  className="inline-flex items-center gap-2 border-2 border-navy text-navy px-7 py-3.5 rounded-full font-bold text-[13px] hover:bg-navy hover:text-white transition-colors duration-150"
                >
                  View Our Work
                </button>
              </div>
            </AnimateIn>

            {/* Right: mockups */}
            <AnimateIn from="right" delay={120} className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-none">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=720&h=520&fit=crop&auto=format"
                    alt="Mobile and web development"
                    className="w-full h-auto object-cover"
                    width={720}
                    height={520}
                    priority-fetch="high"
                  />
                </div>
                {/* Floating phone */}
                <div className="absolute -bottom-6 -left-6 w-28 md:w-36 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=360&fit=crop&auto=format"
                    alt="Mobile app interface"
                    className="w-full h-auto object-cover"
                    width={200}
                    height={360}
                  />
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mb-12">
            <SectionLabel text="Our Services" className="mb-4" />
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight max-w-md">
                Complete Digital Solutions for Your Business
              </h2>
              <p className="text-gray-body text-[14px] leading-relaxed max-w-xs sm:text-right">
                From concept to deployment — high-quality products tailored to drive growth, user satisfaction, and real business efficiency.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ Icon, title, description }, i) => (
              <AnimateIn key={title} delay={i * 75} className="h-full">
                <article className="bg-white border border-line rounded-2xl p-6 h-full flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
                  <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-navy text-[15px] mb-2">{title}</h3>
                    <p className="text-gray-body text-sm leading-relaxed">{description}</p>
                  </div>
                  <button className="inline-flex items-center gap-1 text-orange text-sm font-bold mt-auto transition-all duration-150 hover:gap-2.5">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section id="about" className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Copy */}
            <AnimateIn>
              <SectionLabel text="About Devteam" className="mb-5" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight mb-6">
                Your Trusted Partner in Digital Innovation
              </h2>
              <p className="text-gray-body leading-relaxed mb-8 text-[15px]">
                We are a team of passionate engineers, designers, and product thinkers dedicated to building premium digital products that solve real-world problems and drive robust business growth. Our focus is unmatched code quality, rapid execution, and complete client satisfaction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { Icon: ShieldCheck, label: 'Reliable & Secure' },
                  { Icon: Users, label: 'Experienced Team' },
                  { Icon: Clock, label: 'On-Time Delivery' },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-orange flex-shrink-0" strokeWidth={2} />
                    <span className="text-navy font-semibold text-[13px]">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('about')}
                  className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors duration-150"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </AnimateIn>

            {/* Image */}
            <AnimateIn from="right" delay={100}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=700&h=520&fit=crop&auto=format"
                    alt="Developer working on laptop"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    width={700}
                    height={520}
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 max-w-[200px]">
                  <div className="w-9 h-9 bg-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-black text-navy text-[11px] leading-tight">Turning Ideas</p>
                    <p className="text-orange text-[10px] font-semibold leading-tight">Into Digital Reality</p>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <StatsSection />

      {/* ── FEATURED PROJECTS ────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div>
              <SectionLabel text="Our Work" className="mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-navy">Featured Projects</h2>
              <p className="text-gray-body mt-2 max-w-sm text-[14px]">
                A glimpse of the industry-defining products we've built.
              </p>
            </div>
            <button
              onClick={() => navigate('portfolio')}
              className="flex-shrink-0 inline-flex items-center gap-1.5 border border-navy text-navy px-5 py-2.5 rounded-full font-bold text-sm hover:bg-navy hover:text-white transition-colors duration-150 self-start sm:self-center"
            >
              View All <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROJECTS.slice(0, 4).map((project, i) => (
              <ProjectCard key={project.id} project={project} navigate={navigate} delay={i * 70} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <TestimonialsSection />

      {/* ── CTA ──────────────────────────────────────── */}
      <CTABanner
        label="Get Started"
        title="Let's Build Something Amazing Together"
        description="We're ready to design and engineer a premium product that propels your business ahead of the competition."
        buttonText="Request Quotation"
        onButtonClick={openQuotation}
      />
    </>
  )
}
