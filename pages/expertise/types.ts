import { ListType } from "src/types/list";

export interface ExpertiseType {
  expertise: {
    description: string;
    image: string;
    list: ListType[];
  };
}
