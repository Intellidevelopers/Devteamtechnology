interface Stat {
  value: string
  label: string
}

interface Props {
  stats?: Stat[]
  dark?: boolean
}

const DEFAULT_STATS: Stat[] = [
  { value: '100+', label: 'Happy Clients' },
  { value: '150+', label: 'Mobile Apps Delivered' },
  { value: '200+', label: 'Websites Launched' },
  { value: '5.0', label: 'Client Satisfaction' },
]

export default function StatsSection({ stats = DEFAULT_STATS, dark = false }: Props) {
  return (
    <section className={`py-14 md:py-20 ${dark ? 'bg-navy' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p
                className={`font-black text-4xl md:text-5xl lg:text-6xl leading-none mb-2 ${
                  dark ? 'text-white' : 'text-navy'
                }`}
              >
                {value}
              </p>
              <p className={`text-sm font-medium ${dark ? 'text-white/50' : 'text-gray-body'}`}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
