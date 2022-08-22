import React from "react";
import { ButtonTypes } from "./button.types";
import styles from "./button.module.css";

const ButtonComponent = (props: ButtonTypes) => {
  const {
    label,
    type = "submit",
    variant = "primary",
    value,
    onClick,
    className,
  } = props;
  const variantStyle =
    variant === "primary"
      ? `${styles["btn-primary"]}`
      : `${styles["btn-secondary"]}`;
  return (
    <button
      type={type}
      value={value}
      onClick={onClick}
      className={`${variantStyle} + ${className}`}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
