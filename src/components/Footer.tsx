import { ShieldCheck, Database, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-primary/5 px-4 sm:px-8 pt-16 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pt-12 md:pt-16 border-t border-black/5">
          <div className="col-span-1">
            <a href="#" className="inline-block text-xl md:text-2xl font-display font-bold tracking-tighter text-brand-accent mb-4 md:mb-6">
              RAWR<span className="text-brand-primary/20">.</span>
            </a>
            <p className="text-[11px] md:text-xs text-brand-secondary font-medium leading-relaxed max-w-[240px]">
              L'agence d'automatisation IA haut de gamme dédiée aux cliniques esthétiques et instituts de beauté en France.
            </p>
          </div>
          
          <div className="sm:pl-10 lg:pl-0">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary mb-6 md:mb-8">Navigation</h4>
            <ul className="space-y-3 md:space-y-4 text-xs font-bold text-brand-secondary/70">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Accueil</a></li>
              <li><a href="#problemes" className="hover:text-brand-accent transition-colors">Problèmes</a></li>
              <li><a href="#solutions" className="hover:text-brand-accent transition-colors">Solutions IA</a></li>
              <li><a href="#audit" className="hover:text-brand-accent transition-colors">Audit Gratuit</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary mb-6 md:mb-8">Contact</h4>
             <ul className="space-y-3 md:space-y-4 text-xs font-bold text-brand-secondary/70">
               <li className="break-all md:break-normal">alexandrina@rawragent.com</li>
               <li>HQ: Paris, France</li>
               <li className="flex gap-4 mt-4 md:mt-6">
                 <a href="#" className="hover:text-brand-accent transition-colors">LINKEDIN</a>
                 <a href="#" className="hover:text-brand-accent transition-colors">INSTAGRAM</a>
               </li>
             </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-primary mb-8">Normes de Qualité</h4>
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-bold text-brand-secondary uppercase tracking-widest">
                    <ShieldCheck size={14} className="text-brand-accent/40" /> Pensé pour la France
                </div>
                <div className="flex items-center gap-3 text-[10px] font-bold text-brand-secondary uppercase tracking-widest">
                    <Database size={14} className="text-brand-accent/40" /> RGPD & Santé Respecté
                </div>
                <div className="flex items-center gap-3 text-[10px] font-bold text-brand-secondary uppercase tracking-widest">
                    <Lock size={14} className="text-brand-accent/40" /> Données sécurisées
                </div>
            </div>
          </div>
        </div>

        <div className="pt-12 mt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] uppercase font-bold tracking-[0.3em] text-brand-secondary opacity-40">
            © {new Date().getFullYear()} RAWR Agency — Excellence en automatisation
          </div>
          <div className="flex gap-8 text-[9px] uppercase font-bold tracking-[0.3em] text-brand-secondary opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Mentions Légales</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
