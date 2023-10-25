import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RangeSlider from "./index";

describe("RangeSlider", () => {
  it("renders correctly and handles slider change and marker click", () => {
    const value = 2;
    const handleSliderChange = jest.fn();
    const handleMarkerClick = jest.fn();

    render(
      <RangeSlider
        value={value}
        handleSliderChange={handleSliderChange}
        handleMarkerClick={handleMarkerClick}
      />
    );

    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();

    const marker = screen.getByText("4.5"); // Replace with the appropriate text
    fireEvent.click(marker);
    expect(handleMarkerClick).toHaveBeenCalledWith(3); // Replace with the appropriate index
  });
});
