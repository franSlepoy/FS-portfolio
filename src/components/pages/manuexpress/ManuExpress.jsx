import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { ManuExpressData } from '../../../servidor/ManuExpressData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const ManuExpress = () => {
  return (
    <>
    <Box display={"flex"} mt={25}> 
    
     <Carousel sx={{width:"70%", height:450, margin:2}}
       
       >
         {
            ManuExpressData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography mt={15} ml={5} variant='h4' color={"Highlight"} >Manuel Siguenza, e-commerce de obras de arte.</Typography><br />
      <Typography ml={5} variant="subtitle1"> Registro y login con express-validator, cokies, fetch levantando api de paises, CRUD para productos en shop, obras y textos.</Typography> 
      </Box>
      
      
    </Box>
     
    </>
  )
}

export default ManuExpress