import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import Icon from '../../assets/icon.jpg'


const style = {
  textDecoration: "none",
  marginRight:"10px",
  color: '#ffffff',
  m:3
};

export default function NavBar() {
 
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
        <Link sx={{mt:1}}  href="/"><img src={Icon} alt="helo"  style={{ maxWidth: "50px" }} /></Link>
     
          <Typography variant="h6" sx={{flexGrow:1}}>
            <Link sx={style}  href="/">  Crop Health Monitoring System</Link>
          </Typography>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}