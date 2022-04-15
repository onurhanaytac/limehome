/* eslint-disable no-undef */
import { Location } from "@/types";

export interface MapProps {
  testId?: string;
  activeMarker?: string;
  markerLocations?: Location[];
  onLoad?: (map: google.maps.Map) => void;
  onClickMarker?: (id: string | undefined) => void;
}
