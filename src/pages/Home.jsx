import { useReveal } from '../hooks/useReveal.js'
import CampaignHero from '../components/CampaignHero.jsx'
import PromoGrid from '../components/PromoGrid.jsx'
import ProductCollection from '../components/ProductCollection.jsx'
import SecondaryCampaignBanner from '../components/SecondaryCampaignBanner.jsx'
import SocialContent from '../components/SocialContent.jsx'

export default function Home() {
  const containerRef = useReveal()

  return (
    <div ref={containerRef}>
      <CampaignHero />
      <PromoGrid />
      <ProductCollection />
      <SocialContent />
      <SecondaryCampaignBanner />
    </div>
  )
}
