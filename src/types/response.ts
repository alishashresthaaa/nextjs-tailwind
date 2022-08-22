export interface ResponseType {
  type: "success" | "error";
  message: string;
  length?: number;
  data: {};
}
