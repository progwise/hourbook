import { useState } from "react";
import { IProject } from "../common/definitions";
import { useProjects } from "../common/useProjectContext";

interface IMyState {
    clock?: Date
}

export const MainMenu = () => {

    // Todo: do not use own local state, use prop instead
    // Hint: project id instead of name to simplify implementation
    
    const [ myState, setMyState ] = useState<IMyState>({
        clock: new Date()
    });

    const { selectedProject } = useProjects()

    setTimeout(() => {
        const now = new Date()
        setMyState( {...myState, clock: now} )
    }, 3000)

    return (<ul>
        <li>
            Current project: 
            {
                selectedProject ?
                <span>{selectedProject.name}</span>
                :<span>No project selected</span>
            }
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