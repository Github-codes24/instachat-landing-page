import { Link, Plug } from 'lucide-react'

const integrations = [
  { name: 'Shopify', emoji: '🛒', category: 'E-Commerce', color: 'from-green-600 to-green-700' },
  { name: 'WooCommerce', emoji: '🏪', category: 'E-Commerce', color: 'from-purple-600 to-violet-700' },
  { name: 'Razorpay', emoji: '💳', category: 'Payments', color: 'from-blue-600 to-blue-700' },
  { name: 'Paytm', emoji: '📱', category: 'Payments', color: 'from-indigo-600 to-indigo-700' },
  { name: 'Hubspot', emoji: '🧲', category: 'CRM', color: 'from-orange-600 to-red-600' },
  { name: 'Salesforce', emoji: '☁️', category: 'CRM', color: 'from-sky-600 to-blue-700' },
  { name: 'Zapier', emoji: '⚡', category: 'Automation', color: 'from-orange-500 to-orange-600' },
  { name: 'Make', emoji: '🔗', category: 'Automation', color: 'from-violet-600 to-purple-700' },
  { name: 'Pabbly', emoji: '🔄', category: 'Automation', color: 'from-teal-600 to-teal-700' },
  { name: 'Google Sheets', emoji: '📊', category: 'Productivity', color: 'from-green-700 to-emerald-700' },
  { name: 'Calendly', emoji: '📅', category: 'Scheduling', color: 'from-blue-500 to-cyan-600' },
  { name: 'Shiprocket', emoji: '🚀', category: 'Logistics', color: 'from-red-600 to-orange-600' },
]

export default function Integrations() {
  return (
    <section id="integrations" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-80 h-80 bg-purple-600 bottom-0 right-0 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-5 mx-auto w-fit">
            <Plug className="w-4 h-4" />
            Integrations
          </div>
          <h2 className="section-title mb-5">
            Connects With Your{' '}
            <span className="gradient-text">Favorite Tools</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Integrate Digitpic with 100+ tools you already use. Sync data, trigger
            messages, and automate workflows across your entire business stack.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className="group bg-dark-700/50 border border-white/5 hover:border-white/15 rounded-2xl p-4 flex flex-col items-center gap-3 transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${integration.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-lg`}>
                {integration.emoji}
              </div>
              <div className="text-center">
                <div className="text-white text-xs font-medium">{integration.name}</div>
                <div className="text-gray-600 text-xs mt-0.5">{integration.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Link className="w-4 h-4 text-green-400" />
            <span>100+ integrations available</span>
          </div>
          <span className="hidden sm:block text-gray-700">•</span>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>+ REST API & Webhooks for custom integrations</span>
          </div>
          <a href="#" className="btn-secondary text-sm py-2 px-5 inline-flex items-center gap-1.5">
            View All Integrations
          </a>
        </div>
      </div>
    </section>
  )
}
