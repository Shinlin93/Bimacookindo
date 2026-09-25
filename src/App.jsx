import { useReveal } from './hooks/useReveal.js'
import Navbar from './components/Navbar.jsx'
import CampaignHero from './components/CampaignHero.jsx'
import PromoGrid from './components/PromoGrid.jsx'
import ProductCollection from './components/ProductCollection.jsx'
import SecondaryCampaignBanner from './components/SecondaryCampaignBanner.jsx'
import SocialContent from './components/SocialContent.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const containerRef = useReveal()

  return (
    <div ref={containerRef}>
      <Navbar />
      <CampaignHero />
          <PromoGrid />
      <ProductCollection />
      <SecondaryCampaignBanner />
      <SocialContent />
      <Footer />
    </div>
  )
}
