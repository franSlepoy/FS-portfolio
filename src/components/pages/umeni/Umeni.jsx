import { Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { UmeniData } from '../../../servidor/UmeniData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const Umeni = () => {
  const theme = useTheme(); // Obtiene el theme
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Verifica si es móvil
  const carouselStyle = {
    width: isMobile ? '90%' : '70%',  
    height:  isMobile ? '200' : '450', 
    margin: isMobile ? 1 : 3, 
  };
  return (
    <>
    <Box  mt={28} sx={{ display: { xs: 'block', sm: 'flex' } }}> 
    
     <Carousel sx={carouselStyle}
       
       >
         {
             UmeniData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box width={{ xs: "90%", sm:"50%"}}>
      <Typography m={1} mt={5}
            variant='h4'
            color={'Highlight'}  >e-commerce - Proyecto final - FullStack - Digital House</Typography><br />
      <Typography m={1}  width={"90%"} variant="subtitle1" > Umeni es un prototipo de e-commerce de vinos. Es un back end que levanta APIs listas para consumir sus datos y vistas. Utiliza tecnologias que permiten una página escalable y performante: javascript, node js, express, ejs, css, express validation, multer, MySql, sequelizer, api rest y react. </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default Umeni