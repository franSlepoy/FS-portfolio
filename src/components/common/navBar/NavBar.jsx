
import { AppBar, Box, Button, Drawer, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import { NavLink } from 'react-router-dom'
import miFoto from "/public/imagenes/miFoto.jpg"



const NavBar = () => {
    const [open, setOpen]= useState(false)
    const linkStyle = {
      textDecoration: 'none',
      
    };
    

  return (
    <>
       
      <AppBar position="fixed" color="inherit">
       
       <Toolbar>
        <Box mt={1}>
        <img width={80} src={miFoto} alt="foto de perfil" />
        </Box>
        <Box>
        <Typography ml={1} sx={{mt:2}} variant="h4" style={linkStyle}>Francisco Slepoy</Typography> <br />
        <Typography ml={1} sx={{mt:-3}} variant="subtitle1"> Programador Web (Full Stack) </Typography>
        </Box>
        <Button variant="outlined" sx={{ padding:0, mt:-10, color:"black",display: { xs: "block", sm:"none"}}} color="inherit" onClick={()=> setOpen(true)}>
          <Typography color={"Highlight"} variant="h9" >menu </Typography> 
        </Button>
       
       </Toolbar>
       
        <Toolbar sx={{justifyContent:"flex-start"}}>
           
        <Button variant="outlined" sx={{ color:"black", display: { xs: "none", sm:"block"}}} component={NavLink} to={"/FS-portfolio/"}>proyectos web</Button>
        <Button variant="outlined" sx={{ ml:1, color:"black",display: { xs: "none", sm:"block"}}} component={NavLink} to={"/FS-portfolio/sobreMi"} >sobre mi</Button>
        {/* <Button variant="outlined" sx={{ ml:1,color:"black",display: { xs: "none", sm:"block"}}} component={NavLink} to={"/musica"} >música</Button> */}
        <Button variant="outlined" sx={{ ml:1,color:"black",display: { xs: "none", sm:"block"}}} component={NavLink} to={"/FS-portfolio/contacto"} >contacto</Button>
        
        
       
        </Toolbar>
        
      </AppBar>
      
      <Drawer 
      open={open}
      anchor={'right'}
      onClose={()=> setOpen(false)}
      >
      <NavListDrawer/> 
      </Drawer>
     
    
    </>
  )
}

export default NavBar
