import { Product, Translation } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'FiYAA_ Signature Hoodie - Black',
    price: 'Rp 349.000',
    image: 'https://picsum.photos/seed/hoodie1/800/1000',
    shopeeUrl: 'https://shopee.co.id',
    category: 'Hoodies'
  },
  {
    id: '2',
    name: 'FiYAA_ Oversized Tee - White',
    price: 'Rp 199.000',
    image: 'https://picsum.photos/seed/tee1/800/1000',
    shopeeUrl: 'https://shopee.co.id',
    category: 'T-Shirts'
  },
  {
    id: '3',
    name: 'FiYAA_ Cargo Pants - Olive',
    price: 'Rp 429.000',
    image: 'https://picsum.photos/seed/pants1/800/1000',
    shopeeUrl: 'https://shopee.co.id',
    category: 'Pants'
  },
  {
    id: '4',
    name: 'FiYAA_ Coach Jacket - Navy',
    price: 'Rp 399.000',
    image: 'https://picsum.photos/seed/jacket1/800/1000',
    shopeeUrl: 'https://shopee.co.id',
    category: 'Jackets'
  },
  {
    id: '5',
    name: 'FiYAA_ Graphic Tee - Acid Wash',
    price: 'Rp 219.000',
    image: 'https://picsum.photos/seed/tee2/800/1000',
    shopeeUrl: 'https://shopee.co.id',
    category: 'T-Shirts'
  },
  {
    id: '6',
    name: 'FiYAA_ Beanie - Charcoal',
    price: 'Rp 129.000',
    image: 'https://picsum.photos/seed/beanie1/800/1000',
    shopeeUrl: 'https://shopee.co.id',
    category: 'Accessories'
  }
];

export const TRANSLATIONS: Record<'en' | 'id', Translation> = {
  en: {
    nav: {
      home: 'Home',
      collection: 'Collection',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'STREETWEAR EVOLVED',
      subtitle: 'Premium quality essentials for the modern urban explorer.',
      cta: 'Explore Collection'
    },
    gallery: {
      title: 'LATEST DROP',
      buyNow: 'Buy on Shopee'
    },
    footer: {
      rights: 'All rights reserved.'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      collection: 'Koleksi',
      about: 'Tentang',
      contact: 'Kontak'
    },
    hero: {
      title: 'EVOLUSI STREETWEAR',
      subtitle: 'Kualitas premium untuk penjelajah urban modern.',
      cta: 'Lihat Koleksi'
    },
    gallery: {
      title: 'RILIS TERBARU',
      buyNow: 'Beli di Shopee'
    },
    footer: {
      rights: 'Hak cipta dilindungi.'
    }
  }
};
