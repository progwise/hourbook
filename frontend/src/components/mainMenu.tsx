import {IProject} from "../interfaces/iProject";

export interface IMainMenuProps {
    currentProject: IProject
}

export const MainMenu = (props: IMainMenuProps) => {

    return <ul>
        <li>
            Current project: {props.currentProject.name}
        </li>
        <li>Time</li>
        <li>Projects</li>
        <li>Reports</li>
    </ul>
}