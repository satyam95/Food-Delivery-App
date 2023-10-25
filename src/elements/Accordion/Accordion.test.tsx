import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from ".";

describe("Accordion", () => {
  const testData = {
    title: "Test Title",
    description: "Test Description",
  };

  beforeEach(() => {
    render(<Accordion title={testData.title} description={testData.description} />);
  });

  it("Accordion default/close state", () => {
    const title = screen.getByText(testData.title);
    expect(title).toBeInTheDocument();
  });

  it("Accordion active/open state", () => {
    const title = screen.getByText(testData.title);
    const description = screen.queryByText(testData.description);
    expect(description).not.toBeInTheDocument();

    fireEvent.click(title);

    const newDescription = screen.getByText(testData.description);
    expect(newDescription).toBeInTheDocument();
  });
});
