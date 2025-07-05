
import { Users, Clock, CheckCircle, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PartnershipStatus = () => {
  const navigate = useNavigate();

  const handleViewOpenings = () => {
    navigate('/partnerships');
  };

  const handleStartNetworking = () => {
    navigate('/partnerships');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Your Partnership <span className="text-yellow-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your networking progress and discover new opportunities at every stage of your business journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* View Openings */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
              <Eye className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">View Openings</h3>
            <p className="text-gray-600 text-center mb-6">
              Discover available partnership opportunities that match your interests and expertise.
            </p>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-500">Active Opportunities</div>
            </div>
            <Button 
              onClick={handleViewOpenings}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Browse Openings
            </Button>
          </div>

          {/* Pending Partnerships */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-yellow-100 p-4 rounded-full w-fit mx-auto mb-6">
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Pending</h3>
            <p className="text-gray-600 text-center mb-6">
              Monitor your pending partnership requests and negotiations in progress.
            </p>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-yellow-600">0</div>
              <div className="text-sm text-gray-500">Pending Requests</div>
            </div>
            <Button 
              variant="outline" 
              className="w-full border-yellow-300 text-yellow-700 hover:bg-yellow-50"
            >
              View Pending
            </Button>
          </div>

          {/* Completed Partnerships */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Completed</h3>
            <p className="text-gray-600 text-center mb-6">
              Celebrate your successful partnerships and track your networking achievements.
            </p>
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-green-600">0</div>
              <div className="text-sm text-gray-500">Successful Partnerships</div>
            </div>
            <Button 
              variant="outline" 
              className="w-full border-green-300 text-green-700 hover:bg-green-50"
            >
              View History
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Start Networking Today
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of professionals who are building successful business relationships on our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4"
                onClick={handleStartNetworking}
              >
                <Users className="mr-2 h-5 w-5" />
                Start Networking Today
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipStatus;
