export type Language = 'en' | 'id';

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  shopeeUrl: string;
  category: string;
}

export interface Translation {
  nav: {
    home: string;
    collection: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  gallery: {
    title: string;
    buyNow: string;
  };
  footer: {
    rights: string;
  };
}
