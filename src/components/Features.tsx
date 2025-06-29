
import { Users, MessageSquare, Search, Shield, Zap, Star, Globe, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Smart Matching Algorithm",
      description: "Our ML-powered system connects you with partners based on interests, location, and business goals with 90%+ accuracy.",
      color: "bg-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Integrated Messaging & Forums",
      description: "Private messaging and category-specific forums for real estate, franchising, transportation, and more business sectors.",
      color: "bg-green-500"
    },
    {
      icon: Search,
      title: "Advanced Search & Filters",
      description: "Find partners by profession, location, interests, and expertise. Refine results with powerful filtering options.",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Verified Profiles & Reviews",
      description: "Two-factor authentication, profile verification, and peer review system ensure trustworthy connections.",
      color: "bg-red-500"
    },
    {
      icon: Zap,
      title: "Real-time Notifications",
      description: "Stay updated on new opportunities, messages, and partnership requests with customizable notification settings.",
      color: "bg-yellow-500"
    },
    {
      icon: Star,
      title: "Professional Roles & Permissions",
      description: "Specialized access for Realtors, Lawyers, Mortgage Brokers, and Investment Financiers with role-based features.",
      color: "bg-indigo-500"
    },
    {
      icon: Globe,
      title: "Third-party Integrations",
      description: "Connect with LinkedIn, Google Maps, and social media platforms to import contacts and enhance your profile.",
      color: "bg-teal-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive Platform",
      description: "Access your network anywhere with our fully responsive web platform and progressive web app features.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Powerful Features for
            <span className="text-yellow-600"> Professional Networking</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to discover, connect, and collaborate with like-minded business professionals and investors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`${feature.color} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business Network?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join thousands of professionals who are already building successful partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </button>
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
