import { fireEvent, render, screen } from "@testing-library/react";
import ResturantDetailTabs from "./index";
import { dummyData } from "@/data/restaurant";

jest.mock("../ResturantDetailOverview", () => () => (
  <div>Overview Component</div>
));
jest.mock("../ResturantDetailOrder", () => () => <div>Order Component</div>);
jest.mock("../ResturantDetailReview", () => () => <div>Review Component</div>);
jest.mock("../ResturantDetailMenu", () => () => <div>Menu Component</div>);

describe("ResturantDetailTabs", () => {
  const renderComponent = () => {
    render(
      <ResturantDetailTabs
        cuisine={dummyData[0]?.info.cuisine}
        safetyCheck={dummyData[0]?.bottomContainers}
        cft={dummyData[0]?.info.cft.text}
        order={dummyData[0]?.order}
        reviews={dummyData[0]?.REVIEWS}
        restaurantName={dummyData[0]?.info?.name}
        menu={dummyData[0]?.menuItems}
      />
    );
  };
  it("should render the default active tab", () => {
    renderComponent();
    const overviewTab = screen.getByText("Overview");
    const orderTab = screen.getByText("Order Online");
    const reviewsTab = screen.getByText("Reviews");
    const menuTab = screen.getByText("Menu");

    expect(overviewTab).toBeInTheDocument();
    expect(orderTab).toBeInTheDocument();
    expect(reviewsTab).toBeInTheDocument();
    expect(menuTab).toBeInTheDocument();

    expect(overviewTab).toHaveClass("text-[rgb(239,79,95)]");
    expect(orderTab).not.toHaveClass("text-[rgb(239,79,95)]");
    expect(reviewsTab).not.toHaveClass("text-[rgb(239,79,95)]");
    expect(menuTab).not.toHaveClass("text-[rgb(239,79,95)]");
  });
  it("should switch tabs when clicked", () => {
    renderComponent();
    const orderTab = screen.getByText("Order Online");
    const reviewsTab = screen.getByText("Reviews");
    const menuTab = screen.getByText("Menu");

    fireEvent.click(orderTab);
    expect(orderTab).toHaveClass("text-[rgb(239,79,95)]");
    expect(reviewsTab).not.toHaveClass("text-[rgb(239,79,95)]");
    expect(menuTab).not.toHaveClass("text-[rgb(239,79,95)]");

    fireEvent.click(reviewsTab);
    expect(orderTab).not.toHaveClass("text-[rgb(239,79,95)]");
    expect(reviewsTab).toHaveClass("text-[rgb(239,79,95)]");
    expect(menuTab).not.toHaveClass("text-[rgb(239,79,95)]");

    fireEvent.click(menuTab);
    expect(orderTab).not.toHaveClass("text-[rgb(239,79,95)]");
    expect(reviewsTab).not.toHaveClass("text-[rgb(239,79,95)]");
    expect(menuTab).toHaveClass("text-[rgb(239,79,95)]");
  });

  it("should render the correct content based on the active tab", () => {
    renderComponent();
    const overviewTab = screen.getByText("Overview");
    const orderTab = screen.getByText("Order Online");
    const reviewsTab = screen.getByText("Reviews");
    const menuTab = screen.getByText("Menu");

    fireEvent.click(orderTab);
    expect(screen.getByText("Order Component")).toBeInTheDocument();

    fireEvent.click(reviewsTab);
    expect(screen.getByText("Review Component")).toBeInTheDocument();

    fireEvent.click(menuTab);
    expect(screen.getByText("Menu Component")).toBeInTheDocument();

    fireEvent.click(overviewTab);
    expect(screen.getByText("Overview Component")).toBeInTheDocument();
  });
});
