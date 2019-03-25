import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
// const Carousel = require('react-responsive-carousel').Carousel

class ProductCarousel extends Component {
    render() {
        return (
            <Carousel
                showThumbs={false}
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showStatus={false}
            >
                <div>
                    <div style={{background: `url(https://images.prod.meredith.com/product/9715ddbd39b6a5050b7d5a35950a71cb/1546208052027/l/girls-tie-front-long-sleeve-denim-button-up-shirt)`, height:'85vh', width: 'auto', backgroundRepeat: 'no-repeat', backgroundColor: 'white', backgroundPosition: 'center', backgroundSize: 'contain' }}></div>
                </div>
                <div>
                    <div style={{background: `url(https://cdn.shopify.com/s/files/1/0228/1357/products/Viking_horned_hat.jpg?v=1543383772)`, height:'85vh', width: 'auto', backgroundRepeat: 'no-repeat', backgroundColor: 'white', backgroundPosition: 'center', backgroundSize: 'contain' }}></div>                    
                </div>
                <div>
                    <div style={{background: `url(https://cdn.shopify.com/s/files/1/0189/0430/products/banana_1024x1024.jpg?v=1540840993)`, height:'85vh', width: 'auto', backgroundRepeat: 'no-repeat', backgroundColor: 'white', backgroundPosition: 'center', backgroundSize: 'contain' }}></div>                    
                </div>
            </Carousel>
        );
    }
}

export default ProductCarousel;