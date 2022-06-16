import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Chart from "../chart/chart";
import { Email } from "../email/email";
import Link from "@mui/material/Link";

export default function MediaControlCard({ raw }) {
  const pie = [
    { name: "Crop", value: raw.filter((item) => item.name === "crop").length },
    { name: "Weed", value: raw.filter((item) => item.name === "weed").length },
  ];
  const per =  raw.filter((item) => item.name === "weed").length / raw.length
  return (
    <React.Fragment>
      <CssBaseline />
      <Card sx={{ borderBottom: "10px solid #1c54b2", boxShadow: 3 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={12} md={5}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Statistics
              </Typography>
              <Typography varaint="body2">
                Number of Crops Detected:{" "}
                <strong>
                  {raw.filter((item) => item.name === "crop").length}
                </strong>
              </Typography>
              <Typography varaint="body2">
                Number of Weeds Detected:{" "}
                <strong>
                  {raw.filter((item) => item.name === "weed").length}
                </strong>
              </Typography>
              <Email
                Subject= {"Crop Report"}
                Message={`WEED PERCENTAGE ${(per * 100).toFixed(0)}%  ${
                  (per * 100).toFixed(0) > 40
                    ? "TAKE ACTIONS TO CONTROL WEED !!!"
                    : "NO ACTIONS NEEDED."
                }`
                 
                }
              />
              <Typography
                color="textSecondary"
                gutterBottom
                sx={{mt: 2}}
              >
                <Link sx={{ mt: 2, textDecoration: "none",color:"#0288d1" }} href="/product/Herbiside">
                  {" "}
                  See Recomendations !
                </Link>
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <Chart pie={pie} />
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
}
