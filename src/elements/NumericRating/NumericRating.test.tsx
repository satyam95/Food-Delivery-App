import { render, screen } from "@testing-library/react";
import NumericRating from "./index";

describe("Numeric Rating", () => {
  it("render numeric rating small type", () => {
    render(<NumericRating rating="4" type="small" />);

    const rating = screen.getByText("4");
    expect(rating).toBeInTheDocument();
  });
  it("render numeric rating small type", () => {
    render(<NumericRating rating="-" type="large" />);

    const rating = screen.getByTestId("rating-element");
    expect(rating).toBeInTheDocument();
  });
});
