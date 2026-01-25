import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import artistPortrait from "@/assets/artist-portrait.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-cream">
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={artistPortrait}
                alt="Jessica Sanchina - Maquiadora Profissional"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/30 -z-10" />
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block w-12 h-px bg-gold mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Sobre Mim
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Paixão por realçar a <span className="italic">beleza única</span>{" "}
              de cada mulher
            </h2>
            <div className="space-y-4 text-elegant text-muted-foreground">
              <p>
                Há mais de 10 anos, dedico minha carreira à arte da maquiagem,
                transformando cada atendimento em uma experiência exclusiva e
                memorável.
              </p>
              <p>
                Minha abordagem combina técnicas internacionais com um olhar
                atento às particularidades de cada cliente, garantindo
                resultados que valorizam a beleza natural sem perder a
                sofisticação.
              </p>
              <p>
                Busco constantemente aprimorar meus conhecimentos para
                oferecer sempre o melhor em tendências e qualidade.
              </p>
            </div>

            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-serif text-4xl text-gold">10+</p>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  Anos de Experiência
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl text-gold">2800+</p>
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                  Clientes Atendidas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
