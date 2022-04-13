import React from "react";
import { Marker as GoogleMarker } from "@react-google-maps/api";

const Marker: React.FC = ({ position, active }: any) => {
  return (
    <>
      <GoogleMarker
        position={position as any}
        icon={{
          url: !active
            ? "src/icons/HomeIcon.svg"
            : "src/icons/HomeIconActive.svg",
        }}
      />
    </>
  );
};

export default Marker;
