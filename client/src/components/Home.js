import React, { Component } from 'react';
import { withProduct } from '../context/ProductProvider'
import SearchForm from './SearchForm'
class Home extends Component {
    render() {
        return (
            <div>
                <h1>This is the Home Page.</h1>
                <SearchForm/>
            </div>
        );
    }
}

export default withProduct(Home);