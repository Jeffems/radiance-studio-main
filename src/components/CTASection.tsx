import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Mail, Phone } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="section-padding bg-foreground text-primary-foreground">
      <div className="container max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block w-12 h-px bg-gold mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
            Vamos Conversar
          </p>
          <h2 className="heading-section text-primary-foreground mb-6">
            Pronta para realçar sua <span className="italic">beleza</span>?
          </h2>
          <p className="text-elegant text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            Entre em contato e agende seu atendimento. Será um prazer fazer
            parte do seu momento especial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium bg-gold text-foreground hover:bg-gold-light transition-colors duration-300"
            >
              Agendar via WhatsApp
            </a>
            <a
              href="mailto:contato@jessicasanchina.com"
              className="px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium border border-primary-foreground/30 text-primary-foreground hover:border-gold hover:text-gold transition-colors duration-300"
            >
              Enviar E-mail
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:contato@jessicasanchina.com"
              className="text-primary-foreground/60 hover:text-gold transition-colors duration-300"
              aria-label="E-mail"
            >
              <Mail size={24} strokeWidth={1.5} />
            </a>
            <a
              href="tel:+5511999999999"
              className="text-primary-foreground/60 hover:text-gold transition-colors duration-300"
              aria-label="Telefone"
            >
              <Phone size={24} strokeWidth={1.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
