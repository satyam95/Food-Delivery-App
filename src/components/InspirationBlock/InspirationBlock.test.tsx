import { render, screen } from "@testing-library/react"
import InspirationBlock from "./index"

describe("InspirationBlock", () => {
    test("render correctly", () => {
        render(<InspirationBlock />)

        const title = screen.getByText("Inspiration for your first order")
        const cards = screen.getAllByTestId("inspiration-food-card")

        expect(title).toBeInTheDocument()
        expect(cards.length).toEqual(6)
    })
})