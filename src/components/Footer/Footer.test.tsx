import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./index";

test("Footer component renders correctly", () => {
  render(<Footer />);

  const footerLogoImage = screen.getByAltText("footer-logo");
  const appStoreLogoImage = screen.getByAltText("app store logo");
  const playStoreLogoImage = screen.getByAltText("play store logo");
  const educationalMessage = screen.getByText(
    "This clone is for educational purpose only."
  );

  expect(footerLogoImage).toBeInTheDocument();
  expect(appStoreLogoImage).toBeInTheDocument();
  expect(playStoreLogoImage).toBeInTheDocument();
  expect(educationalMessage).toBeInTheDocument();
});

test("Footer component links have correct href attributes", () => {
  render(<Footer />);

  const whoWeAreLink = screen.getByText("Who We Are");
  const privacyLink = screen.getByText("Privacy");
  const sitemapLink = screen.getByText("Sitemap");

  expect(whoWeAreLink).toHaveAttribute("href", "#");
  expect(privacyLink).toHaveAttribute("href", "#");
  expect(sitemapLink).toHaveAttribute("href", "#");
});
