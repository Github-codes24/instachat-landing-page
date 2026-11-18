import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Founder, StyleZone Fashion',
    avatar: 'PS',
    avatarColor: 'from-pink-500 to-rose-500',
    rating: 5,
    text: 'Digitpic transformed our customer support completely. Our response time dropped from 6 hours to under 2 minutes. Sales went up 40% in the first month alone!',
    metric: '+40% Sales',
    metricColor: 'text-green-400',
  },
  {
    name: 'Rahul Mehta',
    role: 'CEO, QuickMart Online',
    avatar: 'RM',
    avatarColor: 'from-blue-500 to-cyan-500',
    rating: 5,
    text: 'The bulk campaign feature is incredible. We sent 50,000 messages for our Diwali sale and got a 78% open rate. Can\'t imagine going back to email marketing.',
    metric: '78% Open Rate',
    metricColor: 'text-blue-400',
  },
  {
    name: 'Anjali Verma',
    role: 'Marketing Head, FitLife India',
    avatar: 'AV',
    avatarColor: 'from-purple-500 to-violet-500',
    rating: 5,
    text: 'The AI chatbot handles 90% of customer queries automatically. My team now focuses on closing deals instead of answering repetitive questions. Game changer!',
    metric: '90% Automated',
    metricColor: 'text-purple-400',
  },
  {
    name: 'Vikram Singh',
    role: 'Director, TravelEasy India',
    avatar: 'VS',
    avatarColor: 'from-orange-500 to-amber-500',
    rating: 5,
    text: 'Setting up automation workflows was surprisingly easy. No coding needed. We automated our entire booking confirmation and follow-up sequence in a day.',
    metric: '1 Day Setup',
    metricColor: 'text-orange-400',
  },
  {
    name: 'Neha Kapoor',
    role: 'Owner, Kapoor Jewellers',
    avatar: 'NK',
    avatarColor: 'from-yellow-500 to-orange-500',
    rating: 5,
    text: 'As a traditional business, I was skeptical. But within 2 weeks, Digitpic helped us generate ₹8 lakhs in sales just from WhatsApp campaigns. Worth every rupee!',
    metric: '₹8L Revenue',
    metricColor: 'text-yellow-400',
  },
  {
    name: 'Suresh Patel',
    role: 'Co-founder, EduLearn Platform',
    avatar: 'SP',
    avatarColor: 'from-teal-500 to-green-500',
    rating: 5,
    text: 'Student enrollment increased by 3x since we started using Digitpic. The drip campaign feature helps us nurture leads automatically until they convert.',
    metric: '3x Enrollments',
    metricColor: 'text-teal-400',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-green-500 top-1/2 left-0 opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mb-5 mx-auto w-fit">
            <Star className="w-4 h-4" />
            Customer Stories
          </div>
          <h2 className="section-title mb-5">
            Loved by{' '}
            <span className="gradient-text">50,000+ Businesses</span>
          </h2>
          <p className="section-subtitle mx-auto">
            See how businesses across India are growing faster with Digitpic.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-dark-700/50 border border-white/5 hover:border-green-500/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-green-glow-sm flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-green-500/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
                "{t.text}"
              </p>

              {/* Metric */}
              <div className={`text-sm font-bold ${t.metricColor} bg-dark-600 border border-white/5 inline-block px-3 py-1.5 rounded-lg mb-5 w-fit`}>
                {t.metric}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-14 text-center">
          <div className="inline-flex items-center gap-4 bg-dark-700 border border-white/10 rounded-2xl px-8 py-5">
            <div className="text-center">
              <div className="flex gap-1 justify-center mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="text-3xl font-bold text-white">4.9/5</div>
              <div className="text-gray-500 text-sm mt-0.5">Average Rating</div>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">2,800+</div>
              <div className="text-gray-500 text-sm mt-0.5">Reviews</div>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">50K+</div>
              <div className="text-gray-500 text-sm mt-0.5">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
