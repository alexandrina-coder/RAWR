import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Elena Rossi",
    role: "Propriétaire, Clinique Esthétique Lumière",
    text: "Depuis que nous avons installé les systèmes d'automatisation de RAWR, notre taux de conversion a bondi de 35%. L'IA gère les premiers contacts avec une élégance et une précision qui dépassent nos attentes.",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Thomas Dubois",
    role: "Directeur, Institut de Beauté High-Care",
    text: "Le système de relance automatique a pratiquement éliminé les no-shows. C'est un gain de temps et d'argent phénoménal. On se demande comment on faisait avant.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Sarah Meyer",
    role: "Fondatrice, Sarah Aesthetics",
    text: "Un investissement rentabilisé en moins de deux mois. Le support de l'équipe RAWR est impeccable et les résultats sont au rendez-vous. Ma clinique tourne enfin à 100% de son potentiel.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-brand-accent mb-4"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-light tracking-tight leading-tight mb-6"
          >
            Ils nous font <span className="luxury-text-accent font-serif italic">confiance</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-secondary text-lg max-w-2xl mx-auto"
          >
            Découvrez comment RAWR transforme le quotidien des leaders de l'esthétique en France.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 rounded-[32px] border border-black/5 relative group hover:bg-white transition-all duration-500 shadow-sm"
            >
              <div className="absolute top-8 right-8 text-brand-accent/10 transition-colors group-hover:text-brand-accent/20">
                <Quote size={48} />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-accent/10 shadow-lg">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-brand-primary tracking-tight">{testimonial.name}</div>
                  <div className="text-[10px] uppercase font-bold text-brand-secondary tracking-widest opacity-60">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              <p className="text-brand-primary/80 leading-relaxed italic font-serif text-lg">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-brand-accent/5 rounded-full border border-brand-accent/10">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <div className="text-xs font-bold text-brand-secondary">
              <span className="text-brand-accent">+50</span> cliniques optimisées ce mois-ci
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
