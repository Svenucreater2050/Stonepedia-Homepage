export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <form className="mt-8 max-w-lg mx-auto bg-white p-6 shadow-md rounded">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded mb-4" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded mb-4" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded mb-4"></textarea>
          <button className="w-full bg-gray-900 text-white py-3 rounded hover:bg-gray-700">Send Message</button>
        </form>
      </div>
    </section>
  );
}
