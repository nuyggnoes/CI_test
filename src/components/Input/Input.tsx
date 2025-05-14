import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
}

export const Input = ({ label, error = false, helperText, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        className={clsx(
          "border rounded-md px-3 py-2 text-sm outline-none transition-all",
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500",
          props.disabled && "bg-gray-100 cursor-not-allowed",
          className
        )}
        {...props}
      />
      {helperText && <p className={clsx("text-xs", error ? "text-red-500" : "text-gray-500")}>{helperText}</p>}
    </div>
  );
};
