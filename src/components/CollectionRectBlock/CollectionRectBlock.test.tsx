import { render, screen } from "@testing-library/react";
import CollectionRectBlock from "./index";

describe("CollectionRectBlock", () => {
  test("render correctly", () => {
    render(<CollectionRectBlock />);
    const title = screen.getByText("Collections");
    const description = screen.getByText(
      "Explore curated lists of top restaurants, cafes, pubs, and bars in Bhopal, based on trends"
    );
    const cards = screen.getAllByTestId("collection-data-card");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(cards.length).toEqual(4);
  });
});
