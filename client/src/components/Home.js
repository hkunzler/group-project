import React, { Component } from 'react';
import { withProduct } from '../context/ProductProvider'
import SearchForm from './SearchForm'
import Cards from './Card'


class Home extends Component {
    componentDidMount = () => {
        this.props.getProduct()
    }
    render() {
        return (
            <div className="home-container">
                <h1>This is the Home Page.</h1>
                <SearchForm />
                <Cards/>
            </div>
        );
    }
}

export default withProduct(Home);