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
    getAdultMale = () => {
        axios.get("/products?gender=Male&age=adult").then(response => {
            console.log(response.data)
            this.setState({
                product: response.data
            })
        }).catch(error => console.log(error))
    }
    getAdultMaleHats = () => {
        axios.get("/products?gender=Male&age=adult&type=hat").then(response => {
            console.log(response.data)
            this.setState({
                product: response.data
            })
        }).catch(error => console.log(error))
    }
    getAdultMaleShirt = () => {
        axios.get("/products?gender=Male&age=adult&type=shirt").then(response => {
            console.log(response.data)
            this.setState({
                product: response.data
            })
        }).catch(error => console.log(error))
    }
    getAdultMalePants = () => {
        axios.get("/products?gender=male&age=adult&type=pants").then(response => {
            console.log(response.data)
            this.setState({
                product: response.data
            })
        }).catch(error => console.log(error))
    }
    getAdultFemaleHats = () => {
        axios.get("/products?gender=female&age=adult&type=hat").then(response => {
            console.log(response.data)
            this.setState({
                product: response.data
            })
        }).catch(error => console.log(error))
    }
    getAdultFemaleShirt = () => {
        axios.get("/products?gender=female&age=adult&type=shirt").then(response => {
            console.log(response.data)
            this.setState({
                product: response.data
            })
        }).catch(error => console.log(error))
    }
    getAdultFemalePants = () => {
        axios.get("/products?gender=female&age=adult&type=pants").then(response => {
            console.log(response.data)
            this.setState({
                product: response.data
            })
        }).catch(error => console.log(error))
    }
    getKidHats = () => {
        axios.get("/products?age=kid&type=hat").then(response => {
            console.log(response.data)
            this.setState({
                product: response.data
            })
        }).catch(error => console.log(error))
    }
    getKidShirt = () => {
        axios.get("/products?age=kid&type=shirt").then(response => {
            console.log(response.data)
            this.setState({
                product: response.data
            })
        }).catch(error => console.log(error))
    }
    getKidPants = () => {
        axios.get("/products?age=kid&type=pants").then(response => {
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
                        handleSubmit: this.handleSubmit,
                        getAdultMale: this.getAdultMale,
                        getAdultMaleHats: this.getAdultMaleHats,
                        getAdultMaleShirt: this.getAdultMaleShirt,
                        getAdultMalePants: this.getAdultMalePants,
                        getAdultFemaleHats: this.getAdultFemaleHats,
                        getAdultFemaleShirt: this.getAdultFemaleShirt,
                        getAdultFemalePants: this.getAdultFemalePants,
                        getKidHats: this.getKidHats,
                        getKidShirt: this.getKidShirt,
                        getKidPants: this.getKidPants
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