import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RadioField from ".";

describe("RadioField", () => {
  it("renders correctly and handles radio button change", () => {
    const id = "radio1";
    const name = "radioGroup";
    const value = "option1";
    const labelText = "Option 1";
    const checked = false;
    const mockOnChange = jest.fn();

    render(
      <RadioField
        id={id}
        name={name}
        value={value}
        labelText={labelText}
        checked={checked}
        onChange={mockOnChange}
      />
    );

    const radioInput = screen.getByLabelText(labelText);
    const label = screen.getByText(labelText);
    expect(label).toBeInTheDocument();
    expect(radioInput).not.toBeChecked();

    fireEvent.click(radioInput);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
