import { createContext } from "react";
import { IProject } from "./definitions";

export interface IProjectContextData {
    projectList: IProject[]
    selectedProject: IProject | undefined
}

export const ProjectContext = createContext<IProjectContextData>({
    projectList: [],
    selectedProject: undefined
})
