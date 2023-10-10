import { Button, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import miFoto from "/public/imagenes/miFoto.jpg"
import CV2023 from "/public/CV2023.pdf"
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from 'react-router-dom'

const SobreMi = () => {
  const handleDownloadCV = () => {
    // Crea un elemento 'a' invisible para descargar el archivo
    const link = document.createElement('a');
    link.href = CV2023;
    link.download = 'CV2023.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
  <Box sx={{marginTop:28}}>
     <Box margin={"auto"}  width={"60%"} sx={{ display: { xs: 'block', sm: 'flex' } }}>
        <Box sx={{mt:2}}>
        <img width={200} height={200} src={miFoto} alt="mi foto" />
        </Box>
        
        <CardContent>
       
        <Typography mt={-1} variant="h6">Programador full stack ( React JS. - Node JS.) </Typography>
        <Typography mt={1}  color= "" variant="body2">•Estoy trabajando de manera freelance para distintos proyectos como desarrollador front end: Dray Tek Argentina (empresa de importación de ruters), Manuel Siguenza (artista visual),  Faibovich & Goldberg (artistas visuales e investigadores), Tyme (empresa española de recursos humanos) y haciendo el front de la versión web de www.mascoters.com.ar.</Typography>
        <Typography mt={1} variant="body2">•Me recibí del curso de FullStack ( Java Script - Node JS. - React) de Digital House y del curso de Programación front-end de Argentina Programa 4.0.   </Typography>
        <Typography mt={1} variant="body2"> •Experiencia en las siguientes tecnologías: React JS, Java Script, HTML, CSS, Material UI, Chakra,  Node JS, Express, SQL,  Sequelize, MVC, EJS.  </Typography>
        <Typography mt={3} variant="body2">• Como músico compositor e interprete (de 2004 a la  2022) he liderado mis proyectos de música original grabando 7 discos solistas, integrado grupos de jazz y orquestas sinfónicas de música académica contemporánea y clásica, presentándome en algunos de los más importantes escenarios de Buenos Aires:
Teatro Colón, Usina del Arte, Museo de Arte Decorativo y Museo de Arte Moderno. Realicé 2 giras por Europa.</Typography>
        <Typography mt={1} variant="body2">• Como productor, lideré y gestioné un ciclo de música de autor en templos de distintas religiones y contenido audiovisual durante pandemia.</Typography>
        <Typography mt={1} variant="body2">• Como docente de música dí clases grupales e individuales de guitarra/jazz, armonía, improvisación, composición y audio perceptiva. Desde 2020 a 2021, dí un taller de arte terapia para adultos mayores en Residencia Ugarteche (instituto geriátrico).  </Typography>
        <Typography mt={1} variant="body2">• Mi experiencia laboral de 14 años dentro de la música me ha enseñado mucho. He liderado, gestionado e integrado grupos de 3 hasta 150 personas y mi desempeño como compositor y arreglador me ha acortado camino en cuanto a la capacidad de abstracción para lenguajes de lecto-escritura  y la comunicación de los mismos. </Typography>
        </CardContent>
    </Box >
    
    <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
    <Button component={NavLink} to={"https://github.com/franSlepoy"} target={"_blank"} startIcon={<GitHubIcon/>} variant="outlined" sx={{mb: 5,  position: "relative", left:680, top:-5, fontSize:18}}>Github</Button>
    <Button variant="outlined" sx={{mb: 5,  position: "relative", left:700, top:-5, fontSize:18}}
    onClick={handleDownloadCV}>
      CV
      </Button>
    </Box>

    <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent:"space-evenly" }}>
    <Button component={NavLink} to={"https://github.com/franSlepoy"} target={"_blank"} startIcon={<GitHubIcon/>} variant="outlined" sx={{mb: 5,  position: "relative",  top:3, fontSize:14}}>Github</Button>
    <Button variant="outlined" sx={{mb: 5,  position: "relative", ml:-6, top:3, fontSize:14}}
    onClick={handleDownloadCV}>
      CV
      </Button>
    </Box>
    
  </Box>  
   
  )
}

export default SobreMi