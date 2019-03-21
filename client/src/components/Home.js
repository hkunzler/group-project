import React, { Component } from 'react';
import { withProduct } from '../context/ProductProvider'
import SearchForm from './SearchForm'


class Home extends Component {
    componentDidMount = () => {
        this.props.getProduct()
    }
    render() {
        const mappedProduct = this.props.product.map(product => (
            <div>
                <h1>product.itemName</h1>
                <h1>product.description</h1>
            </div>
        ))
        return (
            <div className="home-container">
                <h1>This is the Home Page.</h1>
                <SearchForm />
                {mappedProduct}
            </div>
        );
    }
}

export default withProduct(Home);