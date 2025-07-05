
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, X, Package, Truck, AlertCircle, CheckCircle } from 'lucide-react';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

interface NotificationSystemProps {
  userType: 'customer' | 'driver' | 'admin';
}

const NotificationSystem: React.FC<NotificationSystemProps> = ({ userType }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    // Simulate real-time notifications
    const mockNotifications: Record<string, Notification[]> = {
      customer: [
        {
          id: '1',
          type: 'info',
          title: 'Driver Assigned',
          message: 'John D. has been assigned to your pickup request',
          timestamp: new Date(Date.now() - 5 * 60000),
          read: false
        },
        {
          id: '2',
          type: 'success',
          title: 'Items Picked Up',
          message: 'Your items have been collected and are on the way to the cleaner',
          timestamp: new Date(Date.now() - 15 * 60000),
          read: false
        }
      ],
      driver: [
        {
          id: '1',
          type: 'warning',
          title: 'New Pickup Request',
          message: 'Pickup request available 0.3 miles away - $15.00',
          timestamp: new Date(Date.now() - 2 * 60000),
          read: false
        },
        {
          id: '2',
          type: 'info',
          title: 'Route Update',
          message: 'Traffic detected on your route. Consider alternate path.',
          timestamp: new Date(Date.now() - 8 * 60000),
          read: true
        }
      ],
      admin: [
        {
          id: '1',
          type: 'error',
          title: 'System Alert',
          message: 'Driver shortage detected in downtown area',
          timestamp: new Date(Date.now() - 3 * 60000),
          read: false
        },
        {
          id: '2',
          type: 'success',
          title: 'Revenue Milestone',
          message: 'Daily revenue target achieved - $1,500 reached',
          timestamp: new Date(Date.now() - 10 * 60000),
          read: false
        }
      ]
    };

    setNotifications(mockNotifications[userType] || []);
  }, [userType]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Package className="h-5 w-5 text-blue-500" />;
    }
  };

  const formatTime = (timestamp: Date) => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - timestamp.getTime()) / 60000);
    
    if (diff < 1) return 'Just now';
    if (diff < 60) return `${diff}m ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
    return `${Math.floor(diff / 1440)}d ago`;
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500 text-xs">
            {unreadCount}
          </Badge>
        )}
      </Button>

      {showNotifications && (
        <div className="absolute right-0 mt-2 w-96 z-50">
          <Card className="shadow-lg">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Notifications</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowNotifications(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  No notifications
                </div>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start space-x-3">
                      {getIcon(notification.type)}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <p className="font-medium text-sm">{notification.title}</p>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeNotification(notification.id);
                            }}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          {formatTime(notification.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {notifications.length > 0 && (
              <div className="p-3 border-t">
                <Button 
                  variant="ghost" 
                  className="w-full text-sm"
                  onClick={() => setNotifications([])}
                >
                  Clear All
                </Button>
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;
