import { IBase } from "@/types";

export interface HomeMarkerProps extends IBase {
  active?: boolean;
  position?: google.maps.LatLngLiteral;
  onClick?: (e: google.maps.MapMouseEvent) => void;
}
