import React, { Component } from 'react';
import { withProduct } from '../context/ProductProvider'
import Cards from './Card'
import ProductCarousel from './ProductCarousel'
import ItemCarousel from './ItemCarousel'


class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <ProductCarousel />
                <ItemCarousel/>
                {/* <Cards /> */}
            </div>
        );
    }
}

export default withProduct(Home);