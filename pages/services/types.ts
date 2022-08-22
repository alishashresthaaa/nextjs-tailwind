import { CardTypes } from "src/components/card/card.types";
import { ListTypeTwo } from "src/types/list";

export interface ServiceType {
  services: { description: string; image: string; list: CardTypes[] };
}

export interface SingleServiceType {
  service: ListTypeTwo;
}
