import { Mail, Phone, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-warm-bg-alt">
      <div className="section-container max-w-2xl">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-foreground">Get in Touch</h2>
        <p className="text-center text-muted-foreground mb-10">
          Have questions about our honey, interested in wholesale, or just want to say hello? We'd love to hear from you.
        </p>

        <div className="bg-card rounded-lg shadow-md border border-border p-8 space-y-6">
          <a
            href="mailto:kristian@trackstand.com"
            className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">kristian@trackstand.com</p>
            </div>
          </a>

          <a
            href="tel:9172935746"
            className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">917.293.5746</p>
            </div>
          </a>

          <a
            href="https://instagram.com/hyalitehoney"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Instagram className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Instagram</p>
              <p className="font-medium">@hyalitehoney</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
