import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal.js'

const steps = [
  {
    number: '01',
    title: 'Pilih produk',
    text: 'Jelajahi koleksi Setara dan pilih alat masak yang paling sesuai dengan kebutuhan dapur Anda.',
  },
  {
    number: '02',
    title: 'Hubungi kami',
    text: 'Klik tombol WhatsApp pada halaman produk untuk mengirimkan nama produk dan jumlah yang ingin dipesan.',
  },
  {
    number: '03',
    title: 'Konfirmasi pesanan',
    text: 'Tim kami akan membantu mengecek ketersediaan, total pembayaran, dan detail pengiriman Anda.',
  },
  {
    number: '04',
    title: 'Pesanan dikirim',
    text: 'Setelah pembayaran terkonfirmasi, pesanan akan kami siapkan dan kirim ke alamat tujuan.',
  },
]

const notes = [
  'Pastikan nama, nomor WhatsApp, dan alamat pengiriman sudah benar.',
  'Harga dan ketersediaan produk akan dikonfirmasi oleh tim kami sebelum pembayaran.',
  'Simpan bukti pembayaran sampai pesanan diterima dengan baik.',
]

export default function PanduanPemesanan() {
  const containerRef = useReveal()

  return (
    <main ref={containerRef} className="ordering-page">
      <section className="ordering-intro">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Bantuan Setara</span>
            <h1 className="h-section ordering-title">Panduan Pemesanan</h1>
            <p className="section-copy ordering-lead">
              Temukan alat masak pilihan Anda, lalu pesan dengan mudah melalui WhatsApp. Kami siap membantu dari awal hingga pesanan tiba di dapur Anda.
            </p>
          </div>
        </div>
      </section>

      <section className="ordering-steps-section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Cara pesan</span>
            <h2 className="h-section">Empat langkah sederhana</h2>
          </div>
          <div className="ordering-steps">
            {steps.map((step) => (
              <article className="ordering-step reveal" key={step.number}>
                <span className="ordering-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ordering-note-section">
        <div className="wrap ordering-note-grid">
          <div>
            <span className="eyebrow">Sebelum menghubungi kami</span>
            <h2 className="h-section">Siapkan detail pesanan Anda</h2>
          </div>
          <div className="ordering-checklist reveal">
            {notes.map((note) => (
              <div className="ordering-check" key={note}>
                <span aria-hidden="true">✓</span>
                <p>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ordering-cta-section">
        <div className="wrap ordering-cta">
          <div>
            <span className="eyebrow">Siap mulai?</span>
            <h2 className="h-section">Pilih teman masak Anda.</h2>
          </div>
          <Link className="btn btn-primary btn-pill" to="/koleksi">Lihat Koleksi</Link>
        </div>
      </section>
    </main>
  )
}

