import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './conponents/App';
import { ThemeProvider } from '@emotion/react';
import { theme } from './utilities/styles/theme';
import './index.css';
import { AppProvider } from './utilities/appContext/appContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
