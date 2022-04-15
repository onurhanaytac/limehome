import { Marker } from "@react-google-maps/api";
import React from "react";

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
          ? "src/assets/icons/HomeIcon.svg"
          : "src/assets/icons/HomeIconActive.svg",
      }}
    />
  </>
);

export default React.memo(HomeMarker);
