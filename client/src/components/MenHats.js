import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { withProduct } from '../context/ProductProvider'
import { Carousel } from 'react-responsive-carousel';



class MenHats extends Component {
    componentDidMount = () => {
        // this.props.getProduct()
        this.props.getAdultMaleHats()

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

                    <Button onClick={() => this.props.addToCart(product._id)}> Add to cart </Button>
                </CardBody>
                </div>
                </div>
                   )
                    )

        return (
            <div>
                <div className = 'cards'>
                    {mappedProduct}
                </div>
                </div>
        )
    }
}

export default withProduct(MenHats)