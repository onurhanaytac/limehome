import { v4 as uuidv4 } from "uuid";

import { Hotels } from "@/types";

export const getHotels = (): Promise<Hotels> => {
  return fetch("api/hotels")
    .then((res) => res.json())
    .then((res) => {
      const hotels: any = {
        locations: [],
        infos: [],
      };

      res.items.forEach((item: any) => {
        const id = uuidv4();
        hotels.locations.push({ id, ...item.position });
        hotels.infos.push({
          id,
          img: "img",
          title: item.title,
          distance: `${item.distance} KM FROM THE CITY CENTER`,
          price: Math.floor(Math.random() * 100),
          description: "Designs may vary",
        });
      });

      return hotels;
    });
};
