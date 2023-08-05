import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ImagenCard(props) {
    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          sx={{margin:0}}
          style={imageStyle}
          component="img"
          height={600}
          image={props.imagen}
          
        />
        
      </CardActionArea>
    </Card>
  );
}