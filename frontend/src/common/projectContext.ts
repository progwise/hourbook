import { createContext } from "react";
import { IProject } from "./definitions";

export interface IProjectContextData {
    projectList: IProject[]
    selectedProject: IProject | undefined
    selectProject: (project: IProject) => void
}

export const projectContextDataDefault = {
    projectList: [],
    selectedProject: undefined,
    selectProject: (project: IProject) => []
}

export const ProjectContext = createContext<IProjectContextData>(projectContextDataDefault)