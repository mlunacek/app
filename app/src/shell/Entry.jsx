import React from 'react';
import { Box } from '@mui/material';

import ShellRoutes from './Routes';

function ShellContent({ routePrefix }) {

    return (
        <Box>
            <Box >
                <ShellRoutes routePrefix={routePrefix} />
            </Box>
        </Box>
    );
}

function ShellEntry({ routePrefix = 'app' }) {

    return (
        <ShellContent routePrefix={routePrefix} />
    )
}


export default ShellEntry;