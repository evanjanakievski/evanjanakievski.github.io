import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import Project1 from './projectFunction1.tsx';
import NavBar from '../../components/NavBar.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar/>
        <Project1/>
    </React.StrictMode>,
)