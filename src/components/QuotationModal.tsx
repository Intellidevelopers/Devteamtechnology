import { useEffect, useRef, useState } from "react"

import { X, ChevronDown, CheckCircle } from "lucide-react"

import copImg from "../assets/cop.png"

interface Props {
  isOpen: boolean

  onClose: () => void
}

const SERVICES = [
  "Mobile App Development",

  "Web Development",

  "UI/UX Design",

  "E-Commerce Solutions",

  "API Integration",

  "Maintenance & Support",

  "Consulting",
]

const BUDGETS = [
  "Under $2,000",

  "$2,000 – $5,000",

  "$5,000 – $10,000",

  "$10,000 – $25,000",

  "$25,000+",

  "Let's Discuss",
]

const TIMELINES = [
  "Less than 1 month",

  "1 – 3 months",

  "3 – 6 months",

  "6+ months",

  "Ongoing / Retainer",
]

type FormState = {
  name: string

  email: string

  phone: string

  company: string

  service: string

  budget: string

  timeline: string

  description: string
}

const INIT: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",

  service: "",
  budget: "",
  timeline: "",
  description: "",
}

export default function QuotationModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState<FormState>(INIT)

  const [errors, setErrors] = useState<Partial<FormState>>({})

  const [sent, setSent] = useState(false)

  const firstInputRef = useRef<HTMLInputElement>(null)

  const modalRef = useRef<HTMLDivElement>(null)

  /* Lock scroll */

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open")

      setTimeout(() => firstInputRef.current?.focus(), 80)
    } else {
      document.body.classList.remove("modal-open")
    }

    return () => document.body.classList.remove("modal-open")
  }, [isOpen])

  /* Escape key */

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) window.addEventListener("keydown", handler)

    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, onClose])

  const set =
    (k: keyof FormState) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e: Partial<FormState> = {}

    if (!form.name.trim()) e.name = "Required"

    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required"

    if (!form.phone.trim()) e.phone = "Required"

    if (!form.service) e.service = "Please select"

    if (!form.description.trim()) e.description = "Required"

    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const errs = validate()

    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setErrors({})

    setSent(true)
  }

  const handleClose = () => {
    onClose()

    setTimeout(() => {
      setSent(false)
      setForm(INIT)
      setErrors({})
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-2xl bg-white rounded-3xl shadow-2xl flex flex-col max-h-[92vh] animate-in"
        style={{
          animation: "modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both",
        }}
      >
        {/* Inline keyframes */}
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.95) translateY(16px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        {/* Header */}
        <div className="flex items-start justify-between px-7 pt-7 pb-5 border-b border-line flex-shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <img
                src={copImg}
                alt="Devteam Technology Solutions"
                className="w-40 sm:w-46 h-auto"
              />
            </div>
            <h2 id="modal-title" className="font-black text-navy text-2xl">
              Request a Quotation
            </h2>
            <p className="text-gray-body text-sm mt-0.5">
              Tell us about your project — we respond within 24 hours.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-body hover:text-navy flex-shrink-0 ml-4"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1">
          {sent ? (
            <SuccessView onClose={handleClose} />
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="px-7 py-7 space-y-5"
            >
              {/* Row: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Full Name" error={errors.name} required>
                  <input
                    ref={firstInputRef}
                    type="text"
                    placeholder="Chinedu Okafor"
                    value={form.name}
                    onChange={set("name")}
                    className={inp(!!errors.name)}
                  />
                </Field>
                <Field label="Email Address" error={errors.email} required>
                  <input
                    type="email"
                    placeholder="chinedu@example.com"
                    value={form.email}
                    onChange={set("email")}
                    className={inp(!!errors.email)}
                  />
                </Field>
              </div>

              {/* Row: Phone + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Phone Number" error={errors.phone} required>
                  <input
                    type="tel"
                    placeholder="+234 811 234 5678"
                    value={form.phone}
                    onChange={set("phone")}
                    className={inp(!!errors.phone)}
                  />
                </Field>
                <Field label="Company Name">
                  <input
                    type="text"
                    placeholder="Glow Skincare Ltd."
                    value={form.company}
                    onChange={set("company")}
                    className={inp(false)}
                  />
                </Field>
              </div>

              {/* Service */}
              <Field label="Service Required" error={errors.service} required>
                <SelectField
                  value={form.service}
                  onChange={set("service")}
                  error={!!errors.service}
                  placeholder="Select a service..."
                  options={SERVICES}
                />
              </Field>

              {/* Row: Budget + Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Project Budget">
                  <SelectField
                    value={form.budget}
                    onChange={set("budget")}
                    error={false}
                    placeholder="Select budget range..."
                    options={BUDGETS}
                  />
                </Field>
                <Field label="Preferred Timeline">
                  <SelectField
                    value={form.timeline}
                    onChange={set("timeline")}
                    error={false}
                    placeholder="Select timeline..."
                    options={TIMELINES}
                  />
                </Field>
              </div>

              {/* Description */}
              <Field
                label="Project Description"
                error={errors.description}
                required
              >
                <textarea
                  rows={4}
                  placeholder="Describe what you'd like to build, key features, target audience, and any specific technical requirements..."
                  value={form.description}
                  onChange={set("description")}
                  className={`${inp(!!errors.description)} resize-none`}
                />
              </Field>

              {/* Footer */}
              <div className="flex items-center justify-between pt-1 gap-4 flex-wrap">
                <p className="text-xs text-gray-body">
                  Your information is private and never shared with third
                  parties.
                </p>
                <button
                  type="submit"
                  className="flex-shrink-0 bg-orange text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2"
                >
                  Submit Request →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function SelectField({
  value,
  onChange,
  error,
  placeholder,
  options,
}: {
  value: string

  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void

  error: boolean

  placeholder: string

  options: string[]
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`${inp(error)} appearance-none pr-9`}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-body pointer-events-none" />
    </div>
  )
}

function Field({
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
      <label className="text-navy font-semibold text-[13px]">
        {label}
        {required && (
          <span className="text-orange ml-0.5" aria-hidden>
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-xs" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function SuccessView({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-14 px-8">
      <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-center mb-6">
        <CheckCircle className="w-8 h-8 text-green-500" strokeWidth={1.5} />
      </div>
      <h3 className="font-black text-navy text-2xl mb-3">Quotation Sent!</h3>
      <p className="text-gray-body text-sm leading-relaxed mb-8 max-w-sm">
        Thank you for reaching out to Devteam. An engineer will review your
        project details and respond within 24 business hours.
      </p>
      <button
        onClick={onClose}
        className="bg-orange text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-orange-hover transition-colors"
      >
        Close
      </button>
    </div>
  )
}

const inp = (err: boolean) =>
  `w-full px-4 py-3 rounded-xl border text-sm text-navy bg-white placeholder:text-gray-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent ${
    err ? "border-red-300 bg-red-50/40" : "border-line hover:border-gray-300"
  }`
