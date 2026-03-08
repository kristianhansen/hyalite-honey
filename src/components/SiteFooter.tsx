const SiteFooter = () => {
  return (
    <footer className="bg-charcoal py-10 px-4">
      <div className="section-container text-center">
        <p className="text-charcoal-foreground font-heading font-bold text-lg tracking-widest uppercase mb-3">
          Hyalite Honey
        </p>
        <p className="text-charcoal-foreground/60 text-sm mb-4">
          © {new Date().getFullYear()} Hyalite Honey, Bozeman, MT
        </p>
        <p className="text-charcoal-foreground/40 text-xs">
          This site uses Google Analytics for basic traffic statistics.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
