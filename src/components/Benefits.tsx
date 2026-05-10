import { motion } from 'motion/react';
import { Plus, MessageSquare, AlertCircle, Star, Heart, Image, Workflow } from 'lucide-react';

export default function Benefits() {
  const benefitList = [
    { text: "Plus de rendez-vous", icon: <Plus size={18} /> },
    { text: "Moins de messages", icon: <MessageSquare size={18} /> },
    { text: "Moins de no-shows", icon: <AlertCircle size={18} /> },
    { text: "Plus d'avis", icon: <Star size={18} /> },
    { text: "Plus de clients fidèles", icon: <Heart size={18} /> },
    { text: "Meilleure image", icon: <Image size={18} /> },
    { text: "Équipe productive", icon: <Workflow size={18} /> },
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 tracking-tight leading-[1.1] font-sans">
              Ce que <span className="text-brand-accent font-bold">RAWR</span> <span className="font-serif italic">peut changer</span> dans votre business
            </h2>
            <p className="text-lg text-brand-secondary mb-10 leading-relaxed">
              L’IA ne remplace pas votre équipe. Elle la rend <span className="font-bold underline decoration-brand-accent decoration-2 underline-offset-4">redoutablement efficace</span> en gérant le "bruit" administratif pour qu'elle se concentre sur l'humain.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefitList.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-brand-bg p-4 rounded-xl font-bold text-brand-primary border border-black/5">
                  <div className="text-brand-accent">{item.icon}</div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div className="gradient-burgundy rounded-[32px] md:rounded-[40px] p-8 md:p-12 text-center text-brand-ivory shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 italic">Des systèmes pensés pour améliorer vos chiffres</h3>
              <div className="space-y-4 md:space-y-6 text-left max-w-sm mx-auto">
                 {[
                   { label: "Temps de réponse réduit", val: "-95%" },
                   { label: "Conversion prospects", val: "+40%" },
                   { label: "Réduction des no-shows", val: "-65%" },
                   { label: "Avis Google augmentés", val: "x3" },
                 ].map((stat, i) => (
                   <div key={i} className="flex justify-between items-center border-b border-brand-ivory/10 pb-3 md:pb-4">
                      <span className="text-sm md:text-base font-medium opacity-80">{stat.label}</span>
                      <span className="text-xl md:text-2xl font-display font-bold">{stat.val}</span>
                   </div>
                 ))}
              </div>
              <p className="mt-8 text-xs opacity-50 italic uppercase tracking-widest text-center">Objectifs possibles selon votre activité</p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
