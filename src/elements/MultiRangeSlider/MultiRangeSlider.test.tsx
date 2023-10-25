import React from "react";
import { render, screen } from "@testing-library/react";
import MultiRangeSlider from "./index";

const mockSetCostValue = jest.fn();

describe("MultiRangeSlider", () => {
  it("renders correctly and handles value change", () => {
    render(
      <MultiRangeSlider
        costValue={[200, 800]}
        setCostValue={mockSetCostValue}
      />
    );
    const minTooltip = screen.getByText("₹200");
    const maxTooltip = screen.getByText("₹800");
    expect(minTooltip).toBeInTheDocument();
    expect(maxTooltip).toBeInTheDocument();
  });

  it("renders with other value change", () => {
    render(
      <MultiRangeSlider
        costValue={[200, 1000]}
        setCostValue={mockSetCostValue}
      />
    );
    const minTooltip = screen.getByText("₹200");
    const maxTooltip = screen.getByText("Any");
    expect(minTooltip).toBeInTheDocument();
    expect(maxTooltip).toBeInTheDocument();
  });
});
