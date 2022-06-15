import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const HeroBanner = () => (
  <Box display="flex" sx={{ mt:'212px', ml:'50px'}} position="relative" p="20px">
    <Grid container display="flex" direction='column' justifyContent='space-between'>
    <Typography color="#FF2625" fontWeight="600" fontSize="56px" fontFamily="'Pacifico', cursive">Healthify</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px" fontFamily="'DM Sans', sans-serif">
    Join the Health Revolution. It’s Time. <br/>
    kickstart your journey towards an all new you.
    </Typography>
    <Typography fontSize="22px" fontFamily="'DM Sans', sans-serif" lineHeight="35px">
    With the right Exercises, you can reach your fitness goals faster, explore all exercises
    </Typography>
    <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '40px',fontFamily:"'DM Sans', sans-serif" }}>Explore Exercises</a>
    </Grid>
    <Grid>
    <img src="../herobanner.png" alt="hero-banner" className="hero-banner-img" height="500px"/>
    </Grid>
  </Box>
);

export default HeroBanner;
