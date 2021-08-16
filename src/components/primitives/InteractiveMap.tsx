import type {
  default as Mapboxgl,
  LngLatLike,
  Map as MapboxMap,
  MapboxOptions,
  Marker,
  MarkerOptions,
} from '!mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';

import mapMarker from '~/assets/images/map-marker.svg';
import { styled } from '~/styles/stitches.config';

const InteractiveMapRoot = styled('div', {
  '.mapboxgl-marker': {
    filter: 'drop-shadow(0 0 0.65rem $colors$shadow2)',
    backgroundImage: `url('${mapMarker}')`,
    backgroundSize: 'auto 121%',
    backgroundPosition: 'bottom',
  },
  '.mapboxgl-marker svg': {
    width: '2.5rem',
    height: '3.5rem',
    opacity: 0,
    cursor: 'pointer',
  },
});

interface MapBaseOptions {
  center: GatsbyTypes.ContentfulVenueLocation;
}

type MapOptions = Omit<MapboxOptions, 'center' | 'container' | 'zoom'> &
  MapBaseOptions &
  Required<Pick<MapboxOptions, 'zoom'>>;
type MapMarkerOptions = MarkerOptions & MapBaseOptions;

export interface InteractiveMapProps {
  id: string;
  /** Offset to add to longitude of map `center` and marker `flyTo`. */
  lonOffset?: number;
  mapOptions: MapOptions;
  markerOptions: MapMarkerOptions;
}

// @NOTE Not called 'Map' to avoid conflicts with global `Map` interface.
export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  id,
  lonOffset = 0,
  mapOptions,
  markerOptions,
  ...props
}) => {
  const [didInit, setDidInit] = useState(false);
  const mapboxgl = useRef<typeof Mapboxgl | undefined>(undefined);
  const map = useRef<MapboxMap>();

  useEffect(() => {
    import('!mapbox-gl').then((mapbox) => {
      mapboxgl.current = mapbox.default;
      mapboxgl.current.accessToken = process.env.GATSBY_MAPBOX_API_KEY;
      setDidInit(true);
    });
  }, []);

  useEffect(() => {
    if (!didInit) return;

    let marker: Marker;

    try {
      map.current = new mapboxgl.current!.Map({
        container: id,
        style: 'mapbox://styles/nerdyman/ckrrkx0a35bx618nkb5g2ihvy?optimize=true',
        ...mapOptions,
        center: {
          lng: (mapOptions.center.lon || 0) + lonOffset / mapOptions.zoom,
          lat: mapOptions.center.lat || 0,
        },
      });

      map.current!.scrollZoom.disable();

      marker = new mapboxgl.current!.Marker({
        color: 'var(--jsne-colors-primary2)',
      })
        .setLngLat(markerOptions.center as LngLatLike)
        .addTo(map.current);

      marker.getElement().addEventListener('click', () =>
        map.current?.flyTo({
          center: {
            ...marker.getLngLat(),
            lng: marker.getLngLat().lng + lonOffset / map.current.getZoom(),
          } as LngLatLike,
        }),
      );
    } catch (err) {
      console.error('[InteractiveMap] Unable to create map', err);
    }

    return () => {
      if (marker) marker.remove();
    };
  }, [didInit, lonOffset, id, mapOptions, markerOptions]);

  return <InteractiveMapRoot id={id} {...props} />;
};
