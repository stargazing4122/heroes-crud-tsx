import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface PrivateRouteProps {
  component: () => JSX.Element;
  isAuthenticated: boolean;
  path?: string;
  exact?: boolean;
}

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}: PrivateRouteProps) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
