import p1Bima from '../assets/p1_bima.jpg'
import p2Wppink from '../assets/p2_wppink.jpg'
import p3Uniq from '../assets/p3_uniq.jpg'
import p4Belly from '../assets/p4_belly.jpg'
import p5Wok from '../assets/p5_wok.jpg'
import resepGurame from '../assets/resep_gurame_asam_manis.jpg'
import resepKolak from '../assets/resep_kolak_waloh.jpg'
import resepNasiKuning from '../assets/resep_nasi_kuning.jpg'
import resepAyamAsamPedas from '../assets/resep_ayam_asam_pedas.jpg'
import resepMarmerCake from '../assets/resep_marmer_cake.jpg'
import resepPerkedelUdang from '../assets/resep_perkedel_udang.jpg'
import resepPopcorn from '../assets/resep_popcorn_jagung.jpg'

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
    category: 'wajan',
  },
  {
    id: 'p1',
    number: 'Produk 01',
    title: 'Panci Keramik Pegangan Kayu',
    description:
      'Badan keramik dengan pegangan kayu solid, tutup kaca tahan panas untuk memasak yang bisa dipantau.',
    image: p1Bima,
    alt: 'Panci keramik dengan pegangan kayu',
    category: 'panci',
  },
  {
    id: 'p4',
    number: 'Produk 04',
    title: 'Wajan Saute Dalam',
    description:
      'Bentuk dalam dengan pegangan ergonomis, cocok untuk masakan berkuah maupun tumisan.',
    image: p2Wppink,
    alt: 'Wajan saute merah',
    category: 'wajan',
  },
  {
    id: 'p2',
    number: 'Produk 02',
    title: 'Wajan Stainless Dua Pegangan',
    description:
      'Konstruksi stainless steel dengan tutup kaca, dua pegangan untuk kestabilan saat memasak porsi besar.',
    image: p5Wok,
    alt: 'Wajan stainless steel dengan tutup kaca',
    category: 'wajan',
  },
  {
    id: 'p5',
    number: 'Produk 05',
    title: 'Set Panci Tiga Ukuran',
    description:
      'Tiga panci stainless dengan tutup kaca, disusun dalam satu set untuk kebutuhan dapur yang lengkap.',
    image: p4Belly,
    alt: 'Set panci stainless steel tiga ukuran',
    category: 'set',
  },
]

// Order used for the hero plinth composition (center item has strongest hierarchy)
export const heroOrder = ['p1', 'p2', 'p3', 'p4', 'p5']

