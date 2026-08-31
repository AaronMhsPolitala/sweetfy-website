export interface Product {
  id: string;
  name: string;
  price: string;
  numericPrice: number;
  description: string;
  image: string;
  alt: string;
  badge?: string;
  containerBg: string;
  category: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initial: string;
  colorClass: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  colSpan: string;
  rowSpan: string;
}

export const BRAND_DATA = {
  name: "Sweetfy",
  tagline: "Pasti Ketagihan Dalam 1 Gigitan",
  subtagline: "Es Kulkul dan Es Teh Sweetfy, teman manis dan segar untuk menemani setiap momen kamu.",
  whatsappNumber: "6283119465702",
  whatsappUrl: "https://wa.me/6283119465702",
  locationName: "Sweetfy Base",
  locationAddress: "Jl. Ahmad Yani Km. 06, Pelaihari, Kabupaten Tanah Laut, Kalimantan Selatan",
  googleMapsUrl: "https://maps.app.goo.gl/CMNBQCSodQUNQahP6",
  email: "hello@sweetfy.com",
  phone: "+62 831-1946-5702",
  operatingHours: "09:00 - 16:00 WITA",
  operatingDays: "Senin - Minggu",
  logoUrl: "/images/logo.png",
};

export const PRODUCTS: Product[] = [
  {
    id: "es-kulkul",
    name: "Es Kulkul",
    price: "Rp5,000",
    numericPrice: 5000,
    description: "Buah segar (melon, semangka & anggur) dilapisi cokelat manis yang lezat. Plus topping favoritmu gratis!",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1p50a72lfa3Aj78QCmY2E9VPj00tpDTPssrrsaXE2jUUVhj3odb3-28U1zdYiPe25L0hRVJ3O0wKc9tzhnnlrWroRuuI7ho18KkUIjnmKkKBlBN7yiXN5TaArGYjV8RkIfkCuVK-ljCOEb_FvdeTelCXrWXV4J9oAT4gcXEGzPdW_p2RQt2mRd2LLJBtjtoh7B7y2ETkHBrMdXZkyD_HdP1MuytDMIo2guj6E-SdwJlnrSQGR_9z6UA",
    alt: "Es Kulkul buah segar dilapisi cokelat lezat",
    badge: "Terlaris",
    containerBg: "bg-secondary-container/30",
    category: "Es Kulkul",
  },
  {
    id: "es-teh-original",
    name: "Es Teh Original",
    price: "Rp3,000",
    numericPrice: 3000,
    description: "Teh manis dingin klasik yang menyegarkan, diseduh segar setiap hari. Pilihan tepat untuk melepas dahaga di siang hari yang terik.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJNhmVMbHZuGGz93GfAoU1DMzubSy9FxzmNJHz-qk1KmDxqp_NhtNwNziampVydcEtiXjVEixefUwwKEm00VA0JZscOQrUi80pkmJ343hArsaQvF6wwtD2_UES7qwRA3PcKiML0zgohZAGS7SKikVQLYQH9Mxp93Z1uTdUxNUNMqS7-Gh_qDCSHncmG4TjMt6cwdm0GgusTo8JG3GmvTOHjreWV9mgN428mFt-2xFEdV9rRLT863jXhA",
    alt: "Gelas Es Teh manis dingin klasik dengan es batu",
    badge: "Super Segar",
    containerBg: "bg-tertiary-container/30",
    category: "Es Teh",
  },
  {
    id: "es-teh-lychee",
    name: "Es Teh Lychee",
    price: "Rp3,000",
    numericPrice: 3000,
    description: "Es teh menyegarkan dengan paduan rasa leci yang manis. Manis, wangi, dan ekstra menyegarkan untuk mood booster kamu.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy8Mw-cYtVIWD8mArB33M5LPraP3lRpVnWnT6tBUoZjG9Lj-RXAvL0TyRYN7SH9zRimG0VprPvCKN1oJvKwJ67Ws-l51ADx35eraGv4u2mtys5g5jZ5nNnGmHObhcX0bvh4nfJfGDf7FQwJQW3DGXWO_iXAXaQslBo8vbrbE5-uZxedW9Jq1b8cp1NIPkpHCqmXLgwnW1MP9pHUsScWUbG_QRzRYnSjr4UsuruDOZuM29_L7nP4MOSFQ",
    alt: "Gelas Es Teh rasa leci manis nan menyegarkan",
    badge: "Favorit Mahasiswa",
    containerBg: "bg-primary-container/30",
    category: "Es Teh",
  },
];

export const TOPPINGS = [
  { name: "Meses Cokelat", tag: "Manis Klasik" },
  { name: "Meses Warna-Warni", tag: "Ceria & Seru" },
  { name: "Kacang Sangrai", tag: "Renyah Gurih" },
];

