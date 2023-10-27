import { render, screen } from "@testing-library/react";
import InspirationFoodCard from "./index";

describe("InspirationFoodCard", () => {
  const testData = {
    name: "Test Name",
    image:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
  };
  test("render correctly", () => {
    render(<InspirationFoodCard name={testData.name} image={testData.image} />);

    const name = screen.getByText(testData.name);
    const image = screen.getByAltText(`${testData.name} image`);
    expect(name).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
