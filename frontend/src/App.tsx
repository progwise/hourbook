import './App.css';

import { UserSettings } from "./components/userSettings";
import { ProjectList } from './components/projectList';
import { EditProject } from './components/editProject';
import { MainMenu } from './components/mainMenu';
import { Logo } from './components/logo';
import { TimeBook } from './components/timeBook/timeBook';
import { ProjectContextProvider } from './common/projectContext';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { DarkModeSwitch } from './components/darkModeSwitch';

function App() {

    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-center w-full text-center">
                <DarkModeSwitch />
                <Router>
                    <ProjectContextProvider>
                        <Logo />
                        <MainMenu />
                        <Switch>
                            <Route path="/projects/edit">
                                <EditProject />
                            </Route>
                            <Route path="/projects">
                                <ProjectList />
                            </Route>
                            <Route path="/timebook">
                                <TimeBook />
                            </Route>
                            <Route path="/settings">
                                <UserSettings />
                            </Route>
                        </Switch>

                    </ProjectContextProvider>
                </Router>
            </div>
        </div>
    );
}

export default App;
