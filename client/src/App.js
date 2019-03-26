import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import NavBar from './components/NavBar';
import NestedNavbar from './components/NestedNavbar.js'
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart'
import MenHats from './components/MenHats'
import MenShirt from './components/MenShirt'
import MenPants from './components/MenPants'
import WomenHats from './components/WomenHats'
import WomenShirt from './components/WomenShirt'
import WomenPants from './components/WomenPants'
import KidHats from './components/KidHats'
import KidPants from './components/KidPants'
import KidShirt from './components/KidShirt'
import { PageFade } from './transitions/index.js'
import IndividualItem from './components/IndividualItem'
import './styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";


class App extends Component {
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
                    <Route path='/cart' component={Cart} />
                    <Route path='/menhats' component={MenHats}/>
                    <Route path='/menshirts' component={MenShirt}/>
                    <Route path='/menpants' component={MenPants} />
                    <Route path='/womenhats' component={WomenHats}/>
                    <Route path='/womenshirts' component={WomenShirt}/>
                    <Route path='/womenpants' component={WomenPants} />
                    <Route path='/kidshats' component={KidHats}/>
                    <Route path='/kidsshirts' component={KidShirt}/>
                    <Route path='/kidspants' component={KidPants} />
                    <Route path='/:_id' component={IndividualItem}/>
                </Switch>
            </PageFade>
        </div>
    )
}
}

export default withRouter(App);