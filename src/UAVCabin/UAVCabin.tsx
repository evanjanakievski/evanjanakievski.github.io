import './index.css';
import ReactDOM from 'react-dom/client';
import React from 'react';
import NavBar from '../../components/NavBar.tsx';
import UAVCabinPage from './UAVCabinPage.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NavBar/>
        <UAVCabinPage/>
    </React.StrictMode>,
)