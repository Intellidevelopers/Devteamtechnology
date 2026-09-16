import { useState } from 'react'
import type { NavProps } from '../App'
import SectionLabel from '../components/SectionLabel'
import CTABanner from '../components/CTABanner'

const SERVICES_OPTIONS = [
  'Mobile App Development',
  'Web Development',
  'UI/UX Design',
  'E-Commerce Solutions',
  'Maintenance & Support',
  'Consulting',
]

const BUDGET_OPTIONS = [
  'Under $2,000',
  '$2,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
  "Let's Discuss",
]

const FAQS = [
  {
    question: 'What services does Devteam offer?',
    answer:
      'Devteam Technology Solutions provides premium software engineering, including cross-platform iOS and Android mobile app development, high-traffic enterprise web platforms, custom UI/UX design backed by research, and 24/7 post-launch maintenance & support.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on complexity and scope. A typical mobile app takes 8–16 weeks, while web projects range from 4–12 weeks. During our initial consultation we give you a detailed timeline tailored to your requirements.',
  },
  {
    question: "What is your pricing model?",
    answer:
      'We offer fixed-price engagements for well-defined projects and time-and-materials arrangements for evolving scopes. After a free discovery call we provide a transparent proposal with no hidden fees.',
  },
  {
    question: 'Do you offer maintenance and support?',
    answer:
      'Yes. We provide 24/7 monitoring, security patches, performance optimisation, and feature updates through flexible monthly retainer packages after launch.',
  },
  {
    question: 'How do I get started with a project?',
    answer:
      "Simply fill out the contact form on this page or call us directly. We'll schedule a free 30-minute discovery call to understand your goals, then prepare a detailed proposal within 48 hours.",
  },
]

