export default function HeroSection() {
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">Discover the Beauty of Stone</h1>
        <p className="text-xl text-gray-200 mt-4">Timeless elegance for every space</p>
        <a href="#about" className="mt-6 inline-block bg-gray-900 text-white py-3 px-6 rounded hover:bg-gray-700">Explore Now</a>
      </div>
    </div>
  );
}
