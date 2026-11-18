import { UserPlus, MessageSquareText, Workflow, TrendingUp } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Connect Your Number',
    description: 'Link your existing WhatsApp Business number or get a new one. Setup takes less than 5 minutes with our guided wizard.',
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
  },
  {
    step: '02',
    icon: MessageSquareText,
    title: 'Build Your Chatbot',
    description: 'Use our no-code drag-and-drop builder to create powerful conversation flows. Add quick replies, buttons, and media.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    step: '03',
    icon: Workflow,
    title: 'Automate Workflows',
    description: 'Set triggers, conditions, and actions to automate follow-ups, reminders, abandoned cart recovery and more.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Grow & Analyze',
    description: 'Monitor your campaigns in real-time. Track delivery, read rates, and conversions to optimize your strategy.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-dark-800/30 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-green-600 bottom-0 left-0 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-5 mx-auto w-fit">
            <Workflow className="w-4 h-4" />
            Simple Process
          </div>
          <h2 className="section-title mb-5">
            Get Started in{' '}
            <span className="gradient-text">4 Easy Steps</span>
          </h2>
          <p className="section-subtitle mx-auto">
            From setup to your first campaign in under 10 minutes. No technical expertise needed.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-orange-500/20" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {/* Step number */}
              <div className="relative inline-flex flex-col items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl ${step.bg} border flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                  <step.icon className={`w-7 h-7 ${step.color}`} />
                </div>
                <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-dark-800 border border-white/10 flex items-center justify-center`}>
                  <span className="text-xs font-bold text-gray-400">{step.step}</span>
                </div>
              </div>

              <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a href="#" className="btn-primary py-3.5 px-8 inline-flex items-center gap-2">
            Start for Free — No Credit Card Required
          </a>
          <p className="text-gray-600 text-sm mt-3">Setup in &lt; 5 minutes · 14-day free trial</p>
        </div>
      </div>
    </section>
  )
}
