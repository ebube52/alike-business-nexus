
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, DollarSign, Building, Users } from 'lucide-react';

const Openings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Sample opening data
  const openings = [
    {
      id: 1,
      title: 'Real Estate Investment Partnership',
      company: 'PropertyVentures LLC',
      location: 'New York, NY',
      category: 'Real Estate',
      investment: '$50,000 - $500,000',
      description: 'Looking for partners to invest in commercial real estate properties in prime NYC locations.',
      tags: ['Commercial', 'Investment', 'Long-term'],
      posted: '2 days ago',
      partners: 3,
      maxPartners: 5
    },
    {
      id: 2,
      title: 'Tech Startup Co-founder',
      company: 'InnovateTech',
      location: 'San Francisco, CA',
      category: 'Technology',
      investment: 'Equity Partnership',
      description: 'Seeking technical co-founder for AI-powered business analytics platform.',
      tags: ['AI', 'SaaS', 'Co-founder'],
      posted: '1 week ago',
      partners: 1,
      maxPartners: 2
    },
    {
      id: 3,
      title: 'Restaurant Franchise Opportunity',
      company: 'Tasty Bites Franchise',
      location: 'Chicago, IL',
      category: 'Food & Beverage',
      investment: '$100,000 - $250,000',
      description: 'Franchise opportunity for established restaurant brand with proven business model.',
      tags: ['Franchise', 'Food Service', 'Established Brand'],
      posted: '3 days ago',
      partners: 2,
      maxPartners: 4
    }
  ];

  const categories = ['all', 'Real Estate', 'Technology', 'Food & Beverage', 'Manufacturing', 'Retail'];
  const locations = ['all', 'New York, NY', 'San Francisco, CA', 'Chicago, IL', 'Los Angeles, CA'];

  const filteredOpenings = openings.filter(opening => {
    const matchesSearch = opening.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opening.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || opening.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || opening.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Business Openings</h1>
        <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
          Post New Opening
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <Input
              placeholder="Search openings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map(location => (
                  <SelectItem key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Openings List */}
      <div className="grid gap-6">
        {filteredOpenings.length === 0 ? (
          <Card className="p-12">
            <CardContent className="text-center">
              <p className="text-gray-500 text-lg">No openings found matching your criteria.</p>
              <Button className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white">
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        ) : (
          filteredOpenings.map(opening => (
            <Card key={opening.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{opening.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        <span className="text-sm">{opening.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{opening.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-sm">{opening.investment}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{opening.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {opening.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Posted {opening.posted}</span>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{opening.partners}/{opening.maxPartners} partners</span>
                      </div>
                    </div>
                  </div>
                  <div className="ml-6 flex flex-col gap-2">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                      Express Interest
                    </Button>
                    <Button variant="outline">
                      View Details
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

export default Openings;
