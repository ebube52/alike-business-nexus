
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, User, Car, FileText, DollarSign, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const BecomeDriver = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    address: '',
    city: '',
    zipCode: '',
    
    // Vehicle Information
    vehicleType: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    licensePlate: '',
    
    // Driver Information
    licenseNumber: '',
    licenseExpiry: '',
    hasInsurance: false,
    
    // Availability
    availability: [] as string[],
    hoursPerWeek: '',
    
    // Experience
    previousExperience: '',
    whyJoin: '',
    
    // Agreements
    agreedToTerms: false,
    agreedToBackground: false
  });

  const vehicleTypes = [
    'Car',
    'SUV',
    'Van',
    'Pickup Truck',
    'Motorcycle'
  ];

  const availabilityOptions = [
    'Monday',
    'Tuesday', 
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAvailabilityToggle = (day: string) => {
    setFormData(prev => ({
      ...prev,
      availability: prev.availability.includes(day)
        ? prev.availability.filter(d => d !== day)
        : [...prev.availability, day]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreedToTerms || !formData.agreedToBackground) {
      toast({
        title: "Agreements Required",
        description: "Please agree to all terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Driver application submitted:', formData);
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest! We'll review your application and contact you within 2-3 business days.",
    });

    // Navigate to driver dashboard
    navigate('/driver');
  };

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
              <h1 className="text-2xl font-bold text-gray-900">Become a Driver</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Driver Network</h2>
          <p className="text-lg text-gray-600">Earn money on your schedule by delivering dry cleaning to customers</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="p-4 text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <h3 className="font-semibold">Earn $15-25/hour</h3>
              <p className="text-sm text-gray-600">Plus tips and bonuses</p>
            </Card>
            <Card className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <h3 className="font-semibold">Flexible Schedule</h3>
              <p className="text-sm text-gray-600">Work when you want</p>
            </Card>
            <Card className="p-4 text-center">
              <Car className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <h3 className="font-semibold">Use Your Vehicle</h3>
              <p className="text-sm text-gray-600">Any car, SUV, or van</p>
            </Card>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <User className="h-5 w-5 mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">Personal Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code *</Label>
                <Input
                  id="zipCode"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  required
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Car className="h-5 w-5 mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">Vehicle Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label>Vehicle Type *</Label>
                <Select onValueChange={(value) => handleInputChange('vehicleType', value)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicleTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="vehicleYear">Year *</Label>
                <Input
                  id="vehicleYear"
                  type="number"
                  min="2010"
                  max={new Date().getFullYear()}
                  value={formData.vehicleYear}
                  onChange={(e) => handleInputChange('vehicleYear', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="vehicleMake">Make *</Label>
                <Input
                  id="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={(e) => handleInputChange('vehicleMake', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="vehicleModel">Model *</Label>
                <Input
                  id="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="licensePlate">License Plate *</Label>
                <Input
                  id="licensePlate"
                  value={formData.licensePlate}
                  onChange={(e) => handleInputChange('licensePlate', e.target.value)}
                  required
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-4">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">Driver License & Insurance</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="licenseNumber">Driver License Number *</Label>
                <Input
                  id="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="licenseExpiry">License Expiry Date *</Label>
                <Input
                  id="licenseExpiry"
                  type="date"
                  value={formData.licenseExpiry}
                  onChange={(e) => handleInputChange('licenseExpiry', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasInsurance"
                    checked={formData.hasInsurance}
                    onCheckedChange={(checked) => handleInputChange('hasInsurance', checked.toString())}
                    required
                  />
                  <Label htmlFor="hasInsurance">I have valid auto insurance *</Label>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 mr-2 text-blue-600" />
              <h2 className="text-xl font-semibold">Availability</h2>
            </div>
            <div className="space-y-4">
              <div>
                <Label>Days Available (Select all that apply)</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                  {availabilityOptions.map(day => (
                    <div key={day} className="flex items-center space-x-2">
                      <Checkbox
                        id={day}
                        checked={formData.availability.includes(day)}
                        onCheckedChange={() => handleAvailabilityToggle(day)}
                      />
                      <Label htmlFor={day} className="text-sm">{day}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <Label>Hours Per Week</Label>
                <Select onValueChange={(value) => handleInputChange('hoursPerWeek', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select hours per week" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="part-time">Part-time (10-20 hours)</SelectItem>
                    <SelectItem value="full-time">Full-time (30-40 hours)</SelectItem>
                    <SelectItem value="flexible">Flexible (as needed)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Experience & Motivation</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="previousExperience">Previous Delivery/Driver Experience</Label>
                <Textarea
                  id="previousExperience"
                  value={formData.previousExperience}
                  onChange={(e) => handleInputChange('previousExperience', e.target.value)}
                  placeholder="Tell us about any relevant experience (Uber, DoorDash, delivery, etc.)"
                  rows={3}
                />
              </div>
              
              <div>
                <Label htmlFor="whyJoin">Why do you want to join our team?</Label>
                <Textarea
                  id="whyJoin"
                  value={formData.whyJoin}
                  onChange={(e) => handleInputChange('whyJoin', e.target.value)}
                  placeholder="Tell us what motivates you to become a driver with us"
                  rows={3}
                />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreedToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreedToTerms', checked.toString())}
                  required
                />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions and driver agreement *
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="background"
                  checked={formData.agreedToBackground}
                  onCheckedChange={(checked) => handleInputChange('agreedToBackground', checked.toString())}
                  required
                />
                <Label htmlFor="background" className="text-sm">
                  I consent to a background check and understand it's required for approval *
                </Label>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                Submit Application
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default BecomeDriver;
