"use client";

import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({ primary = false, size = "medium", backgroundColor, label, ...props }: ButtonProps) => {
  const modeClass = primary ? styles["button--primary"] : styles["button--secondary"];
  const sizeClass = styles[`button--${size}`];
  return (
    <button
      type="button"
      className={`${styles.button} ${sizeClass} ${modeClass}`}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}>
      {label}
    </button>
  );
};
