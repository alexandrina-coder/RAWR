import { motion } from 'motion/react';
import { UserMinus, PhoneOff, CalendarX, UserX, MessageSquare, Star, BarChart3, Users, Clock } from 'lucide-react';

export default function PainPoints() {
  const pains = [
    {
      title: "Prospects non relancés",
      desc: "Chaque demande non traitée est une opportunité perdue. Vos prospects passent à la concurrence en quelques minutes.",
      icon: <UserMinus size={24} />,
    },
    {
      title: "Appels répétitifs",
      desc: "Votre équipe passe des heures à répondre aux mêmes questions sur les tarifs, horaires et disponibilités.",
      icon: <PhoneOff size={24} />,
    },
    {
      title: "Rendez-vous manqués",
      desc: "Les no-shows impactent directement votre chiffre d'affaires. Sans rappels intelligents, l'argent s'envole.",
      icon: <CalendarX size={24} />,
    },
    {
      title: "Clients dormants",
      desc: "Des centaines de clients ne sont jamais relancés pour un nouveau soin. Vous perdez la fidélité sans le savoir.",
      icon: <UserX size={24} />,
    },
    {
      title: "Trop de canaux",
      desc: "Instagram, WhatsApp, SMS, Google... Il est impossible de tout suivre manuellement sans faire d'erreurs.",
      icon: <MessageSquare size={24} />,
    },
    {
      title: "Manque d'avis Google",
      desc: "Vos clients sont satisfaits mais ne l'écrivent pas. Votre réputation en ligne ne reflète pas votre talent.",
      icon: <Star size={24} />,
    },
    {
      title: "Agenda irrégulier",
      desc: "Des trous dans l'agenda certains jours, alors que la demande est là. La gestion manuelle est imprévisible.",
      icon: <BarChart3 size={24} />,
    },
    {
      title: "Équipe débordée",
      desc: "Votre staff se concentre sur l'administratif plutôt que de chouchouter les clients présents en cabine.",
      icon: <Users size={24} />,
    },
    {
      title: "Temps de réponse long",
      desc: "Un client qui attend plus de 10 minutes est un client qui cherche ailleurs. L'immédiateté est la clé.",
      icon: <Clock size={24} />,
    },
  ];

  return (
    <section id="problemes" className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Votre équipe perd-elle du temps sur des tâches qui pourraient être automatisées ?
          </h2>
          <p className="text-base md:text-lg text-brand-secondary">
            Gérer une clinique ou un salon demande de l'énergie. Ne la gaspillez pas dans l'administratif répétitif.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory gap-4 md:gap-6 -mx-4 px-4 md:mx-0 md:px-0 pb-8"
        >
          {pains.map((pain, i) => {
            const words = pain.title.split(' ');
            const firstWord = words[0];
            const rest = words.slice(1).join(' ');

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1 }
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-6 md:p-8 rounded-[32px] group transition-all hover:bg-brand-bg shadow-sm flex flex-col items-center text-center shrink-0 w-[240px] md:w-[280px] snap-center min-h-[280px] md:min-h-[340px]"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-accent/5 text-brand-accent rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors group-hover:bg-brand-accent group-hover:text-white shrink-0">
                  <div className="scale-90 md:scale-100">
                    {pain.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-2xl font-serif mb-3 md:mb-4 leading-tight">
                  <span className="font-normal">{firstWord}</span>
                  {rest && <span className="italic ml-1">{rest}</span>}
                </h3>
                <p className="text-brand-secondary leading-relaxed text-xs md:text-[15px] font-medium opacity-80 line-clamp-6 md:line-clamp-none">
                  {pain.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
