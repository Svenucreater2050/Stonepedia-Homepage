export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
          {['Customer 1', 'Customer 2', 'Customer 3'].map((customer, index) => (
            <div key={index} className="bg-gray-100 p-4 shadow-md rounded">
              <p className="text-gray-600">“Stonepedia provided excellent service and top-notch materials for our project!”</p>
              <span className="block mt-4 text-gray-900 font-bold">{customer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
