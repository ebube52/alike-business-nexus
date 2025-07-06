
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import PartnershipStatus from '@/components/PartnershipStatus';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <PartnershipStatus />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
