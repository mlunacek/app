import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';

import ShellRoutes from './Routes';

import './page.css';

function ShellContent({ routePrefix }) {
    const location = useLocation();

    console.log(location)

    return (
        <Box>
            <Box >
                <ShellRoutes routePrefix={routePrefix} />
            </Box>
        </Box>
    );
}

function ShellEntry({ routePrefix = '' }) {

    return (
        <ShellContent routePrefix={routePrefix} />
    )
}


export default ShellEntry;