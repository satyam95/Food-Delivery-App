import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "./index";

describe("Accordion", () => {
  const testData = {
    title: "Test Title",
    description: "Test Description",
  };

  it("Accordion default/close state", () => {
    render(<Accordion title={testData.title} description={testData.description} />);
    const title = screen.getByText(testData.title);
    expect(title).toBeInTheDocument();
  });

  it("Accordion active/open state", () => {
    render(<Accordion title={testData.title} description={testData.description} />);
    const title = screen.getByText(testData.title);
    const description = screen.queryByText(testData.description);
    expect(description).not.toBeInTheDocument();

    fireEvent.click(title);

    const newDescription = screen.getByText(testData.description);
    expect(newDescription).toBeInTheDocument();
  });
});
