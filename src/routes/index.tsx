import React from 'react';
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import OtherPage from '../pages/OtherPage';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/other-page" exact component={OtherPage} />
  </Switch>
);
export default Routes;
