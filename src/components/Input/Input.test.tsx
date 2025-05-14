import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./Input";

describe("Input component", () => {
  it("renders with a label", () => {
    render(<Input id="username" label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("renders error state with error styles and helper text", () => {
    render(<Input id="password" label="Password" error helperText="Invalid password" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("border-red-500");
    expect(inputElement).toHaveClass("focus:ring-red-500");
    expect(inputElement).toHaveClass("focus:border-red-500");
    expect(screen.getByText("Invalid password")).toBeInTheDocument();
  });

  it("calls onChange handler when input value changes", () => {
    const handleChange = jest.fn();
    render(<Input id="email" label="Email" onChange={handleChange} />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders as disabled with proper styles", () => {
    render(<Input id="disabled" label="Disabled" disabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
    expect(inputElement).toHaveClass("bg-gray-100", "cursor-not-allowed");
  });
});
