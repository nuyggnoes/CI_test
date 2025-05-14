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
  const baseClass = "font-semibold rounded focus:outline-none transition-colors duration-200";
  const colorClass = primary
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100";

  const sizeClass = {
    small: "text-sm px-3 py-1.5",
    medium: "text-base px-4 py-2",
    large: "text-lg px-5 py-3",
  }[size];
  return (
    <button
      type="button"
      className={`${baseClass} ${colorClass} ${sizeClass}`}
      style={backgroundColor ? { backgroundColor } : undefined}
      {...props}>
      {label}
    </button>
  );
};
