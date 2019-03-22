import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { withProduct } from '../context/ProductProvider'



class Cards extends Component {
    componentDidMount = () => {
        this.props.getProduct()
    }
    render() {
        const mappedProduct = this.props.product.map(product => (
            < div  >
                < div style={{margin: '10px 15px'}}>
                    <CardImg style={{ width: '100%', height: '500px'}} src={product.imgURL} alt={product.itemName} />
                <CardBody >
                    <CardTitle>{product.itemName}</CardTitle>
                    <CardSubtitle>{product.description}</CardSubtitle>
                    <CardText>${product.price}</CardText>
                    <Button> Add to cart </Button>
                </CardBody>
                </div>
                </div>
                   )
                    )

        return (
                <div className = 'cards'>
                    {mappedProduct}
                </div>
        )
    }
}

export default withProduct(Cards)