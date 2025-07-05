
import React from 'react';
import Header from '@/components/Header';
import DeliveryHero from '@/components/DeliveryHero';
import ServiceOptions from '@/components/ServiceOptions';
import HowItWorks from '@/components/HowItWorks';
import NearbyCleaners from '@/components/NearbyCleaners';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <DeliveryHero />
      <ServiceOptions />
      <HowItWorks />
      <NearbyCleaners />
    </div>
  );
};

export default Index;
