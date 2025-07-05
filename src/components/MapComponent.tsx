
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface MapComponentProps {
  pickupLocation?: { lat: number; lng: number };
  deliveryLocation?: { lat: number; lng: number };
  driverLocation?: { lat: number; lng: number };
  showRoute?: boolean;
}

const MapComponent: React.FC<MapComponentProps> = ({
  pickupLocation,
  deliveryLocation,
  driverLocation,
  showRoute = false
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      libraries: ["places"]
    });

    loader.load().then(() => {
      const mapInstance = new google.maps.Map(mapRef.current!, {
        center: pickupLocation || { lat: 40.7128, lng: -74.0060 },
        zoom: 13,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });

      setMap(mapInstance);
      setMapLoaded(true);

      // Add markers
      if (pickupLocation) {
        new google.maps.Marker({
          position: pickupLocation,
          map: mapInstance,
          title: "Pickup Location",
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#3B82F6">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            `),
            scaledSize: new google.maps.Size(32, 32)
          }
        });
      }

      if (deliveryLocation) {
        new google.maps.Marker({
          position: deliveryLocation,
          map: mapInstance,
          title: "Delivery Location",
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#10B981">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            `),
            scaledSize: new google.maps.Size(32, 32)
          }
        });
      }

      if (driverLocation) {
        new google.maps.Marker({
          position: driverLocation,
          map: mapInstance,
          title: "Driver Location",
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#F59E0B">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11C5.84 5 5.28 5.42 5.08 6.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-1.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            `),
            scaledSize: new google.maps.Size(32, 32)
          }
        });
      }

      // Show route if requested
      if (showRoute && pickupLocation && deliveryLocation) {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({
          suppressMarkers: true,
          polylineOptions: {
            strokeColor: '#3B82F6',
            strokeWeight: 4
          }
        });
        directionsRenderer.setMap(mapInstance);

        directionsService.route({
          origin: pickupLocation,
          destination: deliveryLocation,
          waypoints: driverLocation ? [{ location: driverLocation, stopover: true }] : [],
          travelMode: google.maps.TravelMode.DRIVING
        }, (result, status) => {
          if (status === 'OK' && result) {
            directionsRenderer.setDirections(result);
          }
        });
      }
    }).catch(error => {
      console.error('Error loading Google Maps:', error);
    });
  }, [apiKey, pickupLocation, deliveryLocation, driverLocation, showRoute]);

  if (!apiKey) {
    return (
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Google Maps Integration</h3>
        <p className="text-gray-600 mb-4">
          Please enter your Google Maps API key to enable map functionality.
          Get your API key from the Google Cloud Console.
        </p>
        <div className="flex gap-2">
          <Input
            type="password"
            placeholder="Enter Google Maps API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <Button onClick={() => setApiKey(apiKey)}>Load Map</Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default MapComponent;
