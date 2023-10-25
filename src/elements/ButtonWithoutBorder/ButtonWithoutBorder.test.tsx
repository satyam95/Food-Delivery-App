import { render, screen } from "@testing-library/react";
import ButtonWithoutBorder from "./index";

describe("Button with Icon", () => {
  const testData = {
    icon: "/images/filter_icon.svg",
    text: "Test",
  };
  render(<ButtonWithoutBorder icon={testData.icon} text={testData.text} />);

  it("should render ButtonWithIcon", () => {
    const text = screen.getByText(testData.text);
    const icon = screen.getByAltText(`${testData.text}-icon`)

    expect(text).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  })
});
