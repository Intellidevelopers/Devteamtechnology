import type { NavProps } from '../App'
import AnimateIn from '../components/AnimateIn'
import SectionLabel from '../components/SectionLabel'
import CTABanner from '../components/CTABanner'
import StatsSection from '../components/StatsSection'
import {
  Award, Lightbulb, ShieldCheck, TrendingUp,
  Users, Clock, Target, Zap,
  CheckCircle2, ArrowRight,
} from 'lucide-react'

const VALUES = [
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Excellence',
    description: 'We set the bar high in everything we build — clean code, polished interfaces, and products that hold up under real-world pressure.',
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Innovation',
    description: "We stay ahead of the curve by continuously adopting modern frameworks, architectures, and design patterns that give our clients an edge.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Integrity',
    description: 'Transparent pricing, honest timelines, and no surprises. We operate with full accountability at every stage of your project.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Impact',
    description: 'Every product we build is engineered to move your business forward — measurable outcomes, not just deliverables.',
  },
]

const TEAM = [
  {
    name: 'Emeka Nwosu',
    role: 'Founder & CEO',
    bio: 'Visionary product leader with 12+ years in enterprise software and digital transformation.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format',
  },
  {
    name: 'Tunde Adeyemi',
    role: 'Chief Technology Officer',
    bio: 'Full-stack architect specialising in scalable Node.js platforms and cross-platform mobile.',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&auto=format',
  },
  {
    name: 'Amara Okonkwo',
    role: 'Head of Design',
    bio: 'Award-winning UX strategist who transforms complex user journeys into intuitive digital experiences.',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face&auto=format',
  },
  {
    name: 'Chidi Okafor',
    role: 'Lead Mobile Engineer',
    bio: 'Flutter and React Native specialist with a passion for buttery-smooth animations and performance.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&auto=format',
  },
  {
    name: 'Ngozi Bello',
    role: 'Senior Frontend Engineer',
    bio: 'React and Next.js expert focused on accessible, pixel-perfect web interfaces that delight users.',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face&auto=format',
  },
  {
    name: 'Seun Alade',
    role: 'Project Manager',
    bio: 'PMP-certified delivery lead ensuring every milestone is met on time and every client stays informed.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format',
  },
]

const PROCESS = [
  {
    step: '01',
    icon: <Target className="w-5 h-5" />,
    title: 'Discovery & Strategy',
    description: 'We deep-dive into your goals, users, and constraints to define a clear product vision and technical roadmap.',
  },
  {
    step: '02',
    icon: <Lightbulb className="w-5 h-5" />,
    title: 'Design & Prototyping',
    description: 'Our designers craft high-fidelity wireframes and interactive prototypes to validate every user flow before a single line of code is written.',
  },
  {
    step: '03',
    icon: <Zap className="w-5 h-5" />,
    title: 'Engineering & Build',
    description: 'Senior engineers implement your product using modern, tested frameworks — with weekly demos and full transparency throughout.',
  },
  {
    step: '04',
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'QA & Testing',
    description: 'Rigorous manual and automated testing across devices and edge cases ensures nothing ships with defects.',
  },
  {
    step: '05',
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Launch & Deployment',
    description: 'We handle deployment pipelines, app store submissions, and go-live support — so launch day is smooth, not stressful.',
  },
  {
    step: '06',
    icon: <Users className="w-5 h-5" />,
    title: 'Maintenance & Growth',
    description: 'Post-launch retainer packages keep your product secure, fast, and evolving in line with your users\' needs.',
  },
]

