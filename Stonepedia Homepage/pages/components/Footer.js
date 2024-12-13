export default function Footer() {
    return (
      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Stonepedia. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }
  