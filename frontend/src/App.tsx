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
import { ProjectContext, projectContextDataDefault } from './common/projectContext';

function App() {

    return (
        <>
            <Logo />
            <UserSettings />

            <ProjectContext.Provider value={projectContextDataDefault}>
                <MainMenu />
                <ProjectList />
                <EditProject />
            </ProjectContext.Provider>
            <TimeBook />
        </>
    );
}

export default App;
