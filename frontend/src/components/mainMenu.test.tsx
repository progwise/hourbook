import { render, screen } from "@testing-library/react"
import { MainMenu } from "./mainMenu"

import { BrowserRouter } from "react-router-dom"

describe('The main menu...', () => {
    it('... should render if no project is selected', () => {
        const { container } = renderWithRouter(<BrowserRouter><MainMenu></MainMenu></BrowserRouter>)
        screen.debug()
    })
})

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)
  
    return render(ui, { wrapper: BrowserRouter })
  }