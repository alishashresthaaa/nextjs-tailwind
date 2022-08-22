export interface ListType {
  id: string;
  icon: string;
  title: string;
  details: string;
}

export interface SubListType {
  id: string;
  title: string;
  details: string;
  icon?: string;
}

export interface ListTypeTwo {
  id: string;
  title: string;
  image: string;
  details: string;
  services?: SubListType[];
}
