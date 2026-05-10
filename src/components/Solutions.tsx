import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, MessageSquareText, ShieldAlert, UserPlus, Instagram, Database, Check, Star, ChevronLeft, ChevronRight, Flag, Lock, Headset } from 'lucide-react';

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      title: "Assistant IA de prise de rendez-vous",
      shortName: "Prise de RDV",
      desc: "Un assistant intelligent qui répond aux demandes clients, qualifie et guide vers la réservation 24/7.",
      features: ["Réponses instantanées 24/7", "Qualification automatique", "Connexion à vos outils", "Réduction du temps de réponse"],
      icon: <Bot size={18} />,
      visual: "bg-brand-accent/5",
      type: "chat"
    },
    {
      title: "Automatisation WhatsApp & SMS",
      shortName: "WhatsApp/SMS",
      desc: "Relances automatiques, confirmations et suivi client personnalisé sans lever le petit doigt.",
      features: ["Confirmations automatiques", "Relances prospects", "Suivi post-soin", "SMS de courtoisie"],
      icon: <MessageSquareText size={18} />,
      visual: "bg-green-500/5",
      type: "whatsapp"
    },
    {
      title: "Système Anti No-Show",
      shortName: "Anti No-Show",
      desc: "Réduisez drastiquement les absences grâce à des rappels intelligents et stratégiques.",
      features: ["Rappels multi-canaux", "Recalage facile", "Dépôts de garantie auto", "Relances personnalisées"],
      icon: <ShieldAlert size={18} />,
      visual: "bg-orange-500/5",
      type: "stats"
    },
    {
      title: "Réactivation clients",
      shortName: "Réactivation",
      desc: "Identifiez et relancez automatiquement les clients qui ne sont pas revenus depuis X mois.",
      features: ["Segmentation intelligente", "Offres personnalisées", "Timing parfait", "Fidélisation augmentée"],
      icon: <UserPlus size={18} />,
      visual: "bg-blue-500/5",
      type: "radar"
    },
    {
      title: "Instagram Automation",
      shortName: "Instagram",
      desc: "Capturez des leads et répondez aux demandes directement depuis vos messages privés Instagram.",
      features: ["Capture de leads via DM", "Réponses automatiques aux questions fréquentes", "Intégration fluide avec votre CRM", "Conversion instantanée"],
      icon: <Instagram size={18} />,
      visual: "bg-pink-500/5",
      type: "instagram"
    },
    {
      title: "Gestion d'Avis Google",
      shortName: "Avis Google",
      desc: "Automatisez la collecte d'avis Google pour améliorer votre réputation en ligne et attirer plus de clients.",
      features: ["Demandes d'avis automatisées", "Lien vers Google My Business", "Collecte de feedback", "Boost de réputation"],
      icon: <Star size={18} />,
      visual: "bg-yellow-500/5",
      type: "stars"
    },
  ];

  const renderVisual = () => {
    const sol = solutions[activeTab];
    
    if (sol.type === "chat") {
      return (
        <div className="w-full max-w-[360px] flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="self-start bg-white p-4 rounded-2xl rounded-tl-none shadow-xl border border-black/5 max-w-[80%]"
          >
            <p className="text-xs font-bold text-brand-primary">Bonjour ! Je souhaite prendre rendez-vous pour un soin du visage samedi prochain.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="self-end bg-brand-accent p-4 rounded-2xl rounded-tr-none shadow-xl max-w-[80%]"
          >
            <p className="text-xs font-bold text-brand-ivory">Avec plaisir ! Nous avons une disponibilité à 14h ou 16h. Laquelle vous convient ?</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 2 }}
            className="self-start bg-white p-4 rounded-2xl rounded-tl-none shadow-xl border border-black/5 max-w-[80%]"
          >
            <p className="text-xs font-bold text-brand-primary">14h c'est parfait, merci !</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2.8, type: "spring" }}
            className="mt-4 bg-brand-primary p-6 rounded-[32px] shadow-2xl border border-white/10 overflow-hidden relative"
          >
             <div className="absolute top-0 right-0 p-4 opacity-20">
               <Check size={48} className="text-brand-accent" />
             </div>
             <div className="text-[10px] uppercase font-bold tracking-widest text-brand-accent mb-2">Confirmation</div>
             <div className="text-white text-lg font-black tracking-tight mb-1">Soin du Visage Luxe</div>
             <div className="text-white/60 text-[10px] font-bold">SAMEDI 18 MAI — 14H00</div>
             <div className="mt-4 h-1 w-full bg-white/10 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ delay: 3, duration: 1.5 }}
                 className="h-full bg-brand-accent"
               />
             </div>
          </motion.div>
        </div>
      );
    }

    if (sol.type === "whatsapp") {
      return (
        <div className="w-full max-w-[360px] flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="self-end bg-brand-accent p-4 rounded-2xl rounded-tr-none shadow-lg max-w-[85%]"
          >
            <p className="text-[11px] font-bold text-brand-ivory">Rappel : Votre séance de Microneedling est demain à 10h30. Confirmez-vous ?</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="self-start bg-white p-4 rounded-2xl rounded-tl-none shadow-md border border-black/5"
          >
            <p className="text-[11px] font-bold text-brand-primary">Oui, je confirme ! ✅</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8 }}
            className="self-end bg-brand-primary p-4 rounded-2xl rounded-tr-none shadow-lg max-w-[85%]"
          >
            <p className="text-[11px] font-bold text-white">Parfait ! Voici vos conseils pré-soin pour demain. À très vite ! ✨</p>
          </motion.div>

          {/* Post-care follow-up */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 4.5, type: "spring" }}
            className="mt-4 p-5 bg-white rounded-3xl border-2 border-brand-accent/20 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/5 rounded-full -mr-12 -mt-12" />
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-brand-accent/10 rounded-full flex items-center justify-center text-brand-accent">
                <Star size={14} fill="currentColor" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-primary/40">Suivi Automatisé</span>
            </div>
            <p className="text-xs font-bold text-brand-primary leading-relaxed italic">
              "Comment s'est passée votre séance ? Profitez de -10% sur votre prochain RDV avec le code MERCI10."
            </p>
          </motion.div>
        </div>
      );
    }

    if (sol.type === "stats") {
      return (
        <div className="w-full max-w-[360px] flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-3xl shadow-xl border border-black/5"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-brand-secondary/60">Taux de No-Show</span>
              <span className="text-sm font-black text-red-500">-85%</span>
            </div>
            <div className="h-4 w-full bg-red-100 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: "100%" }}
                 animate={{ width: "15%" }}
                 transition={{ delay: 1, duration: 1.5, ease: "circOut" }}
                 className="h-full bg-red-500"
               />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2 }}
            className="bg-brand-primary p-6 rounded-[32px] shadow-2xl relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-brand-ivory">
                <ShieldAlert size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">Protection Active</div>
                <div className="text-white font-bold">Dépôt de garantie collecté</div>
              </div>
            </div>
            <div className="text-2xl font-black text-white tracking-tight">45,00 €</div>
            <div className="mt-4 flex gap-1">
              {[1, 2, 3, 4, 5].map(i => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 + i * 0.1 }}
                  className="h-1 flex-1 bg-brand-accent/30 rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </div>
      );
    }

    if (sol.type === "radar") {
      return (
        <div className="w-full max-w-[360px] flex flex-col items-center gap-8">
           <div className="relative w-48 h-48">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed border-brand-accent/30 rounded-full"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 border border-brand-accent/10 rounded-full"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-accent rounded-full blur-sm" />
              </motion.div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <UserPlus size={40} className="text-brand-accent animate-pulse" />
              </div>

              {[
                { top: '20%', left: '70%', delay: 0.5 },
                { top: '60%', left: '20%', delay: 1.2 },
                { top: '80%', left: '60%', delay: 1.8 },
              ].map((dot, i) => (
                <motion.div 
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                  transition={{ delay: dot.delay, duration: 0.5 }}
                  className="absolute w-3 h-3 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(var(--brand-accent-rgb),0.5)]"
                  style={{ top: dot.top, left: dot.left }}
                />
              ))}
           </div>

           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 2.5 }}
             className="bg-white p-5 rounded-2xl shadow-xl border border-black/5 flex items-center gap-4 w-full"
           >
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                <MessageSquareText size={20} />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold text-blue-500 uppercase">Campagne Réactivation</div>
                <div className="text-xs font-bold text-brand-primary">12 clients relancés auto.</div>
              </div>
              <div className="text-brand-accent font-black text-sm">+12% ROI</div>
           </motion.div>
        </div>
      );
    }

    if (sol.type === "instagram") {
      return (
        <div className="w-[280px] aspect-[9/16] bg-black rounded-[40px] border-[6px] border-gray-900 shadow-2xl relative overflow-hidden flex flex-col">
           <div className="absolute top-4 left-0 w-full px-4 flex gap-1">
             <div className="h-0.5 flex-1 bg-white" />
             <div className="h-0.5 flex-1 bg-white/30" />
           </div>
           
           <div className="p-8 flex-1 flex flex-col justify-center gap-6">
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
              >
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600" />
                   <span className="text-[10px] font-bold text-white">Client_Beauty</span>
                 </div>
                 <p className="text-[11px] text-white/90 italic">"Grave envie de tester ce nouveau soin ! 😍"</p>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="self-end bg-blue-500 p-4 rounded-2xl rounded-tr-none shadow-xl max-w-[90%]"
              >
                <div className="flex items-center gap-2 mb-2">
                   <Bot size={12} className="text-white" />
                   <span className="text-[9px] font-black uppercase tracking-tighter text-white/60">RAWR BOT</span>
                </div>
                <p className="text-[10px] font-bold text-white leading-snug">
                  Hello ! Ravi que ça vous plaise. Voici le lien pour réserver votre séance :
                </p>
                <div className="mt-2 bg-white/20 rounded-lg p-2 text-[9px] text-white font-black truncate">
                  beauty.rawr.ai/booking
                </div>
              </motion.div>
           </div>

           <div className="p-4 border-t border-white/10 flex items-center gap-3">
             <div className="flex-1 h-8 rounded-full border border-white/30 px-3 flex items-center">
               <div className="h-1 w-12 bg-white/20 rounded-full" />
             </div>
             <Instagram size={20} className="text-white/50" />
           </div>
        </div>
      );
    }

    if (sol.type === "stars") {
      return (
        <div className="w-full max-w-[360px] flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-[40px] shadow-2xl border border-black/5 relative"
          >
             <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-yellow-400/20 mb-6">
                  <Star size={40} fill="currentColor" />
                </div>
                <div className="text-brand-primary font-black text-2xl tracking-tighter mb-2">Excellent !</div>
                <p className="text-xs font-bold text-brand-secondary/60 mb-8 max-w-[200px]">
                  Marie vient de laisser un avis 5 étoiles sur Google.
                </p>
                
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.15, type: "spring" }}
                      className="text-yellow-400"
                    >
                      <Star size={32} fill="currentColor" />
                    </motion.div>
                  )) }
                </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="bg-brand-primary p-4 rounded-2xl flex items-center justify-between"
          >
             <div className="flex items-center gap-3">
               <div className="bg-white/10 p-2 rounded-lg">
                 <Check size={16} className="text-yellow-400" />
               </div>
               <span className="text-[10px] font-bold text-white uppercase tracking-widest">Réputation Boostée</span>
             </div>
             <span className="text-[11px] font-black text-brand-accent">+24 Avis / mois</span>
          </motion.div>
        </div>
      );
    }

    // Default or other visual types
    return (
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, rotateY: 30 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full aspect-square max-w-[400px] bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] rounded-[40px] border border-black/5 flex flex-col relative overflow-hidden"
      >
         {/* Browser/System Bar */}
         <div className="h-12 bg-gray-50/50 border-b border-black/5 flex items-center px-6 gap-2.5">
           <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
             <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
           </div>
           <div className="mx-auto text-[9px] uppercase tracking-[0.3em] font-black opacity-20">Secure Engine 4.0</div>
         </div>

         {/* Dashboard Simulation */}
         <div className="flex-1 p-10 flex flex-col justify-center text-center space-y-8">
           <div className="space-y-3">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "100%" }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="h-3 bg-brand-accent/10 rounded-full" 
             />
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: "70%" }}
               transition={{ delay: 0.6, duration: 0.8 }}
               className="h-3 bg-brand-accent/5 mx-auto rounded-full" 
             />
           </div>

           <div className="relative py-4">
              <div className="h-32 w-32 border-4 border-brand-accent/10 border-t-brand-accent rounded-full mx-auto animate-spin [animation-duration:3s]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-black text-brand-primary tracking-tighter">98%</span>
              </div>
           </div>

           <div className="pt-4 flex justify-center gap-3">
              <div className="w-3 h-3 rounded-sm bg-brand-accent/40" />
              <div className="w-3 h-3 rounded-sm bg-brand-accent/20" />
              <div className="w-3 h-3 rounded-sm bg-brand-accent/10" />
           </div>
         </div>

         {/* Footer Status Bar */}
         <div className="h-2 bg-brand-accent/20 w-full overflow-hidden">
           <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/2 bg-brand-accent" 
            />
         </div>
      </motion.div>
    );
  };

  return (
    <section id="solutions" className="py-24 bg-brand-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block"
          >
            Nos Solutions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light mb-6 tracking-tight"
          >
            L'IA au service de votre excellence.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-secondary/80 font-medium"
          >
            Des systèmes intelligents qui travaillent pendant que vous prenez soin de vos clients.
          </motion.p>
        </div>

        {/* Navigation Tabs - Grid on mobile, flex on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center gap-2 md:gap-3 mb-10 lg:mb-24 px-4 lg:px-0 max-w-4xl mx-auto">
          {solutions.map((sol, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`relative flex items-center justify-center lg:justify-start gap-2 md:gap-2.5 px-3 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-full text-[10px] md:text-sm font-bold transition-all duration-300 ${
                activeTab === i 
                ? 'bg-brand-primary text-brand-ivory shadow-xl shadow-brand-primary/20 scale-[1.02] lg:scale-105' 
                : 'bg-white text-brand-secondary/60 hover:text-brand-primary hover:bg-white/80 border border-black/5'
              }`}
            >
              {activeTab === i && (
                <motion.div 
                  layoutId="activeTabGlow"
                  className="absolute inset-0 rounded-xl md:rounded-full bg-brand-accent/20 blur-xl -z-10"
                />
              )}
              <span className={activeTab === i ? 'text-brand-accent' : ''}>{sol.icon}</span>
              <span className="whitespace-nowrap">{sol.shortName}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-[32px] md:rounded-[48px] overflow-hidden grid lg:grid-cols-2 border-brand-accent/5 w-full shadow-[0_40px_120px_-20px_rgba(0,0,0,0.12)] bg-brand-ivory/95 backdrop-blur-3xl ring-1 ring-black/5"
            >
              {/* Text Side */}
              <div className="p-6 md:p-14 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/5 bg-gradient-to-br from-white/50 to-transparent">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-brand-accent text-brand-ivory rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-8 shadow-2xl shadow-brand-accent/30 ring-4 ring-brand-accent/10">
                  {solutions[activeTab].icon}
                </div>
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 tracking-tight leading-[1.1] md:leading-[1.05]">{solutions[activeTab].title}</h3>
                <p className="text-brand-secondary text-base md:text-xl mb-8 md:mb-12 leading-relaxed font-medium italic font-serif">
                  {solutions[activeTab].desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 md:gap-y-6">
                  {solutions[activeTab].features.map((feat, idx) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      key={idx} 
                      className="flex items-center gap-3 md:gap-4 text-xs md:text-sm font-bold text-brand-primary/90 list-none"
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center shrink-0">
                        <Check size={12} md:size={14} strokeWidth={3} />
                      </div>
                      {feat}
                    </motion.li>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className={`${solutions[activeTab].visual} relative flex items-center justify-center p-8 md:p-12 lg:p-24 overflow-hidden min-h-[300px] lg:min-h-0`}>
                {renderVisual()}
                
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent pointer-events-none opacity-40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] border border-brand-accent/5 rounded-full pointer-events-none" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-accent/10 blur-3xl rounded-full" />
                <div className="absolute top-10 left-10 w-32 h-32 bg-brand-accent/5 blur-3xl rounded-full" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Trust markers */}
        <div className="mt-20 md:mt-32 pt-16 md:pt-20 border-t border-black/5">
          <div className="flex flex-col items-center text-center gap-8 md:gap-12 mb-16 md:mb-20">
            <div className="max-w-2xl px-4">
              <h4 className="text-2xl md:text-3xl md:text-4xl font-serif italic leading-tight">
                Pensé pour le <span className="luxury-text-accent">marché français.</span>
              </h4>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl px-4 md:px-0">
              {[
                { icon: <Flag size={20} />, title: "Support Local", desc: "100% basé en France" },
                { icon: <Lock size={20} />, title: "Conforme RGPD", desc: "Données sécurisées" },
                { icon: <Headset size={20} />, title: "Expertise Beauté", desc: "Secteur spécifique" }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center gap-4 bg-white/50 p-6 rounded-2xl border border-black/5 hover:bg-white transition-colors ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-black text-brand-primary mb-1">{item.title}</div>
                    <div className="text-[10px] uppercase font-bold text-brand-secondary/60 tracking-wider whitespace-nowrap">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-6 md:gap-y-8 items-center opacity-30 grayscale hover:opacity-60 transition-opacity duration-500 px-4">
             <div className="text-[9px] uppercase font-bold tracking-[0.5em] text-brand-secondary/40 w-full text-center lg:w-auto mb-2 md:mb-4 lg:mb-0">Synchronisé avec</div>
             <div className="flex items-center gap-2 font-black text-base md:text-lg tracking-tighter">CALENDLY</div>
             <div className="flex items-center gap-2 font-black text-base md:text-lg tracking-tighter uppercase">Planity</div>
             <div className="flex items-center gap-2 font-black text-base md:text-lg tracking-tighter">Zapier</div>
             <div className="flex items-center gap-2 font-black text-base md:text-lg tracking-tighter uppercase underline decoration-2 decoration-brand-accent underline-offset-4">Meta AI</div>
          </div>
        </div>
      </div>
    </section>
  );
}
