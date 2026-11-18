import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'

const perks = [
  { emoji: '✅', text: 'No Credit Card Required' },
  { emoji: '🚀', text: 'Setup in 5 Minutes' },
  { emoji: '🎯', text: '14-Day Free Trial' },
  { emoji: '🔒', text: 'Cancel Anytime' },
]

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-dark-900 to-emerald-900/10" />
      <div className="glow-orb w-96 h-96 bg-green-500 top-0 left-1/4 opacity-10" />
      <div className="glow-orb w-80 h-80 bg-emerald-600 bottom-0 right-1/4 opacity-8" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-medium px-5 py-2.5 rounded-full mb-8 mx-auto">
          <Sparkles className="w-4 h-4" />
          Join 50,000+ businesses already growing with Digitpic
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Ready to Transform Your{' '}
          <span className="gradient-text">WhatsApp Business?</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Start for free today. No technical skills needed. Get your first AI chatbot live
          and your first campaign sent in under 10 minutes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#" className="btn-primary text-base py-4 px-10 inline-flex items-center justify-center gap-2 shadow-green-glow">
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#" className="btn-white text-base py-4 px-10 inline-flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5 text-green-600" />
            Talk to Sales
          </a>
        </div>

        {/* Perks */}
        <div className="flex flex-wrap justify-center gap-6">
          {perks.map((perk, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
              <span>{perk.emoji}</span>
              <span>{perk.text}</span>
            </div>
          ))}
        </div>

        {/* WhatsApp floating button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-green-glow hover:scale-110 transition-all duration-300 group"
            title="Chat with us on WhatsApp"
          >
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
