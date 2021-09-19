/* eslint-disable no-trailing-spaces */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = () => (
  <Switch>
    <Route path="/about">
      <NavBar />
      <About />
    </Route>

    <Route path="/register">
      <NavBar />
      <Register />
    </Route>

    <Route path="/login">
      <NavBar />
      <Login />
    </Route>

    <Route path="/">
      <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
