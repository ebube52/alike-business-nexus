
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, Package, Truck, DollarSign, MapPin, Clock, Phone, Mail } from 'lucide-react';

const AdminDashboard = () => {
  const [orders] = useState([
    {
      id: "ORD-001",
      customer: "Jane Smith",
      driver: "John Doe",
      status: "In Transit",
      items: ["2 Shirts", "1 Suit"],
      amount: "$45.00",
      pickupTime: "10:30 AM",
      estimatedDelivery: "2:30 PM",
      phone: "+1 (555) 123-4567"
    },
    {
      id: "ORD-002",
      customer: "Mike Johnson",
      driver: "Sarah Wilson",
      status: "Cleaning",
      items: ["3 Shirts", "2 Pants"],
      amount: "$38.50",
      pickupTime: "9:15 AM",
      estimatedDelivery: "4:00 PM",
      phone: "+1 (555) 987-6543"
    }
  ]);

  const [drivers] = useState([
    {
      id: "DRV-001",
      name: "John Doe",
      status: "Active",
      currentOrders: 2,
      rating: 4.8,
      totalDeliveries: 156,
      earnings: "$1,250.00",
      phone: "+1 (555) 111-2222"
    },
    {
      id: "DRV-002",
      name: "Sarah Wilson",
      status: "Active",
      currentOrders: 1,
      rating: 4.9,
      totalDeliveries: 203,
      earnings: "$1,680.00",
      phone: "+1 (555) 333-4444"
    }
  ]);

  const [cleaners] = useState([
    {
      id: "CLN-001",
      name: "Premium Dry Cleaners",
      address: "123 Main St",
      phone: "+1 (555) 777-8888",
      status: "Active",
      pendingOrders: 12,
      completedToday: 8,
      rating: 4.7
    },
    {
      id: "CLN-002",
      name: "Quick Clean Express",
      address: "456 Oak Ave",
      phone: "+1 (555) 999-0000",
      status: "Active",
      pendingOrders: 8,
      completedToday: 15,
      rating: 4.6
    }
  ]);

  const stats = {
    totalOrders: 1247,
    activeDrivers: 23,
    revenue: "$12,450.00",
    avgDeliveryTime: "2.5 hrs"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Orders</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Drivers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeDrivers}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-bold text-gray-900">{stats.revenue}</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Avg Delivery</p>
                <p className="text-2xl font-bold text-gray-900">{stats.avgDeliveryTime}</p>
              </div>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="drivers">Drivers</TabsTrigger>
            <TabsTrigger value="cleaners">Cleaners</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Active Orders</h2>
                <Input placeholder="Search orders..." className="w-64" />
              </div>
              
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h3 className="font-semibold">{order.id}</h3>
                          <p className="text-sm text-gray-600">{order.customer}</p>
                        </div>
                        <Badge className={
                          order.status === 'In Transit' ? 'bg-blue-500' :
                          order.status === 'Cleaning' ? 'bg-yellow-500' : 'bg-green-500'
                        }>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{order.amount}</p>
                        <p className="text-sm text-gray-600">Driver: {order.driver}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center">
                        <Package className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{order.items.join(", ")}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Pickup: {order.pickupTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span>ETA: {order.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{order.phone}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end space-x-2">
                      <Button variant="outline" size="sm">Contact Customer</Button>
                      <Button variant="outline" size="sm">Contact Driver</Button>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="drivers">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Driver Management</h2>
                <Button>Add New Driver</Button>
              </div>
              
              <div className="space-y-4">
                {drivers.map((driver) => (
                  <div key={driver.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                          <Users className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{driver.name}</h3>
                          <p className="text-sm text-gray-600">{driver.phone}</p>
                          <div className="flex items-center mt-1">
                            <span className="text-yellow-400">★</span>
                            <span className="text-sm ml-1">{driver.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <Badge className={driver.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}>
                          {driver.status}
                        </Badge>
                        <div className="text-right text-sm">
                          <p>Current Orders: <span className="font-medium">{driver.currentOrders}</span></p>
                          <p>Total Deliveries: <span className="font-medium">{driver.totalDeliveries}</span></p>
                          <p className="text-green-600 font-medium">{driver.earnings}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">View Profile</Button>
                      <Button size="sm">Assign Order</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="cleaners">
            <Card className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Partner Cleaners</h2>
                <Button>Add New Cleaner</Button>
              </div>
              
              <div className="space-y-4">
                {cleaners.map((cleaner) => (
                  <div key={cleaner.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{cleaner.name}</h3>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-sm text-gray-600">{cleaner.address}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="h-4 w-4 mr-1 text-gray-500" />
                          <span className="text-sm text-gray-600">{cleaner.phone}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <span className="text-yellow-400">★</span>
                          <span className="text-sm ml-1">{cleaner.rating}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge className={cleaner.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}>
                          {cleaner.status}
                        </Badge>
                        <div className="mt-2 text-sm">
                          <p>Pending: <span className="font-medium">{cleaner.pendingOrders}</span></p>
                          <p>Completed Today: <span className="font-medium">{cleaner.completedToday}</span></p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end space-x-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">View Orders</Button>
                      <Button size="sm">Manage</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Revenue Analytics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Today's Revenue</span>
                    <span className="font-medium">$1,234.56</span>
                  </div>
                  <div className="flex justify-between">
                    <span>This Week</span>
                    <span className="font-medium">$8,765.43</span>
                  </div>
                  <div className="flex justify-between">
                    <span>This Month</span>
                    <span className="font-medium">$34,567.89</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600">65% of monthly goal achieved</p>
                </div>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Avg Delivery Time</span>
                    <span className="font-medium">2.5 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer Satisfaction</span>
                    <span className="font-medium">4.7/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>On-Time Delivery Rate</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Driver Utilization</span>
                    <span className="font-medium">78%</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
