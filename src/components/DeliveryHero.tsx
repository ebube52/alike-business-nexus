
import React from 'react';
import { Button } from '@/components/ui/button';
import { Truck, Package, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DeliveryHero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold">
            Dry Cleaning <span className="text-yellow-400">Delivery</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Professional dry cleaning pickup and delivery service. Track your items through the entire process with real-time updates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg"
              onClick={() => navigate('/schedule-pickup')}
            >
              Schedule Pickup
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 text-lg"
              onClick={() => navigate('/become-driver')}
            >
              Become a Driver
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Package className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">Easy Pickup</h3>
              <p className="opacity-80">Schedule pickup at your convenience</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
              <p className="opacity-80">Track your items through every step</p>
            </div>
            <div className="text-center">
              <Truck className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="opacity-80">Get your clothes back clean and fresh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryHero;
