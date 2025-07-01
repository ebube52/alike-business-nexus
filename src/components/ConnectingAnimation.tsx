
import { useEffect, useState } from 'react';
import { Users, Zap, Target } from 'lucide-react';

const ConnectingAnimation = () => {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Central Goal */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className={`transition-all duration-1000 ${animationPhase >= 3 ? 'scale-110 bg-yellow-500' : 'scale-100 bg-gray-300'} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
          <Target className={`h-8 w-8 ${animationPhase >= 3 ? 'text-white' : 'text-gray-600'}`} />
        </div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700 whitespace-nowrap">
          Shared Goal
        </div>
      </div>

      {/* Person 1 - Top Left */}
      <div className={`absolute transition-all duration-1000 ${
        animationPhase >= 1 ? 'top-16 left-20' : 'top-4 left-4'
      }`}>
        <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
          <Users className="h-6 w-6 text-white" />
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
          Entrepreneur
        </div>
      </div>

      {/* Person 2 - Top Right */}
      <div className={`absolute transition-all duration-1000 ${
        animationPhase >= 1 ? 'top-16 right-20' : 'top-4 right-4'
      }`}>
        <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
          <Users className="h-6 w-6 text-white" />
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
          Investor
        </div>
      </div>

      {/* Person 3 - Bottom Left */}
      <div className={`absolute transition-all duration-1000 ${
        animationPhase >= 2 ? 'bottom-16 left-20' : 'bottom-4 left-4'
      }`}>
        <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
          <Users className="h-6 w-6 text-white" />
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
          Partner
        </div>
      </div>

      {/* Person 4 - Bottom Right */}
      <div className={`absolute transition-all duration-1000 ${
        animationPhase >= 2 ? 'bottom-16 right-20' : 'bottom-4 right-4'
      }`}>
        <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
          <Users className="h-6 w-6 text-white" />
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
          Expert
        </div>
      </div>

      {/* Connection Lines */}
      {animationPhase >= 1 && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Top connections */}
          <line
            x1="25%" y1="30%" x2="50%" y2="50%"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5,5"
            className={`${animationPhase >= 1 ? 'animate-pulse' : ''}`}
          />
          <line
            x1="75%" y1="30%" x2="50%" y2="50%"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="5,5"
            className={`${animationPhase >= 1 ? 'animate-pulse' : ''}`}
          />
          
          {/* Bottom connections */}
          {animationPhase >= 2 && (
            <>
              <line
                x1="25%" y1="70%" x2="50%" y2="50%"
                stroke="#8b5cf6"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
              <line
                x1="75%" y1="70%" x2="50%" y2="50%"
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            </>
          )}
        </svg>
      )}

      {/* Success Burst */}
      {animationPhase >= 3 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-ping absolute h-20 w-20 rounded-full bg-yellow-400 opacity-75"></div>
          <Zap className="relative h-6 w-6 text-yellow-600 animate-bounce" />
        </div>
      )}

      {/* Phase Labels */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-xs font-medium text-gray-600">
          {animationPhase === 0 && "Professionals Discover Opportunities"}
          {animationPhase === 1 && "Initial Connections Form"}
          {animationPhase === 2 && "Network Expands"}
          {animationPhase === 3 && "Goals Achieved Together!"}
        </div>
      </div>
    </div>
  );
};

export default ConnectingAnimation;
