const Footer = () => {
  return (
    <footer className="py-8 bg-foreground border-t border-primary-foreground/10">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-serif text-xl text-primary-foreground/80">
            Jessica Sanchina
          </p>
          <p className="text-xs tracking-[0.1em] text-primary-foreground/50">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
