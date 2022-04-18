import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "../../assets/8400.jpg";
import Box from "@material-ui/core/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const Home = () => {
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
          <Grid item md={6}>
            <Typography variant="h4" sx={{ color: "#1c54b2", mt: 10 }}>
              Weed Detection For Crop Health Monitoring System
            </Typography>
            <p>
              Project module is for detecting weed from images that contain both crops and
              weeds, through state of the art deep learning model.
            </p>

            <Button
              variant="outlined"
              size="medium"
              sx={{ mt: 1, textDecoration: "none" }}
            >
              <Link sx={{ textDecoration: "none" }} href="/Detection">
                {" "}
                Try It Out{" "}
              </Link>
            </Button>
          </Grid>

          <Grid item md={6}>
            <Box sx={{ mt: 6 }}>
              <img src={Image} alt="helo" style={{ maxWidth: "550px" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
