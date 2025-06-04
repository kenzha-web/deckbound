import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import PWABadge from './PWABadge.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
        <PWABadge />
    </StrictMode>,
);
