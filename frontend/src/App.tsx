import logo from './logo.svg';
import './App.css';
import { UserSettings } from "./components/userSettings";
import { ProjectList } from './components/projectList';
import { MainMenu } from './components/mainMenu';
import { Logo } from './components/logo';
import { TimeBook } from './components/timeBook/timeBook';
import React, { useEffect, useState } from 'react';
import { IProject } from './common/definitions';
import { ProjectContextProvider } from './common/projectContextProvider';

function App() {

    const p: IProject = {
        id: 4711,
        name: "Testp4711"
    }

    const [selectedProject, setSelectedProject] = useState(p);

    return (
        <ProjectContextProvider>
            <Logo />
            <MainMenu project={selectedProject} />
            <UserSettings />
            <ProjectList selectedProjectId={selectedProject.id} onProjectSelected={setSelectedProject} />
            <TimeBook />
        </ProjectContextProvider>
    );
}

export default App;
