import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { ManuExpressData } from '../../../servidor/ManuExpressData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const ManuExpress = () => {
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
            ManuExpressData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography mt={5}
            variant='h4'
            color={'Highlight'}   >Manuel Siguenza, e-commerce de obras de arte.</Typography><br />
      <Typography  variant="subtitle1"> Registro y login con express-validator, cokies, fetch levantando api de paises, CRUD para productos en shop, obras y textos.</Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default ManuExpress