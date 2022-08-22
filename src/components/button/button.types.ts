export interface ButtonTypes {
  label: string;
  type?: "button" | "reset" | "submit";
  variant?: "primary" | "secondary";
  value?: string;
  onClick?: () => void;
  className?: any;
}
