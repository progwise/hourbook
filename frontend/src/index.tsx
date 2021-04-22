import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

ReactDOM.render(<App/>, document.getElementById('root'));

function tick() {
    const element = (
        <div>
            <h1>Hello, world abc!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('timer'));
}

setInterval(tick, 1000);
