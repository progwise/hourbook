import { useCallback, useState } from "react"
import { mockedProjectList } from "../mocks/mockedProjectList"
import { IProject } from "./definitions"

export const useProjectContext = () => {

    const [ projectList, setProjectList ] = useState<IProject[]>([])
    const [ selectedProject, selectProject ] = useState<IProject | undefined>(undefined)

    const loadProjects = useCallback(() => {
        setProjectList(mockedProjectList)
    }, [])

    return {
        loadProjects,
        selectProject,
        projectList,
        selectedProject
    }
}