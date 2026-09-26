import { Phone, Mail, MapPin } from 'lucide-react'
import type { Page } from '../App'

interface Props { navigate: (to: Page) => void }

const QUICK_LINKS: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'Services', page: 'home' },
  { label: 'Portfolio', page: 'portfolio' },
  { label: 'About Us', page: 'about' },
  { label: 'Contact', page: 'contact' },
]

const SERVICES = ['Mobile Apps', 'Web Development', 'UI/UX Design', 'Maintenance & Support']

const SOCIAL = [
  { label: 'Facebook', letter: 'f', href: '#' },
  { label: 'Instagram', letter: 'in', href: '#' },
  { label: 'LinkedIn', letter: 'li', href: '#' },
  { label: 'X (Twitter)', letter: 'x', href: '#' },
  { label: 'YouTube', letter: 'yt', href: '#' },
]

const CONTACT = [
  { Icon: Phone, text: '08109263500', href: 'tel:08109263500' },
  { Icon: Mail, text: 'info@devteam-technology.com', href: 'mailto:info@devteam-technology.com' },
  { Icon: MapPin, text: 'Lagos, Nigeria', href: undefined },
]

export default function Footer({ navigate }: Props) {
  return (
    <footer className="bg-navy text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => navigate('home')}
              className="flex items-center gap-2.5 mb-5 group"
              aria-label="Devteam home"
            >
              <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xl leading-none">D</span>
              </div>
              <div className="flex flex-col items-start leading-none gap-[3px]">
                <span className="font-black text-white text-base tracking-tight group-hover:text-orange transition-colors">DEVTEAM</span>
                <span className="text-white/40 text-[9px] tracking-[0.2em] font-semibold uppercase">Technology Solutions</span>
              </div>
            </button>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Ideas › Apps › Websites › Impact. We bridge complex engineering with breathtaking UI design to help high-growth companies unlock real leverage.
            </p>
            <p className="text-white/25 text-xs mt-4 font-mono tracking-wider">RC-9764498</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white/80 mb-5 text-[11px] uppercase tracking-[0.18em]">Quick Links</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, page }) => (
                <li key={label}>
                  <button
                    onClick={() => navigate(page)}
                    className="text-white/50 text-sm hover:text-orange transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white/80 mb-5 text-[11px] uppercase tracking-[0.18em]">Our Services</h3>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="text-white/50 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-bold text-white/80 mb-5 text-[11px] uppercase tracking-[0.18em]">Stay Connected</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {SOCIAL.map(({ label, letter, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/8 hover:bg-orange transition-colors flex items-center justify-center text-white/50 hover:text-white"
                >
                  <span className="text-[10px] font-black uppercase tracking-tighter leading-none">{letter}</span>
                </a>
              ))}
            </div>
            <ul className="space-y-3">
              {CONTACT.map(({ Icon, text, href }) => (
                <li key={text}>
                  {href ? (
                    <a href={href} className="flex items-start gap-2.5 text-white/50 hover:text-orange transition-colors text-sm group">
                      <Icon className="w-4 h-4 text-orange/70 group-hover:text-orange flex-shrink-0 mt-0.5" />
                      {text}
                    </a>
                  ) : (
                    <span className="flex items-start gap-2.5 text-white/50 text-sm">
                      <Icon className="w-4 h-4 text-orange/70 flex-shrink-0 mt-0.5" />
                      {text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-[12px]">
            © 2025 Devteam Technology Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-[12px] hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 text-[12px] hover:text-white/60 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
