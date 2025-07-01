
import React from 'react';
import { Users, Target, Star, Heart } from 'lucide-react';

const ConnectingAnimation = () => {
  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
      {/* Central Goal */}
      <div className="absolute z-20 bg-yellow-500 p-4 rounded-full shadow-lg animate-pulse">
        <Target className="h-8 w-8 text-white" />
      </div>

      {/* Connecting Lines with enhanced animations */}
      <div className="absolute inset-0">
        {/* Line 1 - Top Left to Center */}
        <div className="absolute top-16 left-16 w-32 h-0.5 bg-gradient-to-r from-blue-500 to-yellow-500 origin-left animate-[scale-x-0_2s_ease-in-out_0.5s_forwards] transform scale-x-0 rotate-45"></div>
        
        {/* Line 2 - Top Right to Center */}
        <div className="absolute top-16 right-16 w-32 h-0.5 bg-gradient-to-l from-green-500 to-yellow-500 origin-right animate-[scale-x-0_2s_ease-in-out_1s_forwards] transform scale-x-0 -rotate-45"></div>
        
        {/* Line 3 - Bottom Left to Center */}
        <div className="absolute bottom-16 left-16 w-32 h-0.5 bg-gradient-to-r from-purple-500 to-yellow-500 origin-left animate-[scale-x-0_2s_ease-in-out_1.5s_forwards] transform scale-x-0 -rotate-45"></div>
        
        {/* Line 4 - Bottom Right to Center */}
        <div className="absolute bottom-16 right-16 w-32 h-0.5 bg-gradient-to-l from-red-500 to-yellow-500 origin-right animate-[scale-x-0_2s_ease-in-out_2s_forwards] transform scale-x-0 rotate-45"></div>
      </div>

      {/* People/Nodes with enhanced animations */}
      {/* Person 1 - Top Left */}
      <div className="absolute top-8 left-8 bg-blue-500 p-3 rounded-full shadow-lg animate-[fade-in_1s_ease-out_0.2s_both] hover:scale-110 transition-transform">
        <Users className="h-6 w-6 text-white" />
      </div>

      {/* Person 2 - Top Right */}
      <div className="absolute top-8 right-8 bg-green-500 p-3 rounded-full shadow-lg animate-[fade-in_1s_ease-out_0.7s_both] hover:scale-110 transition-transform">
        <Users className="h-6 w-6 text-white" />
      </div>

      {/* Person 3 - Bottom Left */}
      <div className="absolute bottom-8 left-8 bg-purple-500 p-3 rounded-full shadow-lg animate-[fade-in_1s_ease-out_1.2s_both] hover:scale-110 transition-transform">
        <Users className="h-6 w-6 text-white" />
      </div>

      {/* Person 4 - Bottom Right */}
      <div className="absolute bottom-8 right-8 bg-red-500 p-3 rounded-full shadow-lg animate-[fade-in_1s_ease-out_1.7s_both] hover:scale-110 transition-transform">
        <Users className="h-6 w-6 text-white" />
      </div>

      {/* Enhanced Success Indicators */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute -top-16 -left-2 animate-[bounce_2s_infinite_2.5s]">
          <Star className="h-4 w-4 text-yellow-400" />
        </div>
        <div className="absolute -top-12 left-8 animate-[bounce_2s_infinite_2.7s]">
          <Star className="h-4 w-4 text-yellow-400" />
        </div>
        <div className="absolute -top-14 -right-4 animate-[bounce_2s_infinite_2.9s]">
          <Star className="h-4 w-4 text-yellow-400" />
        </div>
        <div className="absolute -bottom-12 left-4 animate-[bounce_2s_infinite_3.1s]">
          <Heart className="h-4 w-4 text-pink-400" />
        </div>
        <div className="absolute -bottom-10 -right-2 animate-[bounce_2s_infinite_3.3s]">
          <Heart className="h-4 w-4 text-pink-400" />
        </div>
      </div>

      {/* Floating particles for enhanced effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-12 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-6 left-1/3 w-1.5 h-1.5 bg-green-300 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-40"></div>
      </div>
    </div>
  );
};

export default ConnectingAnimation;
