
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import ShellEntry from './shell/Entry.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CssBaseline />
    <ShellEntry />
  </BrowserRouter>
)
