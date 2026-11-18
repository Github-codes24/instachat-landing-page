const brands = [
  { name: 'Shopify', logo: '🛒' },
  { name: 'Razorpay', logo: '💳' },
  { name: 'Flipkart', logo: '🛍️' },
  { name: 'Myntra', logo: '👗' },
  { name: 'Nykaa', logo: '💄' },
  { name: 'Meesho', logo: '📦' },
  { name: 'BigBasket', logo: '🥬' },
  { name: 'Swiggy', logo: '🍕' },
  { name: 'OYO', logo: '🏨' },
  { name: 'Lenskart', logo: '👓' },
  { name: 'Mamaearth', logo: '🌿' },
  { name: 'boAt', logo: '🎧' },
]

export default function TrustedBy() {
  return (
    <section className="py-14 border-y border-white/5 bg-dark-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest font-medium">
          Trusted by 50,000+ businesses across India
        </p>
        <div className="overflow-hidden relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-dark-800/40 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-dark-800/40 to-transparent" />
          <div className="marquee-track gap-8">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-2.5 bg-dark-700 border border-white/5 hover:border-green-500/20 px-5 py-3 rounded-xl transition-all duration-300 group cursor-default"
              >
                <span className="text-xl">{brand.logo}</span>
                <span className="text-gray-400 group-hover:text-gray-200 font-medium text-sm transition-colors whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