export const recipes = [
  {
    id: 'gurame-asam-manis',
    tag: 'Resep',
    title: 'Gurame Asam Manis',
    copy: 'Ikan gurame goreng kering disiram saus asam manis dengan wortel, cabai, dan daun bawang.',
    image: resepGurame,
    time: '30 menit',
    servings: '3-4 porsi',
    tool: 'Wajan Saute Serbaguna',
    ingredients: [
      '1 ekor ikan gurame',
      'Cairan tepung kanji',
      'Kanji kering',
      'Wortel dan cabai, dipotong halus dan panjang',
      'Daun bawang, dipotong halus dan panjang',
      'Bawang merah dan bawang putih, diiris halus',
      'Kaldu ayam atau royco',
      'Jahe, garam, gula, cuka, vetsin, saus tomat',
    ],
    steps: [
      'Ikan gurame setelah dibersihkan, gurat-gurat bagian atasnya, lalu beri garam.',
      'Celupkan ke dalam cairan tepung kanji.',
      'Tambahkan garam dan vetsin, lalu gulingkan pada tepung kanji kering, goreng dalam minyak panas sampai kering.',
      'Bawang putih dan bawang merah digoreng sampai kuning, lalu masukkan irisan jahe, cabai, wortel, dan daun bawang.',
      'Setelah mendidih, masukkan cairan tepung kanji.',
      'Tuangkan saus ini ke atas ikan yang telah digoreng tadi.',
    ],
  },
  {
    id: 'kolak-waloh',
    tag: 'Resep',
    title: 'Kolak Waloh',
    copy: 'Kolak labu kuning bersantan dengan aroma daun pandan, hangat dan manis pas.',
    accent: 'accent-orange',
    image: resepKolak,
    time: '20 menit',
    servings: '4-5 porsi',
    tool: 'Panci Keramik Pegangan Kayu',
    ingredients: [
      '1/2 buah waloh (labu kuning)',
      '1 buah kelapa, ambil santannya',
      '250 gram gula pasir',
      '5 lembar daun pandan',
      'Garam secukupnya',
    ],
    steps: [
      'Buah waloh (labu kuning) dicuci bersih, kemudian potong-potong kira-kira 5x5 cm.',
      'Masukkan ke dalam panci beserta santan, gula pasir, daun pandan, dan garam.',
      'Masak selama kurang lebih 10 menit, lalu angkat.',
    ],
  },
  {
    id: 'nasi-kuning',
    tag: 'Resep',
    title: 'Nasi Kuning',
    copy: 'Nasi kuning gurih beraroma rempah, klasik untuk acara maupun sarapan spesial.',
    image: resepNasiKuning,
    time: '45 menit',
    servings: '5-6 porsi',
    tool: 'Set Panci Tiga Ukuran',
    ingredients: [
      '500 gram beras',
      '3 gelas santan (dari 1/2 butir kelapa)',
      '2 lembar daun jeruk purut',
      '1 potong lengkuas, dimemarkan',
      '1 pangkal sereh, dimemarkan',
      '1 potong jahe, dimemarkan',
      '2 lembar daun salam',
      '1 sendok makan kunyit, diparut',
      '1 potong jeruk nipis, diambil airnya',
      '2 lembar daun pandan, garam secukupnya',
    ],
    steps: [
      'Ambil sari kunyit dan campurkan dengan santan, masukkan bumbu-bumbu jadi satu dengan santan.',
      'Siapkan panci, masukkan beras yang telah dicuci bersama santan yang telah diberi bumbu.',
      'Masak dengan api kecil selama 15-20 menit.',
      'Setelah masak, jangan dibuka dulu tutupnya, biarkan sekitar 15 menit.',
    ],
  },
  {
    id: 'ayam-asam-pedas',
    tag: 'Resep',
    title: 'Ayam Asam Pedas',
    copy: 'Ayam berkuah pedas asam segar dengan lengkuas dan daun bawang, sederhana tapi menggugah selera.',
    accent: 'accent-orange',
    image: resepAyamAsamPedas,
    time: '30 menit',
    servings: '3-4 porsi',
    tool: 'Wajan Saute Dalam',
    ingredients: [
      '1/2 ekor ayam',
      '5 biji cabai merah',
      '1 sdm garam',
      '3-4 helai daun bawang',
      '3 siung bawang merah',
      '1 buah jeruk nipis',
      '1 ruas jari laos (lengkuas)',
    ],
    steps: [
      'Potong-potong ayam agak besar.',
      'Ulek halus cabai, bawang merah, dan garam.',
      'Pukul-pukul laos, iris kasar daun bawang, masukkan semua bahan dalam panci dengan sedikit air, masak sampai empuk dengan kuah secukupnya.',
      'Terakhir tambahkan air jeruk nipis.',
    ],
  },
  {
    id: 'marmer-cake',
    tag: 'Resep',
    title: 'Marmer Cake',
    copy: 'Cake lembut motif marmer cokelat-vanila, cocok untuk suguhan atau camilan sore.',
    image: resepMarmerCake,
    time: '45 menit',
    servings: '8 potong',
    tool: 'Loyang bulat 20 cm',
    ingredients: [
      '5 kuning telur, 4 putih telur',
      '125 gr tepung terigu',
      '175 gr gula pasir',
      '100 gr mentega cair, 1 sdm rhum',
      '1 sdm coklat bubuk',
    ],
    steps: [
      'Telur, gula, dan rhum dikocok dengan mixer sampai berwarna putih.',
      'Masukkan tepung sambil dikocok dengan kecepatan rendah, kemudian masukkan mentega cair, aduk pelan-pelan hingga rata.',
      'Sisihkan sebagian adonan, campurkan dengan coklat bubuk.',
      'Siapkan loyang bulat ukuran 20 cm, olesi dengan mentega, tuang adonan bergantian ke dalam loyang.',
      'Panggang selama kurang lebih 25 menit.',
    ],
  },
  {
    id: 'perkedel-udang',
    tag: 'Resep',
    title: 'Perkedel Udang',
    copy: 'Perkedel gurih berisi udang cincang, digoreng garing dengan lapisan telur renyah.',
    accent: 'accent-orange',
    image: resepPerkedelUdang,
    time: '40 menit',
    servings: '4 porsi',
    tool: 'Panci & Wajan Saute Serbaguna',
    ingredients: [
      '500 gram kentang',
      '200 gram udang basah',
      '10 buah bawang merah, 3 siung bawang putih',
      '1 butir telur ayam',
      'Merica, pala, garam secukupnya',
    ],
    steps: [
      'Rebus udang dengan panci tanpa air kurang lebih 5 menit, lalu kupas kulitnya dan haluskan.',
      'Kentang dikupas kulitnya, potong setebal 1 cm, lalu goreng kemudian dihaluskan.',
      'Bawang merah diiris tipis lalu digoreng. Bumbu lainnya dihaluskan, kemudian kentang, udang, bawang goreng, dan bumbu dicampur jadi satu hingga rata lalu dibentuk bulat pipih.',
      'Telur dikocok, celupkan bulatan tadi ke dalam kocokan telur lalu goreng dalam minyak panas.',
    ],
  },
  {
    id: 'popcorn-jagung',
    tag: 'Resep',
    title: 'Popcorn Jagung',
    copy: 'Popcorn buatan sendiri, gurih mentega atau manis karamel, camilan praktis untuk nonton bareng.',
    image: resepPopcorn,
    time: '10 menit',
    servings: '2 porsi',
    tool: 'Panci Keramik Pegangan Kayu (bertutup)',
    ingredients: [
      '2 genggam jagung pop corn',
      '1 sendok makan mentega',
      '(Opsional rasa manis) Gula pasir secukupnya',
    ],
    steps: [
      'Panaskan panci, masukkan mentega, tunggu sampai mencair lalu masukkan jagungnya, tutup pancinya. Gunakan api sedang.',
      'Kalau sudah terdengar letupan-letupan tandanya jagung sudah mulai mekar, biarkan sampai letupannya selesai, matikan api, buka tutup lalu pindahkan jagung ke tempat lain.',
      'Untuk rasa manis: cairkan gula pasir dalam panci (jangan sampai hangus), matikan api lalu masukkan jagungnya, aduk hingga rata.',
    ],
  },
]

export const categories = [
  { id: 'panci', label: 'Panci' },
  { id: 'wajan', label: 'Wajan' },
  { id: 'set', label: 'Set Panci' },
  { id: 'aksesoris', label: 'Aksesoris' },
  { id: 'semua', label: 'Semua Produk' },
]
