import { render, screen } from "@testing-library/react"
import App from "./App"

jest.mock('./components/MainMenu', () => ({
    MainMenu: () => (<div>MockedMainMenu</div>)
}))

describe('The App component...', () => {
    it('...does render', () => {
        render(<App/>)

        //expect(screen.getByText("Current project:")).toBeInTheDocument()
        
    })
})