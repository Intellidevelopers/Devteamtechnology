import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronUp, CheckCircle, ArrowRight } from 'lucide-react'
import type { NavProps } from '../App'
import AnimateIn from '../components/AnimateIn'
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
    q: 'What services does Devteam offer?',
    a: 'Devteam Technology Solutions provides premium software engineering including cross-platform iOS and Android mobile app development, high-traffic enterprise web platforms, custom UI/UX design backed by research, and 24/7 post-launch maintenance & support.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary based on complexity. A typical mobile app takes 8–16 weeks, while web projects range from 4–12 weeks. During our initial consultation we give you a detailed timeline tailored to your requirements.',
  },
  {
    q: "What is your pricing model?",
    a: 'We offer fixed-price engagements for well-defined projects and time-and-materials arrangements for evolving scopes. After a free discovery call we provide a transparent proposal with no hidden fees.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes. We provide 24/7 monitoring, security patches, performance optimisation, and feature updates through flexible monthly retainer packages after launch.',
  },
  {
    q: 'How do I get started?',
    a: "Fill out the form on this page or call us directly. We'll schedule a free 30-minute discovery call to understand your goals, then prepare a detailed proposal within 48 hours.",
  },
]

type Form = { name: string; email: string; phone: string; company: string; service: string; budget: string; details: string }
const INIT: Form = { name: '', email: '', phone: '', company: '', service: '', budget: '', details: '' }

