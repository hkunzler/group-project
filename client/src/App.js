import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart'
import './styles.css'

const App = () => {
    return (
        <div>
            <NavBar />
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