export const FEATURES = [
  {
    icon: "eco",
    title: "Bahan Segar",
    description: "Buah segar dan teh seduhan terbaik pilihan setiap hari.",
    bgClass: "bg-tertiary-container/30 text-on-tertiary-container",
  },
  {
    icon: "payments",
    title: "Ramah Mahasiswa",
    description: "Mulai dari Rp3,000 aja. Ramah banget buat kantong mahasiswa!",
    bgClass: "bg-secondary-container/30 text-on-secondary-container",
  },
  {
    icon: "celebration",
    title: "Lebih Seru",
    description: "Bebas custom topping favorit sesuka hati untuk Es Kulkul-mu.",
    bgClass: "bg-primary-container/30 text-on-primary-container",
  },
  {
    icon: "wb_sunny",
    title: "Pas Buat Hari Panas",
    description: "Solusi jitu ngademin hari yang panas setelah kelas atau aktivitas.",
    bgClass: "bg-surface-variant text-on-surface-variant",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Es Kulkulnya juara! Cokelatnya tebel dan buahnya beneran fresh. Harganya pas banget buat kantong mahasiswa akhir bulan.",
    author: "Rina S.",
    role: "Mahasiswa Manajemen",
    initial: "R",
    colorClass: "bg-primary-container text-on-primary-container",
  },
  {
    id: "t2",
    quote: "Es Teh Lychee andalan tiap abis kelas siang. Nyegerin banget dan manisnya gak bikin eneg. Sering-sering buka bazar dong!",
    author: "Dimas A.",
    role: "Mahasiswa Teknik",
    initial: "D",
    colorClass: "bg-secondary-container text-on-secondary-container",
  },
  {
    id: "t3",
    quote: "Favoritku Es Kulkul melon pake meses warna-warni! Temen-temen sekelas juga pada ketagihan pesen waktu event bazar kemarin.",
    author: "Nadia P.",
    role: "Mahasiswa Akuntansi",
    initial: "N",
    colorClass: "bg-tertiary-container text-on-tertiary-container",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Bisa request buah untuk Es Kulkul?",
    answer: "Saat ini kami menyediakan pilihan buah segar seperti melon, semangka, dan anggur yang dipadukan dengan cokelat beku racikan khas Sweetfy.",
  },
  {
    id: "faq-2",
    question: "Toppingnya bayar lagi gak?",
    answer: "Tentu tidak! Harga Rp3,000 sudah termasuk pilihan topping gratis yang tersedia (selama persediaan masih ada).",
  },
  {
    id: "faq-3",
    question: "Kapan dan di mana bazarnya diadakan?",
    answer: "Bazar kami biasanya diadakan di event-event kampus Politala / Pelaihari. Untuk update jadwal dan lokasi booth terbaru, pantau Instagram kami atau langsung pesan via WhatsApp!",
  },
  {
    id: "faq-4",
    question: "Apakah menerima pemesanan dalam jumlah banyak untuk acara?",
    answer: "Bisa banget! Kami menerima pesanan besar untuk acara himpunan, seminar, ulang tahun, atau event kampus. Silakan konsultasi H-7 via WhatsApp.",
  },
];

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    title: "Stand Bazar Kampus Sweetfy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIKp_RC4OwqOPYvmtWXEbcTIkeXWfAK0uq_iXB8D7FK0OZYmgfGW8NWMfLsH48IeJZhcfRUa3ASciR5X3ZSGZjoSqUhJjR7XrYSRSNH_mRZYNn0q1Dkz-OAfkp72ot3oNbor3Ra_mH9N8TppSNvhXK2zEoyLQ7QuewpjdTn7S6lAchLjsTQBAtlHWPa0nqKbtEH-yj3Krgm5rrpgVrwfwP4u38qy3oHAVyIMCNec3htqcNbITFagErNg",
    alt: "Suasana stand bazar kampus Sweetfy yang ramai pengunjung",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: "g2",
    title: "Gigitan Renyah Es Kulkul",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC54Ta8ZGB0bOkDMDwHeNC2vBqLmnvYl8pjmtxMPnI7-ktgVfShEf4na32p6GR-P4H1br3ewsEiWs10R5onYrBoT716k7nYQWqmkVFHAQ3FnwlXQv3ez3s0da9BsmG3n1jPlOsqldpqFGR2fcZkXjsKY5ZjHpiVVRMg7p_BfAUSRPskt-zcL1d7U4A4cBF2hhDXX8sUNC9vfUfC47-vyrhYGOLMeWzDTkHy2IL3HzJab_D0TdUsXg1jYQ",
    alt: "Es Kulkul buah segar dengan lapisan cokelat beku",
    colSpan: "col-span-2 md:col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: "g3",
    title: "Kesegaran Es Teh Sweetfy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8CaB94hDqnuoghGDhKZuXwPw61IdhR0HxsFabkUBc0slCDXintNYQfZupleZU3o-_xHxAtXAtz9VjNfYYkCYYvtBEomZa00cu9cMDv8oQg2_8-0ol7Zsod7XaHXjaxzRGcUb7XdtjEDa-6XzaquOqivPbNA2dhEQMVx2YjqM5NDAQSvaTv1Gn8KB3fonI7Z0RgXw_wY4t-ajkQExT4cdft0N3mflb0l3NjNV9sRbl6caHungXB1yfw",
    alt: "Dua cup Es Teh segar Sweetfy",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    id: "g4",
    title: "Persiapan Bahan Segar",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFm0LJb426EBfTjjzaNSEefv8yTQD-vtnok1qcotfJguJxTIjOO6KNRcNJKcNzFOTDY75fiXnlU9Is6DHa-yjS8c8wIvHK4SZXnnBA6RaRMfY6XiaXZcXQRQ5UscA0y_S41ON8X-NVqNU0fSfm8F7fGB9RiQJ3loKA_vZmykvXBm8a5XcTD649ta_t59k7xFNF92h6ofxr8c6VMCyUXEyoVPrpC8ydNhBi20FIaF6i8Mijh-jOfEO3QA",
    alt: "Bahan-bahan segar Es Kulkul dan Es Teh",
    colSpan: "col-span-1 md:col-span-2",
    rowSpan: "row-span-1",
  },
];
