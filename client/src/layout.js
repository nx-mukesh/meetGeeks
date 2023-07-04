import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Login from './component/login';
import Register from './component/register';
import ProductData from './component/productData';

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/product-data">Product Data</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/product-data" component={ProductData} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Layout;
