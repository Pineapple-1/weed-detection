import React from "react";
import  AppBar  from "./components/navbar/navbar";
import Router from "./components/router/router";
import './App.css'


import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
  palette:{
    primary:{
      main:'#357a38'
    }
}
});

function App() {
 


  return (
    <div className="App">
  <CssBaseline/>
      <ThemeProvider theme={theme}>
        <AppBar />
        <Router />
 
      </ThemeProvider>
    </div>
  );
}

export default App;
