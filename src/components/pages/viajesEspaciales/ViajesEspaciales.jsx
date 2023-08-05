import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { ViajesEspacialesData } from '../../../servidor/ViajesEspacialesData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const ViajesEspaciales = () => {
  return (
    <>
    <Box display={"flex"} mt={25}> 
    
     <Carousel sx={{width:"70%", height:450, margin:2}}
       
       >
         {
             ViajesEspacialesData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography mt={15} ml={5} variant='h4' color={"Highlight"} >Space App</Typography><br />
      <Typography ml={5} variant="subtitle1" > Web de práctica que consume datos de una API publica con datos de todos los viajes espaciales de la historia. Realizada con React Js. y sus librerias Chakra y React router dom </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default ViajesEspaciales