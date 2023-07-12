import '@fontsource/montserrat';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import "@fontsource/montserrat/300-italic.css";
import "@fontsource/montserrat/500-italic.css";
import "@fontsource/montserrat/700-italic.css";
// import monument from './font/monument.otf';

import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: ['montserrat', 'monument-extended', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#00A651',
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverides: `
          @font-face {
            font-family: 'montserrat'
          }
        `,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
