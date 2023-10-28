import * as React from "react";
import { render, screen } from "@testing-library/react";
import ResturantPage from "@/app/(listing)/resturant/[resturantId]/page";

describe("ResturantPage Component", () => {
  test("renders component with mocked restaurant ID", () => {
    render(
      <ResturantPage
        params={{
          resturantId: "sharma-and-vishnu-fast-food--hamidia-road",
        }}
      />
    );
    expect(screen.getByTestId("rest-name-text")).toBeInTheDocument();
    expect(screen.getAllByTestId("photo-gallery-image").length).toEqual(4);
  });
  test("renders component with mocked restaurant ID", () => {
    render(
      <ResturantPage
        params={{
          resturantId: "bapu-ki-kutia",
        }}
      />
    );
    expect(screen.getAllByTestId("photo-gallery-image").length).toEqual(4);
  });
});
