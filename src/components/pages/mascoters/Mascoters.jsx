import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { MascotersData } from '../../../servidor/MascotersData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const Mascoters = () => {
  const theme = useTheme(); // Obtiene el theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Verifica si es móvil
  const carouselStyle = {
    width: isMobile ? '100%' : '70%',  
    height:  isMobile ? '200' : '450', 
    margin: isMobile ? 1 : 3, 
  };
  return (
    <>
    <Box  mt={28} sx={{ display: { xs: 'block', sm: 'flex' } }}> 
    
     <Carousel sx={carouselStyle}
       
       >
         {
             MascotersData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography  mt={5}
            variant='h4'
            color={'Highlight'} >Mascoters</Typography><br />
      <Typography  variant="subtitle1" > Programacion Front End en la aplizacion web de www.mascoters.com.ar </Typography>
      <Typography variant="subtitle1" > La misma esta en construcción y consumirá datos de una API, además  el registro y logeo de usuarios será a travéz de Firebase y manejará geolocalización.  </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default Mascoters