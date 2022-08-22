import { ListType } from "src/types/list";

export interface ServiceTypes {
  strengths: {
    image: string;
    description: string;
    list: ListType[];
  };
}
