
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock } from 'lucide-react';

const NearbyCleaners = () => {
  const cleaners = [
    {
      name: "Premium Dry Cleaners",
      address: "123 Main St, Downtown",
      distance: "0.5 miles",
      rating: 4.8,
      services: ["Standard Cleaning", "Express Service", "Alterations"],
      hours: "7 AM - 7 PM"
    },
    {
      name: "Quick Clean Express",
      address: "456 Oak Ave, Midtown",
      distance: "0.8 miles",
      rating: 4.6,
      services: ["Same Day Service", "Eco-Friendly", "Pickup/Delivery"],
      hours: "6 AM - 8 PM"
    },
    {
      name: "Elite Garment Care",
      address: "789 Pine Rd, Uptown",
      distance: "1.2 miles",
      rating: 4.9,
      services: ["Luxury Items", "Wedding Dresses", "Leather Care"],
      hours: "8 AM - 6 PM"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nearby Dry Cleaners
          </h2>
          <p className="text-xl text-gray-600">
            Partner locations in your area
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cleaners.map((cleaner, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{cleaner.name}</h3>
                <Badge variant="secondary">{cleaner.rating} ★</Badge>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{cleaner.address}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{cleaner.hours}</span>
                </div>
                <p className="text-sm text-blue-600 font-medium">{cleaner.distance} away</p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Services:</p>
                <div className="flex flex-wrap gap-2">
                  {cleaner.services.map((service, serviceIndex) => (
                    <Badge key={serviceIndex} variant="outline" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyCleaners;
