import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { DrayTekData } from '../../../servidor/DraytekData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const DrayTek = () => {
  const theme = useTheme(); // Obtiene el theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Verifica si es móvil

  const carouselStyle = {
    width: isMobile ? '90%' : '70%',  
    height:  isMobile ? '200' : '450', 
    margin: isMobile ? 1 : 3, 
  };

 
  return (
    <>
    <Box sx={{ display: { xs: 'block', sm: 'flex' } }} mt={30}> 
    
     <Carousel sx={carouselStyle}
       
       >
         {
             DrayTekData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography m={1} mt={5}
            variant='h4'
            color={'Highlight'} >Dray Tek Argentina</Typography><br />
      <Typography m={1} width={"90%"}  variant="subtitle1" > Web de empresa imporadora de routers y servicios de soporte, realizada con React Js. y sus librerias Material IU, react router dom y Email Js. </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default DrayTek