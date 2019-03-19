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
                <h2>Search</h2>
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
                    <button>Search</button>
                </form>  
                <div>
                    {this.props.product.map(product => (
                        <div>
                            {/* Put product info here */}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default withProduct(SearchForm);