import { useState } from "react";

export interface IPropsMainMenu {
    projectId: string
} 

interface IMyState {
    clock?: Date
    projectName?: string
    projectId?: number
}

export const MainMenu = (props: IPropsMainMenu) => {

    // Todo: do not use own local state, use prop instead
    // Hint: project id instead of name to simplify implementation
    
    const [ myState, setMyState ] = useState<IMyState>({
        clock: new Date(),
        projectName: 'TestProjekt4711'
    });

    setTimeout(() => {
        const now = new Date()
        setMyState( {...myState, clock: now} )
    }, 3000)

    return (<ul>
        <li>
            Current project: 
            {myState.projectName}
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