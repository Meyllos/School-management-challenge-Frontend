import React from 'react';
import jwtDecode from 'jwt-decode';
import { Redirect, Route } from 'react-router-dom';

const token:any = localStorage.getItem('token');
const currentTime = new Date().getTime() / 1000;
let decodedToken: any;
if (token) {
  decodedToken = jwtDecode(token);
}
const PrivateRoute = ({ component: Component, ...rest }:any) => (
  <Route
    {...rest}
    render={props =>
      token !== null && decodedToken.exp > currentTime ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
