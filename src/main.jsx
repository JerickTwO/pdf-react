import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Seleccionamos el elemento con id "root"
const rootElement = document.getElementById('root');

// Creamos y renderizamos la raíz
const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
