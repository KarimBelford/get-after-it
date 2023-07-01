import React, {useEffect,useState} from 'react'
import { Box,Button,Stack,TextField,Typography } from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData'
import ExerciseNavbar from './ExerciseNavbar'
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

  const [search, setSearch] = useState('')

  const [bodyParts, setBodyParts] = useState([])

  useEffect(() =>{
    const fetchExercisesData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      
      setBodyParts(['all',...bodyPartsData])
    }
    fetchExercisesData()
  },[])

  const handleSearch = async() => {
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      
      const filteredExercises = exercisesData.filter(
        (exercise) => 
        exercise.name.toLowerCase().includes(search)
        ||exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('')
      setExercises(filteredExercises)
    }
  }
  return (
    <Stack mt= '37px' justifyContent='center' p='20px' alignItems='center'>
      <Typography fontWeight={700} sx = {{fontSize:{lg:'44px',xs: '30px'}}} mb='50px' textAlign='center'> 
        Find The Right <br/> Exercise For You
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
          sx = {{input:{fontWeight:'700', border:'none',borderRadius:'4px'}, width: {lg:'800px',xs:'350px'},backgroundColor:'#fff',borderRadius:'40px'}} 
          height='76px' 
          value={search} 
          onChange={(e) => {setSearch(e.target.value.toLowerCase())}} 
          placeholder='Search Exercises' 
          type='text'
        />
        <Button 
          className='search-btn' 
          variant='contained' 
          sx={{position:'absolute',height:'56px',width:{lg:'175px', xs:'80px'},fontSize:{lg:'20px',xs:'14px'},right:'0'}}
          onClick = {handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
        <ExerciseNavbar data ={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>

      </Box>
    </Stack>
  )
}

export default SearchExercises