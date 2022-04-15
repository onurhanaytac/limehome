import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Map, SliderList } from "@/components";
import { Info } from "@/components/Card/Card.types";
import { hotelServices } from "@/services";
import { Position } from "@/types";

const Listings: React.FC = () => {
  const history = useNavigate();
  const [activeMarker, setActiveMarker] = useState<string | undefined>("");
  const [hotelInfos, setHotelInfos] = useState<any[]>([]);
  const [markerLocations, setMarkerLocations] = useState<Position[]>([]);

  const map = useRef<google.maps.Map>();
  const locs = useRef<any>();

  const onChangeFocusSlider = useCallback((ndx: number) => {
    const activeLoc = { ...locs.current[ndx] };

    if (!activeLoc) return;

    setActiveMarker(activeLoc.id);
    setTimeout(() => {
      map?.current?.panTo(activeLoc);
    });
  }, []);

  const onClickBook = useCallback((e: Info) => {
    history(`/checkout/${e.title}`);
  }, []);

  const onClickCard = useCallback((e: Info) => {
    setActiveMarker(e.id);
    setTimeout(() => {
      map?.current?.panTo(locs.current.find((loc: any) => loc.id === e.id));
    });
  }, []);

  const onLoadMap = useCallback((_map: google.maps.Map) => {
    map.current = _map;

    if (!locs?.current[0]) return;
    _map.panTo(locs.current[0] || null);
  }, []);

  useEffect(() => {
    hotelServices.getHotels().then(({ infos, locations }) => {
      if (!infos || !locations) return;

      setHotelInfos(infos);
      setMarkerLocations(locations);
      setActiveMarker(locations[0].id);
    });
  }, []);

  useEffect(() => {
    locs.current = markerLocations;
  }, [markerLocations]);

  return (
    <>
      <SliderList
        data={hotelInfos}
        activeMarker={activeMarker}
        onChangeFocus={onChangeFocusSlider}
        onClickBook={onClickBook}
        onClickCard={onClickCard}
      />
      <Map
        activeMarker={activeMarker}
        markerLocations={markerLocations}
        onLoad={onLoadMap}
        onClickMarker={(id) => {
          setActiveMarker(id);
        }}
      />
    </>
  );
};

export default Listings;
