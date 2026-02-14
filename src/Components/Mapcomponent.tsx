import React, { useState, useCallback } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents
} from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// ✅ Correct way for Vite (NO require)

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';


const DefaultIcon = L.icon({

  iconRetinaUrl: markerIcon2x,

  iconUrl: markerIcon,

  shadowUrl: markerShadow,

  iconSize: [25, 41],

  iconAnchor: [12, 41],

});


L.Marker.prototype.options.icon = DefaultIcon;


// Props

interface MapComponentProps {

  onLocationSelect: (lat: number, lng: number) => void;

  initialPosition?: [number, number];

}


interface LocationMarkerProps {

  position: [number, number];

  setPosition: (pos: [number, number]) => void;

  onLocationSelect: (lat: number, lng: number) => void;

}


// Marker Component

const LocationMarker: React.FC<LocationMarkerProps> = ({

  position,

  setPosition,

  onLocationSelect

}) => {

  useMapEvents({

    click(e) {

      const { lat, lng } = e.latlng;

      setPosition([lat, lng]);

      onLocationSelect(lat, lng);

    },

  });

  return <Marker position={position} />;

};


// Main Component

const MapComponent: React.FC<MapComponentProps> = ({

  onLocationSelect,

  initialPosition = [6.9271, 79.8612]

}) => {

  const [position, setPosition] = useState<[number, number]>(initialPosition);


  const handleLocationSelect = useCallback(

    (lat: number, lng: number) => {

      onLocationSelect(lat, lng);

    },

    [onLocationSelect]

  );


  return (

    <div style={{ height: "400px", width: "100%" }}>

      <MapContainer

        center={position}

        zoom={10}

        style={{ height: "100%", width: "100%" }}

      >

        <TileLayer

          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />


        <LocationMarker

          position={position}

          setPosition={setPosition}

          onLocationSelect={handleLocationSelect}

        />


      </MapContainer>

    </div>

  );

};


export default MapComponent;
