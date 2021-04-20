import logo from './logo.svg';
import './App.css';
import {UserSettings} from "./components/userSettings";
import {ProjectList} from './components/projectList';
import {MainMenu} from './components/mainMenu';
import { TimeBook } from './components/timeBook/timeBook';
import { useState } from 'react';
import { IProject } from './common/definitions';

function App() {

    const p: IProject = {
        id: 4711,
        name: "Testp4711"
    }

    const [selectedProject, setSelectedProject] = useState(p);
    
    return (
        <>
            <MainMenu project={selectedProject}/>
            <UserSettings/>
            <ProjectList selectedProjectId={selectedProject.id} onProjectSelected={setSelectedProject}/>
            <TimeBook/>
        </>
    );
}

export default App;
