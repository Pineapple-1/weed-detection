import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import {Email} from '../email/email'

function Row({ data }) {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {data.name}
        </TableCell>
        <TableCell align="center">{data.chemical}</TableCell>
        <TableCell align="center">{data.dose}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <Typography variant="h6" gutterBottom component="div">
                    Description
                  </Typography>
                </Grid>
                <Grid item>
                  <Email Subject="Crop Recommendation" Message={`Use ${data.name} Dose:${data.dose}/acre`} sx={{mr:3}}/>

                </Grid>
              </Grid>
             
              <p style={{margin:0 , marginTop:10}}>{data.description}</p>
             
               <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  {" "}
                  <strong>Disease/Pest</strong>
                </Grid>
                {data.pest.map((tag) =>
                  tag ? (
                    <Grid item>
                      {" "}
                      <p>{tag}</p>
                    </Grid>
                  ) : null
                )}
              </Grid>
              <strong>Crops</strong>{" "}
              {data.crop.map((tag) =>
                tag ? <Chip label={tag} sx={{ ml: 1 }} /> : null
              )}
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ data,name }) {
  return (
    <TableContainer
      component={Paper}
      sx={{ borderBottom: "5px solid #1c54b2", boxShadow: 3 }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <strong>{name}</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Formula</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Dose/Acre</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(data)}
          {data.map((item) => (
            <Row data={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
