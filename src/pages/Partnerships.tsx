
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Partnerships = () => {
  const [activeTab, setActiveTab] = useState('active');

  const tabs = [
    { id: 'active', label: 'My Active Partnerships', count: 0 },
    { id: 'intents', label: 'My Partnership Intents', count: 0 },
    { id: 'created', label: 'My Created Groups', count: 0 },
    { id: 'available', label: 'Available Groups to Join', count: 0 },
    { id: 'completed', label: 'Completed Partnerships', count: 0 },
    { id: 'declined', label: 'Declined/Withdrawn/Cancelled', count: 0 },
  ];

  const getEmptyStateMessage = (tabId: string) => {
    switch (tabId) {
      case 'active':
        return {
          message: 'You are not currently part of any active partnership groups. Start exploring!',
          buttonText: 'Find Groups',
          buttonAction: () => setActiveTab('available')
        };
      case 'intents':
        return {
          message: 'You have no pending partnership interests. Explore openings!',
          buttonText: 'View Openings',
          buttonAction: () => console.log('Navigate to openings')
        };
      case 'created':
        return {
          message: "You haven't created any partnership groups yet. Be the first to start one!",
          buttonText: 'Create Your First Group',
          buttonAction: () => console.log('Create group modal')
        };
      case 'available':
        return {
          message: 'No suitable groups are currently available to join for your interested openings.',
          buttonText: 'View Your Intents',
          buttonAction: () => setActiveTab('intents')
        };
      case 'completed':
        return {
          message: "You haven't completed any partnerships yet.",
          buttonText: null,
          buttonAction: null
        };
      case 'declined':
        return {
          message: 'No declined, withdrawn, or cancelled partnerships.',
          buttonText: null,
          buttonAction: null
        };
      default:
        return { message: '', buttonText: null, buttonAction: null };
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">My Partnerships</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 lg:grid-cols-6">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="text-xs lg:text-sm px-2 lg:px-4 py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <span className="truncate">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.id} value={tab.id} className="mt-6">
            <Card className="min-h-[400px]">
              <CardContent className="flex flex-col items-center justify-center py-16">
                <div className="text-center space-y-4">
                  <p className="text-gray-500 text-lg">
                    {getEmptyStateMessage(tab.id).message}
                  </p>
                  {getEmptyStateMessage(tab.id).buttonText && (
                    <Button
                      onClick={getEmptyStateMessage(tab.id).buttonAction}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      {getEmptyStateMessage(tab.id).buttonText}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Partnerships;
