import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const form = useRef();
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gczb5z9', 'template_bwjz5lp', form.current, 'drwJl6gRse08FJjO-')
      .then((result) => {
        console.log(result.text);
        setMensajeEnviado(true); // Cambiar el estado a true cuando se envía el mensaje
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <Typography variant="h3" sx={{ margin: 3, mt: 28 }} align="center">
        Formulario
      </Typography>
      {mensajeEnviado ? ( // Mostrar el mensaje si mensajeEnviado es true
        <Typography variant="h5" color="success" align="center">
          ¡Mensaje enviado!
        </Typography>
      ) : (
        <Box component="form" ref={form} onSubmit={sendEmail} sx={{ textAlign: 'center' }}>
         <TextField
        id='nombre' name="user_name" label="Nombre completo" type="text" variant='outlined' helperText="Nombre completo" error={false}
        sx={{ width: 333, mb:3}}
        /> <br />    
    <TextField
        id='email' name="user_email" label="Email" type="email" variant='outlined' helperText="Escriba un correo valido" error={false}
        sx={{ width: 333, mb:3}}
        /> <br />
        <TextField
        id='mensaje' name="message" label="Mensaje" type="text" variant='outlined' helperText="Escriba un mensaje" error={false}
        sx={{ width: 333, mb:3}}
        /> <br />
        <Button type="submit" value="Send" variant="contained" > Enviar </Button>
        <Typography mt={1}>slepoyfrancisco@gmail.com</Typography>

        </Box>
      )}
    </>
  );
};

export default Contacto;