import { useState } from "react";
import { IProject } from "../common/definitions";

export interface IPropsMainMenu {
    project: IProject
} 

interface IMyState {
    clock?: Date
}

export const MainMenu = (props: IPropsMainMenu) => {

    const [ myState, setMyState ] = useState<IMyState>({
        clock: new Date()
    });

    setTimeout(() => {
        const now = new Date()
        setMyState( {...myState, clock: now} )
    }, 3000)

    return (<ul>
        <li>
            Current project: 
            {props.project.name}
        </li>
            <li>
                {myState.clock?.toLocaleTimeString()}
            </li>
            <li>Time</li>
            <li>Projects</li>
            <li>Reports</li>
        </ul>
    )
}