
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ThumbsUp, Clock, User } from 'lucide-react';

const Forum = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: 1, name: 'Real Estate', description: 'Discuss property investments and market trends', posts: 145, color: 'bg-blue-100 text-blue-800' },
    { id: 2, name: 'Technology', description: 'Tech partnerships and startup discussions', posts: 89, color: 'bg-green-100 text-green-800' },
    { id: 3, name: 'Finance', description: 'Investment strategies and financial partnerships', posts: 67, color: 'bg-purple-100 text-purple-800' },
    { id: 4, name: 'Manufacturing', description: 'Industrial partnerships and supply chain', posts: 34, color: 'bg-orange-100 text-orange-800' },
    { id: 5, name: 'Retail', description: 'Retail business opportunities and partnerships', posts: 52, color: 'bg-pink-100 text-pink-800' },
  ];

  const samplePosts = [
    {
      id: 1,
      title: 'Best practices for due diligence in real estate partnerships',
      author: 'Sarah Johnson',
      category: 'Real Estate',
      replies: 12,
      likes: 24,
      timestamp: '2 hours ago',
      excerpt: 'What are the key things to look for when evaluating a potential real estate investment partner?'
    },
    {
      id: 2,
      title: 'Equity distribution in tech startups',
      author: 'Mike Chen',
      category: 'Technology',
      replies: 8,
      likes: 15,
      timestamp: '5 hours ago',
      excerpt: 'How do you fairly split equity when bringing on co-founders at different stages?'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Forum</h1>
        <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
          New Post
        </Button>
      </div>

      {!selectedCategory ? (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Forum Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Please select a forum category to view posts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map(category => (
                  <Card 
                    key={category.id} 
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedCategory(category)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">{category.name}</h3>
                        <Badge className={category.color}>{category.posts} posts</Badge>
                      </div>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {samplePosts.map(post => (
                  <div key={post.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 hover:text-yellow-600 cursor-pointer">
                        {post.title}
                      </h4>
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes} likes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      ) : (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  {selectedCategory.name} Forum
                  <Badge className={selectedCategory.color}>{selectedCategory.posts} posts</Badge>
                </CardTitle>
                <p className="text-gray-600 mt-1">{selectedCategory.description}</p>
              </div>
              <Button variant="outline" onClick={() => setSelectedCategory(null)}>
                Back to Categories
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center py-12">
              <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No forum categories available.</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Forum;
