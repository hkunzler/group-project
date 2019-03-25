import React, { Component } from 'react';
import { withProduct } from '../context/ProductProvider'
import NestedNavbar from './NestedNavbar.js'
import Cards from './Card'
import ProductCarousel from './ProductCarousel'


class Home extends Component {
    componentDidMount = () => {
        this.props.getProduct()
    }
    render() {
        return (
            <div className="home-container">
                <NestedNavbar/>
                <ProductCarousel/>
                <Cards />
            </div>
        );
    }
}

export default withProduct(Home);