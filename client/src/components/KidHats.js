import React, { Component } from 'react';
import {
    CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { withProduct } from '../context/ProductProvider'
import { Link } from "react-router-dom";


class KidHats extends Component {
    componentDidMount = () => {
        this.props.getKidHats()

    }
    render() {
        const mappedProduct = this.props.product.map(product => (
            < div  >
                < div style={{margin: '10px 15px'}}>
                <Link to={product._id}>
                    <CardImg style={{ width: '100%', height: '500px'}} src={product.imgURL} alt={product.itemName} />
                    </Link>
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

export default withProduct(KidHats)