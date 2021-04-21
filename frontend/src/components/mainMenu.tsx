import { useState } from "react";
import { Link } from "react-router-dom";
import { IProject } from "../common/definitions";

export interface IPropsMainMenu {
    project: IProject
} 

interface IMyState {
    clock?: Date
}

export const MainMenu = (props: IPropsMainMenu) => {

    // Todo: do not use own local state, use prop instead
    // Hint: project id instead of name to simplify implementation
    
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
            <li><Link to='/timebook'>Time</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
            <li>Reports</li>
        </ul>
    )
}