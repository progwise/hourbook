
export interface IPropsMainMenu {
    projectName: string
    userName?: string
} 

export const MainMenu = (props: IPropsMainMenu) => {

    let dayInfo = new Date();

    setTimeout(() => {
        const now = new Date()
        console.log(now)
        dayInfo = new Date()
    }, 1000)

    return (<ul>
        <li>
            Current project: 
            {props.projectName}
        </li>
            <li>
                {dayInfo.toLocaleTimeString()}
            </li>
            <li>Time</li>
            <li>Projects</li>
            <li>Reports</li>
        </ul>
    )
}