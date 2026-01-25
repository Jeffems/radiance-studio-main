import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Transformou meu dia de noiva em algo mágico. Minha maquiagem durou a festa inteira e recebi inúmeros elogios.",
    author: "Mariana ",
    role: "Cliente",
  },
  {
    quote:
      "Profissionalismo e delicadeza definem o trabalho dela. Me senti a mulher mais bonita do mundo no meu casamento.",
    author: "Fernanda ",
    role: "Noiva",
  },
  {
    quote:
      "Atendimento impecável e resultado perfeito. Sempre escolho ela para meus eventos importantes.",
    author: "Patricia ",
    role: "Cliente",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block w-12 h-px bg-gold mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Depoimentos
          </p>
          <h2 className="heading-section text-foreground">
            O que dizem as <span className="italic">clientes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="card-elegant h-full flex flex-col">
                <Quote
                  size={32}
                  className="text-gold/30 mb-4"
                  strokeWidth={1}
                />
                <p className="text-elegant text-muted-foreground italic flex-grow mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-serif text-lg text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
