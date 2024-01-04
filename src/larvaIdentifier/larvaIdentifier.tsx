import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import LarvaPage from './larvaPage';
import NavBar from '../../components/NavBar';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar/>
        <LarvaPage/>
    </React.StrictMode>,
)
