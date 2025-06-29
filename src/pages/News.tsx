
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ExternalLink, User } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Business', 'Real Estate', 'Technology', 'Finance', 'Market Trends'];

  const newsArticles = [
    {
      id: 1,
      title: 'Real Estate Market Shows Strong Growth in Q4 2024',
      excerpt: 'Commercial real estate partnerships are seeing unprecedented growth as investors seek stable returns in uncertain economic times.',
      category: 'Real Estate',
      author: 'Business Weekly',
      publishedAt: '2 hours ago',
      readTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      external: true
    },
    {
      id: 2,
      title: 'Tech Partnerships Drive Innovation in AI Sector',
      excerpt: 'Strategic partnerships between established companies and AI startups are creating new opportunities for business growth.',
      category: 'Technology',
      author: 'TechInsider',
      publishedAt: '6 hours ago',
      readTime: '3 min read',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      external: true
    },
    {
      id: 3,
      title: 'Small Business Partnerships: Key to Post-Pandemic Recovery',
      excerpt: 'How small businesses are leveraging partnerships to rebuild and grow in the post-pandemic economy.',
      category: 'Business',
      author: 'Entrepreneur Magazine',
      publishedAt: '1 day ago',
      readTime: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      external: true
    },
    {
      id: 4,
      title: 'Investment Trends: What Partnership Investors Need to Know',
      excerpt: 'Latest trends in partnership investments and what investors should consider before making commitments.',
      category: 'Finance',
      author: 'Financial Times',
      publishedAt: '2 days ago',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      external: true
    }
  ];

  const filteredNews = newsArticles.filter(article => 
    selectedCategory === 'all' || article.category === selectedCategory
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Latest News</h1>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          View all news
        </Button>
      </div>

      {/* Category Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* News Articles */}
      <div className="grid gap-6">
        {filteredNews.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-gray-500 text-lg">No news articles found for this category.</p>
            </CardContent>
          </Card>
        ) : (
          filteredNews.map(article => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  <div className="md:col-span-1">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      {article.external && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <ExternalLink className="h-3 w-3" />
                          External
                        </Badge>
                      )}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                      {article.title}
                    </h2>
                    <p className="text-gray-600">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.publishedAt}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <Button variant="outline" className="w-fit">
                      Read More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default News;
