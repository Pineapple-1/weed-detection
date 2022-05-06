import React, { useEffect, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Post from "../post/post";
import api from "../../api/index";
import Card from '../card/pestcard'
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Box from "@material-ui/core/Box";
import Fork from '../../assets/loading.PNG'



export default function Pest() {
  const [File, setFile] = useState("");
  const [Data, setData] = useState("");
  const [raw, setRaw] = useState('');

  useEffect(() => {
    async function fetchData() {
      let formData = new FormData();
      formData.append("file", File);
      const res = await api
        .post("object-to-img-pest/", formData, {
          headers: { "content-type": "multipart/form-data" },
        })
        const response = await api
        .post("object-to-json-pest/", formData, {
          headers: { "content-type": "multipart/form-data" },
        })
        
      console.log(res);
      console.log(response)
      setRaw(response.data.result)
      setData(res.data);
     }
    fetchData();


  }, [File]);

  const url = 'http://localhost:8000/img/'
  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <Container  maxWidth="md">
          {/* End hero unit */}
          <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Grid item md={9.6}>
          <h2>Pest Detection</h2>
          
          </Grid>
          <Grid item md={2.4} >
          <Post setFile={setFile} setData={setData} />
          </Grid>

          </Grid>
          {raw?<Card raw={raw}/>:null}

          {Data?
          (<Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Grid item md={6}>
          <Typography variant="h6" sx={{mt:1}}>
            Input
          </Typography>
            <Box>
          <img  alt="helo" src={ URL.createObjectURL(File)} style={{ maxWidth: "416px",maxHeight: "416px" }}/>
          </Box>
          </Grid>
          <Grid item md={6}>
          <Typography variant="h6" sx={{mt:1}}>
            Output
          </Typography>
          <Box>
          <img  alt="helo"  src={url+Data?.path} style={{ maxWidth: "416px",maxHeight: "416px" }}/>
          </Box>
          </Grid>
        </Grid>):null}
        <center>
        {File?null:<img  alt="fork"  src={Fork} style={{maxWidth:"500px",objectFit: "contain" }}/>}


        </center>
          
        </Container>
      </main>
    </React.Fragment>
  );
}
