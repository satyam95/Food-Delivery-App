import { render, screen } from "@testing-library/react";
import MaxSafetyCard from "./index";

describe("Max Safety Card", () => {
  render(<MaxSafetyCard />);

  it("renders correctly", () => {
    const icon = screen.getByAltText("max-safety");
    const text = screen.getByText(
      "Follows all Max Safety measures to ensure your food is safe"
    );
    expect(icon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
