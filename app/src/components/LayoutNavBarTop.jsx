import React from 'react';

import Box from '@mui/material/Box';

import NavBarTop from './NavBarTop';

const LayoutNavTop = ({ children }) => {
    return (
        <Box>
            <NavBarTop />
            {children}
        </Box>
    );
}

export default LayoutNavTop;