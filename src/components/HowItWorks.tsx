
import React from 'react';
import { Bell, Package, Truck, Clock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Bell,
      title: "Request Pickup",
      description: "Customer schedules a pickup through the app",
      color: "text-blue-600"
    },
    {
      icon: Package,
      title: "Driver Notification",
      description: "Nearby drivers receive pickup notifications",
      color: "text-green-600"
    },
    {
      icon: Truck,
      title: "Pickup & Delivery",
      description: "Driver picks up items and delivers to dry cleaner",
      color: "text-yellow-600"
    },
    {
      icon: Clock,
      title: "Track Progress",
      description: "Customer tracks the entire cleaning process",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple steps for seamless dry cleaning delivery
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto">
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
