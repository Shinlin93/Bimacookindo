import { useReveal } from './hooks/useReveal.js'
import Navbar from './components/Navbar.jsx'
import CampaignHero from './components/CampaignHero.jsx'
import CategoryStrip from './components/CategoryStrip.jsx'
import ProductCollection from './components/ProductCollection.jsx'
import SecondaryCampaignBanner from './components/SecondaryCampaignBanner.jsx'
import SocialContent from './components/SocialContent.jsx'
import Footer from './components/Footer.jsx'
import PromoPage from './PromoPage.jsx'

export default function App() {
  const containerRef = useReveal()

  if (window.location.pathname === '/promo') {
    return <PromoPage />
  }

  return (
    <div ref={containerRef}>
      <Navbar />
      <CampaignHero />
      <CategoryStrip />
      <ProductCollection />
      <SecondaryCampaignBanner />
      <SocialContent />
      <Footer />
    </div>
  )
}
