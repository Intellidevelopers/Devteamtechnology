import type { NavProps } from '../App'
import SectionLabel from '../components/SectionLabel'
import CTABanner from '../components/CTABanner'
import StatsSection from '../components/StatsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ProjectCard from '../components/ProjectCard'
import { PROJECTS } from '../data/projects'

const SERVICES = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth={2.5} />
      </svg>
    ),
    title: 'Mobile Apps',
    description:
      'Premium iOS and Android experiences native-engineered to delight your audience and scale smoothly.',
    link: 'Learn More',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <polyline points="8 21 12 17 16 21" />
      </svg>
    ),
    title: 'Web Development',
    description:
      'Secure enterprise platforms and custom web applications optimised for massive user search & traffic.',
    link: 'Learn More',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" strokeLinecap="round" />
      </svg>
    ),
    title: 'UI/UX Design',
    description:
      'Stunning modern visuals combined with awareness-intuitive user flows backed by solid psychological research.',
    link: 'Learn More',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Support',
    description:
      '24/7 technical monitoring, database backups, performance tuning, and updates to keep systems secure.',
    link: 'Learn More',
  },
]

export default function Home({ navigate }: NavProps) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-orange-pale">
        {/* Blob decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div
            className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-40"
            style={{ background: 'radial-gradient(circle, #F65A0030 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 right-[10%] w-64 h-64 rounded-full opacity-50"
            style={{ background: 'radial-gradient(circle, #F65A0025 0%, transparent 70%)' }}
          />
          <div
            className="absolute top-1/2 -right-10 w-48 h-48 rounded-full opacity-30"
            style={{ background: '#F65A00' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-orange font-bold text-xs tracking-widest uppercase">Innovate · Build · Grow</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-navy leading-[1.05] tracking-tight mb-4">
                We Build{' '}
                <span className="text-orange">Mobile Apps&nbsp;&</span>
                <br />
                <span className="text-orange">Websites</span>
              </h1>

              <p className="text-navy font-bold text-xl md:text-2xl mb-5">Modern. Fast. Scalable.</p>

              <p className="text-gray-body leading-relaxed mb-8 max-w-md">
                Devteam is Lagos' premier digital engineering partner. We craft beautiful, high-performing apps and custom web platforms that scale your business, optimise complex operations, and delight users globally.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
                >
                  Get Started <span aria-hidden>+</span>
                </button>
                <button
                  onClick={() => navigate('portfolio')}
                  className="inline-flex items-center gap-2 border-2 border-navy text-navy px-7 py-3.5 rounded-full font-bold text-sm hover:bg-navy hover:text-white transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
                >
                  View Our Work
                </button>
              </div>
            </div>

            {/* Right: mockup images */}
            <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-sm lg:max-w-none">
                {/* Main laptop image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&h=480&fit=crop&auto=format"
                    alt="Mobile app and website development mockups"
                    className="w-full h-auto object-cover"
                    width={700}
                    height={480}
                  />
                </div>
                {/* Floating phone */}
                <div className="absolute -bottom-6 -left-6 w-28 md:w-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=350&fit=crop&auto=format"
                    alt="Mobile app interface"
                    className="w-full h-auto object-cover"
                    width={200}
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel text="Our Services" className="mb-4" />
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight max-w-xl">
                Complete Digital Solutions for Your Business
              </h2>
              <p className="text-gray-body text-sm leading-relaxed max-w-xs sm:text-right">
                From concept to deployment, we build high-quality digital products tailored to drive growth, satisfaction, and real business efficiency.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section id="about" className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: copy */}
            <div>
              <SectionLabel text="About Devteam" className="mb-5" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight mb-6">
                Your Trusted Partner in Digital Innovation
              </h2>
              <p className="text-gray-body leading-relaxed mb-8">
                We are a team of passionate developers, designers and tech enthusiasts dedicated to building premium digital products that solve real-world Nigerian and global problems while driving robust business growth. Our absolute focus lies in unmatched code quality, rapid execution, and complete client satisfaction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: '🛡️', label: 'Reliable & Secure' },
                  { icon: '💡', label: 'Experienced Team' },
                  { icon: '⏱️', label: 'On-Time Delivery' },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <span className="text-orange text-base" aria-hidden>{icon}</span>
                    <span className="text-navy font-semibold text-sm">{label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate('contact')}
                className="inline-flex items-center gap-2 bg-orange text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors duration-150"
              >
                Learn More <span aria-hidden>+</span>
              </button>
            </div>

            {/* Right: image + floating card */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=700&h=520&fit=crop&auto=format"
                  alt="Developer working on a laptop at a desk"
                  className="w-full h-auto object-cover"
                  width={700}
                  height={520}
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 max-w-[200px]">
                <div className="w-9 h-9 bg-orange rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-navy text-xs leading-tight">Turning Ideas</p>
                  <p className="text-orange text-[10px] font-semibold leading-tight">Into Digital Reality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <StatsSection />

      {/* ── FEATURED PROJECTS ────────────────────────── */}
      <section className="py-16 md:py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div>
              <SectionLabel text="Our Work" className="mb-4" />
              <h2 className="text-3xl md:text-4xl font-black text-navy">Featured Projects</h2>
              <p className="text-gray-body mt-2 max-w-sm">
                Explore our portfolio of industry-defining websites and premium mobile applications.
              </p>
            </div>
            <button
              onClick={() => navigate('portfolio')}
              className="flex-shrink-0 inline-flex items-center gap-1.5 border border-navy text-navy px-5 py-2.5 rounded-full font-bold text-sm hover:bg-navy hover:text-white transition-colors duration-150 self-start sm:self-center"
            >
              View All Projects <span aria-hidden>→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.slice(0, 4).map((project) => (
              <ProjectCard key={project.id} project={project} navigate={navigate} />
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
        description="We're ready to design and engineer a premium product that propels your business ahead of the competition. Talk with our engineering experts today."
        buttonText="Get Started"
        onButtonClick={() => navigate('contact')}
      />
    </>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <article className="bg-white border border-line rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 flex flex-col gap-4">
      <div className="w-12 h-12 bg-orange rounded-xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-black text-navy text-base mb-2">{title}</h3>
        <p className="text-gray-body text-sm leading-relaxed">{description}</p>
      </div>
      <button className="inline-flex items-center gap-1 text-orange text-sm font-bold mt-auto hover:gap-2.5 transition-all duration-150">
        Learn More <span aria-hidden>→</span>
      </button>
    </article>
  )
}
