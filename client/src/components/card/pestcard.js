import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import CssBaseline from '@mui/material/CssBaseline';
import {Email} from '../email/email'
import Link from "@mui/material/Link";
import Guage from '../chart/guage'


export default function MediaControlCard({raw}) {


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
   
    <Grid item xs={12} md={5.5} >
      
        <CardContent>
            <Typography color = 'textSecondary' gutterBottom>Statistics</Typography>
            <Typography varaint= 'body2' >Name of Crop: <strong>Corn</strong></Typography>
            <Typography varaint= 'body2'>Number of Pest Detected: <strong>{raw.length}</strong></Typography>
            <Email Subject={"Crop Report"} Message={`Number of Pest found :${raw.length} take actions.`}/>
            <Typography
                color="textSecondary"
                gutterBottom
                sx={{mt: 2}}
              >
                <Link sx={{ mt: 2, textDecoration: "none",color:"#0288d1" }} href="/product/Insectiside">
                  {" "}
                  See Recomendations !!!
                </Link>
              </Typography>
        </CardContent>
        
    </Grid>
    <Grid item xs={12} md={6}>
            <Guage data={raw.length}/>
          </Grid>

    </Grid>
    </Card>
    </React.Fragment>
  );
}