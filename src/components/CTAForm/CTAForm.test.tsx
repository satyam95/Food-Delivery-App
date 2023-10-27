import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CTAForm from "./index";

test("CTAForm renders correctly", () => {
  render(<CTAForm />);
  
  const emailRadioButton = screen.getByLabelText("Email");
  const phoneRadioButton = screen.getByLabelText("Phone");
  const emailInput = screen.getByPlaceholderText("Email");
  const shareButton = screen.getByText("Share App Link");

  expect(emailRadioButton).toBeInTheDocument();
  expect(phoneRadioButton).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(shareButton).toBeInTheDocument();
});

test("Selecting Email shows the Email input field", () => {
  render(<CTAForm />);
  
  const emailRadioButton = screen.getByLabelText("Email");
  const emailInput = screen.getByPlaceholderText("Email");
  const phoneInput = screen.queryByPlaceholderText("Phone Number");

  fireEvent.click(emailRadioButton);

  expect(emailInput).toBeInTheDocument();
  expect(phoneInput).not.toBeInTheDocument();
});

test("Selecting Phone shows the Phone input field", () => {
  render(<CTAForm />);
  const phoneRadioButton = screen.getByLabelText("Phone");
  fireEvent.click(phoneRadioButton);
  const phoneInput = screen.getByPlaceholderText("Phone Number");
  expect(phoneInput).toBeInTheDocument();
});
