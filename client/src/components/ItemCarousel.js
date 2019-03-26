import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import { withProduct } from "../context/ProductProvider";
import { Link } from "react-router-dom";

class ItemCarousel extends Component {
  componentDidMount = () => {
    // this.props.getProduct()
    this.props.getProduct();
  };
  render() {
    return (
      <div className="featured">
        <br />
        <h1
          style={{ fontSize: "500%", marginTop: "25px" }}
          className="featured"
        >
          Featured Items
        </h1>
        <h1 style={{ textAlign: "left", marginLeft: "5%", zIndex: 2 }}>Men</h1>
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          showStatus={false}
          centerSlidePercentage={50}
          centerMode
          centerSlidePercentage={33}
          emulateTouch
        >
          <Link to={"5c94054c513fc14e439d2bec"}>
            <div
              style={{
                background: `url(https://cdn.shopify.com/s/files/1/0228/1357/products/Viking_horned_hat.jpg?v=1543383772)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c04"}>
            <div
              style={{
                background: `url(https://images.express.com/is/image/expressfashion/0022_05737689_0625?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c02"}>
            <div
              style={{
                background: `url(https://ae01.alicdn.com/kf/HTB1jaf8KpXXXXXOaXXXq6xXFXXXW/2014-New-Brand-Classic-Casual-Faux-Silk-Shiny-Mens-Shirts-Fashion-Long-sleeve-Slim-Fit-Social.jpg_640x640.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2be9"}>
            <div
              style={{
                background: `url(https://i.pinimg.com/originals/41/77/6d/41776da3a615626f049bb7b721762343.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c05"}>
            <div
              style={{
                background: `url(https://images-na.ssl-images-amazon.com/images/I/81Tam0p1JhL._UX466_.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c07"}>
            <div
              style={{
                background: `url(https://cdn.shopify.com/s/files/1/2959/1448/products/bearhugflipmens_394x.jpg?v=1540797200)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c09"}>
            <div
              style={{
                background: `url(https://pixel.nymag.com/imgs/fashion/daily/2016/04/28/white-t-shirt-e-comm/jizzal-man.w710.h473.2x.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c08"}>
            <div
              style={{
                background: `url(https://wolamola.com/wp-content/uploads/2018/07/KYKU-Shrek-Shirt-Funny-T-Shirts-Hip-Hop-Clothing-Short-Sleeve-Tshirt-Streetwear-3d-Print-T.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
        </Carousel>
        <h1 style={{ textAlign: "left", marginLeft: "5%", zIndex: 2 }}>Women</h1>
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          showStatus={false}
          centerSlidePercentage={50}
          centerMode
          centerSlidePercentage={33}
          emulateTouch
        >
          <Link to={"5c94054c513fc14e439d2c13"}>
            <div
              style={{
                background: `url(https://images.beautifulhalo.com/images/v/201611/X/1479382411297.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c14"}>
            <div
              style={{
                background: `url(https://ae01.alicdn.com/kf/HTB1EzFJIXXXXXaVXXXXq6xXFXXXS/New-Fashion-Womens-Tops-O-Neck-Long-Sleeves-Button-Decoration-Women-t-shirt-Casual-Tops-Plus.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2bfa"}>
            <div
              style={{
                background: `url(https://www.pinklovestory.com/wp-content/uploads/2018/01/haoricu-women-hat-2017-fashion-winter-women-hole-knitting-beanie-turban-head-wrap-cap-pink.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c15"}>
            <div
              style={{
                background: `url(http://www.irockbags.com/image/cache/data/01C/lacework-splicing-fashionable-v-neck-long-sleeve-women-s-t-shirt-black-white-2097-500x500.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c17"}>
            <div
              style={{
                background: `url(https://ae01.alicdn.com/kf/HTB1lYYsRFXXXXXTapXXq6xXFXXXH/GOOD-Quality-5-Color-S-2XL-Plain-T-Shirt-Women-Elastic-Basic-T-shirts-female-Casual.jpg_640x640.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c12"}>
            <div
              style={{
                background: `url(https://i.pinimg.com/originals/c9/ac/cb/c9accbf75bee4d3b557d9a863591841c.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c11"}>
            <div
              style={{
                background: `url(https://m.media-amazon.com/images/I/61Zo5yKJoPL._SR500,500_.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c16"}>
            <div
              style={{
                background: `url(https://uniqlo.scene7.com/is/image/UNIQLO/goods_03_172267?$detail$)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
        </Carousel>
        <h1 style={{ textAlign: "left", marginLeft: "5%", zIndex: 2 }}>Kids</h1>
        <Carousel
          showThumbs={false}
          infiniteLoop
          useKeyboardArrows
          showStatus={false}
          centerSlidePercentage={50}
          centerMode
          centerSlidePercentage={33}
          emulateTouch
        >
          <Link to={"5c94054c513fc14e439d2bf2"}>
            <div
              style={{
                background: `url(https://cdn.shopify.com/s/files/1/0189/0430/products/banana_1024x1024.jpg?v=1540840993)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2bf4"}>
            <div
              style={{
                background: `url(https://i.pinimg.com/originals/79/0f/36/790f36c39d205278d57819d00e2e1b5f.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain",
                marginLeft: "25px"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2bf5"}>
            <div
              style={{
                background: `url(https://cdn.shopify.com/s/files/1/1223/5592/products/KD2002BR_main_1024x1024.jpg?v=1515712442)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c1b"}>
            <div
              style={{
                background: `url(https://images.prod.meredith.com/product/9715ddbd39b6a5050b7d5a35950a71cb/1546208052027/l/girls-tie-front-long-sleeve-denim-button-up-shirt)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c19"}>
            <div
              style={{
                background: `url(https://anf.scene7.com/is/image/anf/kids_208566_12_prod1?$product-anf-v1$&wid=800&hei=1000)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c1a"}>
            <div
              style={{
                background: `url(http://picture-cdn.wheretoget.it/lehds3-l-610x610--watermelon-watermelon+shirt-summer-cute-blue-collar-button-short+sleeve-summer+shirt-spring+shirt-pixie+market-pixie+market+girl.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2bf6"}>
            <div
              style={{
                background: `url(https://images-na.ssl-images-amazon.com/images/I/51g8XE2fl5L._UX522_.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
          <Link to={"5c94054c513fc14e439d2c0c"}>
            <div
              style={{
                background: `url(https://i.pinimg.com/originals/66/f5/ca/66f5ca24ebe4bc4171a6f1354cb6f48c.jpg)`,
                height: "500px",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundColor: "white",
                backgroundPosition: "center",
                backgroundSize: "contain"
              }}
            />
          </Link>
        </Carousel>
      </div>
    );
  }
}

export default withProduct(ItemCarousel);
