import { IBase } from "@/types";

export interface Info {
  id: string;
  img: string;
  description: string;
  distance: number;
  price: number;
  title: string;
}

export interface SliderListProps extends IBase {
  data: Info[];
  activeMarker?: string;
  onChangeFocus?: (e: number) => void;
  onClickBook: (e: Info) => void;
  onClickCard: (e: Info) => void;
}
