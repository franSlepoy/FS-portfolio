import { Button, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import miFoto from "/public/imagenes/miFoto.jpg"

const SobreMi = () => {
  return (
  <Box sx={{marginTop:28}}>
     <Box margin={"auto"}  width={"60%"} display="flex">
        <img width={200} height={200} src={miFoto} alt="mi foto" />
        <CardContent>
       
        <Typography mt={-5} variant="h6">Programador full stack ( React JS. - Node JS.) </Typography>
        <Typography mt={1} variant="body2">•Estoy trabajando de manera freelance para distintos proyectos como desarrollador front end: Dray Tek Argentina (empresa de importación de ruters), Manuel Siguenza (artista visual),  Faibovich & Goldberg (artistas visuales e investigadores), Tyme (empresa española de recursos humanos) y haciendo el front de la versión web de www.mascoters.com.ar.</Typography>
        <Typography mt={1} variant="body2">•Me recibí del curso de FullStack ( Java Script - Node JS. - React) de Digital House y del curso de Programación front-end de Argentina Programa 4.0.   </Typography>
        <Typography mt={1} variant="body2"> •Experiencia en las siguientes tecnologías: React JS, Java Script, HTML, CSS, Material UI, Chakra,  Node JS, Express, SQL,  Sequelize, EJS.  </Typography>
        <Typography mt={1} variant="body2">• Como músico compositor e interprete (de 2004 a la  2022) he liderado mis proyectos de música original grabando 7 discos solistas, integrado grupos de jazz y orquestas sinfónicas de música académica contemporánea y clásica, presentándome en algunos de los mas importantes escenarios de Buenos Aires:
Teatro Colón, Usina del Arte, Museo de Arte Decorativo y Museo de Arte Moderno. Realice 2 giras por Europa.</Typography>
        <Typography mt={1} variant="body2">• Como docente de música dí clases grupales e individuales de guitarra/jazz, armonía, improvisación, composición y audio perceptiva. Desde 2020 a 2021, dí un taller de arte terapia para adultos mayores en Residencia Ugarteche (instituto geriátrico). En mis inicios dí talleres para grupos de niños y adolescentes.</Typography>
        </CardContent>
       
        
    </Box>
    <Button variant="text" sx={{position: "relative", left:760, top:-5, fontSize:20}}>CV</Button>
  </Box>  
   
  )
}

export default SobreMi