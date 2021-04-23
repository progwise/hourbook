import React, { useEffect, useState } from "react";
import { IProject } from "./definitions";

export interface IProjectContextData {
    projectList: IProject[]
    selectedProject: IProject | undefined
    selectProject: (project: IProject) => void
}

const defaultProjectContext: IProjectContextData = {
    projectList: [],
    selectedProject: undefined,
    selectProject: (project: IProject) => {}
}

export const projectContext = React.createContext<IProjectContextData>(defaultProjectContext)

export interface IProjectContextProviderProps {
    children: JSX.Element[]
}

export const ProjectContextProvider = (props: IProjectContextProviderProps) => {

    const [projectList, setProjectList] = useState<IProject[]>([])
    const [selectedProject, selectProject] = useState<IProject | undefined>(undefined)

    useEffect(() => {
        const projectData: IProject[] = [{
            id: 4711,
            name: 'TestProjekt1',
            start: new Date('1995-12-17T03:24:00'),
            end: new Date('1996-12-17T03:24:00')
        },
        {
            id: 4712,
            name: 'TestProjekt2',
            start: new Date('1995-12-17T03:24:00'),
            end: new Date('1996-12-17T03:24:00')
        },
        {
            id: 4713,
            name: 'TestProjekt3',
            start: new Date('1995-12-17T03:24:00'),
            end: new Date('1996-12-17T03:24:00')
        }];
        setProjectList(projectData)
    }, [])

    return <projectContext.Provider value={{projectList, selectedProject, selectProject}}>
        {props.children}
    </projectContext.Provider>
}