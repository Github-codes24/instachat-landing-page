import { ArrowRight, Play, CheckCircle, Zap, Users, MessageSquare } from 'lucide-react'

const stats = [
  { value: '50K+', label: 'Active Businesses' },
  { value: '500M+', label: 'Messages Sent' },
  { value: '98%', label: 'Delivery Rate' },
  { value: '4.9★', label: 'User Rating' },
]

const badges = [
  { icon: CheckCircle, text: 'Official WhatsApp Business API' },
  { icon: Zap, text: 'AI-Powered Automation' },
  { icon: Users, text: 'No Coding Required' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden mesh-bg">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Glow orbs */}
      <div className="glow-orb w-96 h-96 bg-green-500 top-20 -left-20" />
      <div className="glow-orb w-80 h-80 bg-emerald-600 bottom-20 right-10" />
      <div className="glow-orb w-64 h-64 bg-green-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Official WhatsApp Business API Partner
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
              Supercharge Your{' '}
              <span className="gradient-text">WhatsApp</span>{' '}
              Business Communication
            </h1>

            {/* Subheadline */}
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Reply instantly with AI Chatbot · Automate follow-ups & workflows ·
              Send bulk personalized campaigns · Track & manage leads easily
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {badges.map((badge, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  <badge.icon className="w-4 h-4 text-green-400" />
                  {badge.text}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#" className="btn-primary text-base py-3.5 px-8 inline-flex items-center justify-center gap-2">
                Start for Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#" className="btn-secondary text-base py-3.5 px-8 inline-flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Chat UI Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Phone mockup */}
              <div className="relative bg-dark-700 border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-float">
                {/* Phone header */}
                <div className="bg-dark-600 px-4 py-3 flex items-center gap-3 border-b border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">D</div>
                  <div>
                    <div className="text-white text-sm font-semibold">InstaChat Bot</div>
                    <div className="text-green-400 text-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"></span>
                      Online
                    </div>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="p-4 space-y-3 bg-gradient-to-b from-dark-700 to-dark-800 min-h-80">
                  {/* Incoming */}
                  <div className="chat-bubble flex gap-2 max-w-xs">
                    <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-xs text-green-400 flex-shrink-0 mt-1">D</div>
                    <div>
                      <div className="bg-dark-600 border border-white/5 text-gray-200 text-sm px-3.5 py-2.5 rounded-2xl rounded-tl-sm">
                        👋 Hi! Welcome to Digitpic. How can I help you today?
                      </div>
                      <div className="text-xs text-gray-600 mt-1 ml-1">10:24 AM ✓✓</div>
                    </div>
                  </div>

                  {/* Outgoing */}
                  <div className="chat-bubble flex justify-end">
                    <div>
                      <div className="bg-green-500/20 border border-green-500/20 text-gray-200 text-sm px-3.5 py-2.5 rounded-2xl rounded-tr-sm max-w-48">
                        I want to know about pricing
                      </div>
                      <div className="text-xs text-gray-600 mt-1 mr-1 text-right">10:24 AM ✓✓</div>
                    </div>
                  </div>

                  {/* Incoming - quick reply */}
                  <div className="chat-bubble flex gap-2 max-w-xs">
                    <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-xs text-green-400 flex-shrink-0 mt-1">D</div>
                    <div className="space-y-2">
                      <div className="bg-dark-600 border border-white/5 text-gray-200 text-sm px-3.5 py-2.5 rounded-2xl rounded-tl-sm">
                        Sure! We have 3 plans — Starter, Growth & Enterprise. 🚀
                        <br/><br/>Which one fits your business?
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Starter 🌱', 'Growth 🚀', 'Enterprise 🏢'].map(opt => (
                          <button key={opt} className="text-xs border border-green-500/40 text-green-400 px-2.5 py-1 rounded-full hover:bg-green-500/10 transition-colors">{opt}</button>
                        ))}
                      </div>
                      <div className="text-xs text-gray-600 ml-1">10:25 AM ✓✓</div>
                    </div>
                  </div>

                  {/* Typing indicator */}
                  <div className="chat-bubble flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center text-xs text-green-400 flex-shrink-0">D</div>
                    <div className="bg-dark-600 border border-white/5 px-3.5 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                      <div className="typing-dot w-2 h-2 rounded-full bg-gray-500"></div>
                      <div className="typing-dot w-2 h-2 rounded-full bg-gray-500"></div>
                      <div className="typing-dot w-2 h-2 rounded-full bg-gray-500"></div>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="bg-dark-600 border-t border-white/5 px-3 py-2.5 flex items-center gap-2">
                  <div className="flex-1 bg-dark-700 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-500">
                    Type a message...
                  </div>
                  <button className="w-9 h-9 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Floating notification cards */}
              <div className="absolute -left-16 top-1/4 bg-dark-700 border border-green-500/20 rounded-xl p-3 shadow-lg animate-float-delay hidden lg:block">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-medium">New Lead</div>
                    <div className="text-gray-500 text-xs">+91 98765 43210</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-10 bottom-1/4 bg-dark-700 border border-green-500/20 rounded-xl p-3 shadow-lg animate-float hidden lg:block">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-medium">Campaign Sent</div>
                    <div className="text-green-400 text-xs">12,480 delivered ✓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
