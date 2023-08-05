import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { UmeniData } from '../../../servidor/UmeniData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const Umeni = () => {
  return (
    <>
    <Box display={"flex"} mt={25}> 
    
     <Carousel sx={{width:"90%", height:450, margin:2}}
       
       >
         {
             UmeniData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography mt={15} ml={5} variant='h4' color={"Highlight"} >e-commerce - Proyecto final - FullStack - Digital House</Typography><br />
      <Typography ml={5} maxWidth={300} variant="subtitle1" > Umeni es un prototipo de e-commerce de vinos. Es un back end que levanta APIs listas para consumir sus datos y vistas. Utiliza tecnologias que permiten una página escalable y performante: javascript, node js, express, ejs, css, express validation, multer, MySql, sequelizer, api rest y react. </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default Umeni