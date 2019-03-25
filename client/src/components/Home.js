import React, { Component } from 'react';
import { withProduct } from '../context/ProductProvider'
import SearchForm from './SearchForm'
import NestedNavbar from './NestedNavbar.js'
import Cards from './Card'


class Home extends Component {
    componentDidMount = () => {
        this.props.getProduct()
    }
    render() {
        return (
            <div className="home-container">
                <NestedNavbar/>
                <Cards/>
            </div>
        );
    }
}

export default withProduct(Home);