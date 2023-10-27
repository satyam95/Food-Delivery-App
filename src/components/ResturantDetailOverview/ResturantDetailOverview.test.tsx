import React from "react";
import { render, screen } from "@testing-library/react";
import ResturantDetailOverview from "./index";

describe("ResturantDetailOverview", () => {
  it("renders the component with all elements", () => {
    const cuisine = [
      { deeplink: "link1", url: "/url1.png", name: "Cuisine 1" },
      { deeplink: "link2", url: "/url2.png", name: "Cuisine 2" },
    ];

    const safetyCheck = [
      { text: "Safety Check 1", image: { url: "/url1.png", aspect_ratio: 1.5 } },
      { text: "Safety Check 2", image: { url: "/url2.png", aspect_ratio: 1.2 } },
    ];

    const cft = "Average cost text";

    render(
      <ResturantDetailOverview cuisine={cuisine} safetyCheck={safetyCheck} cft={cft} />
    );

    expect(screen.getByText("About this place")).toBeInTheDocument();
    expect(screen.getAllByText(/Cuisine \d/)).toHaveLength(2);
    expect(screen.getByText("Average Cost")).toBeInTheDocument();
    expect(screen.getByText(cft)).toBeInTheDocument();
    expect(screen.getByText("More Info")).toBeInTheDocument();
    expect(screen.getAllByText("Home Delivery")).toHaveLength(1);
    expect(screen.getAllByText("Takeaway Available")).toHaveLength(1);
    expect(screen.getAllByText("No Seating Available")).toHaveLength(1);
    expect(screen.getByText("Call")).toBeInTheDocument();
    expect(screen.getByTestId("ditection-text")).toBeInTheDocument();
    expect(screen.getAllByTestId("button-with-icon")).toHaveLength(2);
  });

  it("handles safetyCheck length 0", () => {
    const cuisine = [
      { deeplink: "link1", url: "/url1.png", name: "Cuisine 1" },
      { deeplink: "link2", url: "/url2.png", name: "Cuisine 2" },
    ];

    const safetyCheck: { image: { url: string; aspect_ratio: number; }; text: string; }[] | undefined = [];

    const cft = "Average cost text";

    render(
      <ResturantDetailOverview cuisine={cuisine} safetyCheck={safetyCheck} cft={cft} />
    );

    expect(screen.queryByText("Safety Check 1")).toBeNull();
    expect(screen.queryByText("Safety Check 2")).toBeNull();
  });

  it("renders Call and Direction elements for md screens", () => {
    const cuisine = [
      { deeplink: "link1", url: "/url1.png", name: "Cuisine 1" },
      { deeplink: "link2", url: "/url2.png", name: "Cuisine 2" },
    ];

    const safetyCheck = [
      { text: "Safety Check 1", image: { url: "/url1.png", aspect_ratio: 1.5 } },
      { text: "Safety Check 2", image: { url: "/url2.png", aspect_ratio: 1.2 } },
    ];

    const cft = "Average cost text";

    render(
      <ResturantDetailOverview cuisine={cuisine} safetyCheck={safetyCheck} cft={cft} />
    );

    expect(screen.getByText("Call")).toBeInTheDocument();
    expect(screen.getByTestId("ditection-text")).toBeInTheDocument();
  });
});
