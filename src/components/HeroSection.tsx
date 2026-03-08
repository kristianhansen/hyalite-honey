import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Four Daughters Farm with sunflowers and mountains in the background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-charcoal-foreground mb-6 leading-tight">
          Local Small‑Batch Honey from Bozeman, MT
        </h1>
        <p className="text-lg md:text-xl text-charcoal-foreground/90 mb-10 leading-relaxed max-w-2xl mx-auto">
          Hyalite Honey is a small beekeeping operation nestled in Montana's Gallatin Valley.
          We produce pure, raw honey with care for our bees and the land they call home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#where-to-buy"
            className="inline-block bg-primary hover:bg-honey-dark text-primary-foreground uppercase font-medium tracking-wider text-sm px-8 py-4 rounded transition-all hover:shadow-lg"
          >
            Where to Buy
          </a>
          <a
            href="#about"
            className="inline-block text-charcoal-foreground border border-charcoal-foreground/40 hover:border-charcoal-foreground uppercase font-medium tracking-wider text-sm px-8 py-4 rounded transition-all"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
