import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AnimalProvider } from './Components/Providers/AnimalProvider';
import { LocationProvider } from './Components/Providers/LocationProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <LocationProvider>
        <AnimalProvider>
        <App />
        </AnimalProvider>
        </LocationProvider>
        </BrowserRouter>
    </React.StrictMode>
)
