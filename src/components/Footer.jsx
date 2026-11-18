import { Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react'

const footerLinks = {
  Product: ['AI Chatbot', 'Bulk Campaigns', 'Lead Management', 'Team Inbox', 'Automation', 'Analytics', 'Integrations', 'WhatsApp API'],
  Company: ['About Us', 'Blog', 'Careers', 'Press Kit', 'Partners', 'Case Studies', 'Affiliate Program'],
  Support: ['Documentation', 'Help Center', 'API Reference', 'Status Page', 'Community', 'Changelog'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Refund Policy'],
}

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5">
      {/* Newsletter Strip */}
      <div className="bg-dark-800/50 border-b border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold text-lg">Stay updated with Digitpic</h4>
              <p className="text-gray-500 text-sm mt-1">Get tips, feature updates, and growth strategies in your inbox.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 bg-dark-700 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-colors"
              />
              <button className="btn-primary py-2.5 px-4 text-sm flex items-center gap-1.5">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <a href="#" className="flex items-center group mb-5">
              <img
                src="/instachat-logo.png"
                alt="InstaChat Logo"
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              India's leading WhatsApp Business API platform. Helping 50,000+ businesses
              sell, support, and grow on WhatsApp.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-dark-700 border border-white/5 hover:border-green-500/30 hover:bg-green-500/10 flex items-center justify-center transition-all duration-200 group"
                >
                  <social.icon className="w-4 h-4 text-gray-500 group-hover:text-green-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* Meta Badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-2 rounded-lg">
              <span className="text-blue-400 text-xs font-semibold">Meta Business Partner</span>
              <span className="text-blue-500">✓</span>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <div key={i}>
              <h5 className="text-white font-semibold text-sm mb-4">{category}</h5>
              <ul className="space-y-3">
                {links.map((link, j) => (
                  <li key={j}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-200 text-sm transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} InstaChat Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span>Made with</span>
            <span className="text-green-500">💚</span>
            <span>in India</span>
            <span className="ml-2">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
