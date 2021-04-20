export const MainMenu = () => {

    let dayInfo = new Date();

    setTimeout(() => dayInfo = new Date())

    return (<ul>
        <li>{dayInfo.toLocaleTimeString()}</li>
        <li>Time</li>
        <li>Projects</li>
        <li>Reports</li>
    </ul>)
}