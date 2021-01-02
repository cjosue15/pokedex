import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';

const PokedexRouter = () => {
    return (
        <Router>
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav> */}

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route exact path='/detail/:id' component={DetailScreen} />
                <Route exact path='/' component={HomeScreen} />
                <Redirect exact to='/' />
            </Switch>
        </Router>
    );
};

export default PokedexRouter;
