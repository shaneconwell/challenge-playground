import React from 'react';
import Navbar from './Navbar';
import { HashRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Home from './Home';




export default function App() {

  return (
    <HashRouter basename='/'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

        </Switch>
      </ThemeProvider>
    </HashRouter>
  );
}
