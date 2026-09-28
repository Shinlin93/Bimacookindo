import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'

const orderingSteps = [
  {
    number: '01',
    title: 'Pilih produk',
    copy: 'Jelajahi koleksi Setara dan pilih alat masak yang paling sesuai dengan kebutuhan dapur Anda.',
  },
  {
    number: '02',
    title: 'Hubungi kami',
    copy: 'Klik tombol WhatsApp atau gunakan kontak yang tersedia untuk mengirimkan nama produk dan jumlah pesanan.',
  },
  {
    number: '03',
    title: 'Konfirmasi pesanan',
    copy: 'Tim kami akan membantu mengecek ketersediaan, total pembayaran, dan detail pengiriman pesanan Anda.',
  },
  {
    number: '04',
    title: 'Pesanan dikirim',
    copy: 'Setelah pembayaran terkonfirmasi, pesanan diproses dan dikirim ke alamat tujuan dengan aman.',
  },
]

export default function PanduanPemesanan() {
  const containerRef = useReveal()

  return (
    <div ref={containerRef}>
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Panduan Pemesanan</span>
            <h1 className="h-section">Pesan alat masak favorit Anda</h1>
            <p className="section-copy">
              Ikuti langkah sederhana berikut untuk mendapatkan produk Setara dengan mudah dan nyaman.
            </p>
          </div>

          <div className="ordering-grid">
            {orderingSteps.map((step) => (
              <article key={step.number} className="ordering-card">
                <span className="ordering-number">{step.number}</span>
                <h2 className="ordering-title">{step.title}</h2>
                <p className="ordering-copy">{step.copy}</p>
              </article>
            ))}
          </div>

          <div className="ordering-notes">
            <div>
              <span className="eyebrow">Catatan penting</span>
              <h2 className="ordering-notes-title">Pastikan detail pesanan sudah benar</h2>
            </div>
            <ul>
              <li>Siapkan nama lengkap, nomor WhatsApp, dan alamat pengiriman.</li>
              <li>Periksa kembali varian dan jumlah produk sebelum melakukan pembayaran.</li>
              <li>Biaya pengiriman dan estimasi tiba akan dikonfirmasi oleh tim kami.</li>
            </ul>
          </div>

          <div className="page-cta">
            <div>
              <h2 className="ordering-cta-title">Siap melengkapi dapur Anda?</h2>
              <p className="section-copy">Lihat koleksi kami dan temukan alat masak yang tepat.</p>
            </div>
            <Link to="/koleksi" className="btn btn-primary btn-editorial">Lihat Koleksi</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
