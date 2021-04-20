import logo from './logo.svg';
import './App.css';
import {UserSettings} from "./components/userSettings";
import {ProjectList} from './components/projectList';
import {MainMenu} from './components/mainMenu';
import { TimeBook } from './components/timeBook/timeBook';
import { useState } from 'react';

function App() {

    const p = {
        id: 4711,
        name: "Testp4711"
    }

    const [selectedProjectId, setSelectedProjectId] = useState(p.id);
    
    return (
        <>
            <MainMenu projectId={p.name}/>
            <UserSettings/>
            <ProjectList selectedProjectId={selectedProjectId} onProjectSelected={setSelectedProjectId}/>
            <TimeBook/>
        </>
    );
}

export default App;
