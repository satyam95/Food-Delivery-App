import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "../src/app/layout";

describe("RootLayout", () => {
  it("renders children", () => {
    render(
      <RootLayout>
        <div>Test Child Element</div>
      </RootLayout>
    );

    const childElement = screen.getByText("Test Child Element");
    expect(childElement).toBeInTheDocument();
  });
  
  test('Has the expected metadata for the document', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child Component</div>
      </RootLayout>
    );

    const htmlElement = container.querySelector('html');
    const bodyElement = container.querySelector('body');

    expect(htmlElement).toHaveAttribute('lang', 'en');
    expect(bodyElement).toHaveClass('relative');
  });
});
