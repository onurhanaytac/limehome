/* eslint-disable no-undef */
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import HomeMarker from "@/components/HomeMarker";

import { MapProps } from "./Map.types";

const Map: React.FC<MapProps> = ({
  activeMarker,
  markerLocations,
  onLoad,
  onClickMarker,
}: MapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCPz9UEVtZRSDZv5XRwdXuYFef3xqYK1Og",
  });

  const onLoadMap = useCallback((_map: google.maps.Map) => {
    _map.fitBounds(new window.google.maps.LatLngBounds());
    if (!onLoad) return;

    onLoad(_map);
    setTimeout(() => {
      _map.setZoom(16);
      _map.panTo({
        lat: 48.13598,
        lng: 11.58643,
      });
    }, 500);
  }, []);

  const onUnmount = useCallback(() => {}, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        fullscreenControl: false,
      }}
      zoom={16}
      onLoad={onLoadMap}
      onUnmount={onUnmount}
    >
      {markerLocations &&
        markerLocations.length &&
        markerLocations.map((location) => {
          return (
            <HomeMarker
              key={uuidv4()}
              position={location}
              active={location.id === activeMarker}
              onClick={() => {
                if (!onClickMarker) return;
                onClickMarker(location.id);
              }}
            />
          );
        })}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default React.memo(Map);
