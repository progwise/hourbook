import { useState } from "react";

export interface IPropsMainMenu {
    projectName: string
    userName?: string
} 

export const MainMenu = (props: IPropsMainMenu) => {

    const [ t2, setT2 ] = useState(new Date());

    // let t2 = new Date();
    // const setT2 = (newDate: Date) => t2 = newDate;

    setTimeout(() => {
        const now = new Date()
        console.log(now)
        setT2(now)
    }, 1000)

    return (<ul>
        <li>
            Current project: 
            {props.projectName}
        </li>
            <li>
                {t2.toLocaleTimeString()}
            </li>
            <li>Time</li>
            <li>Projects</li>
            <li>Reports</li>
        </ul>
    )
}