import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantDetailMenu from "./index";

jest.mock("yet-another-react-lightbox", () => {
  return {
    __esModule: true,
    default: function MockLightbox({
      open,
      close,
    }: {
      open: boolean;
      close: () => void;
    }) {
      return (
        <div data-testid="mock-lightbox">
          Lightbox is {open ? "open" : "closed"}
          <button onClick={close}>Close Lightbox</button>
        </div>
      );
    },
  };
});

const mockMenu = {
  restaurantName: "Test Restaurant",
  menu: {
    pages: [
      { url: "/image1.jpg" },
      { url: "/image2.jpg" },
      { url: "/image3.jpg" },
    ],
    subtitle: "Test Menu Subtitle",
  },
};

test("RestaurantDetailMenu component renders correctly", () => {
  render(
    <RestaurantDetailMenu
      restaurantName={mockMenu.restaurantName}
      menu={mockMenu.menu}
    />
  );

  const restaurantNameElement = screen.getByText("Test Restaurant Menu");
  const menuImage = screen.getByAltText("menu");
  const menuSubtitle = screen.getByText("Test Menu Subtitle");

  expect(restaurantNameElement).toBeInTheDocument();
  expect(menuImage).toBeInTheDocument();
  expect(menuSubtitle).toBeInTheDocument();
});

test("Lightbox opens and closes correctly", () => {
  render(
    <RestaurantDetailMenu
      restaurantName={mockMenu.restaurantName}
      menu={mockMenu.menu}
    />
  );

  const openLightboxButton = screen.getByTestId("open-lightbox");
  fireEvent.click(openLightboxButton);

  const mockLightbox = screen.getByTestId("mock-lightbox");
  const closeLightboxButton = screen.getByText("Close Lightbox");

  expect(mockLightbox).toHaveTextContent("Lightbox is open");

  fireEvent.click(closeLightboxButton);

  expect(mockLightbox).toHaveTextContent("Lightbox is closed");
});
