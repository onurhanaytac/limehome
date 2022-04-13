/* eslint-disable no-undef */
import { Location } from "@/types";

export interface MapProps {
  testId?: string;
  activeMarker?: string;
  onLoad?: (map: google.maps.Map) => void;
  markerLocations?: Location[];
}
