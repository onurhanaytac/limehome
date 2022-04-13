import React from "react";
import { Marker } from "@react-google-maps/api";

import { HomeMarkerProps } from "./HomeMarker.types";

const HomeMarker: React.FC<HomeMarkerProps> = ({
  position,
  active,
}: HomeMarkerProps) => (
  <>
    <Marker
      position={position as any}
      icon={{
        url: !active
          ? "src/icons/HomeIcon.svg"
          : "src/icons/HomeIconActive.svg",
      }}
    />
  </>
);

export default React.memo(HomeMarker);
