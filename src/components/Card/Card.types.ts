import { IBase } from "@/types";

export interface Info {
  id: string;
  img: string;
  description: string;
  distance: number;
  price: number;
  title: string;
}

export interface CardProps extends IBase {
  info: Info;
  onClickBook: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickCard: (e: Info) => void;
}
