import { Bot, Megaphone, Users, Zap, BarChart3, Shield, MessageCircle, Workflow } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'AI Chatbot',
    description: 'Instantly respond to customer queries 24/7 with intelligent AI-powered chatbots. No coding required.',
    color: 'from-green-500 to-emerald-600',
    badge: 'Powered by AI',
  },
  {
    icon: Megaphone,
    title: 'Bulk Campaigns',
    description: 'Send personalized WhatsApp messages to thousands of contacts at once with high open rates.',
    color: 'from-blue-500 to-cyan-600',
    badge: 'High Delivery',
  },
  {
    icon: Users,
    title: 'Lead Management',
    description: 'Capture, track and nurture leads through your sales funnel directly on WhatsApp.',
    color: 'from-purple-500 to-violet-600',
    badge: 'CRM Built-in',
  },
  {
    icon: Workflow,
    title: 'Smart Automation',
    description: 'Build powerful workflows to automate follow-ups, drip campaigns, and customer journeys.',
    color: 'from-orange-500 to-amber-600',
    badge: 'No-Code Builder',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Get real-time insights on message delivery, opens, clicks, and campaign performance.',
    color: 'from-pink-500 to-rose-600',
    badge: 'Real-time',
  },
  {
    icon: MessageCircle,
    title: 'Team Inbox',
    description: 'Collaborate with your team in a shared inbox. Assign chats, add notes, and never miss a lead.',
    color: 'from-teal-500 to-cyan-600',
    badge: 'Multi-agent',
  },
  {
    icon: Shield,
    title: 'Official API Access',
    description: 'Send messages at scale via official WhatsApp Business API with no risk of account bans.',
    color: 'from-green-600 to-green-700',
    badge: 'Meta Verified',
  },
  {
    icon: Zap,
    title: 'Instant Notifications',
    description: 'Send order updates, payment confirmations, OTPs and transactional alerts instantly.',
    color: 'from-yellow-500 to-orange-500',
    badge: 'Transactional',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* BG */}
      <div className="glow-orb w-96 h-96 bg-green-500 top-0 right-0 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-5 mx-auto w-fit">
            <Zap className="w-4 h-4" />
            Everything You Need
          </div>
          <h2 className="section-title mb-5">
            All-in-One WhatsApp{' '}
            <span className="gradient-text">Business Platform</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Everything your business needs to sell, support, and grow on WhatsApp —
            all in one powerful dashboard.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-dark-700/50 border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
            >
              {/* Badge */}
              <div className="inline-flex items-center text-xs font-medium text-gray-400 bg-white/5 px-2.5 py-1 rounded-full mb-4">
                {feature.badge}
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
