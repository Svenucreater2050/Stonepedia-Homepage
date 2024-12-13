export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900">Stonepedia</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#products" className="text-gray-600 hover:text-gray-900">Products</a></li>
          <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
