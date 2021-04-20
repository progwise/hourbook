import logo from './logo.svg';
import './App.css';
import {UserSettings} from "./components/userSettings";
import {ProjectList} from './components/projectList';
import {MainMenu} from './components/mainMenu';
import { TimeBook } from './components/timeBook/timeBook';

function App() {

    const p = {
        id: 4711,
        name: "Testp4711"
    }

    return (
        <>
            <MainMenu projectId={p.name}/>
            <UserSettings/>
            <ProjectList/>
            <TimeBook/>
        </>
    );
}

export default App;
