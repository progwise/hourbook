import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useProjectContext } from "../common/useProjectContext";


interface IMyState {
    clock?: Date
}

export const MainMenu = () => {

    // Todo: do not use own local state, use prop instead
    // Hint: project id instead of name to simplify implementation
    
    const [ myState, setMyState ] = useState<IMyState>({
        clock: new Date()
    });

    const { selectedProject } = useProjectContext()

    console.log('MainMenu', selectedProject)

    setTimeout(() => {
        const now = new Date()
        setMyState( {...myState, clock: now} )
    }, 3000)

    return (<ul>
        <li>
            Current project: 
            {
                selectedProject
                ?<span>{selectedProject.name}</span>
                :<span>No project selected</span>
            }
        </li>
            <li>
                {myState.clock?.toLocaleTimeString()}
            </li>
            <li><Link to="/timebook">Timebook</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/settings">Settings</Link></li>
        </ul>
    )
}