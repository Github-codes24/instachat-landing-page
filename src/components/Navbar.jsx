import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  {
    label: 'Product',
    children: [
      { label: 'AI Chatbot', href: '#chatbot' },
      { label: 'Bulk Campaigns', href: '#campaigns' },
      { label: 'Lead Management', href: '#features' },
      { label: 'Automation', href: '#how-it-works' },
    ]
  },
  { label: 'Features', href: '#features' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-dark-900/95 backdrop-blur-xl border-b border-white/5 shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <img
              src="/instachat-logo.png"
              alt="InstaChat Logo"
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <div key={i} className="relative group">
                {link.children ? (
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-gray-300 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all"
                    onMouseEnter={() => setOpenDropdown(i)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="px-4 py-2 text-gray-300 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all"
                  >
                    {link.label}
                  </a>
                )}
                {link.children && (
                  <div
                    className="absolute top-full left-0 mt-1 w-52 bg-dark-700 border border-white/10 rounded-xl shadow-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setOpenDropdown(i)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.children.map((child, j) => (
                      <a
                        key={j}
                        href={child.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-green-500/10 transition-all border-b border-white/5 last:border-0"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="text-sm text-gray-300 hover:text-white font-medium transition-colors px-3 py-2">
              Log In
            </a>
            <a href="#" className="btn-primary text-sm py-2.5 px-5">
              Get Started Free
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-800/98 backdrop-blur-xl border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link, i) => (
              <div key={i}>
                {link.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all"
                      onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === i ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === i && (
                      <div className="pl-4 space-y-1 mt-1">
                        {link.children.map((child, j) => (
                          <a
                            key={j}
                            href={child.href}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={link.href}
                    className="block px-4 py-3 text-gray-300 hover:text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
              <a href="#" className="text-center text-sm text-gray-300 hover:text-white font-medium py-2">Log In</a>
              <a href="#" className="btn-primary text-sm text-center py-3">Get Started Free</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
