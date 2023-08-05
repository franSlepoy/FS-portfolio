import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { RickAndMortyData } from '../../../servidor/RickAndMortyDta'
import ImagenCard from '../../common/imagenCard/Imagencard'

const RickAndMorty = () => {
  return (
    <>
    <Box display={"flex"} mt={25}> 
    
     <Carousel sx={{width:"100%", height:450, margin:2}}
       
       >
         {
             RickAndMortyData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography mt={15} ml={5} variant='h4' color={"Highlight"} >Rick and Morty App</Typography><br />
      <Typography ml={5} variant="subtitle1" > Web de práctica que consume datos de una API publica con datos de todos los personajes de Rick and Morty. Realizada con React Js. y sus librerias Material UI y React router dom </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default RickAndMorty