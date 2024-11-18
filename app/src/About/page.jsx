import React from 'react'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';

import LayoutNavTop from '../components/LayoutNavBarTop';

function AboutPage() {


    console.log("AboutPage")

    return (
        <LayoutNavTop>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography>
                            ABOUT
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </LayoutNavTop>
    )
}

export default AboutPage