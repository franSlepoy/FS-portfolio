import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { DrayTekData } from '../../../servidor/DraytekData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const DrayTek = () => {
  return (
    <>
    <Box display={"flex"} mt={25}> 
    
     <Carousel sx={{width:"70%", height:450, margin:2}}
       
       >
         {
             DrayTekData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography mt={15}    variant='h4' color={"Highlight"} >Dray Tek Argentina</Typography><br />
      <Typography  variant="subtitle1" > Web de empresa imporadora de routers y servicios de soporte, realizada con React Js. y sus librerias Material IU, react router dom y Email Js. </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default DrayTek