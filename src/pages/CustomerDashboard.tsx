
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Package, Bell, ArrowLeft, Map } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const navigate = useNavigate();
  
  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      status: "In Transit",
      items: ["2 Shirts", "1 Suit", "1 Dress"],
      pickupAddress: "123 Home St",
      cleaner: "Premium Dry Cleaners",
      estimatedCompletion: "Tomorrow 3 PM",
      driver: "John D.",
      statusColor: "bg-blue-500"
    },
    {
      id: "ORD-002", 
      status: "Cleaning",
      items: ["3 Shirts", "2 Pants"],
      pickupAddress: "123 Home St",
      cleaner: "Quick Clean Express",
      estimatedCompletion: "Today 6 PM",
      driver: "Sarah M.",
      statusColor: "bg-yellow-500"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/')}
                className="flex items-center"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Customer Dashboard</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Schedule New Pickup</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Pickup Address</label>
                  <Input placeholder="Enter your address" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time</label>
                  <Input type="datetime-local" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Special Instructions</label>
                  <Input placeholder="Any special handling instructions..." />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Schedule Pickup
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">Order {order.id}</h3>
                        <p className="text-sm text-gray-600">{order.cleaner}</p>
                      </div>
                      <Badge className={`${order.statusColor} text-white`}>
                        {order.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Package className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{order.items.join(", ")}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{order.pickupAddress}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Est. completion: {order.estimatedCompletion}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t flex justify-between">
                      <span className="text-sm text-gray-600">Driver: {order.driver}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate(`/track/${order.id}`)}
                        className="flex items-center"
                      >
                        <Map className="h-4 w-4 mr-1" />
                        Track with Map
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Bell className="h-4 w-4 mr-2" />
                  Enable Notifications
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Saved Addresses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Order History
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Nearby Cleaners</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">Premium Dry Cleaners</p>
                  <p className="text-gray-600">0.5 miles • 4.8★</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Quick Clean Express</p>
                  <p className="text-gray-600">0.8 miles • 4.6★</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Elite Garment Care</p>
                  <p className="text-gray-600">1.2 miles • 4.9★</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
