import { useState } from 'react'

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  avatar: string
  rating?: number
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Devteam built our complete logistics and mobile ordering system on schedule. Their technical competence, proactive security practices, and deep engineering capabilities are truly world-class.",
    name: 'Chinedu Okafor',
    role: 'CTO, FreshMart',
    company: 'FreshMart',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
    rating: 5,
  },
  {
    quote:
      "Our custom e-commerce and retail platform design by Devteam has totally transformed how we sell. Fast checkout flows, gorgeous visuals, and zero downtime since launching last year.",
    name: 'Amara Bello',
    role: 'Founder, Glow Skincare',
    company: 'Glow Skincare',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&auto=format',
    rating: 5,
  },
  {
    quote:
      "When you build financial tech products, stability is key. Devteam delivered a secure, lightning-fast cross-border payments app that scaled effortlessly to thousands of active users.",
    name: 'Tunde Adebayo',
    role: 'CEO, TransferGo NG',
    company: 'TransferGo NG',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&auto=format',
    rating: 5,
  },
]

interface Props {
  testimonials?: Testimonial[]
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-orange' : 'text-line'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection({ testimonials = DEFAULT_TESTIMONIALS }: Props) {
  const [active, setActive] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange font-bold text-sm" aria-hidden>→</span>
            <span className="text-orange font-semibold text-[11px] tracking-[0.18em] uppercase">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-body mt-3 max-w-xl leading-relaxed">
            Discover how Devteam has helped pioneering startups and structured enterprises build remarkable digital products.
          </p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Mobile: single carousel */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[active]} />
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === active ? 'bg-orange w-6' : 'bg-line'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)}
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center hover:bg-orange-pale transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setActive((a) => (a + 1) % testimonials.length)}
                className="w-9 h-9 rounded-full bg-orange flex items-center justify-center hover:bg-orange-hover transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="bg-white border border-line rounded-2xl p-6 flex flex-col gap-5 hover:shadow-md transition-shadow duration-200">
      <StarRating count={testimonial.rating ?? 5} />
      <blockquote className="text-gray-body text-sm leading-relaxed flex-1">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center gap-3 pt-2 border-t border-line">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0 bg-orange-pale"
          loading="lazy"
          width={40}
          height={40}
        />
        <div>
          <p className="font-bold text-navy text-sm leading-tight">{testimonial.name}</p>
          <p className="text-gray-body text-xs leading-tight mt-0.5">{testimonial.role}</p>
        </div>
      </div>
    </article>
  )
}
