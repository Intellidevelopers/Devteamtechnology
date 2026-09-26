import { useState } from "react"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import AnimateIn from "./AnimateIn"

import SectionLabel from "./SectionLabel"

export interface Testimonial {
  quote: string

  name: string

  role: string

  avatar: string

  rating?: number
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Devteam built our complete logistics and mobile ordering system on schedule. Their technical competence, proactive security practices, and deep engineering capabilities are truly world-class.",

    name: "Chinedu Okafor",

    role: "CTO, FreshMart",

    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format",

    rating: 5,
  },

  {
    quote:
      "Our custom e-commerce platform built by Devteam has transformed how we sell. Fast checkout flows, gorgeous visuals, and zero downtime since launching last year.",

    name: "Amara Bello",

    role: "Founder, Glow Skincare",

    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=face&auto=format",

    rating: 5,
  },

  {
    quote:
      "When you build financial tech products, stability is key. Devteam delivered a secure, lightning-fast cross-border payments app that scaled effortlessly to thousands of active users.",

    name: "Tunde Adebayo",

    role: "CEO, TransferGo NG",

    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=face&auto=format",

    rating: 5,
  },
]

interface Props {
  testimonials?: Testimonial[]
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < count ? "text-orange fill-orange" : "text-line fill-line"
          }`}
        />
      ))}
    </div>
  )
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="bg-white border border-line rounded-2xl p-7 flex flex-col gap-5 h-full">
      <Stars count={t.rating} />
      <blockquote className="text-gray-body text-[15px] leading-relaxed flex-1">
        "{t.quote}"
      </blockquote>
      <div className="flex items-center gap-3 pt-5 border-t border-line">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          loading="lazy"
          width={40}
          height={40}
        />
        <div>
          <p className="font-bold text-navy text-sm leading-tight">{t.name}</p>
          <p className="text-gray-body text-xs mt-0.5">{t.role}</p>
        </div>
      </div>
    </article>
  )
}

export default function TestimonialsSection({
  testimonials = DEFAULT_TESTIMONIALS,
}: Props) {
  const [active, setActive] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn className="mb-12">
          <SectionLabel text="Testimonials" className="mb-4" />
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight max-w-sm">
              What Our Clients Say
            </h2>
            <p className="hidden sm:block text-gray-body text-sm leading-relaxed max-w-xs text-right">
              Testimonials from pioneering startups and established enterprises
              across Africa and beyond.
            </p>
          </div>
        </AnimateIn>

        {/* Desktop: 3 cards side by side */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 80} className="h-full">
              <Card t={t} />
            </AnimateIn>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <Card t={testimonials[active]} />
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-orange w-6" : "bg-line w-2"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setActive(
                    (a) => (a - 1 + testimonials.length) % testimonials.length,
                  )
                }
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center hover:border-orange hover:text-orange transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActive((a) => (a + 1) % testimonials.length)}
                className="w-9 h-9 rounded-full bg-orange flex items-center justify-center text-white hover:bg-orange-hover transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
