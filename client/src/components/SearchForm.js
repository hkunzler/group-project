import React, { Component } from 'react';
import { withProduct } from '../context/ProductProvider'

class SearchForm extends Component {
    constructor() {
        super()
        this.state = {
            productSearch: ''
        }
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Random Shit"
                        name="productSearch"
                        value={this.props.productSearch}
                        onChange={this.props.handleChange}
                    />
                    <button className='search-button'><i className="fa fa-search"></i></button>
                </form>  
            </div>
        );
    }
}

export default withProduct(SearchForm);