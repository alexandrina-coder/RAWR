import { motion } from 'motion/react';
import { Calendar, Heart, Scissors, Sparkle } from 'lucide-react';

export default function UseCases() {
  const cases = [
    {
      title: "Clinique esthétique",
      tags: "Botox, fillers, laser...",
      workflow: "Qualification + suivi + relances",
      icon: <Sparkle />,
    },
    {
      title: "Salon beauté",
      tags: "Soins visage, épilation...",
      workflow: "Réservations rapides + fidélisation",
      icon: <Heart />,
    },
    {
      title: "Coiffure",
      tags: "Coupes, coloration...",
      workflow: "Rappels + upsell automatique",
      icon: <Scissors />,
    },
    {
      title: "Bien-être",
      tags: "Massage, Spa...",
      workflow: "Abonnements + suivi post-soin",
      icon: <Calendar />,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-center px-4">Exemples d’automatisations pour votre activité</h2>
        
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cases.map((cs, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-sm hover:shadow-luxury border-brand-accent/5"
            >
              <div className="text-brand-accent mb-6 bg-brand-accent/5 w-12 h-12 rounded-xl flex items-center justify-center transition-colors hover:bg-brand-accent hover:text-white">{cs.icon}</div>
              <h3 className="text-xl font-bold mb-2">{cs.title}</h3>
              <div className="text-[10px] font-bold text-brand-accent/60 uppercase tracking-widest mb-6">{cs.tags}</div>
              <div className="pt-6 border-t border-black/5">
                <div className="text-[10px] text-brand-secondary/60 font-bold uppercase tracking-wider mb-2">Automate RAWR :</div>
                <div className="text-sm font-bold text-brand-primary leading-snug">{cs.workflow}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
