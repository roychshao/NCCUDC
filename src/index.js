import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Activity from './pages/Activity';
import DanceStyle from './pages/DanceStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Router部份
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="Activity" element={<Activity/>}/>
                <Route path="DanceStyle" element={<DanceStyle/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);

