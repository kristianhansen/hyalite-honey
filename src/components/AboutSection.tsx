import hivesImg from "@/assets/apiary-hives.jpg";
import honeycombImg from "@/assets/honeycomb-frames.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-foreground">Our Story</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Hyalite Honey began with two curious hives and a family's fascination with the remarkable world of honeybees. 
              What started as a small backyard project in Bozeman, Montana has grown—with a little help from our young 
              beekeepers in training—into a family passion for producing raw, local honey you can trust.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our single apiary is nestled at Four Daughters Farm, a vibrant flower farm surrounded by clover, alfalfa, 
              raspberries, and native Montana wildflowers. This rich foraging ground gives our bees' honey a distinctive 
              flavor that captures the essence of the Gallatin Valley in every jar.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We keep things simple: small-batch production, minimal processing, and respect for the bees' natural rhythm. 
              Every jar of Hyalite Honey is raw, unfiltered, and filled with the delicate enzymes and pollen 
              that make true Montana honey special.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={hivesImg}
              alt="Colorful bee hives at Four Daughters Farm apiary"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg md:order-1 order-2">
            <img
              src={honeycombImg}
              alt="Close-up of natural honeycomb dripping with golden honey"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="md:order-2 order-1">
            <h3 className="text-xl md:text-2xl mb-4 text-foreground">Our Values</h3>
            <ul className="space-y-3 text-foreground/80 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span><strong className="text-foreground">Local first.</strong> Our honey is produced, harvested, and sold right here in the Bozeman area.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span><strong className="text-foreground">Small-batch quality.</strong> We never rush the process. Each harvest is carefully extracted and jarred by hand.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-0.5">•</span>
                <span><strong className="text-foreground">Bee-friendly practices.</strong> Healthy bees make great honey. We prioritize the well-being of our colonies above all else.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
