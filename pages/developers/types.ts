import { CardTypes } from "src/components/card/card.types";

export interface DeveloperType {
  developers: { description: string; image: string; list: CardTypes[] };
}
