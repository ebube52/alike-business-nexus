
import { ArrowRight, Users, MessageCircle, Search, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConnectingAnimation from './ConnectingAnimation';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Connect with
                <span className="text-yellow-400 block">Like-Minded</span>
                Business Partners
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join the premier platform for entrepreneurs, investors, and business professionals to discover partnerships, joint ventures, and investment opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg">
                Start Networking Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-400 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>

            {/* Connecting Animation */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4 text-center">See How Connections Lead to Success</h3>
              <ConnectingAnimation />
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">10K+</div>
                <div className="text-sm text-gray-400">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-400">Partnerships Formed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">50M+</div>
                <div className="text-sm text-gray-400">Deals Facilitated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Preview */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <img 
                    src="/lovable-uploads/c2947263-c74d-4148-a5b8-f949a3a01c45.png" 
                    alt="Buyer's Alike Logo" 
                    className="h-10 w-10"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">Welcome, Michael</h3>
                    <p className="text-gray-600">Real Estate Investor</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-xl">My Partnerships</h4>
                  <div className="flex space-x-1">
                    <button className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg font-medium">Active</button>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Pending</button>
                    <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Completed</button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 text-center space-y-4">
                  <Users className="h-12 w-12 text-gray-400 mx-auto" />
                  <p className="text-gray-600">You have no pending partnership interests.</p>
                  <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                    View Openings
                  </Button>
                </div>

                <div className="space-y-3">
                  <h5 className="font-medium">Suggested Partnerships</h5>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        R
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Real Estate Development</p>
                        <p className="text-xs text-gray-600">85% match</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        F
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">Franchise Opportunities</p>
                        <p className="text-xs text-gray-600">78% match</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 bg-yellow-500 p-3 rounded-full shadow-lg animate-bounce">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 p-3 rounded-full shadow-lg animate-pulse">
              <Search className="h-6 w-6 text-white" />
            </div>
            <div className="absolute top-1/2 -right-8 bg-green-500 p-3 rounded-full shadow-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
