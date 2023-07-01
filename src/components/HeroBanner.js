import React from 'react'
import { Box, Stack, Typography,Button} from '@mui/material'
import HeroBannerImg from '../assets/images/banner.jpg'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg: '212px', xs: '100px'},
        ml:{sm: '50px'}    
    }} position='relative' p='20px'>
        <Typography color= '#044ab3' fontWeight='600' fontSize='26px'>
            Get After It 
        </Typography>
        <Typography fontWeight='700' sx = {{fontSize:{lg:'44px', xs:'40px'}}}>
            Who's Gonna <br/> Carry The Boat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb= {3}>
            Find the best workout routine for you  
        </Typography>
        <Button variant='contained' href='#exercises' sx={{padding:'10px'}}>
            View Workouts
        </Button>
        <Typography fontWeight={600} color='#044ab3' sx={{opacity:0.1,display:{lg:'block',xs:'none'}}} fontSize='200px'>
            Stay Hard
        </Typography>
        <img src={HeroBannerImg} alt='banner' className='hero-banner-img'/> 
    </Box>
  )
}

export default HeroBanner