import { Megaphone, CheckCircle, TrendingUp, Users } from 'lucide-react'

const campaignStats = [
  { label: 'Messages Sent', value: '24,580', icon: Megaphone, color: 'text-green-400' },
  { label: 'Delivered', value: '24,201', pct: '98.5%', icon: CheckCircle, color: 'text-blue-400' },
  { label: 'Read', value: '18,942', pct: '78.3%', icon: TrendingUp, color: 'text-purple-400' },
  { label: 'Clicked', value: '7,205', pct: '38.0%', icon: Users, color: 'text-orange-400' },
]

const features = [
  'Personalized messages with dynamic variables',
  'Schedule campaigns for optimal timing',
  'Media support — images, videos, PDFs, buttons',
  'Template message library with approval tracking',
  'Segment audiences with smart filters',
  'A/B test messages to maximize conversions',
]

export default function BulkCampaigns() {
  return (
    <section id="campaigns" className="py-24 bg-dark-800/30 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-blue-600 top-0 right-0 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="section-tag mb-5 w-fit">
              <Megaphone className="w-4 h-4" />
              Bulk Campaigns
            </div>
            <h2 className="section-title mb-5">
              Send Bulk{' '}
              <span className="gradient-text">Personalized Campaigns</span>
            </h2>
            <p className="section-subtitle mb-8">
              Reach thousands of customers with personalized WhatsApp messages.
              Achieve 5x higher open rates compared to email marketing.
            </p>

            <div className="grid gap-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="#" className="btn-primary inline-flex items-center gap-2">
                Launch a Campaign
              </a>
              <a href="#" className="btn-secondary inline-flex items-center gap-2">
                See Examples
              </a>
            </div>
          </div>

          {/* Right - Campaign dashboard mockup */}
          <div className="relative">
            <div className="bg-dark-700 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-dark-600 border-b border-white/5 px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold text-sm">Diwali Sale Campaign 🪔</div>
                  <div className="text-gray-500 text-xs mt-0.5">Sent: Nov 12, 2024 · 10:00 AM</div>
                </div>
                <div className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 px-3 py-1.5 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  <span className="text-green-400 text-xs font-medium">Completed</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 p-5">
                {campaignStats.map((stat, i) => (
                  <div key={i} className="bg-dark-600/50 border border-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <stat.icon className={`w-4 h-4 ${stat.color}`} />
                      <span className="text-xs text-gray-500">{stat.label}</span>
                    </div>
                    <div className="text-white font-bold text-xl">{stat.value}</div>
                    {stat.pct && (
                      <div className={`text-xs ${stat.color} mt-0.5 font-medium`}>{stat.pct}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="px-5 pb-5 space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>Delivery Rate</span>
                    <span className="text-green-400">98.5%</span>
                  </div>
                  <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                    <div className="h-full w-[98.5%] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>Read Rate</span>
                    <span className="text-blue-400">78.3%</span>
                  </div>
                  <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>Click Rate</span>
                    <span className="text-purple-400">38.0%</span>
                  </div>
                  <div className="h-1.5 bg-dark-600 rounded-full overflow-hidden">
                    <div className="h-full w-[38%] bg-gradient-to-r from-purple-500 to-violet-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison badge */}
            <div className="absolute -bottom-5 -left-5 bg-dark-700 border border-purple-500/20 rounded-2xl p-4 shadow-xl">
              <div className="text-xs text-gray-500 mb-1">vs Email Marketing</div>
              <div className="text-2xl font-bold text-purple-400">5x</div>
              <div className="text-xs text-gray-400">Higher Open Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
