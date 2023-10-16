import { Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

import ImagenCard from '../../common/imagenCard/Imagencard'
import { FGdata } from '../../../servidor/FGdata'

const FG = () => {
  const theme = useTheme(); // Obtiene el theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Verifica si es móvil
  const carouselStyle = {
    width: isMobile ? '90%' : '70%',  
    height:  isMobile ? '200' : '450', 
    margin: isMobile ? 1 : 3, 
  };
  return (
    <>
    <Box mt={28} sx={{ display: { xs: 'block', sm: 'flex' } }}> 
    
     <Carousel sx={carouselStyle}
       
       >
         {
            FGdata.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography m={1} mt={5}
            variant='h4'
            color={'Highlight'}  > Faivovich & Goldberg</Typography><br />
      <Typography m={1} width={"90%"}  variant="subtitle1" > Página pofolio de los artistas visuales e investigadores Guillermo Faivovich y Nicolás Goldberg. React Js, Material IU, i18next, React router dom.  </Typography>
      <a target="_blank" href="https://faivovich-goldberg.com/">
        <Button>Link</Button> 
         </a>
     
     </Box>
      
      
    </Box>
     
    </>
  )
}

export default FG