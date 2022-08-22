import { ListTypeTwo } from "src/types/list";

export interface CardListTypes {
  heading: string;
  description: string;
  image: string;
  list: CardTypes[];
}

export interface CardTypes extends ListTypeTwo {
  link?: string;
}
