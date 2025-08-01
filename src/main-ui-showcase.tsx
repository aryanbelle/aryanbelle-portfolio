import React from 'react';
import { createRoot } from 'react-dom/client';
import { UIShowcase } from './components/ui-showcase';
import './index.css';
import { ThemeProvider } from './components/theme-provider';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <UIShowcase />
    </ThemeProvider>
  </React.StrictMode>
);