import { useEffect, useState } from "react";
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

    let t = setTimeout(() => {
        const now = new Date()
        setMyState( {...myState, clock: now} )
    }, 1000)

    useEffect(() => {
        // this code is executed when component is loading

        return () => { 
            // this code is executed when component is unloading
         }
    }, [])
    
    useEffect(() => {
        // I would not recommind this
        document.title = 'hb-' + myState.clock?.toLocaleTimeString()
    }, [myState])
  

    return (<ul>
        <li>
            Current project: 
            {props.project.name}
        </li>
            <li>
                {myState.clock?.toLocaleTimeString()}
            </li>
            <li>Time</li>
            <li><a href='/projects'>Projects</a></li>
            <li>Reports</li>
        </ul>
    )
}