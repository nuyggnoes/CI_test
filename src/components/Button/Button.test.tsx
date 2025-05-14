import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from "./Button";

describe("Button component", () => {
  it("렌더링되면 label이 보여야 한다", () => {
    render(<Button label="Button" />);
    expect(screen.getByRole("button")).toHaveTextContent("Button");
  });

  it("Primary가 true면 파란 배경 클래스가 포함되어야 한다", () => {
    render(<Button label="Primary" primary />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("bg-blue-600");
    expect(btn).toHaveClass("text-white");
  });

  it("primary가 false면 흰 배경 및 회색 테두리 클래스가 포함되어야 한다", () => {
    render(<Button label="Secondary" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("bg-white");
    expect(btn).toHaveClass("border");
  });

  it("size가 small이면 small 사이즈 클래스가 포함되어야 한다", () => {
    render(<Button label="Small" size="small" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("text-sm");
    expect(btn).toHaveClass("px-3");
    expect(btn).toHaveClass("py-1.5");
  });

  it("onClick이 정상 작동해야 한다", () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("backgroundColor 스타일이 적용되어야 한다", () => {
    render(<Button label="Colored" backgroundColor="#ff0000" />);
    expect(screen.getByRole("button")).toHaveStyle({ backgroundColor: "#ff0000" });
  });
});
