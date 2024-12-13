export default function FeaturedProducts() {
  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {['Marble', 'Granite', 'Slate'].map((product, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded">
              <img src={`/product-${index + 1}.jpg`} alt={product} className="w-full h-48 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-4">{product}</h3>
              <p className="text-gray-600 mt-2">High-quality {product.toLowerCase()} for your project.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
