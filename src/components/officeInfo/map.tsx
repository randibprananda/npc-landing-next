'use client';

import 'leaflet/dist/leaflet.css';

import L, { Icon } from 'leaflet';
// Import necessary modules and components
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

// Define the MapComponent
const MapComponent: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [mapType, setMapType] = useState<
    'MAP' | 'SATELLITE' | 'HYBRID' | 'TERRAIN'
  >('MAP');

  // Create the red icon with useMemo to avoid unnecessary recreation
  const redIcon = useMemo(
    () =>
      new Icon({
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x-red.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }),
    []
  );

  // Function to get the tile layer based on mapType
  const getTileLayer = () => {
    if (mapType === 'MAP') {
      return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    } else {
      return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
    }
  };

  // MapControl component to handle map controls
  const MapControl: React.FC = () => {
    const map = useMap();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const container = L.DomUtil.create(
        'div',
        'leaflet-bar leaflet-control leaflet-control-custom'
      );

      container.style.backgroundColor = 'white';
      container.style.width = '120px';
      container.style.height = '40px';
      container.onclick = function () {
        setMapType(prevType => (prevType === 'MAP' ? 'SATELLITE' : 'MAP'));
      };
      container.innerHTML = mapType === 'MAP' ? 'Mode Satelit' : 'Mode Peta';

      L.DomEvent.disableClickPropagation(container);

      if (containerRef.current) {
        containerRef.current.appendChild(container);
      }

      return () => {
        if (containerRef.current) {
          containerRef.current.removeChild(container);
        }
      };
    }, [mapType]);

    return containerRef.current
      ? createPortal(null, containerRef.current)
      : null;
  };

  // useEffect to set isMounted to true on component mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Return the JSX for the MapComponent
  return (
    <div className="h-[540px] w-full relative ">
      <div
        className="absolute top-4 right-4 px-4 py-2 bg-white rounded-[10px]"
        style={{ zIndex: '999' }}
      >
        <button
          className={`border-r-[#8E95A2] border-r pr-2 ${
            mapType === 'MAP'
              ? 'text-[#25272C] font-[500]'
              : ' text-[#8E95A2] font-[300] '
          }`}
          onClick={() => setMapType('MAP')}
        >
          Maps
        </button>
        <button
          className={`pl-2 ${
            mapType === 'SATELLITE'
              ? 'text-[#25272C] font-[500]'
              : ' text-[#8E95A2] font-[300] '
          }`}
          onClick={() => setMapType('SATELLITE')}
        >
          Satellite
        </button>
      </div>
      <MapContainer
        center={[-7.5661, 110.8196]}
        zoom={13}
        style={{ height: '540px', width: '100%' }}
        id="map"
      >
        <TileLayer url={getTileLayer()} />
        {isMounted && <MapControl />}
        <Marker position={[-7.5661, 110.8196]} icon={redIcon}>
          <Popup>Surakarta</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
