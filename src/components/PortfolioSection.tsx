import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Maquiagem Social",
    category: "Elegância",
  },
  {
    image: portfolio2,
    title: "Noiva Clássica",
    category: "Casamento",
  },
  {
    image: portfolio3,
    title: "Glamour Noturno",
    category: "Evento",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-cream">
      <div className="container max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block w-12 h-px bg-gold mb-6" />
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Portfólio
          </p>
          <h2 className="heading-section text-foreground">
            Trabalhos que <span className="italic">inspiram</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                 // src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
              </div>

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-foreground/60 flex flex-col items-center justify-center transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-xs tracking-[0.2em] uppercase text-gold-light mb-2">
                  {item.category}
                </p>
                <h3 className="font-serif text-2xl text-primary-foreground">
                  {item.title}
                </h3>
              </div>

              {/* Bottom Info - Always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-xs tracking-[0.15em] uppercase text-gold-light/80">
                  {item.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
          >
            Ver mais no Instagram
            <span className="w-8 h-px bg-current" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
