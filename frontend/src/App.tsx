import logo from './logo.svg';
import './App.css';
import { UserSettings } from "./components/userSettings";
import { ProjectList } from './components/projectList';
import { MainMenu } from './components/mainMenu';
import { Logo } from './components/logo';
import { TimeBook } from './components/timeBook/timeBook';
import { useState } from 'react';
import { IProject } from './common/definitions';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { EditProject } from './components/editProject';
import { ProjectContextProvider } from './common/projectContextProvider';

function App() {

    return (
        <>
        <ProjectContextProvider>
            <h1>
                Hourbook
            </h1>
        <Router>
            <Logo />
            <MainMenu />
            <UserSettings />
            <Route path='/editProject'>
                <EditProject />
            </Route>
            <Route path='/projects'>
            <ProjectList />
            </Route>
            <Route path='/timebook'>
            <TimeBook />
            </Route>
            </Router>
            </ProjectContextProvider>
        </>
    );
}

export default App;
