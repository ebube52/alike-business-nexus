
import { Users, Target, Handshake, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            About <span className="text-yellow-600">Buyer's Alike</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing how business professionals connect, collaborate, and create successful partnerships in today's digital economy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Buyer's Alike, we believe that the best business opportunities emerge when like-minded professionals come together. Our platform bridges the gap between entrepreneurs, investors, partners, and experts across various industries.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're looking to expand your real estate portfolio, explore franchise opportunities, or find the perfect business partner, we provide the tools and community to make meaningful connections that drive success.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Community First</h4>
              <p className="text-gray-600 text-sm">Building genuine relationships that last</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Goal Oriented</h4>
              <p className="text-gray-600 text-sm">Focused on achieving real results</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl text-center">
              <Handshake className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Trust & Integrity</h4>
              <p className="text-gray-600 text-sm">Verified profiles and secure connections</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <Trophy className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Success Driven</h4>
              <p className="text-gray-600 text-sm">Measuring impact through partnerships</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
