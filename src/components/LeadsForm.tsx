import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';

export default function LeadsForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    etablissement: '',
    ville: '',
    type: 'Clinique',
    objectif: 'Plus de RDV',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Real logic would go here
  };

  return (
    <section id="audit" className="py-16 md:py-24 bg-brand-ivory px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto bg-brand-bg rounded-[32px] md:rounded-[48px] p-6 sm:p-10 md:p-16 border border-black/5 shadow-2xl relative overflow-hidden grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          
          <div className="text-center lg:text-left">
            <div className="mb-6 md:mb-8 flex justify-center lg:justify-start">
               <div className="flex items-center gap-2 bg-brand-accent/10 p-2 px-4 rounded-full text-brand-accent text-[10px] sm:text-xs font-bold animate-pulse">
                  <Clock size={14} /> Places limitées ce mois-ci
               </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 md:mb-8 leading-tight font-sans whitespace-pre-line">
              Commencez par un {"\n"}
              <span className="font-serif italic luxury-text-accent">audit gratuit</span>
            </h2>
            
            <div className="flex flex-col gap-4 sm:gap-6 items-center lg:items-start mb-8 lg:mb-0">
              {[
                { title: "Analyse complète", desc: "Audit de vos processus actuels sans engagement." },
                { title: "Détection des pertes", desc: "Identifier où vos prospects s'échappent." },
                { title: "Plan personnalisé", desc: "Roadmap concrète d'automatisations." }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-left w-full sm:w-auto">
                  <div className="shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <Send size={14} />
                  </div>
                  <div>
                    <div className="font-bold text-sm sm:text-base tracking-tight">{item.title}</div>
                    <div className="text-[10px] sm:text-xs text-brand-secondary opacity-60 leading-tight">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 p-5 md:p-6 glass-card rounded-2xl md:rounded-3xl border-brand-accent/10 bg-white/30 backdrop-blur-sm w-full mx-auto">
               <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400/20 text-yellow-700 rounded-full flex items-center justify-center shrink-0">
                    <AlertTriangle size={20} md:size={24} />
                  </div>
                  <div className="text-xs md:text-sm font-medium text-brand-secondary italic text-center md:text-left">
                    "Plus de 70% des cliniques esthétiques en France perdent au moins 30% de leur CA potentiel par manque de réactivité digitale."
                  </div>
               </div>
            </div>
          </div>

          <div className="relative w-full">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-brand-ivory p-6 sm:p-8 md:p-10 rounded-[28px] md:rounded-[32px] shadow-2xl relative z-10"
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1 text-left">
                        <label className="text-[10px] uppercase font-bold text-brand-secondary tracking-widest pl-2">Nom Complet</label>
                        <input required type="text" placeholder="Sophie Martin" className="w-full bg-brand-bg border border-black/5 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all text-sm font-medium" />
                      </div>
                      <div className="space-y-1 text-left">
                        <label className="text-[10px] uppercase font-bold text-brand-secondary tracking-widest pl-2">Etablissement</label>
                        <input required type="text" placeholder="Clinique Elegance" className="w-full bg-brand-bg border border-black/5 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all text-sm font-medium" />
                      </div>
                    </div>

                    <div className="space-y-1 text-left">
                      <label className="text-[10px] uppercase font-bold text-brand-secondary tracking-widest pl-2">Email Professionnel</label>
                      <input required type="email" placeholder="contact@etablissement.fr" className="w-full bg-brand-bg border border-black/5 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all text-sm font-medium" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1 text-left">
                        <label className="text-[10px] uppercase font-bold text-brand-secondary tracking-widest pl-2">Téléphone</label>
                        <input required type="tel" placeholder="06 00 00 00 00" className="w-full bg-brand-bg border border-black/5 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all text-sm font-medium" />
                      </div>
                      <div className="space-y-1 text-left">
                        <label className="text-[10px] uppercase font-bold text-brand-secondary tracking-widest pl-2">Ville</label>
                        <input required type="text" placeholder="Paris, Lyon..." className="w-full bg-brand-bg border border-black/5 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all text-sm font-medium" />
                      </div>
                    </div>

                    <div className="space-y-1 text-left">
                        <label className="text-[10px] uppercase font-bold text-brand-secondary tracking-widest pl-2">Message (Optionnel)</label>
                        <textarea placeholder="Comment pouvons-nous vous aider ?" className="w-full bg-brand-bg border border-black/5 px-4 py-3 rounded-xl h-24 resize-none focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all text-sm font-medium"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-brand-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-accent-hover transition-all active:scale-[0.98] shadow-lg shadow-brand-accent/20 flex items-center justify-center gap-2"
                    >
                      Recevoir mon audit gratuit
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-brand-ivory p-12 rounded-[32px] text-center shadow-2xl space-y-6"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold">Demande reçue !</h3>
                  <p className="text-brand-secondary font-medium px-4 leading-relaxed">
                    Merci. L’équipe RAWR analyse votre dossier et vous contacte très rapidement pour planifier votre appel d'audit.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
