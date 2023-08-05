import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { MascotersData } from '../../../servidor/MascotersData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const Mascoters = () => {
  return (
    <>
    <Box display={"flex"} mt={25}> 
    
     <Carousel sx={{width:"70%", height:450, margin:2}}
       
       >
         {
             MascotersData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography mt={15}  ml={5}  variant='h4' color={"Highlight"} >Mascoters</Typography><br />
      <Typography ml={5} variant="subtitle1" > Programacion Front End en la aplizacion web de www.mascoters.com.ar </Typography>
      <Typography ml={5} variant="subtitle1" > La misma esta en construcción y consumirá datos de una API, además  el registro y logeo de usuarios será a travéz de Firebase y manejará geolocalización.  </Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default Mascoters