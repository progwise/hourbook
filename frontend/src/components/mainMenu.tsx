import { Link } from "react-router-dom";
import { useProjectContext } from "../common/useProjectContext";
import * as React from 'react'
import { IProps } from "../common/projectContext";


interface IMyState {
    clock?: Date
}

export const MainMenu = () => {

    // Todo: do not use own local state, use prop instead
    // Hint: project id instead of name to simplify implementation

    const [myState, setMyState] = React.useState<IMyState>({
        clock: new Date()
    });

    const { selectedProject } = useProjectContext()

    //console.log('MainMenu', selectedProject)

    setTimeout(() => {
        const now = new Date()
        setMyState({ ...myState, clock: now })
    }, 3000)

    const MyNavItem = (props: IProps) => (<li className="mr-6 hover:text-blue-800">{props.children}</li>)
    const MyNav = (props: IProps) => (<ul className="flex">{props.children}</ul>)


    return (<MyNav>
            <MyNavItem>
                Current project:
            {
                    selectedProject
                        ? <span>{selectedProject.name}</span>
                        : <span>No project selected</span>
                }
            </MyNavItem>
            <MyNavItem>
                {myState.clock?.toLocaleTimeString()}
            </MyNavItem>
            <MyNavItem><Link to="/timebook">Timebook</Link></MyNavItem>
            <MyNavItem><Link to="/projects">Projects</Link></MyNavItem>
            <MyNavItem><Link to="/settings">Settings</Link></MyNavItem>
        </MyNav>)
    
}
