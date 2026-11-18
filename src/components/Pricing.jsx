import { useState } from 'react'
import { Check, Zap, Star } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    emoji: '🌱',
    desc: 'Perfect for small businesses getting started',
    monthlyPrice: 999,
    yearlyPrice: 799,
    color: 'border-white/10 hover:border-green-500/30',
    btnClass: 'btn-secondary',
    badge: null,
    features: [
      '1 WhatsApp Number',
      '5,000 Messages / month',
      'AI Chatbot (Basic)',
      '2 Team Members',
      'Bulk Campaigns',
      'Basic Analytics',
      'Email Support',
      'API Access',
    ],
    notIncluded: ['Custom Branding', 'Priority Support', 'Dedicated Manager'],
  },
  {
    name: 'Growth',
    emoji: '🚀',
    desc: 'For growing businesses that need more power',
    monthlyPrice: 2499,
    yearlyPrice: 1999,
    color: 'border-green-500/50 shadow-green-glow',
    btnClass: 'btn-primary',
    badge: 'Most Popular',
    features: [
      '3 WhatsApp Numbers',
      '25,000 Messages / month',
      'AI Chatbot (Advanced)',
      '10 Team Members',
      'Unlimited Campaigns',
      'Advanced Analytics',
      'Priority Email & Chat Support',
      'All Integrations',
      'Custom Branding',
      'A/B Testing',
    ],
    notIncluded: ['Dedicated Manager'],
  },
  {
    name: 'Enterprise',
    emoji: '🏢',
    desc: 'For large teams and enterprise needs',
    monthlyPrice: null,
    yearlyPrice: null,
    color: 'border-white/10 hover:border-purple-500/30',
    btnClass: 'btn-secondary',
    badge: null,
    features: [
      'Unlimited Numbers',
      'Unlimited Messages',
      'AI Chatbot (Custom)',
      'Unlimited Team Members',
      'All Growth Features',
      'SLA Guaranteed Uptime',
      'Dedicated Account Manager',
      'Custom Integrations',
      'On-boarding & Training',
      'White-label Solution',
      '24/7 Priority Support',
    ],
    notIncluded: [],
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 bg-dark-800/30 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-green-500 bottom-0 left-1/2 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag mb-5 mx-auto w-fit">
            <Zap className="w-4 h-4" />
            Simple Pricing
          </div>
          <h2 className="section-title mb-5">
            Transparent Pricing,{' '}
            <span className="gradient-text">No Hidden Fees</span>
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            Start free, upgrade when ready. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-dark-700 border border-white/10 rounded-full p-1.5">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                !isYearly ? 'bg-green-500 text-white shadow-green-glow-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly ? 'bg-green-500 text-white shadow-green-glow-sm' : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">-20%</span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative border ${plan.color} rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${plan.badge ? 'bg-gradient-to-b from-green-500/5 to-dark-700' : 'bg-dark-700/50'}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-green-glow-sm">
                    <Star className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div className="text-2xl mb-2">{plan.emoji}</div>
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-sm">{plan.desc}</p>
              </div>

              <div className="mb-6">
                {plan.monthlyPrice ? (
                  <div>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-bold text-white">
                        ₹{isYearly ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                      </span>
                      <span className="text-gray-500 text-sm mb-1.5">/month</span>
                    </div>
                    {isYearly && (
                      <div className="text-xs text-green-400 mt-1">
                        Save ₹{((plan.monthlyPrice - plan.yearlyPrice) * 12).toLocaleString()}/year
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-white">Custom</div>
                )}
              </div>

              <a href="#" className={`${plan.btnClass} w-full text-sm text-center block py-3 mb-7`}>
                {plan.monthlyPrice ? 'Start Free Trial' : 'Contact Sales'}
              </a>

              <div className="space-y-3">
                {plan.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f, j) => (
                  <div key={j} className="flex items-center gap-2.5 opacity-40">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-0.5 bg-gray-600 rounded"></div>
                    </div>
                    <span className="text-gray-500 text-sm line-through">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-600 text-sm mt-10">
          All prices are exclusive of taxes. WhatsApp conversation charges apply separately as per Meta's pricing.
          <a href="#" className="text-green-400 hover:underline ml-1">Learn more →</a>
        </p>
      </div>
    </section>
  )
}
