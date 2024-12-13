import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
