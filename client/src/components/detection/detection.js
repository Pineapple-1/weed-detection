import React, { useEffect, useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Post from "../post/post";
import api from "../../api/index";
import Card from '../card/card'
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Fork from '../../assets/loading.PNG'
import Model from '../card/selectmodelcard'
export default function Detection() {
  const [File, setFile] = useState("");
  const [Data, setData] = useState("");
  const [raw, setRaw] = useState('');


  useEffect(() => {
    async function fetchData() {
      let formData = new FormData();
      formData.append("file", File);


      const res = await api
        .post("object-to-img/", formData, {
          headers: { "content-type": "multipart/form-data" },
        })
        const response = await api
        .post("/object-to-json", formData, {
          headers: { "content-type": "multipart/form-data" },
        })

       
      console.log(res);
      console.log(response)

      setData(res.data);
      setRaw(response.data.result)
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
          spacing={1}
          sx={{mt:1}}
        >
          <Grid item md={9.6}>
            
          <h2>Weed Detection</h2>
          
          </Grid>
          <Grid item md={2.4} >
          <Post setFile={setFile} setData={setData} />

          </Grid>


          <Model/>

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

          <img  alt="helo" src={ URL.createObjectURL(File)}/>
            
          </Grid>
          <Grid item md={6}>
          <Typography variant="h6" sx={{mt:1}}>
            Output
          </Typography>
          <img  alt="helo"  src={url+Data?.path}/>

          </Grid>



        </Grid>):null}
        <center>
          
        {/*File?null:<img  alt="fork"  src={Fork} style={{maxWidth:"500px",objectFit: "contain" }}/>*/}


        </center>
        


        </Container>
      </main>
    </React.Fragment>
  );
}
