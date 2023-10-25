import { render, screen } from "@testing-library/react";
import CouponCard from "./index";

describe("Coupon Card", () => {
  const title = "Example title";
  const description = "Coupon Card description";

  render(<CouponCard title={title} desc={description} />);

  it("renders correctly", () => {
    const couponTitle = screen.getByText(title);
    const couponDescription = screen.getByText(description);

    expect(couponTitle).toBeInTheDocument();
    expect(couponDescription).toBeInTheDocument();
  });
});
