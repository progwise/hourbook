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
import { ProjectContextProvider } from './common/projectContext';
import { useProjectContext } from './common/useProjectContext';

function App() {

    return (
        <>
            <Logo />
            <UserSettings />

            <ProjectContextProvider>
                <MainMenu />
                <ProjectList />
                <EditProject />
            </ProjectContextProvider>
            <TimeBook />
        </>
    );
}

export default App;
