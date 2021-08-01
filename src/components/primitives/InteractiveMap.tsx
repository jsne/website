import mapboxgl, {
  LngLatLike,
  Map as MapboxMap,
  MapboxOptions,
  MarkerOptions,
} from 'mapbox-gl';
import React, { useEffect, useRef } from 'react';

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_API_KEY;

interface MapBaseOptions {
  center: GatsbyTypes.ContentfulVenueLocation;
}

type MapOptions = Omit<MapboxOptions, 'center' | 'container'> & MapBaseOptions;
type MapMarkerOptions = MarkerOptions & MapBaseOptions;

export interface InteractiveMapProps {
  id: string;
  mapOptions: MapOptions;
  markerOptions: MapMarkerOptions;
}

// @NOTE Not called 'Map' to avoid conflicts with global `Map` interface.
export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  id,
  mapOptions,
  markerOptions,
  ...props
}) => {
  const map = useRef<MapboxMap>();

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: id,
      style: 'mapbox://styles/nerdyman/ckrrkx0a35bx618nkb5g2ihvy',
      ...mapOptions,
      center: [mapOptions.center.lon || 0, mapOptions.center.lat || 0],
    });

    map.current.scrollZoom.disable();

    const marker = new mapboxgl.Marker({
      color: 'var(--jsne-colors-primary2)',
      draggable: true,
    })
      .setLngLat(markerOptions.center as LngLatLike)
      .addTo(map.current);

    return () => {
      marker.remove();
    };
  }, [id, mapOptions, markerOptions]);

  return <div id={id} {...props} />;
};
