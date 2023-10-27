import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import ResturantDetailOrder from "./index";
import { dummyData } from "@/data/restaurant";

describe("ResturantDetailOrder", () => {
  const order = {
    menuList: {
      menus: [
        {
          menu: {
            id: "menu1",
            name: "Menu 1",
            categories: [
              {
                category: {
                  items: [
                    {
                      item: {
                        id: "item1",
                        name: "Item 1",
                        price: 10,
                        rating: {
                          value: 4.5,
                          total_rating_text: "123 ratings",
                        },
                        item_image_url: "/item1.png",
                        item_tag_image: "/tag1.png",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
      promosOnMenu: {
        promos: [
          {
            offer: { id: "promo1" },
            title1: { text: "Promo 1" },
          },
        ],
      },
    },
    deliveryTime: "30 mins",
  };

  it("renders the component with all elements", () => {
    render(<ResturantDetailOrder order={order} />);

    // Check if various elements are rendered
    expect(screen.getByText("Order Online")).toBeInTheDocument();
    expect(screen.getByAltText("location-icon")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search within menu")).toBeInTheDocument();
    expect(screen.getByText("Live track your order")).toBeInTheDocument();
    expect(screen.getByText("30 mins")).toBeInTheDocument();
    expect(screen.getAllByTestId("coupon-card")).toHaveLength(1);
    expect(screen.getAllByTestId("menu-item-card")).toHaveLength(1);
  });

  it("handles empty search results", () => {
    render(<ResturantDetailOrder order={order} />);
    
    fireEvent.change(screen.getByPlaceholderText("Search within menu"), { target: { value: "Non-existent" } });
    
    expect(screen.getByText("No items found that match your search/filter.")).toBeInTheDocument();
  });

  it("handles searching for existing items", () => {
    render(<ResturantDetailOrder order={order} />);
    
    fireEvent.change(screen.getByPlaceholderText("Search within menu"), { target: { value: "Item 1" } });
    
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("handles clicking on menu categories", () => {
    render(<ResturantDetailOrder order={order} />);
    
    fireEvent.click(screen.getByText("Menu 1 (1)"));
    
    expect(screen.getByText("Menu 1 (1)").classList).toContain("font-medium");
  });

  it("handles scrolling and updating active category", () => {
    render(<ResturantDetailOrder order={dummyData[0].order} /> );

    act(() => {
        window.scrollY = 200; 
        window.dispatchEvent(new Event('scroll'));
      });

    expect(screen.getByText("Soup (2)").classList).toContain("font-light");
  });
});
