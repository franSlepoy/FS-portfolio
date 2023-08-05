import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { WebsData } from '../../../servidor/Webs';
import { NavLink } from 'react-router-dom'
import { Typography } from '@mui/material';
import mg from "/public/imagenes/manuelSiguenzaWeb/mg.png"


export default function Home() {
    const linkStyle = {
        textDecoration: 'none',
        
      };
      const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };
  return (
       
        <Box sx={{ width: "100%"}} >
      <ImageList sx={{ margin:3, mt:22,  overflow: 'hidden'}}  variant="standard"  cols={2} gap={23} >
        {WebsData.map((seccion) => (
          <ImageListItem key={seccion.id} component={NavLink} to={seccion.link} style={linkStyle} sx={{color:"black", width:"100%", margin:0}}>
            <Typography mb={2} mt={2} variant="h5" color={"Highlight"}   ml={2}>{seccion.titulo}</Typography>
            <img
              style={imageStyle} 
        
              src={`${seccion.imagen}?w=248&fit=crop&auto=format`}
              srcSet={`${seccion.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={seccion.titulo}
              
            />
            
            
          <ImageListItemBar  sx={{ backgroundColor:"transparent", textTransform:"uppercase"}}  /> 
          </ImageListItem>
        ))}
      </ImageList>
      
    </Box>
 );
}
