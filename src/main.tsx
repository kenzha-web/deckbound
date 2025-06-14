import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from '@/pages/home/Home.tsx';
import PWABadge from '@/components/pwa-badge/PWABadge.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Home />
        <PWABadge />
    </StrictMode>,
);
