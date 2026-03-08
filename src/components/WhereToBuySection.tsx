import { MapPin, ShoppingBag, Calendar } from "lucide-react";

const WhereToBuySection = () => {
  return (
    <section id="where-to-buy" className="section-padding bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-foreground">Where to Buy</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Hyalite Honey is available at select retailers around Bozeman and directly from us. 
          We don't have an online store yet, but we're working on it!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Local Retailers */}
          <div className="bg-card rounded-lg shadow-md border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="text-primary" size={24} />
              <h3 className="text-lg font-bold text-card-foreground">Local Retailers</h3>
            </div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <p className="font-medium text-card-foreground">Four Daughters Farm</p>
                <p>Bozeman, MT</p>
              </li>
            </ul>
          </div>

          {/* Direct Purchase */}
          <div className="bg-card rounded-lg shadow-md border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <ShoppingBag className="text-primary" size={24} />
              <h3 className="text-lg font-bold text-card-foreground">Direct Purchase</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Want to buy directly from us? We offer local pickup in the Bozeman area. 
              Just reach out and we'll arrange a time that works.
            </p>
            <a
              href="#contact"
              className="inline-block bg-primary hover:bg-honey-dark text-primary-foreground uppercase font-medium tracking-wider text-xs px-6 py-3 rounded transition-all hover:shadow-md"
            >
              Contact Us
            </a>
          </div>

          {/* Markets & Events */}
          <div className="bg-card rounded-lg shadow-md border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-primary" size={24} />
              <h3 className="text-lg font-bold text-card-foreground">Markets & Events</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Follow our <a href="https://instagram.com/hyalitehoney" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">@hyalitehoney</a> Instagram page to find us at local markets and events throughout the season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToBuySection;
