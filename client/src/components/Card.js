import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Card = () => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Product name</CardTitle>
                    <CardSubtitle> general description </CardSubtitle>
                    <CardText> Some quick example text to build on the card title and make up the bulk of the card's content. </CardText>
                    <CardText> price goes here</CardText>
                    <Button> Add to cart </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default Card