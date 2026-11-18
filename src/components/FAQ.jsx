import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    q: 'What is Digitpic and how does it work?',
    a: 'Digitpic is an official WhatsApp Business API platform that lets you send messages at scale, build AI chatbots, automate follow-ups, and manage leads — all from one dashboard. You connect your WhatsApp Business number, set up your bot or campaigns, and start communicating with customers instantly.',
  },
  {
    q: 'Is this the official WhatsApp Business API?',
    a: 'Yes! Digitpic is an official Meta Business Partner and uses the WhatsApp Business API (Cloud API). This means your account is fully compliant, messages are delivered reliably, and there\'s no risk of being banned for bulk messaging through unauthorized methods.',
  },
  {
    q: 'Can I use my existing WhatsApp number?',
    a: 'Yes, you can connect your existing WhatsApp Business number to Digitpic. However, please note that once a number is linked to the WhatsApp Business API, it can no longer be used on the regular WhatsApp Business app on your phone. We\'ll guide you through the migration process.',
  },
  {
    q: 'Are there any additional charges beyond the subscription?',
    a: 'WhatsApp charges a small per-conversation fee based on Meta\'s official pricing. These are separate from your Digitpic subscription and vary by country and conversation type (marketing, utility, service). We provide full transparency on these charges in your dashboard.',
  },
  {
    q: 'How long does it take to get started?',
    a: 'Most businesses are up and running in under 15 minutes. You just need to sign up, connect your WhatsApp Business number, and you can start sending messages. Building your first chatbot or campaign takes another 10–30 minutes using our drag-and-drop editor.',
  },
  {
    q: 'Do I need any technical knowledge or coding skills?',
    a: 'Not at all! Digitpic is built for non-technical users. Our visual flow builder, templates, and guided setup make it easy for anyone to create chatbots, campaigns, and automation — no coding required. If you do want to use our API, we have full developer documentation.',
  },
  {
    q: 'What happens if I exceed my message limit?',
    a: 'We\'ll notify you when you\'re approaching your plan\'s message limit. You can either upgrade to a higher plan or purchase a top-up pack. We won\'t cut off your service without warning — we\'ll always give you time to decide.',
  },
  {
    q: 'Is my data secure with Digitpic?',
    a: 'Absolutely. We take data security very seriously. All data is encrypted in transit and at rest. We are GDPR-compliant and follow Meta\'s data policies. Your customer data is never sold or shared with third parties. We also offer data export at any time.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 bg-dark-800/30 relative overflow-hidden">
      <div className="glow-orb w-80 h-80 bg-green-600 top-0 right-1/4 opacity-5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag mb-5 mx-auto w-fit">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="section-title mb-5">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about Digitpic. Can't find the answer?{' '}
            <a href="#" className="text-green-400 hover:underline">Chat with us on WhatsApp.</a>
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-dark-700/50 border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'border-green-500/30 shadow-green-glow-sm' : 'border-white/5 hover:border-white/10'
              }`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-medium text-sm md:text-base transition-colors ${openIndex === i ? 'text-white' : 'text-gray-200'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-green-400' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="btn-primary py-2.5 px-6 text-sm inline-flex items-center justify-center gap-2">
              💬 Chat with Support
            </a>
            <a href="#" className="btn-secondary py-2.5 px-6 text-sm inline-flex items-center justify-center gap-2">
              📧 Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
