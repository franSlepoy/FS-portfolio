import { Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { TymeData } from '../../../servidor/TymeData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const Tyme = () => {
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
            TymeData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography m={1} mt={5}
            variant='h4'
            color={'Highlight'}  >Tyme</Typography><br />
      <Typography m={1} width={"90%"}  variant="subtitle1" > Pagina de la empresa consultora de recursos humanos Tyme, con base en Madrid, España. React Js, Material IU, Eamil js, React router dom, Google Analytics.  </Typography>
      <a target="_blank" href="https://tyme-consulting.com/">
        <Button>Link</Button> 
         </a>
     
     </Box>
      
      
    </Box>
     
    </>
  )
}

export default Tyme