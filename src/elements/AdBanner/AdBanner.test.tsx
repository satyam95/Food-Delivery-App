import { render, screen } from "@testing-library/react";
import AdBanner from "./index";

describe("AdBanner", () => {
  it("Render AdBanner", () => {
    render(<AdBanner />);

    const Heading = screen.getByAltText("ad banner")

    expect(Heading).toBeInTheDocument()
  });
});
