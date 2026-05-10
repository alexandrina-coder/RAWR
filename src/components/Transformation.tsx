import { motion } from 'motion/react';
import { ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export default function Transformation() {
  const avant = [
    "Prospects oubliés",
    "Relances manuelles",
    "Agenda instable",
    "No-shows fréquents",
    "Avis non demandés",
    "Équipe débordée",
  ];

  const apres = [
    "Réponses instantanées IA",
    "Relances automatiques",
    "Réservations fluides",
    "Rappels intelligents",
    "Avis générés",
    "Équipe focalisée client",
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:text-center md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-[1.1] font-sans">
            <span className="text-brand-accent font-bold">RAWR</span> transforme votre <span className="font-serif italic">parcours client</span> en système automatisé.
          </h2>
        </div>

        <div className="grid lg:grid-cols-11 gap-6 md:gap-8 items-center">
          {/* Avant */}
          <div className="lg:col-span-5 bg-brand-ivory p-6 md:p-12 rounded-[32px] md:rounded-[40px] shadow-sm border border-brand-accent/5">
            <h3 className="text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2 text-brand-secondary/50 uppercase tracking-[0.25em] text-[10px] font-bold">
              <span className="w-8 h-[1px] bg-brand-secondary/20" /> Avant RAWR
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {avant.map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-brand-secondary line-through opacity-40">
                  <XCircle className="text-red-400 shrink-0" size={16} md:size={18} />
                  <span className="text-sm md:text-base font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Icon */}
          <div className="lg:col-span-1 flex justify-center py-2 lg:py-0">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-accent rounded-full flex items-center justify-center text-white shadow-luxury transform rotate-90 lg:rotate-0">
              <ArrowRight size={20} md:size={24} />
            </div>
          </div>

          {/* Après */}
          <div className="lg:col-span-5 gradient-burgundy p-6 md:p-12 rounded-[32px] md:rounded-[40px] text-brand-ivory shadow-luxury border border-white/5">
            <h3 className="text-2xl font-bold mb-6 md:mb-8 flex items-center gap-2 text-brand-ivory/60 uppercase tracking-[0.25em] text-[10px] font-bold">
              <span className="w-8 h-[1px] bg-brand-ivory/30" /> Avec RAWR
            </h3>
            <ul className="space-y-4 md:space-y-6">
              {apres.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="text-green-400 shrink-0" size={16} md:size={18} />
                  <span className="text-base md:text-lg font-semibold tracking-tight">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
