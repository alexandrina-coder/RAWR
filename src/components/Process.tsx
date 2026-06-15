import { motion } from 'motion/react';
import { Search, Map, Settings, Zap } from 'lucide-react';

export default function Process() {
  const steps = [
    { title: "Audit gratuit", desc: "Analyse complète de vos flux actuels et détection des pertes de chiffre d'affaires.", icon: <Search /> },
    { title: "Plan", desc: "Conception de votre système d'automatisation sur mesure adapté à vos besoins spécifiques.", icon: <Map /> },
    { title: "Installation", desc: "Mise en place technique fluide sans interrompre votre activité quotidienne.", icon: <Settings /> },
    { title: "Optimisation", desc: "Suivi des performances et ajustements pour maximiser vos résultats.", icon: <Zap /> },
  ];

  return (
    <section id="processus" className="py-16 md:py-24 bg-brand-bg" itemScope itemType="https://schema.org/HowTo">
      <meta itemProp="name" content="Le processus RAWR" />
      <meta itemProp="description" content="Quatre étapes simples pour transformer votre clinique esthétique avec l'intelligence artificielle." />
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16">Comment se déroule la mise en place ?</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-black/10 z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-accent text-brand-ivory rounded-full flex items-center justify-center mb-5 md:mb-6 shadow-xl shadow-brand-accent/20 border-4 border-brand-bg">
                {step.icon}
              </div>
              <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2">Étape {i + 1}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-sm text-brand-secondary font-medium leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
