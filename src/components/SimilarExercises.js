import React from 'react'
import { Typography, Stack,Box } from '@mui/material'
import ExerciseNavbar from './ExerciseNavbar'
import Loader from './Loader'
const SimilarExercises = ({similarExercises}) => {
  return (
    <Box sx={{marginTop:{lg:'200px',xs:'0'}}} >
      <Typography variant='h4' mb='33px'>
        Similar Exercises
      </Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
       {similarExercises.length ? 
       <ExerciseNavbar data ={similarExercises}/>
       : <Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises