import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Diamond, Palette, Clock, Award } from "lucide-react";

const differentials = [
  {
    icon: Diamond,
    title: "Produtos Premium",
    description: "Utilizo apenas marcas renomadas e produtos de alta qualidade para garantir resultados duradouros.",
  },
  {
    icon: Palette,
    title: "Técnica Refinada",
    description: "Anos de aperfeiçoamento em técnicas internacionais para criar looks personalizados e únicos.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Compromisso total com horários para que você aproveite cada momento do seu dia especial.",
  },
  {
    icon: Award,
    title: "Atendimento Exclusivo",
    description: "Cada cliente recebe atenção personalizada, com foco em suas necessidades e desejos.",
  },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-champagne/50">
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block w-12 h-px bg-gold mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Por que me escolher
          </p>
          <h2 className="heading-section text-foreground">
            Diferenciais do meu <span className="italic">atendimento</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 items-start group"
            >
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-gold/30 rounded-full group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500">
                <item.icon size={24} className="text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-xl mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