export default function Contact({ navigate, openQuotation }: NavProps) {
  const [form, setForm] = useState<Form>(INIT)
  const [errors, setErrors] = useState<Partial<Form>>({})
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e: Partial<Form> = {}
    if (!form.name.trim()) e.name = 'Required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.service) e.service = 'Please select'
    if (!form.details.trim()) e.details = 'Required'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSent(true)
  }

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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <AnimateIn>
            <SectionLabel text="Contact Us" className="mb-5" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-[1.04] tracking-tight mb-5 max-w-2xl">
              Let's Build Something{' '}
              <span className="text-orange">Amazing Together</span>
            </h1>
            <p className="text-gray-body leading-relaxed max-w-lg text-[15px]">
              Have a game-changing product in mind? Reach out to Devteam Technology Solutions. Our engineers, designers, and consultants are ready to accelerate your tech roadmap.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info */}
            <AnimateIn>
              <SectionLabel text="Get In Touch" className="mb-5" />
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-4 leading-tight">
                We'd Love to Hear From You
              </h2>
              <p className="text-gray-body mb-10 leading-relaxed text-[15px]">
                Whether you need full-lifecycle product development, staff augmentation, or dedicated technical maintenance, we provide seamless execution with full transparency.
              </p>

              <div className="space-y-5 mb-10">
                {[
                  { Icon: Phone, label: 'Phone', value: '08109263500', href: 'tel:08109263500' },
                  { Icon: Mail, label: 'Email', value: 'devteamtechnologysolutions@gmail.com', href: 'mailto:devteamtechnologysolutions@gmail.com' },
                  { Icon: MapPin, label: 'Headquarters', value: 'Ilorin Kwara, Nigeria', href: undefined },
                  { Icon: Clock, label: 'Business Hours', value: 'Monday – Friday, 9:00 AM – 6:00 PM WAT', href: undefined },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-orange/10 rounded-xl flex items-center justify-center text-orange flex-shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-body mb-0.5">{label}</p>
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

              <div className="pt-6 border-t border-line">
                <p className="font-bold text-navy text-sm mb-2">Registered Company</p>
                <p className="text-gray-body text-sm font-mono tracking-wider">RC&#8209;9764498</p>
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn from="right" delay={100}>
              <div className="bg-white border border-line rounded-2xl p-6 sm:p-8 shadow-sm">
                {sent ? (
                  <SuccessView onReset={() => setSent(false)} />
                ) : (
                  <>
                    <h2 className="font-black text-navy text-xl mb-1.5">Send Us a Message</h2>
                    <p className="text-gray-body text-sm mb-7">One of our engineers will contact you within 24 hours.</p>

                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Full Name" error={errors.name} required>
                          <input type="text" placeholder="Chinedu Okafor" value={form.name} onChange={set('name')} className={inp(!!errors.name)} />
                        </Field>
                        <Field label="Email Address" error={errors.email} required>
                          <input type="email" placeholder="chinedu@example.com" value={form.email} onChange={set('email')} className={inp(!!errors.email)} />
                        </Field>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Phone Number" error={errors.phone} required>
                          <input type="tel" placeholder="+234 811 234 5678" value={form.phone} onChange={set('phone')} className={inp(!!errors.phone)} />
                        </Field>
                        <Field label="Company Name">
                          <input type="text" placeholder="Glow Skincare Ltd." value={form.company} onChange={set('company')} className={inp(false)} />
                        </Field>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field label="Service Required" error={errors.service} required>
                          <SelectWrap value={form.service} onChange={set('service')} error={!!errors.service} placeholder="Select service..." options={SERVICES_OPTIONS} />
                        </Field>
                        <Field label="Project Budget">
                          <SelectWrap value={form.budget} onChange={set('budget')} error={false} placeholder="Select budget..." options={BUDGET_OPTIONS} />
                        </Field>
                      </div>

                      <Field label="Project Details" error={errors.details} required>
                        <textarea
                          rows={4}
                          placeholder="Describe what you'd like to build, key features, target audience..."
                          value={form.details}
                          onChange={set('details')}
                          className={`${inp(!!errors.details)} resize-none`}
                        />
                      </Field>

                      <button type="submit" className="w-full bg-orange text-white py-4 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors duration-150 inline-flex items-center justify-center gap-2">
                        Send Message <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ──────────────────────────── */}
      <section id="map" className="py-16 md:py-24 bg-orange-pale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="max-w-sm mx-auto mb-8 bg-white rounded-2xl shadow-lg p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-orange rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-base leading-none">D</span>
              </div>
              <p className="font-black text-navy text-[11px] uppercase tracking-wider">Devteam Headquarters</p>
            </div>
            <ul className="space-y-3">
              {[
                { Icon: MapPin, text: 'Ilorin Kwara, Nigeria' },
                { Icon: Phone, text: '08109263500' },
                { Icon: Mail, text: 'devteamtechnologysolutions@gmail.com' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-gray-body">
                  <Icon className="w-4 h-4 text-orange flex-shrink-0" strokeWidth={1.75} />
                  {text}
                </li>
              ))}
            </ul>
          </AnimateIn>

          <div className="rounded-2xl overflow-hidden bg-gray-200 h-48 md:h-56 flex items-center justify-center">
            <div className="text-center text-gray-body">
              <MapPin className="w-10 h-10 mx-auto mb-2 text-orange/30" strokeWidth={1} />
              <p className="text-sm font-medium">Ilorin Kwara, Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn className="text-center mb-12">
            <SectionLabel text="FAQ" center className="mb-4 justify-center" />
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Common Questions</h2>
            <p className="text-gray-body text-[15px]">
              Swift answers to the questions we hear most from clients.
            </p>
          </AnimateIn>

          <div className="space-y-2.5">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <AnimateIn key={faq.q} delay={i * 50}>
                  <div className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${isOpen ? 'border-orange/25 bg-orange-pale' : 'border-line bg-white'}`}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-navy text-[14px] md:text-[15px]">{faq.q}</span>
                      {isOpen
                        ? <ChevronUp className="w-4 h-4 text-orange flex-shrink-0" />
                        : <ChevronDown className="w-4 h-4 text-gray-body flex-shrink-0" />
                      }
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="px-6 pb-5 text-gray-body text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </AnimateIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <CTABanner
        label="Ready to Start?"
        title="Let's Turn Your Ideas into Reality"
        description="Request a quotation and our team will reach out within 24 hours."
        buttonText="Request Quotation"
        onButtonClick={openQuotation}
      />
    </>
  )
}

const inp = (err: boolean) =>
  `w-full px-4 py-3 rounded-xl border text-[14px] text-navy bg-white placeholder:text-gray-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent ${
    err ? 'border-red-300 bg-red-50/40' : 'border-line hover:border-gray-300'
  }`

function SelectWrap({ value, onChange, error, placeholder, options }: { value: string; onChange: React.ChangeEventHandler<HTMLSelectElement>; error: boolean; placeholder: string; options: string[] }) {
  return (
    <div className="relative">
      <select value={value} onChange={onChange} className={`${inp(error)} appearance-none pr-9`}>
        <option value="">{placeholder}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-body pointer-events-none" />
    </div>
  )
}

function Field({ label, error, required, children }: { label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-navy font-semibold text-[13px]">
        {label}{required && <span className="text-orange ml-0.5" aria-hidden>*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs" role="alert">{error}</p>}
    </div>
  )
}

function SuccessView({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12 px-4">
      <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center mb-5">
        <CheckCircle className="w-8 h-8 text-green-500" strokeWidth={1.5} />
      </div>
      <h3 className="font-black text-navy text-2xl mb-3">Message Sent!</h3>
      <p className="text-gray-body text-sm leading-relaxed mb-8 max-w-xs">
        Thank you for reaching out. An engineer will get back to you within 24 hours.
      </p>
      <button onClick={onReset} className="bg-orange text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors">
        Send Another Message
      </button>
    </div>
  )
}
