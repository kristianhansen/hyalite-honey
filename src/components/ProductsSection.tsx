import wildflowerImg from "@/assets/product-wildflower.jpg";
import cloverImg from "@/assets/product-clover.jpg";
import buckwheatImg from "@/assets/product-buckwheat.jpg";
import creamedImg from "@/assets/product-creamed.jpg";

const products = [
  {
    name: "Raw Wildflower Honey",
    description: "A rich, complex blend harvested from Montana wildflower meadows. Notes of warm caramel and floral sweetness.",
    sizes: "8 oz · 16 oz",
    image: wildflowerImg,
  },
  {
    name: "Clover Honey",
    description: "Light and delicate with a classic honey flavor. Perfect for tea, baking, and everyday sweetening.",
    sizes: "8 oz · 16 oz",
    image: cloverImg,
  },
  {
    name: "Dark Amber Honey",
    description: "Bold and robust with deep molasses undertones. A favorite for charcuterie boards and bold recipes.",
    sizes: "8 oz · 16 oz",
    image: buckwheatImg,
  },
  {
    name: "Creamed Honey",
    description: "Smooth, spreadable, and naturally crystallized. Silky texture that's perfect on toast or biscuits.",
    sizes: "8 oz · 12 oz",
    image: creamedImg,
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-warm-bg-alt">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl text-center mb-4 text-foreground">Our Honey</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          All of our honey is raw, unfiltered, and harvested from our apiary in the Gallatin Valley.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-card rounded-lg shadow-md overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-base font-bold mb-2 text-card-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{product.description}</p>
                <p className="text-xs font-medium text-primary uppercase tracking-wider">{product.sizes}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 italic">
          Availability may vary by retailer and season.
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
