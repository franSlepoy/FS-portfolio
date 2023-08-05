import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';



export default function NavListDrawer() {
  return (
    
      <Box sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="" >
              <ListItemIcon>
              <EmailTwoToneIcon/>
              </ListItemIcon>
              <ListItemText primary="Contacto"/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" >
            <ListItemText primary="Decomiso"  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
            <ListItemText primary="Encuentro con el Mataco"  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
            <ListItemText primary="Otro proyecto"  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" >
            <ListItemText primary="Otro proyecto"  />
            </ListItemButton>
          </ListItem>
          
        </List>
      </nav>
    </Box>
    
    
  );
}