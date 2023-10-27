import { render, screen } from "@testing-library/react";
import MenuItemCard from "./index";

describe("MenuItemCard", () => {
  const testData = {
    name: "Test name",
    rating: 4.3,
    voting: "10 votes",
    price: 58,
    image:
      "https://b.zmtcdn.com/data/dish_photos/6a5/c5ef7ecdef14a8453f21efef208386a5.jpg",
    tag_image:
      "https://b.zmtcdn.com/data/o2_assets/958e4cb4a8b255659daae2c430f976ea1608028693.png",
  };
  test("render correctly", () => {
    render(
      <MenuItemCard
        name={testData.name}
        rating={testData.rating}
        voting={testData.voting}
        price={testData.price}
        image={testData.image}
        tag_image={testData.tag_image}
      />
    );

    const name = screen.getByText(testData.name);
    const rating = screen.getByTestId("star-rating")
    const voting = screen.getByText(testData.voting)
    const price = screen.getByText(`₹${testData.price}`)
    const image = screen.getByAltText(testData.name)
    const tag_image = screen.getByAltText("veg_non-veg_icon")

    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(tag_image).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
    expect(voting).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
