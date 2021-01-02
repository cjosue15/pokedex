import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from '../pages/HomeScreen';
import DetailScreen from '../pages/DetailScreen';
import Navbar from '../components/Navbar';
import ContainerStyled from '../components/ContainerStyled';

const PokedexRouter = () => {
    return (
        <Router>
            <Navbar />

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <ContainerStyled>
                    <Route exact path='/detail/:id' component={DetailScreen} />
                    <Route exact path='/' component={HomeScreen} />
                    <Redirect exact to='/' />
                </ContainerStyled>
            </Switch>
        </Router>
    );
};

export default PokedexRouter;
