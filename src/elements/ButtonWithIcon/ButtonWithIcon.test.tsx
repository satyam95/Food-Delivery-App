import { render, screen } from "@testing-library/react";
import ButtonWithIcon from ".";

describe("Button with Icon", () => {
  const testData = {
    icon: "/images/filter_icon.svg",
    text: "Test",
  };
  render(<ButtonWithIcon icon={testData.icon} text={testData.text} />);

  it("should render ButtonWithIcon", () => {
    const text = screen.getByText(testData.text);
    const icon = screen.getByAltText(`${testData.text}-icon`)

    expect(text).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  })
});
