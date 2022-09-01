import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";

const MapBox = () => {
  const mapContainerRef = useRef(null);
  const [marker, setMarker] = useState({
    features: [
      {
        type: "Feature",
        properties: {
          title: "Lincoln Park",
          description: "A northside park that is home to the Lincoln Park Zoo",
        },
        geometry: {
          coordinates: [19.1372267, 47.6247852],
          type: "Point",
        },
      },
    ],
    type: "FeatureCollection",
  });

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-87.65, 41.84],
      zoom: 10,
    });

    // Create default markers
    marker.features.map((feature) =>
      new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
    );

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default MapBox;
