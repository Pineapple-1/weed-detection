import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import CssBaseline from '@mui/material/CssBaseline';
import Chart from '../chart/chart'
import {Email} from '../email/email'



export default function MediaControlCard({raw}) {


  const pie =[
    {name:"Crop", value: raw.filter(item => item.name === 'crop').length},
    {name:"Weed", value: raw.filter(item => item.name === 'weed').length}
  ]

  return (
    <React.Fragment>
    <CssBaseline />
    <Card  sx={{ borderBottom: "10px solid #1c54b2",boxShadow: 3 }}>
    <Grid          
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={1}
  
    >
   
    <Grid item xs={12} md={5} >
      
        <CardContent>
            <Typography color = 'textSecondary' gutterBottom>Statistics</Typography>
            <Typography varaint= 'body2' >Number of Crops Detected: <strong>{raw.filter(item => item.name === 'crop').length}</strong></Typography>
            <Typography varaint= 'body2'>Number of Weeds Detected: <strong>{raw.filter(item => item.name === 'weed').length}</strong></Typography>
            <Email per={raw.filter(item => item.name === 'weed').length/raw.length  }/>
        </CardContent>
        
    </Grid>
    <Grid item xs={12} md={6} >
    <Chart pie={pie}/>

    </Grid>
    </Grid>
    </Card>
    </React.Fragment>
  );
}