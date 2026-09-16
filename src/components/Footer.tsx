import type { Page } from '../App'

interface Props { navigate: (to: Page) => void }

const QUICK_LINKS: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Services', page: 'home' },
  { label: 'Portfolio', page: 'portfolio' },
  { label: 'About Us', page: 'home' },
  { label: 'Contact', page: 'contact' },
]

const SERVICES = ['Mobile Apps', 'Web Development', 'UI/UX Design', 'Maintenance & Support']

const SOCIAL = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
]

export default function Footer({ navigate }: Props) {
  return (
    <footer className="bg-navy text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-2.5 mb-5 group"
              aria-label="Devteam home"
            >
              <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xl leading-none">D</span>
              </div>
              <div className="flex flex-col items-start leading-none gap-0.5">
                <span className="font-black text-white text-base tracking-tight group-hover:text-orange transition-colors">DEVTEAM</span>
                <span className="text-white/50 text-[9px] tracking-[0.18em] font-semibold uppercase">Technology Solutions</span>
              </div>
            </button>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Ideas › Apps › Websites › Impact. We bridge complex engineering with breathtaking UI design to help high-growth companies unlock real leverage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white/90 mb-5 text-xs uppercase tracking-[0.15em]">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, page }) => (
                <li key={label}>
                  <button
                    onClick={() => navigate(page)}
                    className="text-white/55 text-sm hover:text-orange transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white/90 mb-5 text-xs uppercase tracking-[0.15em]">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="text-white/55 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-bold text-white/90 mb-5 text-xs uppercase tracking-[0.15em]">Stay Connected</h3>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {SOCIAL.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange transition-colors flex items-center justify-center text-white/70 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:08109263500" className="text-white/55 text-sm hover:text-orange transition-colors flex items-center gap-2">
                  <span className="text-orange text-xs">📞</span> 08109263500
                </a>
              </li>
              <li>
                <a href="mailto:info@devteam-technology.com" className="text-white/55 text-sm hover:text-orange transition-colors flex items-center gap-2">
                  <span className="text-orange text-xs">✉</span> info@devteam-technology.com
                </a>
              </li>
              <li className="text-white/55 text-sm flex items-center gap-2">
                <span className="text-orange text-xs">📍</span> Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/35 text-[13px]">
            © 2025 Devteam Technology Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/35 text-[13px] hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/35 text-[13px] hover:text-white/70 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
