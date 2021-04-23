import { render, screen } from "@testing-library/react"
import { MainMenu } from "./mainMenu"

import { BrowserRouter } from "react-router-dom"
import { IProject } from "../common/definitions"
import { useProjectContext } from "../common/useProjectContext"

const mockedTestProject: IProject = {
    id: 123,
    name: 'TestProjekt',
}

jest.mock('../common/useProjectContext', () => {
    const useProjectContext = () => ({
        projectList: [mockedTestProject],
        selectedProject: mockedTestProject,
        selectProject: (project: IProject) => {}
    })
    return { useProjectContext }
})

describe('The main menu...', () => {
    describe('...if no project was selected', () => {
        it('... should render', () => {
            const { container } = renderWithRouter(<MainMenu></MainMenu>)
            // todo: expect Current project: No project selected
    
            // screen or container? screen is better because simpler
        })
    })
    describe('...if project was selected', () => {

       

        beforeEach(() => {
            
        })

        it('mock works', () => {
            const x = useProjectContext()
            console.log(x.selectedProject)
        })


        it('... should render the selected project name', () => {
            const { container } = renderWithRouter(<MainMenu></MainMenu>)
    
    
            screen.debug()
        })
    })

})

const renderWithRouter = (ui: any, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)
  
    return render(ui, { wrapper: BrowserRouter })
  }