import React from "react";
import { render, screen } from "@testing-library/react";
import SafetyCheckCard from ".";

describe("SafetyCheckCard", () => {
  it("renders correctly with image and text", () => {
    const image =
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png";
    const text = "Safety Check Text";

    render(<SafetyCheckCard image={image} text={text} />);

    const imageElement = screen.getByAltText("safety check");
    expect(imageElement).toBeInTheDocument();

    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });
});
