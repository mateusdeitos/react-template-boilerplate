import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  if (isPrivate && !user) {
    // eslint-disable-next-line no-console
    console.log('Route is private!');
    return <Redirect to="/" />;
  }
  return <ReactDOMRoute {...rest} render={() => <Component />} />;
};

export default Route;
