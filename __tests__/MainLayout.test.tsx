import React from "react";
import { render, screen } from "@testing-library/react";
import MainLayout from "@/app/(main)/layout";

describe("MainLayout", () => {
  it("renders children", () => {
    render(
      <MainLayout>
        <div>Test Child Element</div>
      </MainLayout>
    );

    const childElement = screen.getByText("Test Child Element");
    expect(childElement).toBeInTheDocument();
  });

  it("renders Header and Footer components", () => {
    render(
        <MainLayout>
          <div>Test Child Element</div>
        </MainLayout>
      );

    const header = screen.getByTestId("main-header");
    const footer = screen.getByTestId("main-footer");
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
