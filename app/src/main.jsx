import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

// import SellEntry from './shell/shellEntry'

const projectTheme = createTheme({
  status: {
    danger: "#f57c00",
  },
});

root.render(
  <BrowserRouter>
    <ThemeProvider theme={projectTheme}>
      <CssBaseline />
      {/* <SellEntry /> */}
    </ThemeProvider>
  </BrowserRouter >
)