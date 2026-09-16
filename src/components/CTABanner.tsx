interface Props {
  label?: string
  title: string
  description?: string
  buttonText: string
  onButtonClick?: () => void
}

export default function CTABanner({ label, title, description, buttonText, onButtonClick }: Props) {
  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="relative max-w-7xl mx-auto bg-orange rounded-2xl overflow-hidden"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(0,0,0,0.06) 0%, transparent 50%)',
        }}
      >
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" aria-hidden />
        <div className="absolute -bottom-8 right-1/4 w-32 h-32 rounded-full bg-black/05 pointer-events-none" aria-hidden />

        <div className="relative px-6 sm:px-10 py-10 md:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex items-start gap-4 max-w-xl">
            {/* Icon */}
            <div className="mt-1 w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              {label && (
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{label}</p>
              )}
              <h2 className="text-white font-black text-2xl sm:text-3xl lg:text-[2rem] leading-tight">{title}</h2>
              {description && (
                <p className="text-white/65 text-sm mt-2 leading-relaxed">{description}</p>
              )}
            </div>
          </div>

          <button
            onClick={onButtonClick}
            className="flex-shrink-0 bg-white text-orange px-7 py-3.5 rounded-full font-bold text-sm hover:bg-orange-pale transition-colors duration-150 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange"
          >
            {buttonText} →
          </button>
        </div>
      </div>
    </section>
  )
}
