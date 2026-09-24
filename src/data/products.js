import p1Bima from '../assets/p1_bima.jpg'
import p2Wppink from '../assets/p2_wppink.jpg'
import p3Uniq from '../assets/p3_uniq.jpg'
import p4Belly from '../assets/p4_belly.jpg'
import p5Wok from '../assets/p5_wok.jpg'

export const products = [
  {
    id: 'p3',
    number: 'Produk 03',
    title: 'Wajan Saute Serbaguna',
    description:
      'Permukaan anti-lengket dengan tutup kaca, dirancang untuk menumis hingga memanggang dalam satu wadah.',
    image: p3Uniq,
    alt: 'Wajan saute hitam dengan tutup kaca',
    feature: true,
  },
  {
    id: 'p1',
    number: 'Produk 01',
    title: 'Panci Keramik Pegangan Kayu',
    description:
      'Badan keramik dengan pegangan kayu solid, tutup kaca tahan panas untuk memasak yang bisa dipantau.',
    image: p1Bima,
    alt: 'Panci keramik dengan pegangan kayu',
  },
  {
    id: 'p4',
    number: 'Produk 04',
    title: 'Wajan Saute Dalam',
    description:
      'Bentuk dalam dengan pegangan ergonomis, cocok untuk masakan berkuah maupun tumisan.',
    image: p2Wppink,
    alt: 'Wajan saute merah',
  },
  {
    id: 'p2',
    number: 'Produk 02',
    title: 'Wajan Stainless Dua Pegangan',
    description:
      'Konstruksi stainless steel dengan tutup kaca, dua pegangan untuk kestabilan saat memasak porsi besar.',
    image: p5Wok,
    alt: 'Wajan stainless steel dengan tutup kaca',
  },
  {
    id: 'p5',
    number: 'Produk 05',
    title: 'Set Panci Tiga Ukuran',
    description:
      'Tiga panci stainless dengan tutup kaca, disusun dalam satu set untuk kebutuhan dapur yang lengkap.',
    image: p4Belly,
    alt: 'Set panci stainless steel tiga ukuran',
  },
]

// Order used for the hero plinth composition (center item has strongest hierarchy)
export const heroOrder = ['p1', 'p2', 'p3', 'p4', 'p5']

export const categories = [
  { id: 'panci', label: 'Panci' },
  { id: 'wajan', label: 'Wajan' },
  { id: 'set', label: 'Set Panci' },
  { id: 'aksesoris', label: 'Aksesoris' },
  { id: 'semua', label: 'Semua Produk' },
]
