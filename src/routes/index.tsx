import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import pages from './pages';

const Routes: React.FC = () => (
  <Switch>
    {pages.map(({ ...rest }, key) => (
      // eslint-disable-next-line react/no-array-index-key
      <Route key={key} {...rest} />
    ))}
  </Switch>
);
export default Routes;
