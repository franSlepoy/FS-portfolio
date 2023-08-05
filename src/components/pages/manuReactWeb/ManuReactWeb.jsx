import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { manuelSiguenzaWebData } from '../../../servidor/ManuelSiguenzaWebData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const ManuReactWeb = () => {
  return (
    <>
    <Box display={"flex"} mt={25}> 
    
     <Carousel sx={{width:"70%", height:450, margin:2}}
       
       >
         {
             manuelSiguenzaWebData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography mt={15} ml={5} variant='h4' color={"Highlight"} >Manuel Siguenza Web</Typography><br />
      <Typography ml={5} variant="subtitle1" >Web del artista visual Manuel Siguenza, realizada con React Js. y sus librerias Material IU, react router dom y Email Js. </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default ManuReactWeb
