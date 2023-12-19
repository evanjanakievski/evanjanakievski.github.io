import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Project3 from './projectFunction3';
import NavBar from '../../components/NavBar';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar/>
        <Project3/>
    </React.StrictMode>,
)
