import React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';

import LayoutNavTop from '../components/LayoutNavBarTop';

function AboutPage() {

    return (
        <LayoutNavTop>
            <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
                <Typography variant="h3" component="h1" paddingBottom={2} >
                    About
                </Typography>

                <Typography variant="subtitle1" component="h3" paddingBottom={2} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>

            </Container>
        </LayoutNavTop>
    )
}

export default AboutPage