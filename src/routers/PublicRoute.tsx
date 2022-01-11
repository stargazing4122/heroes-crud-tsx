import { Redirect, Route } from 'react-router-dom';

interface PublicRouteProps {
  isAuthenticated: boolean;
  component: () => JSX.Element;
  exact?: boolean;
  path?: string;
}

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: PublicRouteProps) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
