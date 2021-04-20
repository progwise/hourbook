import logo from './logo.svg';
import './App.css';
import {UserSettings} from "./components/userSettings";
import {ProjectList} from './components/projectList';
import {MainMenu} from './components/mainMenu';
import { TimeBook } from './components/timeBook';

function App() {
    return (
        <>
            <MainMenu/>
            <UserSettings/>
            <ProjectList/>
            <TimeBook/>
        </>
    );
}

export default App;
