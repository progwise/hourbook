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
import { CountryList } from './components/countryList';

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
            {/* <CountryList></CountryList> */}
            <UserSettings />
            <ProjectList selectedProjectId={selectedProject.id} onProjectSelected={setSelectedProject} />
            <hr></hr>
            <EditProject selectedProject={selectedProject}></EditProject>
            <hr></hr>
            <TimeBook />
        </>
    );
}

export default App;
