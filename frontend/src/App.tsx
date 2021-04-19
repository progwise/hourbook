import logo from './logo.svg';
import './App.css';
import {UserInfo} from "./components/userInfo";
import React from "react";
import { ProjectList } from './components/projectList';

function App() {
  return (
      <>
        <UserInfo/>
        <ProjectList/>
      </>
  );
}

export default App;
