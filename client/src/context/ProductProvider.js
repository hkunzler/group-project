import React, { Component } from 'react';
import axios from 'axios'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    constructor() {
        super()
        this.state = {
            product: [],
            cart: []
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
        axios.get("/products").then(response => {
            console.log(response.data)
            this.setState({
                product: response.data
            })
        }).catch(error => console.log(error))
    }
    addToCart = (_id) => {
        console.log(_id)
        axios.get(`/products/${_id}`).then(response => {
            console.log(response.data)
            this.setState(prevState => ({
                cart: [...prevState.cart, response.data]
            }))
        }).catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <ProductContext.Provider
                    value={{
                        product: this.state.product,
                        cart: this.state.cart,
                        addToCart: this.addToCart,
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
    <ProductContext.Consumer>
        {value => <C {...props}{...value}/>}
    </ProductContext.Consumer>
)