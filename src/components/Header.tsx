import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Problèmes', href: '#problemes' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Résultats', href: '#resultats' },
    { name: 'Processus', href: '#processus' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-ivory/90 backdrop-blur-md border-b border-brand-accent/10 py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1 group">
          <span className="text-2xl font-display font-bold tracking-tighter text-brand-accent">
            RAWR<span className="text-brand-primary/20">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-brand-secondary hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <a 
            href="#audit" 
            className="hidden md:flex items-center gap-2 bg-brand-accent text-brand-ivory px-7 py-3 rounded-full text-xs font-bold tracking-tight transition-all hover:opacity-90 active:scale-95 shadow-luxury"
          >
            Audit gratuit
          </a>
          
          <button 
            className="md:hidden text-brand-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-ivory border-b border-black/5 p-6 md:hidden shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-brand-primary"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#audit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-brand-accent text-brand-ivory px-6 py-4 rounded-brand text-lg font-bold"
              >
                Réserver un audit gratuit
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
