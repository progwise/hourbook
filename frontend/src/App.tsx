import './App.css';
import { UserSettings } from "./components/userSettings";
import { ProjectList } from './components/projectList';
import { MainMenu } from './components/mainMenu';
import { Logo } from './components/logo';
import { TimeBook } from './components/timeBook/timeBook';
import React, { useState } from 'react';
import { IProject } from './common/definitions';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

    const p: IProject = {
        id: 4711,
        name: "Testp4711"
    }

    const [selectedProject, setSelectedProject] = useState(p);

    return (
        <BrowserRouter>
            <Logo />
            <MainMenu project={selectedProject} />
            <Switch>
                <Route path="/about">
                    <h2>about</h2>
                </Route>
                <Route path="/usersettings">
                    <h2>User Settings</h2>
                    <UserSettings />
                </Route>
                <Route path="/projects">
                    <div>Projects</div>
                    <ProjectList selectedProjectId={selectedProject.id} onProjectSelected={setSelectedProject} />
                </Route>
                <Route path='/timebook'>
                    <h2>Timebook</h2>
                    <TimeBook />
                </Route>
                <Route path='*'>
                    <h2>Homepage</h2>
                    <p>Welcome to hourlist</p>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
