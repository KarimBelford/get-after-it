import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' width='100%'>
        <InfinitySpin color='#ff2625' height={100} width={100} />

    </Stack>
  )
}

export default Loader