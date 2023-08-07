import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { RickAndMortyData } from '../../../servidor/RickAndMortyDta'
import ImagenCard from '../../common/imagenCard/Imagencard'

const RickAndMorty = () => {
  const theme = useTheme(); // Obtiene el theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Verifica si es móvil
  const carouselStyle = {
    width: isMobile ? '100%' : '70%',  
    height:  isMobile ? '200' : '450', 
    margin: isMobile ? 1 : 3, 
  };
  return (
    <>
    <Box mt={28} sx={{ display: { xs: 'block', sm: 'flex' } }} > 
    
     <Carousel sx={carouselStyle}
       
       >
         {
             RickAndMortyData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography   mt={5}
            variant='h4'
            color={'Highlight'} >Rick and Morty App</Typography><br />
      <Typography  variant="subtitle1" > Web de práctica que consume datos de una API publica con datos de todos los personajes de Rick and Morty. Realizada con React Js. y sus librerias Material UI y React router dom </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default RickAndMorty