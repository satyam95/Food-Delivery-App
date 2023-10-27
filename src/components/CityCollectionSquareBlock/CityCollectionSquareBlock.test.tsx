import { render, screen } from "@testing-library/react";
import CityCollectionSquareBlock from "./index";

describe("CityCollectionSquareBlock", () => {
  test("render correctly", () => {
    render(<CityCollectionSquareBlock />);
    const title = screen.getByText("Collections");
    const description = screen.getByText(
      "Explore curated lists of top restaurants, cafes, pubs, and bars in Bhopal, based on trends"
    );

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
