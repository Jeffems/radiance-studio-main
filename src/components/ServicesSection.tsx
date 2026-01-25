import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Crown, Sparkles, Camera } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Maquiagem Social",
    description:
      "Para eventos especiais, formaturas, aniversários e ocasiões que merecem um toque de elegância e sofisticação.",
  },
  {
    icon: Crown,
    title: "Noivas",
    description:
      "Maquiagem exclusiva para o dia mais especial da sua vida, com teste prévio e produtos de longa duração.",
  },
  {
    icon: Sparkles,
    title: "Eventos Corporativos",
    description:
      "Preparação profissional para palestras, premiações e momentos importantes da sua carreira.",
  },
  {
    icon: Camera,
    title: "Editorial & Ensaios",
    description:
      "Maquiagem criativa e artística para ensaios fotográficos, campanhas e produções especiais.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block w-12 h-px bg-gold mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Serviços
          </p>
          <h2 className="heading-section text-foreground">
            Experiências em <span className="italic">maquiagem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elegant group text-center hover:bg-champagne/50 transition-colors duration-500"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-gold/30 rounded-full group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500">
                <service.icon
                  size={24}
                  className="text-gold"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-xl mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
