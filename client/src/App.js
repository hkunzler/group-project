import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart'

const App = () => {
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About}/>
                <Route path='/cart' component={Cart}/>
            </Switch>
        </div>
    );
};

export default withRouter(App);