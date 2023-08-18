import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { ArgentinaProgramaData } from '../../../servidor/ArgentinaProgramaData'
import ImagenCard from '../../common/imagenCard/Imagencard'


const ArgentinaPrograma = () => {
  const theme = useTheme(); // Obtiene el theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Verifica si es móvil
  const carouselStyle = {
    width: isMobile ? '100%' : '70%',  
    height:  isMobile ? '200' : '450', 
    margin: isMobile ? 1 : 3, 
  };
  return (
    <>
    <Box mt={28} sx={{ display: { xs: 'block', sm: 'flex' } }}> 
    
     <Carousel sx={carouselStyle}
       
       >
         {
             ArgentinaProgramaData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography mt={5}
            variant='h4'
            color={'Highlight'}  > Proyecto final de Argentina Programa 4.0</Typography><br />
      <Typography  variant="subtitle1" > Pagina realizada con Java Script, HTML y CSS </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default ArgentinaPrograma