import { motion, useInView, animate, useMotionValue, useTransform } from 'motion/react';
import { useRef, useEffect } from 'react';
import { ChevronRight, CheckCircle2, Star, ShieldCheck, Sparkles, Zap } from 'lucide-react';

function Counter({ value, decimals = 0, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return prefix + latest.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + suffix;
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Hero() {
  const trustBadges = [
    { icon: <Zap size={16} />, text: "Installation rapide" },
    { icon: <Sparkles size={16} />, text: "Automatisations sur mesure" },
    { icon: <ShieldCheck size={16} />, text: "Conçu pour la France" },
    { icon: <CheckCircle2 size={16} />, text: "Moins de tâches, plus de RDV" },
  ];

  return (
    <section className="relative pt-24 md:pt-40 pb-16 md:pb-24 overflow-hidden" itemScope itemType="https://schema.org/AboutPage">
      <meta itemProp="name" content="Expertise IA pour Cliniques Esthétiques" />
      <meta itemProp="description" content="Découvrez comment RAWR automatise votre clinique esthétique avec l'IA pour augmenter vos revenus et libérer du temps médical." />
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-accent/5 rounded-full blur-[80px] md:blur-[120px] -mr-20 md:-mr-40 -mt-20 md:-mt-40" />
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-brand-accent/5 rounded-full blur-[60px] md:blur-[100px] -ml-10 md:-ml-20 -mb-10 md:-mb-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent mb-8">
              <span className="w-10 h-[1px] bg-brand-accent/30" /> L'expert IA pour le secteur esthétique
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-light leading-[1.1] md:leading-[1.05] text-brand-primary mb-8 md:mb-10 tracking-tight">
              Automatisez votre <span className="luxury-text-accent">clinique</span> et remplissez votre agenda.
            </h1>
            
            <p className="text-base md:text-lg text-brand-secondary leading-relaxed mb-10 md:mb-12 max-w-lg">
              RAWR aide les cliniques esthétiques et salons en France à convertir plus de prospects, réduire les absences et relancer les clients grâce à des systèmes IA sur mesure.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 mb-10 md:mb-14">
              <a 
                href="#audit" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-accent text-brand-ivory px-8 md:px-10 py-4 md:py-5 rounded-xl text-sm font-bold shadow-luxury transition-all hover:opacity-90 hover:translate-y-[-2px] active:translate-y-0 text-center"
              >
                👉 Réserver mon audit gratuit
              </a>
              <a 
                href="#solutions" 
                className="w-full sm:w-auto flex items-center justify-center bg-transparent text-brand-primary border border-brand-primary/20 px-8 md:px-10 py-4 md:py-5 rounded-xl text-sm font-bold hover:bg-white transition-all text-center"
              >
                Découvrir les solutions
              </a>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-10">
              <div className="flex flex-col">
                <div className="text-brand-accent font-display font-bold text-xl md:text-2xl">
                  <Counter value={45} prefix="+" suffix="%" />
                </div>
                <div className="text-[10px] uppercase text-brand-secondary tracking-widest font-bold">Réservations</div>
              </div>
              <div className="hidden sm:block w-[1px] h-12 bg-brand-primary/10"></div>
              <div className="flex flex-col">
                <div className="text-brand-accent font-display font-bold text-xl md:text-2xl">
                  <Counter value={80} prefix="-" suffix="%" />
                </div>
                <div className="text-[10px] uppercase text-brand-secondary tracking-widest font-bold">No-shows</div>
              </div>
              <div className="hidden sm:block w-[1px] h-12 bg-brand-primary/10"></div>
              <div className="flex flex-col">
                <div className="text-brand-accent font-display font-bold text-xl md:text-2xl">24/7</div>
                <div className="text-[10px] uppercase text-brand-secondary tracking-widest font-bold">Disponibilité</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Piece - Redesigned High-End Asset */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-xl"
          >
            <div className="relative group lg:h-full">
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 via-transparent to-transparent rounded-[60px] transform rotate-3 scale-95 opacity-30 group-hover:rotate-6 transition-transform duration-700" />
              
              {/* Main Visual Container */}
              <div className="relative w-full glass-card rounded-[32px] md:rounded-[48px] overflow-hidden border border-black/5 shadow-2xl flex flex-col h-fit">
                <div className="p-5 md:p-8 pb-4 flex justify-between items-center bg-white/40 backdrop-blur-xl border-b border-black/5 shrink-0">
                  <div className="text-[10px] font-black tracking-[0.2em] text-brand-primary uppercase">Performance RAWR</div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-accent" />
                    <div className="w-2 h-2 rounded-full bg-brand-accent/20" />
                    <div className="w-2 h-2 rounded-full bg-brand-accent/20" />
                  </div>
                </div>
                
                <div className="p-5 md:p-8 flex flex-col gap-6 md:gap-8 bg-gradient-to-b from-white/20 to-brand-ivory/20">
                  {/* Main metric section */}
                  <div className="space-y-2 md:space-y-3">
                    <div className="text-[10px] md:text-[11px] uppercase font-bold text-brand-secondary tracking-[0.1em] mb-1">Impact mensuel estimé</div>
                    <div className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tighter text-brand-primary">
                      <Counter value={12450} prefix="+" /> <span className="text-brand-accent font-serif italic text-2xl md:text-3xl md:text-4xl">€</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md w-fit">
                      <Zap size={10} fill="currentColor" /> Conversion +<Counter value={34} />%
                    </div>
                  </div>

                  {/* Dynamic Activity Feed / Pipeline */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-[10px] uppercase font-bold text-brand-secondary tracking-widest opacity-40">Activité en direct</div>
                      <div className="text-[10px] font-mono text-brand-accent animate-pulse">LIVE</div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: "Lead Instagram", value: "Qualifié par l'IA en 12s", time: "10:24", color: "bg-blue-400" },
                        { label: "Relance Client", value: "RDV Programmé", time: "10:15", color: "bg-brand-accent" },
                        { label: "Avis Google", value: "Généré & Publié", time: "09:40", color: "bg-green-500" }
                      ].map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white/70 rounded-2xl md:rounded-3xl border border-black/5 hover:bg-white transition-colors"
                        >
                          <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full ${item.color} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                             {i === 0 ? <Sparkles size={12} md:size={14} /> : i === 1 ? <Zap size={12} md:size={14} /> : <CheckCircle2 size={12} md:size={14} />}
                          </div>
                          <div className="flex-1">
                            <div className="text-[10px] md:text-[11px] font-black text-brand-primary">{item.label}</div>
                            <div className="text-[9px] md:text-[10px] font-medium opacity-60">{item.value}</div>
                          </div>
                          <span className="text-[9px] md:text-[10px] text-brand-secondary/40 font-mono italic">{item.time}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom stats summary */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="p-4 md:p-5 bg-brand-primary text-brand-ivory rounded-[20px] md:rounded-[28px] group-hover:translate-y-[-2px] transition-transform duration-500">
                      <div className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold opacity-60 mb-1 md:mb-2">Automatisé</div>
                      <div className="text-xl md:text-2xl font-light font-sans tracking-tight">
                        <Counter value={98.2} decimals={1} suffix="%" />
                      </div>
                    </div>
                    <div className="p-4 md:p-5 bg-brand-accent text-brand-ivory rounded-[20px] md:rounded-[28px] group-hover:translate-y-[-2px] transition-transform duration-500">
                      <div className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold opacity-60 mb-1 md:mb-2">Disponibilité</div>
                      <div className="text-xl md:text-2xl font-light font-sans tracking-tight">24/7</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent elements for depth */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 w-40 h-40 bg-brand-accent/15 rounded-full blur-3xl -z-10"
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-16 -right-16 w-56 h-56 bg-brand-accent/10 rounded-full blur-3xl -z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
