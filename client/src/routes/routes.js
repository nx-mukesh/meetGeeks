import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ProductData from './ProductData';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/product-data" component={ProductData} />
      </Switch>
    </Router>
  );
};

export default Routes;
