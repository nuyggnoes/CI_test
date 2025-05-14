import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Button } from "./Button";

describe("Button component", () => {
  it("렌더링되면 label이 보여야 한다", () => {
    render(<Button label="Button" />);
    expect(screen.getByRole("button")).toHaveTextContent("Button");
  });

  it("Primary가 true면 primary 클래스가 포함되어야 한다", () => {
    const { container } = render(<Button label="Primary" primary />);
    expect(container.firstChild).toHaveClass("button--primary");
  });

  it("primary가 false면 secondary 클래스가 포함되어야 한다", () => {
    const { container } = render(<Button label="Secondary" />);
    expect(container.firstChild).toHaveClass("button--secondary");
  });

  it("size가 small이면 small 클래스가 포함되어야 한다", () => {
    const { container } = render(<Button label="Small" size="small" />);
    expect(container.firstChild).toHaveClass("button--small");
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
