
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, MessageSquare, Users, Clock } from 'lucide-react';

const Messaging = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  // Sample conversations data
  const conversations = [
    {
      id: 1,
      name: 'Real Estate Investment Group',
      type: 'group',
      lastMessage: 'Thanks for the market analysis document!',
      timestamp: '2 hours ago',
      unread: 3,
      participants: 5
    },
    {
      id: 2,
      name: 'John Smith',
      type: 'direct',
      lastMessage: 'Are you available for a call tomorrow?',
      timestamp: '1 day ago',
      unread: 1,
      participants: 2
    },
    {
      id: 3,
      name: 'Tech Startup Partnership',
      type: 'group',
      lastMessage: 'The meeting is scheduled for Friday at 3 PM',
      timestamp: '2 days ago',
      unread: 0,
      participants: 3
    }
  ];

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Connections</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
        {/* Conversations List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Messages
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search for chats"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {filteredConversations.length === 0 ? (
                <div className="p-4 text-center text-gray-500">
                  No conversations found
                </div>
              ) : (
                filteredConversations.map(conversation => (
                  <div
                    key={conversation.id}
                    className={`p-4 cursor-pointer hover:bg-gray-50 border-b transition-colors ${
                      selectedChat === conversation.id ? 'bg-yellow-50 border-l-4 border-l-yellow-500' : ''
                    }`}
                    onClick={() => setSelectedChat(conversation.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          {conversation.type === 'group' ? (
                            <Users className="h-5 w-5 text-gray-600" />
                          ) : (
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                              {conversation.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 truncate">
                            {conversation.name}
                          </h4>
                          {conversation.type === 'group' && (
                            <p className="text-xs text-gray-500">
                              {conversation.participants} participants
                            </p>
                          )}
                        </div>
                      </div>
                      {conversation.unread > 0 && (
                        <div className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {conversation.unread}
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 truncate mb-1">
                      {conversation.lastMessage}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="h-3 w-3" />
                      <span>{conversation.timestamp}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-2">
          <CardContent className="h-full flex items-center justify-center">
            {selectedChat ? (
              <div className="text-center space-y-4">
                <MessageSquare className="h-16 w-16 text-gray-300 mx-auto" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Start your conversation
                  </h3>
                  <p className="text-gray-500">
                    Select a conversation to start messaging
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <MessageSquare className="h-16 w-16 text-gray-300 mx-auto" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No conversation selected
                  </h3>
                  <p className="text-gray-500">
                    Choose a conversation from the sidebar to start messaging
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Messaging;
