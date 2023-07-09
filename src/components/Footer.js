import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor="fff3f4">
      <Stack gap='40px' alignItems='center' px='40px' pt='24px' >
        <img src={Logo} alt='logo' width='48px' height='48px'/>
        <Typography variant='h6' pb='40px' mt = '20px'>
          Built by Karim Belford 
        </Typography>
      </Stack>
    </Box>   
  )
}

export default Footer