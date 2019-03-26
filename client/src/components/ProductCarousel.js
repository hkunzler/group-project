import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class ProductCarousel extends Component {
    render() {
        return (
            <Carousel
                className='product-carousel'
                showThumbs={false}
                infiniteLoop
                autoPlay
                showStatus={false}
                showArrows={false}
            >
                <div>
                    <div style={{
                        background: `url(https://images.express.com/is/image/expressfashion/0022_05737689_0625?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon)`,
                        height:'80vh', 
                        width: 'auto', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundColor: 'white', 
                        backgroundPosition: 'center', 
                        backgroundSize: 'contain',
                        zIndex: '3'
                    }}></div>
                </div>
                <div>
                    <div style={{
                        background: `url(https://cdn.shopify.com/s/files/1/0228/1357/products/Viking_horned_hat.jpg?v=1543383772)`, 
                        height:'80vh', 
                        width: 'auto', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundColor: 'white', 
                        backgroundPosition: 'center', 
                        backgroundSize: 'contain' 
                    }}></div>                    
                </div>
                <div>
                    <div style={{
                        background: `url(http://www.irockbags.com/image/cache/data/01C/lacework-splicing-fashionable-v-neck-long-sleeve-women-s-t-shirt-black-white-2097-500x500.jpg)`,
                        height:'80vh', 
                        width: 'auto', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundColor: 'white', 
                        backgroundPosition: 'center', 
                        backgroundSize: 'contain' 
                    }}></div>                    
                </div>
            </Carousel>
        );
    }
}

export default ProductCarousel;