import React from 'react';
import { withProduct } from '../context/ProductProvider'
import { Link } from "react-router-dom";
import {
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';


const IndividualItem = (props) => {
    console.log(props.product)
    let item = props.product.find(
        product => product._id === props.match.params._id
    );
    // console.log(item)
    return (
        <div>
                
            {item ?
            <div>
            <Link to="/">
                    Return to Results
            </Link>
                <div className='individual-card'>
                    <div>
                        <CardImg style={{ width: '100%', height: 'auto' }} src={item.imgURL} alt={item.itemName} />
                        <CardBody style={{ background: 'white', width: '100%', height: 'auto' }}>
                            <CardTitle>{item.itemName}</CardTitle>
                            <CardSubtitle>{item.description}</CardSubtitle>
                            <CardText>${item.price}</CardText>
                            <Button onClick={() => props.addToCart(item._id)}> Add to cart </Button>
                        </CardBody>
                    </div>
                    </div>
                    </div>
                    :
                    <h1>loading</h1>
                }
                </div>

            
            
    );
};

export default withProduct(IndividualItem);