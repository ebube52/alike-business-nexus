
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Package, Truck, User, Phone } from 'lucide-react';
import MapComponent from '@/components/MapComponent';

const TrackingPage = () => {
  const { orderId } = useParams();

  const orderDetails = {
    id: orderId || "ORD-001",
    status: "In Transit",
    customer: "Jane Doe",
    driver: "John Smith",
    driverPhone: "+1 (555) 123-4567",
    items: ["2 Shirts", "1 Suit", "1 Dress"],
    pickupAddress: "123 Home Street, City",
    cleanerAddress: "Premium Dry Cleaners, 456 Main St",
    estimatedCompletion: "Tomorrow 3:00 PM",
    timeline: [
      { step: "Order Placed", time: "Today 10:00 AM", completed: true },
      { step: "Driver Assigned", time: "Today 10:15 AM", completed: true },
      { step: "Pickup Completed", time: "Today 11:30 AM", completed: true },
      { step: "At Dry Cleaner", time: "Today 12:00 PM", completed: true },
      { step: "Cleaning in Progress", time: "In Progress", completed: false },
      { step: "Ready for Delivery", time: "Pending", completed: false },
      { step: "Out for Delivery", time: "Pending", completed: false },
      { step: "Delivered", time: "Pending", completed: false }
    ]
  };

  // Sample coordinates for demonstration
  const locations = {
    pickup: { lat: 40.7589, lng: -73.9851 },
    cleaner: { lat: 40.7505, lng: -73.9934 },
    driver: { lat: 40.7549, lng: -73.9840 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Track Order {orderDetails.id}</h1>
            <Button 
              onClick={() => window.location.reload()}
              variant="outline"
            >
              Refresh
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Live Map */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Live Tracking</h2>
              <MapComponent
                pickupLocation={locations.pickup}
                deliveryLocation={locations.cleaner}
                driverLocation={locations.driver}
                showRoute={true}
              />
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span>Pickup Location</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Cleaner Location</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <span>Driver Location</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Order Status</h2>
                  <p className="text-gray-600">Track your dry cleaning journey</p>
                </div>
                <Badge className="bg-blue-500 text-white">
                  {orderDetails.status}
                </Badge>
              </div>

              <div className="space-y-6">
                {orderDetails.timeline.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      item.completed ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      {item.completed ? (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      ) : (
                        <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className={`font-medium ${item.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                        {item.step}
                      </h3>
                      <p className={`text-sm ${item.completed ? 'text-gray-600' : 'text-gray-400'}`}>
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Order Details</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Package className="h-5 w-5 mr-3 text-gray-500" />
                  <span>{orderDetails.items.join(", ")}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                  <span>Pickup: {orderDetails.pickupAddress}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                  <span>Cleaner: {orderDetails.cleanerAddress}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3 text-gray-500" />
                  <span>Est. Completion: {orderDetails.estimatedCompletion}</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Your Driver</h3>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-600" />
                </div>
                <h4 className="font-medium">{orderDetails.driver}</h4>
                <p className="text-sm text-gray-600 mb-4">{orderDetails.driverPhone}</p>
                <div className="flex items-center justify-center space-x-1 mb-4">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="text-sm text-gray-600">4.9</span>
                </div>
                <Button className="w-full" variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Driver
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Live Updates</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                  <div>
                    <p className="font-medium">Items received at cleaner</p>
                    <p className="text-gray-600">12:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                  <div>
                    <p className="font-medium">Currently being cleaned</p>
                    <p className="text-gray-600">In progress</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3 mt-2"></div>
                  <div>
                    <p className="text-gray-500">Quality check pending</p>
                    <p className="text-gray-400">Waiting</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-blue-600 hover:text-blue-800">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Driver
                </Button>
                <Button variant="ghost" className="w-full justify-start text-blue-600 hover:text-blue-800">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Dry Cleaner
                </Button>
                <Button variant="ghost" className="w-full justify-start text-blue-600 hover:text-blue-800">
                  Report an Issue
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
