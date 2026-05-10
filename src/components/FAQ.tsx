import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "Avez-vous besoin d'accès à mes outils actuels ?",
      a: "Oui, pour maximiser l'efficacité, nous intégrons nos automates directement à vos logiciels (Doctolib, Zylker, Treatwell, etc.) via des accès sécurisés ou API."
    },
    {
      q: "L'IA ne va-t-elle pas déshumaniser la relation client ?",
      a: "Au contraire. L'IA gère les questions répétitives et chronophages 24/7. Cela libère du temps à votre équipe pour se concentrer sur l'accueil physique et la qualité des soins en cabine."
    },
    {
      q: "Combien de temps prend l'installation ?",
      a: "Un système standard est déployé en 15 à 30 jours après l'audit. Nous construisons d'abord le système sur nos serveurs de test avant de le brancher à votre clinique."
    },
    {
      q: "Votre système est-il conforme au RGPD ?",
      a: "Absolument. La protection des données de santé est notre priorité. Toutes nos solutions sont configurées pour respecter scrupuleusement la réglementation européenne en vigueur."
    },
    {
      q: "Et si j'ai déjà un manager ou une secrétaire ?",
      a: "RAWR est un multiplicateur de force. Votre secrétaire pourra gérer 3x plus de volume sans stress, car l'IA pré-qualifie chaque demande et organise l'agenda automatiquement."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12">Questions fréquentes</h2>
        
        <div className="space-y-3 md:space-y-4">
          {questions.map((faq, i) => (
            <div key={i} className="glass-card rounded-xl md:rounded-2xl overflow-hidden border-black/5">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-5 md:p-6 flex justify-between items-center bg-brand-ivory hover:bg-brand-bg/50 transition-colors"
              >
                <span className="font-bold text-base md:text-lg pr-4 leading-tight">{faq.q}</span>
                <div className={`shrink-0 text-brand-accent transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? <Minus size={18} md:size={20} /> : <Plus size={18} md:size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-brand-ivory"
                  >
                    <div className="p-5 md:p-6 pt-0 text-sm md:text-base text-brand-secondary font-medium leading-relaxed border-t border-black/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
