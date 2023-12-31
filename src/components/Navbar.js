import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction='row'
      justifyContent='space-around'
      sx= {{gap:{sm:'122px', xs:'40px'}, mt: {sm:'32px', xs:'20px'},justifyContent:'none'}}
      px = '20px'
    >
      <Link to = '/home'> <img src={Logo} alt="Logo" style={{
        width: '48px',
        height: '48px',
        margin: '0 20px',
        }}/> 
      </Link>
      <Stack
        direction="row"
        spacing={2}
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to = '/home' style={{
          textDecoration: 'none',
          color: 'black',
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '0 20px',
        }}>Home</Link>
        <a href='exercise' style={{
          textDecoration: 'none',
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'black'
          }}>Exercise</a>
         <Link to='/' style={{
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'black'
            }}>Sign Out</Link>         
      </Stack>
    </Stack>
  )
}

export default Navbar