export default function About({ navigate, openQuotation }: NavProps & { openQuotation: () => void }) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-orange-pale">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, #F65A00 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <AnimateIn>
            <SectionLabel text="About Devteam" className="mb-5" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-[1.05] tracking-tight mb-5 max-w-3xl">
              We Are Engineers,<br />
              Designers&nbsp;&amp; Problem&nbsp;Solvers.
            </h1>
            <p className="text-gray-body leading-relaxed max-w-xl mb-10">
              Devteam Technology Solutions is a premier digital engineering studio based in Ilorin Kwara, Nigeria. We partner with ambitious companies across Africa and beyond to build mobile apps, web platforms, and digital experiences that drive real business outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={openQuotation}
                className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors duration-150"
              >
                Request Quotation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate('portfolio')}
                className="inline-flex items-center gap-2 border-2 border-navy text-navy px-7 py-3.5 rounded-full font-bold text-sm hover:bg-navy hover:text-white transition-colors duration-150"
              >
                View Our Work
              </button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── OUR STORY ────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn from="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&auto=format"
                    alt="Devteam team collaborating in the office"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Founded badge */}
                <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white rounded-2xl shadow-lg px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-body">Founded</p>
                  <p className="font-black text-navy text-2xl">2019</p>
                  <p className="text-orange text-xs font-semibold">Ilorin Kwara, Nigeria</p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn from="right" delay={100}>
              <SectionLabel text="Our Story" className="mb-5" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-5 leading-tight">
                Built in Lagos,<br />Trusted Globally
              </h2>
              <div className="space-y-4 text-gray-body leading-relaxed">
                <p>
                  Devteam was founded in 2019 by a small team of software engineers who were frustrated by the gap between technical quality and design ambition in the Nigerian tech ecosystem. We set out to prove that world-class digital products could be built right here in Lagos.
                </p>
                <p>
                  Today, we have delivered over 350 projects across mobile apps, enterprise web platforms, and custom API integrations — for clients from fintech startups to established retail groups across Nigeria, the UK, and the United States.
                </p>
                <p>
                  Our studio operates at the intersection of engineering rigour and design craft. Every product we ship is fast, secure, maintainable, and genuinely beautiful.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-line">
                {[
                  { value: '5+', label: 'Years of Excellence' },
                  { value: '350+', label: 'Projects Delivered' },
                  { value: '20+', label: 'Team Members' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="font-black text-navy text-3xl">{value}</p>
                    <p className="text-gray-body text-xs font-medium mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="max-w-2xl mb-14">
            <SectionLabel text="What Drives Us" className="mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-navy leading-tight">
              Four Principles We Never<br />Compromise On
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 80} className="h-full">
                <article className="bg-white rounded-2xl p-6 h-full border border-line hover:shadow-md transition-shadow duration-200">
                  <div className="w-11 h-11 bg-orange/10 text-orange rounded-xl flex items-center justify-center mb-5">
                    {v.icon}
                  </div>
                  <h3 className="font-black text-navy text-base mb-2">{v.title}</h3>
                  <p className="text-gray-body text-sm leading-relaxed">{v.description}</p>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="max-w-2xl mb-14">
            <SectionLabel text="The Team" className="mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-navy leading-tight">
              The People Behind<br />the Products
            </h2>
            <p className="text-gray-body mt-3 leading-relaxed max-w-lg">
              A tight-knit crew of senior engineers, product designers, and delivery specialists — each one hired for both technical depth and collaborative spirit.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <AnimateIn key={member.name} delay={i * 70}>
                <article className="group bg-white border border-line rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-navy text-base leading-tight">{member.name}</h3>
                    <p className="text-orange text-xs font-bold uppercase tracking-wider mt-0.5 mb-2">{member.role}</p>
                    <p className="text-gray-body text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="max-w-2xl mb-14">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange font-bold text-sm" aria-hidden>→</span>
              <span className="text-orange font-semibold text-[11px] tracking-[0.18em] uppercase">How We Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Our Proven 6-Step<br />Delivery Process
            </h2>
            <p className="text-white/55 mt-3 leading-relaxed">
              Every engagement follows the same rigorous, transparent framework — so you always know where your project stands.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
            {PROCESS.map((step, i) => (
              <AnimateIn key={step.step} delay={i * 60}>
                <div className="bg-navy p-7 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-black text-orange/30 text-5xl leading-none select-none">{step.step}</span>
                    <div className="w-10 h-10 bg-orange/10 text-orange rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-black text-white text-base mb-2">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <StatsSection />

      {/* ── WHY DEVTEAM ──────────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn>
              <SectionLabel text="Why Choose Devteam" className="mb-5" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-6 leading-tight">
                Engineering Depth.<br />Design Ambition.<br />Real Accountability.
              </h2>
              <div className="space-y-4">
                {[
                  'Senior-level engineers on every project — no juniors unsupervised',
                  'Dedicated project manager providing weekly progress reports',
                  'Source code ownership transferred to you at project completion',
                  'Post-launch support included in every engagement package',
                  'NDA-ready and GDPR-compliant development practices',
                  'Agile sprints with client-facing demos every two weeks',
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                    <span className="text-gray-body text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>

            <AnimateIn from="right" delay={100}>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&h=520&fit=crop&auto=format"
                    alt="Developer coding on a laptop"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    width={700}
                    height={520}
                  />
                </div>
                {/* Satisfaction badge */}
                <div className="absolute top-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-lg px-5 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-body mb-1">Client Satisfaction</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-black text-navy text-3xl">5.0</span>
                    <span className="text-orange text-sm font-bold">/5.0</span>
                  </div>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-orange" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <CTABanner
        label="Start a Conversation"
        title="Ready to Build Something Remarkable?"
        description="Request a no-obligation quotation and our engineering team will reach out within 24 hours."
        buttonText="Request Quotation"
        onButtonClick={openQuotation}
      />
    </>
  )
}
