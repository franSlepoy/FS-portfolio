import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { TymeData } from '../../../servidor/TymeData'
import ImagenCard from '../../common/imagenCard/Imagencard'

const Tyme = () => {
  return (
    <>
    <Box display={"flex"} mt={25}> 
    
     <Carousel sx={{width:"70%", height:450, margin:2}}
       
       >
         {
            TymeData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel> 
      <Box>
      <Typography mt={15} ml={5}   variant='h4' color={"Highlight"} >Tyme</Typography><br />
      <Typography ml={5} variant="subtitle1" > Pagina en construcción de la empresa consultora de recursos humanos con base en Madrid, España. </Typography>
     </Box>
      
      
    </Box>
     
    </>
  )
}

export default Tyme