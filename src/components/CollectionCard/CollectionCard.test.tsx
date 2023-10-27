import { render, screen } from "@testing-library/react";
import CollectionCard from "./index";

describe("CollectionCard", () => {
  const collectionData = {
    title: "Test Collection",
    subtitle: "Test Collection Subtitle",
    img: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1686730150.jpg",
  };
  test("render correctly", () => {
    render(
      <CollectionCard
        title={collectionData.title}
        subtitle={collectionData.subtitle}
        img={collectionData.img}
      />
    );

    const title = screen.getByText(collectionData.title);
    const subtitle = screen.getByText(collectionData.subtitle);
    const img = screen.getByAltText(collectionData.title);
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
