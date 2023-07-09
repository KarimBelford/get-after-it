import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'

import {exerciseOptions,youtubeOptions,fetchData} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetails = () => {

  const [exerciseDetail, setExerciseDetail] = useState({}) 
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [similarExercises, setSimilarExercises] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const similarExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setSimilarExercises(similarExercisesData)
    } 
    fetchExerciseDetail()
  }, [id])

  return (
   <Box>
      <Detail exerciseDetail = {exerciseDetail} />
      <ExerciseVideos exerciseVideos = {exerciseVideos} name = {exerciseDetail.name} />
      <SimilarExercises similarExercises = {similarExercises}/>
   </Box>
  )
}

export default ExerciseDetails