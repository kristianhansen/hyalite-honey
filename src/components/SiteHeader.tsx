import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/hyalite-honey-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Where to Buy", href: "#where-to-buy" },
  { label: "Contact", href: "#contact" },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-charcoal shadow-lg" : "bg-charcoal/90"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <a href="#hero" className="flex items-center gap-3 text-charcoal-foreground font-heading font-bold text-xl tracking-widest uppercase">
          <img src={logo} alt="Hyalite Honey" className="h-10 w-auto" />
          Hyalite Honey
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-charcoal-foreground/80 hover:text-primary text-sm font-medium uppercase tracking-wider transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-charcoal-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-charcoal border-t border-charcoal-foreground/10 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleClick}
              className="block py-3 text-charcoal-foreground/80 hover:text-primary text-sm font-medium uppercase tracking-wider transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
