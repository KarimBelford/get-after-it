import React from 'react'
import { Typography, Stack,Button } from '@mui/material'

import BodyPartImg from '../assets/icons/body-part.png'
import TargetImg from '../assets/icons/target.png'
import EquipmentImg from '../assets/icons/equipment.png'  

const Detail = ({exerciseDetail}) => {
  const {bodyPart, gifUrl, name,target, equipment} = exerciseDetail
  const extraDetails = [
    {
      icon: BodyPartImg,
      name: bodyPart
    },
    {
      icon: TargetImg,
      name: target
    },
    {
      icon: EquipmentImg,
      name: equipment
    },
    
  ]
  return (
    <Stack gap='60px' sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}}>
      <img  className='detail-image' src={gifUrl} alt={name} loading='lazy' />
      <Stack sx={{gap:{lg:'35px', xs: '20px'}}}>
        <Typography variant='h3'>
          {name}
        </Typography>
        {extraDetails.map((detail) => (
          <Stack key={detail.name} gap='24px' alignItems='center' direction='row'>
            <Button sx = {{background:'#fff2db',borderRadius:'50%',width:'100px',height:'100px'}}>
              <img src={detail.icon} alt={detail.name} style={{width:'50px',height:'50px'}} />
            </Button>
            <Typography textTransform='capitalize' variant='h5'>
              {detail.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail