import React, { Component } from 'react';
import { withProduct } from '../context/ProductProvider'
import Cards from './Card'
import ProductCarousel from './ProductCarousel'


class Home extends Component {
    componentDidMount = () => {
        // this.props.getProduct()
        this.props.getAdultMale()
    }
    render() {
        return (
            <div className="home-container">
                <ProductCarousel/>
                <Cards />
            </div>
        );
    }
}

export default withProduct(Home);