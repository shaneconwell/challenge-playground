import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe'




export default function App() {

  return (
    <HashRouter basename='/'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tic-tac-toe" component={TicTacToe} />
        </Switch>
      </ThemeProvider>
    </HashRouter>
  );
}
