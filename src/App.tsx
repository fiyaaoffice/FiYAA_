/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  Globe, 
  Instagram, 
  Twitter, 
  Facebook,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS, TRANSLATIONS } from './constants';
import { Language } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'id' : 'en');
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
            <a href="#" className="text-2xl font-display tracking-tighter hover:opacity-100 transition-opacity">
              FiYAA_
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12">
            <a href="#" className="text-xs uppercase tracking-widest font-semibold hover:text-gray-400 transition-colors">{t.nav.home}</a>
            <a href="#collection" className="text-xs uppercase tracking-widest font-semibold hover:text-gray-400 transition-colors">{t.nav.collection}</a>
            <a href="#" className="text-xs uppercase tracking-widest font-semibold hover:text-gray-400 transition-colors">{t.nav.about}</a>
            <a href="#" className="text-xs uppercase tracking-widest font-semibold hover:text-gray-400 transition-colors">{t.nav.contact}</a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-2 text-[10px] lg:text-xs uppercase tracking-widest font-bold border border-white/20 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <Globe size={12} />
              <span>{lang === 'en' ? 'EN' : 'ID'}</span>
            </button>
            <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer" className="p-2 hover:opacity-70 transition-opacity">
              <ShoppingBag size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-display tracking-tighter">FiYAA_</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-8">
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl font-display uppercase tracking-tight">{t.nav.home}</a>
              <a href="#collection" onClick={() => setIsMenuOpen(false)} className="text-4xl font-display uppercase tracking-tight">{t.nav.collection}</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl font-display uppercase tracking-tight">{t.nav.about}</a>
              <a href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl font-display uppercase tracking-tight">{t.nav.contact}</a>
            </div>

            <div className="mt-auto pt-8 border-t border-white/10 flex justify-between items-center">
              <div className="flex space-x-6">
                <Instagram size={20} />
                <Twitter size={20} />
                <Facebook size={20} />
              </div>
              <button onClick={toggleLang} className="text-xs font-bold uppercase tracking-widest underline underline-offset-4">
                {lang === 'en' ? 'Bahasa Indonesia' : 'English'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/fiyaa-hero/1920/1080?grayscale" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-50 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-display leading-[0.9] mb-8 tracking-tighter">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 font-light leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#collection" 
                className="inline-flex items-center justify-center space-x-3 bg-white text-black px-8 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors group"
              >
                <span>{t.hero.cta}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://shopee.co.id" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 border border-white/30 px-8 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                <span>Shopee</span>
                <ShoppingBag size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </header>

      {/* Collection Section */}
      <section id="collection" className="py-24 lg:py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-gray-500 mb-4 block">FiYAA_ 2026</span>
              <h2 className="text-4xl md:text-6xl font-display uppercase tracking-tight">{t.gallery.title}</h2>
            </div>
            <div className="flex space-x-4">
              {['All', 'Hoodies', 'T-Shirts', 'Pants', 'Jackets'].map((cat) => (
                <button key={cat} className="text-[10px] uppercase tracking-widest font-bold hover:text-gray-400 transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {PRODUCTS.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-900">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a 
                      href={product.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-6 py-3 font-bold uppercase text-xs tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>{t.gallery.buyNow}</span>
                      <ChevronRight size={14} />
                    </a>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-sm text-[10px] px-3 py-1 font-bold uppercase tracking-widest">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider font-semibold mb-1 group-hover:text-gray-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-lg font-display tracking-tight">{product.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="border-b-2 border-white pb-2 text-sm uppercase tracking-widest font-bold hover:opacity-60 transition-opacity">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Brand Story / About */}
      <section className="py-24 lg:py-40 bg-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square lg:aspect-video overflow-hidden">
              <img 
                src="https://picsum.photos/seed/fiyaa-about/1200/800?grayscale" 
                alt="Brand Story" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-gray-500 mb-6 block">Our Vision</span>
              <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight mb-8 leading-tight">
                Crafted for the <br /> Bold & Fearless.
              </h2>
              <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
                FiYAA_ is more than just a brand. It's a movement born from the streets, 
                designed for those who dare to stand out. Every piece is a testament to 
                quality, comfort, and uncompromising style.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-display mb-2">100%</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Premium Cotton</p>
                </div>
                <div>
                  <h4 className="text-2xl font-display mb-2">LIMITED</h4>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Batch Production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <a href="#" className="text-3xl font-display tracking-tighter mb-6 block">FiYAA_</a>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
                Redefining modern streetwear with a focus on quality and urban aesthetics.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-gray-400 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-gray-400 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-gray-400 transition-colors"><Facebook size={20} /></a>
              </div>
            </div>
            
            <div>
              <h5 className="text-xs uppercase tracking-widest font-bold mb-8">Shop</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-widest font-bold mb-8">Support</h5>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-widest font-bold mb-8">Newsletter</h5>
              <p className="text-sm text-gray-500 mb-6">Join the movement. Get early access to new drops.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent border-b border-white/20 py-2 text-xs w-full focus:outline-none focus:border-white transition-colors uppercase tracking-widest"
                />
                <button className="p-2 border-b border-white/20 hover:text-gray-400 transition-colors">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
            <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
              &copy; {new Date().getFullYear()} FiYAA_ OFFICIAL. {t.footer.rights}
            </p>
            <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-gray-600 font-bold">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
