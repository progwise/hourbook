import logo from './logo.svg';
import './App.css';
import { UserSettings } from "./components/userSettings";
import { ProjectList } from './components/projectList';
import { EditProject } from './components/editProject';
import { MainMenu } from './components/mainMenu';
import { Logo } from './components/logo';
import { TimeBook } from './components/timeBook/timeBook';
import React, { useState } from 'react';
import { IProject } from './common/definitions';

function App() {

    const p: IProject = {
        id: 4711,
        name: "Testp4711"
    }

    const [selectedProject, setSelectedProject] = useState(p);

    return (
        <>
            <Logo />
            <MainMenu project={selectedProject} />
            <UserSettings />
            <ProjectList selectedProjectId={selectedProject.id} onProjectSelected={setSelectedProject} />
            <hr></hr>
            <EditProject></EditProject>
            <hr></hr>
            <TimeBook />
        </>
    );
}

export default App;
