import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ResepPromoDapur from './pages/ResepPromoDapur.jsx'
import ResepDetail from './pages/ResepDetail.jsx'
import Koleksi from './pages/Koleksi.jsx'
import PanduanPemesanan from './pages/PanduanPemesanan.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

// Scrolls to top on every route change (except when navigating to a #hash,
// so anchor links like /#promo still jump to the right section).
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resep-promo-dapur" element={<ResepPromoDapur />} />
        <Route path="/resep-promo-dapur/:id" element={<ResepDetail />} />
        <Route path="/koleksi" element={<Koleksi />} />
        <Route path="/panduan-pemesanan" element={<PanduanPemesanan />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
