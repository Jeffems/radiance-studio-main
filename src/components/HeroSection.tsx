import { motion } from "framer-motion";
import heroImage from "@/assets/hero-makeup.jpg";
import capa from "@/assets/capa.png";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          //src={heroImage}
          src={capa}
          alt="Maquiagem profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-background/20" />
      </div>

      {/* Content */}
      <div className="relative container max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block w-12 h-px bg-gold mb-6" />
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Maquiadora Profissional
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-display text-foreground mb-6"
          >
            Realçando sua beleza com{" "}
            <span className="italic">sofisticação</span> e delicadeza
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-elegant text-muted-foreground mb-10 max-w-lg"
          >
            Uma experiência única em maquiagem, onde cada traço é pensado para
            valorizar sua beleza natural e criar momentos inesquecíveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button onClick={scrollToContact} className="btn-elegant">
              Agendar Atendimento
            </button>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium text-foreground/70 hover:text-gold transition-colors duration-300"
            >
              Ver Portfólio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
