import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import NestedNavbar from './components/NestedNavbar.js'
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart'
import { PageFade } from './transitions/index.js'
import './styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render () {
        const { location } = this.props

    return (
        <div className='app'>
            <NavBar />
            <NestedNavbar/>
            
            <PageFade location={location}>
                <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About}/>
                    <Route path='/cart' component={Cart}/>
                </Switch>
            </PageFade>
        </div>
    )
}
}

export default withRouter(App);