import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { mockedProjectList } from "../mocks/mockedProjectList";
import { IProject } from "./definitions";

export interface IProjectContextData {
    projectList: IProject[]
    selectedProject: IProject | undefined
    selectProject: (project: IProject) => void
}

export const projectContextDataDefault = {
    projectList: [],
    selectedProject: undefined,
    selectProject: (project: IProject) => {}
}

export interface IProps {
    children: ReactNode;
  }

export const projectContext = createContext<IProjectContextData>(projectContextDataDefault)

export const ProjectContextProvider = (props: IProps): JSX.Element => {

    const [ projectList, setProjectList ] = useState<IProject[]>([])
    const [ selectedProject, selectProject ] = useState<IProject | undefined>(undefined)

    useEffect(() => {
        setProjectList(mockedProjectList)
    }, [])


    return <projectContext.Provider value={{projectList, selectProject, selectedProject}}>
        {props.children}
    </projectContext.Provider>
}