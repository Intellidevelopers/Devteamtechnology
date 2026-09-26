import { Zap, ArrowRight } from "lucide-react"

import AnimateIn from "./AnimateIn"

interface Props {
  label?: string

  title: string

  description?: string

  buttonText: string

  onButtonClick?: () => void
}

export default function CTABanner({
  label,
  title,
  description,
  buttonText,
  onButtonClick,
}: Props) {
  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <AnimateIn>
        <div
          className="relative max-w-7xl mx-auto bg-orange rounded-2xl overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 85% 50%, rgba(255,255,255,0.07) 0%, transparent 55%), radial-gradient(ellipse at 15% 80%, rgba(0,0,0,0.05) 0%, transparent 50%)",
          }}
        >
          {/* Decorative */}
          <div
            className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-white/5 pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute -bottom-8 right-1/3 w-36 h-36 rounded-full bg-black/04 pointer-events-none"
            aria-hidden
          />

          <div className="relative px-7 sm:px-10 py-10 md:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="flex items-start gap-4 max-w-xl">
              <div className="mt-1 w-11 h-11 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <div>
                {label && (
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.22em] mb-2">
                    {label}
                  </p>
                )}
                <h2 className="text-white font-black text-2xl sm:text-3xl lg:text-[2rem] leading-tight">
                  {title}
                </h2>
                {description && (
                  <p className="text-white/60 text-sm mt-2 leading-relaxed">
                    {description}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={onButtonClick}
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-orange px-7 py-3.5 rounded-full font-bold text-sm hover:bg-orange-pale transition-colors duration-150 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </AnimateIn>
    </section>
  )
}