export default function Contact({ navigate }: NavProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    details: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'A valid email is required.'
    if (!form.phone.trim()) e.phone = 'Phone number is required.'
    if (!form.service) e.service = 'Please select a service.'
    if (!form.details.trim()) e.details = 'Please describe your project.'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
  })

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-orange-pale">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <div
            className="absolute -top-16 -right-16 w-[360px] h-[360px] rounded-full opacity-40"
            style={{ background: 'radial-gradient(circle, #F65A0030 0%, transparent 70%)' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <SectionLabel text="Contact Us" className="mb-5" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-tight mb-5 max-w-2xl">
            Let's Build Something{' '}
            <span className="text-orange">Amazing Together</span>
          </h1>
          <p className="text-gray-body leading-relaxed max-w-lg">
            Have a game-changing product in mind or need robust engineering support? Reach out to Devteam Technology Solutions. Our engineers, designers, and consultants are ready to accelerate your tech roadmap.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: info */}
            <div>
              <SectionLabel text="Get In Touch" className="mb-5" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4 leading-tight">
                We'd Love to Hear From You
              </h2>
              <p className="text-gray-body mb-10 leading-relaxed">
                Whether you need full-lifecycle product development, staff augmentation, or dedicated tech maintenance, we provide seamless execution.
              </p>

              {/* Contact details */}
              <div className="space-y-5 mb-10">
                {[
                  {
                    label: 'Phone Support',
                    value: '08109263500',
                    href: 'tel:08109263500',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Email Address',
                    value: 'info@devteam-technology.com',
                    href: 'mailto:info@devteam-technology.com',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Our Headquarters',
                    value: 'Lagos, Nigeria',
                    href: '#map',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Business Hours',
                    value: 'Monday – Friday, 9:00 AM – 6:00 PM',
                    href: undefined,
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                ].map(({ label, value, href, icon }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-orange/10 rounded-xl flex items-center justify-center text-orange flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-body mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-navy font-semibold text-sm hover:text-orange transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-navy font-semibold text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social media */}
              <div>
                <p className="font-bold text-navy text-sm mb-4">Follow Us on Social Media</p>
                <div className="flex gap-3">
                  {['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map((name) => (
                    <a
                      key={name}
                      href="#"
                      aria-label={name}
                      className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-gray-body hover:bg-orange hover:text-white hover:border-orange transition-all duration-150"
                    >
                      <span className="text-xs font-bold">{name[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <SuccessState onReset={() => setSubmitted(false)} />
              ) : (
                <>
                  <h2 className="font-black text-navy text-xl mb-1.5">Send Us a Message</h2>
                  <p className="text-gray-body text-sm mb-7">
                    Complete the form below and an engineer will contact you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Full Name" error={errors.name} required>
                        <input
                          type="text"
                          placeholder="Chinedu Okafor"
                          {...field('name')}
                          className={inputClass(!!errors.name)}
                          aria-required
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                      </FormField>
                      <FormField label="Email Address" error={errors.email} required>
                        <input
                          type="email"
                          placeholder="chinedu@example.com"
                          {...field('email')}
                          className={inputClass(!!errors.email)}
                          aria-required
                        />
                      </FormField>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormField label="Phone Number" error={errors.phone} required>
                        <input
                          type="tel"
                          placeholder="08109263500"
                          {...field('phone')}
                          className={inputClass(!!errors.phone)}
                          aria-required
                        />
                      </FormField>
                      <FormField label="Company Name">
                        <input
                          type="text"
                          placeholder="Glow Skincare"
                          {...field('company')}
                          className={inputClass(false)}
                        />
                      </FormField>
                    </div>

                    {/* Service */}
                    <FormField label="Service Required" error={errors.service} required>
                      <div className="relative">
                        <select
                          {...field('service')}
                          className={`${inputClass(!!errors.service)} appearance-none pr-10`}
                          aria-required
                        >
                          <option value="">Select a service...</option>
                          {SERVICES_OPTIONS.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-body pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </FormField>

                    {/* Budget */}
                    <FormField label="Project Budget">
                      <div className="relative">
                        <select {...field('budget')} className={`${inputClass(false)} appearance-none pr-10`}>
                          <option value="">Select budget range...</option>
                          {BUDGET_OPTIONS.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                        <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-body pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </FormField>

                    {/* Details */}
                    <FormField label="Project Details" error={errors.details} required>
                      <textarea
                        rows={4}
                        placeholder="Describe your requirements, goals, or platform vision..."
                        {...field('details')}
                        className={`${inputClass(!!errors.details)} resize-none`}
                        aria-required
                      />
                    </FormField>

                    <button
                      type="submit"
                      className="w-full bg-orange text-white py-4 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
                    >
                      Send Message →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ──────────────────────────────── */}
      <section id="map" className="py-16 md:py-24 bg-orange-pale overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Decorative blobs */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-orange/10 pointer-events-none" aria-hidden />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-orange/10 pointer-events-none" aria-hidden />

          {/* HQ card */}
          <div className="relative z-10 max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-orange rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-base leading-none">D</span>
              </div>
              <div>
                <p className="font-black text-navy text-[11px] uppercase tracking-wider">Devteam Headquarters</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                { icon: '📍', text: 'Lagos, Nigeria' },
                { icon: '📞', text: '08109263500' },
                { icon: '✉', text: 'info@devteam-technology.com' },
              ].map(({ icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-gray-body">
                  <span className="text-orange" aria-hidden>{icon}</span> {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Map placeholder */}
          <div className="mt-8 rounded-2xl overflow-hidden bg-gray-200 h-48 md:h-64 flex items-center justify-center">
            <div className="text-center text-gray-body">
              <svg className="w-10 h-10 mx-auto mb-2 text-orange/40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-sm font-medium">Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel text="Frequently Asked Questions" center className="mb-4" />
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Common Questions</h2>
            <p className="text-gray-body">
              Got questions about how we work, our timelines, or engagement options? Here are swift answers to clarify.
            </p>
          </div>

          <div className="space-y-3" role="list">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={faq.question}
                  className={`border rounded-2xl overflow-hidden transition-colors ${
                    isOpen ? 'border-orange/30 bg-orange-pale' : 'border-line bg-white'
                  }`}
                  role="listitem"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-navy text-sm md:text-base pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-orange flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-6 pb-5 text-gray-body text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <CTABanner
        label="Ready to Start?"
        title="Let's Turn Your Ideas into Reality"
        description="Get in touch today to talk through your project needs, design priorities, or to schedule a diagnostic deep-dive with our engineers."
        buttonText="Get Started"
        onButtonClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </>
  )
}

function inputClass(hasError: boolean) {
  return `w-full px-4 py-3 rounded-xl border text-sm text-navy placeholder:text-gray-400 bg-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent ${
    hasError ? 'border-red-400 bg-red-50' : 'border-line hover:border-gray-300'
  }`
}

function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-navy font-semibold text-sm">
        {label}
        {required && <span className="text-orange ml-0.5" aria-hidden>*</span>}
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-xs" role="alert">{error}</p>
      )}
    </div>
  )
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="font-black text-navy text-2xl mb-3">Message Sent!</h3>
      <p className="text-gray-body text-sm leading-relaxed mb-8 max-w-xs">
        Thank you for reaching out. One of our engineers will get back to you within 24 hours.
      </p>
      <button
        onClick={onReset}
        className="bg-orange text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors"
      >
        Send Another Message
      </button>
    </div>
  )
}
