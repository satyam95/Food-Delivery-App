import React from "react";
import { render, screen } from "@testing-library/react";
import CTAForMobileApp from "./index";

test("CTAForMobileApp component renders correctly", () => {
  render(<CTAForMobileApp />);

  const appImage = screen.getByAltText("mobile app screenshort");
  const getAppHeading = screen.getByText("Get the Zomato app");
  const downloadAppHeading = screen.getByText("Download app from");
  const appStoreLogo = screen.getByAltText("app store logo");
  const playStoreLogo = screen.getByAltText("play store logo");

  expect(appImage).toBeInTheDocument();
  expect(getAppHeading).toBeInTheDocument();
  expect(downloadAppHeading).toBeInTheDocument();
  expect(appStoreLogo).toBeInTheDocument();
  expect(playStoreLogo).toBeInTheDocument();
});

test("CTAForm component is rendered within CTAForMobileApp", () => {
  render(<CTAForMobileApp />);
  const emailRadioButton = screen.getByLabelText("Email");
  const phoneRadioButton = screen.getByLabelText("Phone");

  expect(emailRadioButton).toBeInTheDocument();
  expect(phoneRadioButton).toBeInTheDocument();
});
