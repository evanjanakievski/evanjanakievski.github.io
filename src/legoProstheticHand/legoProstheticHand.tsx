import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Project2 from './projectFunction2';
import NavBar from '../../components/NavBar';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar/>
        <Project2/>
    </React.StrictMode>,
)
