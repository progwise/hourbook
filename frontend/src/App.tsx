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

    return (
        <ProjectContextProvider>
            <Logo />
            <MainMenu />
            <UserSettings />
            <ProjectList />
            <TimeBook />
        </ProjectContextProvider>
    );
}

export default App;
