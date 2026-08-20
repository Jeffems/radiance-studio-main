const Footer = () => {
  return (
    <footer className="py-8 bg-foreground border-t border-primary-foreground/10">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="font-serif text-xl text-primary-foreground/80">Jessica Sanchina</p>
            <p className="text-xs tracking-[0.08em] text-primary-foreground/50 mt-1">
              Maquiadora profissional em Rondonópolis–MT · (66) 9634-6583
            </p>
          </div>
          <p className="text-xs tracking-[0.1em] text-primary-foreground/50">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
