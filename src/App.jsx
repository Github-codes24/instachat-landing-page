import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ChatbotSection from './components/ChatbotSection'
import BulkCampaigns from './components/BulkCampaigns'
import Integrations from './components/Integrations'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <ChatbotSection />
      <BulkCampaigns />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
