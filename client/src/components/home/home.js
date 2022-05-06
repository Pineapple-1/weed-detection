import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Spray from '../../assets/spray.jpg'
import Box from "@material-ui/core/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Image from "../../assets/farm.jpg";


const Home = () => {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item md={5.7}>
            <Typography variant="h5" sx={{ color: "#1c54b2", mt: 10 }}>
              Weed Detection
            </Typography>
            <p>
              Project module is for detecting weed from images that contain both crops and
              weeds, through state of the art deep learning model.
            </p>

            <Button
              color="primary" variant="contained" 
              size="small"
              sx={{ mt: 1}}
            >
              <Link sx={{ textDecoration: "none",color: '#ffffff' }} href="/Detection">
                {" "}
                Try It Out{" "}
              </Link>
            </Button>
          </Grid>

          <Grid item md={6.3}>
            <Box sx={{ mt: 3 }}>
              <img src={Image} alt="helo" style={{ maxWidth: "430px" }} />
            </Box>
          </Grid>



          <Grid item md={6.3}>
            <Box >
              <img src={Spray} alt="helo" style={{ maxWidth: "435px" }} />
            </Box>
          </Grid>

          <Grid item md={5.7}>
            <Typography variant="h5" sx={{ color: "#1c54b2", mt: 7.5 }}>
              Pest Detection
            </Typography>
            <p>
              Project module is for detecting weed from images that contain both crops and
              weeds.
            </p>

            <Button
              color="primary" variant="contained" 
              size="small"
              sx={{ mt: 1, textDecoration: "none"}}
            >
              <Link sx={{ textDecoration: "none",color: '#ffffff' }} href="/Pest">
                {" "}
                Try It Out{" "}
              </Link>
            </Button>
          </Grid>




        </Grid>

      </Container>
    </React.Fragment>
  );
};

export default Home;
