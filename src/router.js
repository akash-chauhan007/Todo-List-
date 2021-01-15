import React from 'react';
import "./style.css";
import {
    Router,
    Switch,
    
} from "react-router-dom";

import App from './App';
import App from './login';


export default function App() {
    return (
        <div className="App">
            <Router>
                <Router exact path="/" component={Home} />
                <Router exact path="/App" component={App} />

            </Router>
        </div>
    );
}
