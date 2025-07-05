
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Package, Truck, User } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Track Order {orderDetails.id}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
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
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Live Updates</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Items received at cleaner</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span>Currently being cleaned</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                  <span>Quality check pending</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">
                  Contact Driver
                </button>
                <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">
                  Contact Dry Cleaner
                </button>
                <button className="w-full text-left text-sm text-blue-600 hover:text-blue-800">
                  Report an Issue
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
