
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Package, Bell, Truck } from 'lucide-react';

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: "REQ-001",
      type: "pickup",
      customer: "Jane Smith",
      address: "456 Oak Street",
      items: "3 shirts, 1 dress",
      distance: "0.3 miles",
      payment: "$15.00",
      time: "2 min ago"
    },
    {
      id: "REQ-002",
      type: "dropoff",
      customer: "Mike Johnson",
      address: "Premium Dry Cleaners",
      items: "Order #ORD-005",
      distance: "0.8 miles", 
      payment: "$12.00",
      time: "5 min ago"
    }
  ]);

  const [activeOrders, setActiveOrders] = useState([
    {
      id: "ORD-003",
      customer: "Alice Brown",
      status: "Picked Up",
      destination: "Quick Clean Express",
      payment: "$18.00",
      items: "2 suits, 3 shirts"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Driver Dashboard</h1>
            <div className="flex items-center space-x-4">
              <Badge className={isOnline ? "bg-green-500" : "bg-gray-500"}>
                {isOnline ? "Online" : "Offline"}
              </Badge>
              <Button 
                onClick={() => setIsOnline(!isOnline)}
                className={isOnline ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}
              >
                {isOnline ? "Go Offline" : "Go Online"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">New Requests</h2>
                <Bell className="h-5 w-5 text-blue-600" />
              </div>
              
              {notifications.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No new requests available</p>
              ) : (
                <div className="space-y-4">
                  {notifications.map((request) => (
                    <div key={request.id} className="border rounded-lg p-4 bg-blue-50">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold capitalize">{request.type} Request</h3>
                          <p className="text-sm text-gray-600">{request.customer}</p>
                        </div>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {request.payment}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{request.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Package className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{request.items}</span>
                        </div>
                        <div className="flex items-center">
                          <Truck className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{request.distance} away</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">{request.time}</span>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">
                            Decline
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            Accept
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Active Orders</h2>
              {activeOrders.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No active orders</p>
              ) : (
                <div className="space-y-4">
                  {activeOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold">Order {order.id}</h3>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                        </div>
                        <Badge className="bg-yellow-500">
                          {order.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Destination: {order.destination}</span>
                        </div>
                        <div className="flex items-center">
                          <Package className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{order.items}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="font-medium text-green-600">{order.payment}</span>
                        <Button size="sm">
                          Mark Complete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Today's Earnings</h3>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">$127.50</p>
                <p className="text-sm text-gray-600">12 completed orders</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Driver Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Rating</span>
                  <span className="text-sm font-medium">4.9 ★</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Acceptance Rate</span>
                  <span className="text-sm font-medium">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Deliveries</span>
                  <span className="text-sm font-medium">342</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Nearby Cleaners</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium">Premium Dry Cleaners</p>
                  <p className="text-gray-600">0.2 miles • Open until 7 PM</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Quick Clean Express</p>
                  <p className="text-gray-600">0.5 miles • Open until 8 PM</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Elite Garment Care</p>
                  <p className="text-gray-600">0.7 miles • Open until 6 PM</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
