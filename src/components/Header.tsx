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
        <nav className="hidden lg:flex items-center gap-10">
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

        <div className="flex items-center gap-4 md:gap-6">
          <a 
            href="#audit" 
            className="hidden sm:flex items-center gap-2 bg-brand-accent text-brand-ivory px-5 md:px-7 py-2.5 md:py-3 rounded-full text-[10px] md:text-xs font-bold tracking-tight transition-all hover:opacity-90 active:scale-95 shadow-luxury"
          >
            Audit gratuit
          </a>
          
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-brand-accent bg-white rounded-full shadow-sm border border-black/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="relative w-5 h-4 flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7 }
                }}
                className="w-full h-0.5 bg-current rounded-full origin-center"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-full h-0.5 bg-current rounded-full"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -7 }
                }}
                className="w-full h-0.5 bg-current rounded-full origin-center"
              />
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-[2px] z-[-1] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ 
                duration: 0.5, 
                ease: [0.16, 1, 0.3, 1] // Custom quint ease-out for a more "premium" feel
              }}
              className="absolute top-full left-0 right-0 bg-brand-ivory border-b border-brand-accent/5 overflow-hidden lg:hidden shadow-2xl z-10"
            >
              <nav className="flex flex-col p-6 gap-2">
                {navLinks.map((link, i) => (
                  <motion.a 
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.1 + (i * 0.05),
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between group p-3 rounded-xl hover:bg-white transition-colors"
                  >
                    <span className="text-base font-serif font-medium text-brand-primary group-hover:text-brand-accent transition-colors">
                      {link.name}
                    </span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5, 
                        repeatDelay: 2
                      }}
                    >
                      <ChevronRight size={14} className="text-brand-accent opacity-0 group-hover:opacity-100 transition-all" />
                    </motion.div>
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.2 + (navLinks.length * 0.05),
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  className="mt-4 pt-4 border-t border-black/5"
                >
                  <a 
                    href="#audit"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 bg-brand-accent text-brand-ivory w-full py-4 rounded-xl text-sm font-bold shadow-lg transition-transform active:scale-95"
                  >
                    Réserver un audit gratuit
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
