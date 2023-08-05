import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { ArgentinaProgramaData } from '../../../servidor/ArgentinaProgramaData'
import ImagenCard from '../../common/imagenCard/Imagencard'


const ArgentinaPrograma = () => {
  return (
    <>
    <Box display={"flex"} mt={25}> 
    
     <Carousel sx={{width:"70%", height:480, margin:2}}
       
       >
         {
             ArgentinaProgramaData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography mt={15}    variant='h4' color={"Highlight"} >Mi CV. Proyecto final de Argentina Programa 4.0</Typography><br />
      <Typography  variant="subtitle1" > Pagina realizada con Java Script, HTML y CSS </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default ArgentinaPrograma