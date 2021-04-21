import './App.css';
import {UserSettings} from "./components/userSettings";
import {ProjectList} from './components/projectList';
import {MainMenu} from './components/mainMenu';
import {TimeBook} from './components/timeBook/timeBook';
import {useState} from "react";
import {IProject} from "./interfaces/iProject";
import {LogoGadget} from "./components/logoGadget";

function App() {

    const project: IProject = {
        id: 0,
        name: "",
        start: new Date(),
        status: "",
    }
    const [selectedProject, setSelectedProject] = useState(project)

    return (
        <>
            <LogoGadget />
            <MainMenu currentProject={selectedProject}/>
            <UserSettings/>
            <ProjectList project={selectedProject} onProjectSelected={setSelectedProject}/>
            <TimeBook/>
        </>
    );
}

export default App;