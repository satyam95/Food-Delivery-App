import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckBoxField from "./index";

const mockOnChange = jest.fn();

describe("CheckBoxField", () => {
  const labelText = "Example Label";
  const checked = false;

  render(
    <CheckBoxField
      labelText={labelText}
      checked={checked}
      onChange={mockOnChange}
    />
  );

  it("renders correctly", () => {
    const checkbox = screen.getByRole("checkbox", { name: labelText });
    const label = screen.getByLabelText(labelText);
    expect(label).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
