import { Bot, CheckCircle, Sparkles } from 'lucide-react'

const capabilities = [
  'Answer FAQs instantly, 24/7',
  'Qualify leads automatically',
  'Book appointments & demos',
  'Send product recommendations',
  'Handle order tracking queries',
  'Collect feedback & reviews',
  'Multi-language support',
  'Seamless human handoff',
]

const chatFlow = [
  { from: 'bot', msg: '👋 Hi! Welcome to StyleZone. How can I help you?', time: '2:30 PM' },
  { from: 'user', msg: 'Do you have red sneakers in size 10?', time: '2:30 PM' },
  { from: 'bot', msg: '✅ Yes! We have 3 styles in size 10. Let me show you...', time: '2:31 PM', typing: false },
  { from: 'bot', msg: '🛍️ Nike Air Max — ₹7,499\n👟 Adidas Ultraboost — ₹8,999\n⚡ Puma RS-X — ₹5,499\n\nWhich would you like to know more about?', time: '2:31 PM' },
]

export default function ChatbotSection() {
  return (
    <section id="chatbot" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-80 h-80 bg-green-500 top-1/2 left-1/4 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Chat mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-dark-700 border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-w-sm mx-auto">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">InstaChat AI Assistant</div>
                  <div className="text-green-100 text-xs">AI-Powered · Always On</div>
                </div>
                <div className="ml-auto">
                  <Sparkles className="w-5 h-5 text-white/70" />
                </div>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 bg-dark-800 min-h-72">
                {chatFlow.map((msg, i) => (
                  <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'gap-2'}`}>
                    {msg.from === 'bot' && (
                      <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                        <Bot className="w-4 h-4 text-green-400" />
                      </div>
                    )}
                    <div className="max-w-xs">
                      <div className={`text-sm px-3.5 py-2.5 rounded-2xl whitespace-pre-line leading-relaxed ${
                        msg.from === 'bot'
                          ? 'bg-dark-600 border border-white/5 text-gray-200 rounded-tl-sm'
                          : 'bg-green-500/20 border border-green-500/20 text-gray-200 rounded-tr-sm'
                      }`}>
                        {msg.msg}
                      </div>
                      <div className={`text-xs text-gray-600 mt-0.5 ${msg.from === 'user' ? 'text-right mr-1' : 'ml-1'}`}>
                        {msg.time} ✓✓
                      </div>
                    </div>
                  </div>
                ))}

                {/* Quick replies */}
                <div className="flex flex-wrap gap-2 pl-9">
                  {['Nike Air Max', 'Adidas Ultraboost', 'All Sneakers'].map(opt => (
                    <button key={opt} className="text-xs border border-green-500/40 text-green-400 px-2.5 py-1 rounded-full hover:bg-green-500/10 transition-colors">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="bg-dark-700 border-t border-white/5 px-3 py-2.5 flex items-center gap-2">
                <div className="flex-1 bg-dark-600 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-500">
                  Reply...
                </div>
                <button className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Stats floating */}
            <div className="absolute -bottom-4 -right-4 lg:right-0 bg-dark-700 border border-green-500/20 rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-bold gradient-text">3x</div>
              <div className="text-xs text-gray-400 mt-0.5">Faster Response</div>
            </div>
            <div className="absolute -top-4 -right-6 lg:right-4 bg-dark-700 border border-blue-500/20 rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-bold text-blue-400">24/7</div>
              <div className="text-xs text-gray-400 mt-0.5">Always Available</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="section-tag mb-5 w-fit">
              <Bot className="w-4 h-4" />
              AI Chatbot
            </div>
            <h2 className="section-title mb-5">
              Reply Instantly with{' '}
              <span className="gradient-text">AI Chatbot</span>
            </h2>
            <p className="section-subtitle mb-8">
              Let our intelligent AI handle customer conversations around the clock.
              Reduce response time from hours to seconds and never lose a lead again.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{cap}</span>
                </div>
              ))}
            </div>

            <a href="#" className="btn-primary inline-flex items-center gap-2">
              Try AI Chatbot Free
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
