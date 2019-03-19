import React, { Component } from 'react';
import axios from 'axios'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    constructor() {
        super()
        this.state = {
            product: []
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.getProduct()
    }
    getProduct = () => {
        axios.get("/product").then(response => {
            this.setState({
                product: response.data
            })
        })
    }

    handleDelete = (_id) => {
        axios.delete(`/product/${_id}`).then(response => {
            this.setState(prevState => ({
                product: prevState.product.filter( product => product._id !== _id)
            }))
        })
    }
    render() {
        return (
            <div>
                <ProductContext.Provider
                    value={{
                        product: this.state.product,
                        getProduct: this.getProduct,
                        handleDelete: this.handleDelete,
                        handleChange: this.handleChange,
                        handleSubmit: this.handleSubmit
                    }}
                >
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        );
    }
}

export default ProductProvider;

export const withProduct = C => props => (
    <ProductContext>
        {value => <C {...props}{...value}/>}
    </ProductContext>
)