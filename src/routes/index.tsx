import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import RegisterProduct from '../Pages/registerProduct';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/product" component={RegisterProduct} />
  </Switch>
);
export default Routes;
