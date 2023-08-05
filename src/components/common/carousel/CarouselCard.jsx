import { Box } from "@mui/material";
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { WebsData } from '../../../servidor/Webs.jsx';
import ImagenCard from '../imagenCard/Imagencard.jsx';



 function Carouselcard()
    
{
    return (
       
          <Carousel sx={{width:1200, height:1000}}
       
       >
         {
             WebsData.map( imagen => <ImagenCard key={imagen.id}  imagen={imagen.imagen} /> )
         }
      </Carousel>
       
          
        
        
    )
}
export default Carouselcard