
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Truck } from 'lucide-react';

const ServiceOptions = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Role
          </h2>
          <p className="text-xl text-gray-600">
            Whether you need dry cleaning or want to earn as a driver
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <User className="h-16 w-16 mx-auto mb-6 text-blue-600" />
            <h3 className="text-2xl font-bold mb-4">I'm a Customer</h3>
            <p className="text-gray-600 mb-6">
              Schedule pickup and delivery for your dry cleaning needs
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
              Request Pickup
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <Truck className="h-16 w-16 mx-auto mb-6 text-green-600" />
            <h3 className="text-2xl font-bold mb-4">I'm a Driver</h3>
            <p className="text-gray-600 mb-6">
              Earn money by delivering dry cleaning to customers
            </p>
            <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
              Start Driving
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceOptions;
