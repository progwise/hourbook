import { useState } from "react";

export interface IPropsMainMenu {
    projectId: string
} 

interface IMyState {
    clock?: Date
    projectName?: string
}

export const MainMenu = (props: IPropsMainMenu) => {

    let [ myState, setMyState ] = useState<IMyState>({
        clock: new Date(),
        projectName: 'TestProjekt4711'
    });

    setTimeout(() => {
        const now = new Date()
        console.log(now)
        setMyState({clock: now})
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