import React, { useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function NavBarTop({ routePrefix = "app" }) {

    const location = useLocation();
    console.log("routePrefix", routePrefix)
    console.log(location.pathname)

    return (
        <AppBar position="sticky" elevation={0} space={0} style={{ background: '#f2f2f2', color: "black" }}>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Container>

                        <Toolbar variant="dense">
                            <Tabs value={location.pathname} aria-label="tabs nav">

                                <Tab color="inherit" value={`/${routePrefix}/`} variant="text" component={Link} to={`/${routePrefix}/`} label="Home" />
                                <Tab color="inherit" value={`/${routePrefix}/about`} variant="text" component={Link} to={`/${routePrefix}/about`} label="About" />

                            </Tabs>
                        </Toolbar>

                    </Container>
                </Box>
            </Box>
        </AppBar >
    )
}

export default NavBarTop;