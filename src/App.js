import React from "react";
import {Helmet} from "react-helmet";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



export default function HomePage(){

  return(
    <>
    <Helmet>
    
    <title>African NFT Market</title>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="author" content=""/>
    <meta name="keywords" content="africa, nft, nfts, music artists, music distribution, african musician"/>
    <meta name="description" content=""/>

    <link rel="stylesheet" type="text/css" href="css/normalize.css"/>
    <link rel="stylesheet" type="text/css" href="css/vendor.css"/>
    <link rel="stylesheet" type="text/css" href="fonts/icomoon.css"/>
    <link rel="stylesheet" type="text/css" href="style.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;800;900&display=swap" rel="stylesheet"/>

    </Helmet>
    
    <body className="bg-dark">
    <header id="header">
      <nav className="primary-nav padding-small">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="main-logo">
                <a href="index.html">
                  <img src={require("./assets/images/main-logo.png")} alt="logo" style={{maxWidth: "237px"}}/>
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="navbar">
                <div className="main-menu d-flex justify-content-between">
                  <ul className="menu-list col-md-6 list-unstyled d-flex">
                    <li className="menu-item">
                      <a href="#" className="item-anchor active" data-effect="Home">Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="marketplace.html" className="item-anchor" data-effect="Blogs">Marketplace</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="item-anchor" data-effect="Shop">Artist</a>
                    </li>
                    <li className="menu-item">
                      <a href="community.html" className="item-anchor" data-effect="Blogs">Community</a>
                    </li>
                    <li>  <a href={"https://forms.gle/KmRq4GggXgotVDJ57"} className="btn btn-outline-linear btn-medium">Register</a></li>
                  </ul>
                </div>
                <div className="hamburger">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div id="billboard" className="padding-medium overflow-hidden">
      <div className="container">
        <div className="row d-flex flex-wrap">
          <div className="col-md-6 col-sm-8">
            <div className="banner-content content-light">
              <h1 className="banner-title">Empowering Musicians!</h1>
              <p className="grey">At African NFT Market, we are on a mission to champion the incredible talent that Africa has to offer to the world. Our platform is more than just a marketplace;
              it's a gateway to global exposure and financial independence for the talented musicians of Africa.</p>
              <div className="btn-wrap d-flex flex-wrap">
                <a href={"https://forms.gle/KmRq4GggXgotVDJ57"} className="btn btn-linear btn-medium">Get Started</a>
                <a href={"https://forms.gle/KmRq4GggXgotVDJ57"} className="btn btn-outline-linear btn-medium">Create NFTs</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-8">
            <div className="image-holder">
              <img src={require("./assets/images/banner-image-1.png")} alt="banner" className="banner-image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="association-with" className="padding-large pattern-blur">
      <div className="pattern-overlay left-side-pattern">
        {/* <img src={require("./assets/images/pattern-blur-left.png")} alt="">  */}
      </div>
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-evenly align-items">
          <img src={require("./assets/images/association-brand1.png")} alt="brand" className="image-association"/>
          <img src={require("./assets/images/association-brand2.png")} alt="brand" className="image-association"/>
          <img src={require("./assets/images/association-brand3.png")} alt="brand" className="image-association"/>
          <img src={require("./assets/images/association-brand4.png")} alt="brand" className="image-association"/>
          <img src={require("./assets/images/association-brand5.png")} alt="brand" className="image-association"/>
        </div>
      </div>
    </section>
    <section id="product-card" className="padding-large no-padding-top">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 className="section-title light">Gallery </h2>
          </div>
          <Carousel 
            swipeable={false}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-style"
            
          >
          <div className="swiper-slide"> 
                <div className="product-item">
                  <div className="image-holder">
                    <img src={require("./assets/images/collection-item2.jpg")} alt="collection" className="rounded-shape"/>
                  </div>
                  {/* <div className="product-detail bg-light">
                    <div className="card-header d-flex flex-wrap justify-content-between">
                      <h3 className="card-title">Skeleton Head</h3>
                      <span className="currency">0.29 ETH</span>
                    </div>
                    <div className="clients-detail">
                      <img src={require("./assets/images/clients-item2.jpg")} alt="clients" className="circle-shape"/>
                      <span className="clients-name">Kelvin Glan</span>
                    </div>
                    <div className="btn-card">
                      <a href="#" className="btn btn-linear btn-full btn-rounded btn-medium">Place a Bid</a>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <div className="image-holder">
                    <img src={require("./assets/images/collection-item1.jpg")} alt="collection" className="rounded-shape"/>
                  </div>
                  {/* <div className="product-detail bg-light"> */}
                    {/* <div className="card-header d-flex flex-wrap justify-content-between">
                      <h3 className="card-title">Lighting Axe</h3>
                      <span className="currency">0.36 ETH</span>
                    </div> */}
                    <div className="clients-detail">
                      {/* <img src={require("./assets/images/clients-item1.jpg")} alt="clients" className="circle-shape"/> */}
                      {/* <span className="clients-name">Loura Chin</span> */}
                    </div>
                    {/* <div className="btn-card">
                      <a href="#" className="btn btn-linear btn-full btn-rounded btn-medium">Place a Bid</a>
                    </div> */}
                  {/* </div> */}
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <div className="image-holder">
                    <img src={require("./assets/images/collection-item3.jpg")} alt="collection" className="rounded-shape"/>
                  </div>
                  {/* <div className="product-detail bg-light">
                    <div className="card-header d-flex flex-wrap justify-content-between">
                      <h3 className="card-title">Skeleton Head</h3>
                      <span className="currency">0.29 ETH</span>
                    </div>
                    <div className="clients-detail">
                      <img src={require("./assets/images/clients-item2.jpg")} alt="clients" className="circle-shape"/>
                      <span className="clients-name">Kelvin Glan</span>
                    </div>
                    <div className="btn-card">
                      <a href="#" className="btn btn-linear btn-full btn-rounded btn-medium">Place a Bid</a>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <div className="image-holder">
                    <img src={require("./assets/images/collection-item4.jpg")} alt="collection" className="rounded-shape"/>
                  </div>
                  {/* <div className="product-detail bg-light">
                    <div className="card-header d-flex flex-wrap justify-content-between">
                      <h3 className="card-title">Hard Breath</h3>
                      <span className="currency">0.22 ETH</span>
                    </div>
                    <div className="clients-detail">
                      <img src={require("./assets/images/clients-item3.jpg")} alt="clients" className="circle-shape"/>
                      <span className="clients-name">Glam Lee</span>
                    </div>
                    <div className="btn-card">
                      <a href="#" className="btn btn-linear btn-full btn-rounded btn-medium">Place a Bid</a>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <div className="image-holder">
                    <img src={require("./assets/images/collection-item5.jpg")} alt="collection" className="rounded-shape"/>
                  </div>
                  {/* <div className="product-detail bg-light">
                    <div className="card-header d-flex flex-wrap justify-content-between">
                      <h3 className="card-title">Hard Breath</h3>
                      <span className="currency">0.22 ETH</span>
                    </div>
                    <div className="clients-detail">
                      <img src={require("./assets/images/clients-item1.jpg")} alt="clients" className="circle-shape"/>
                      <span className="clients-name">Glam Lee</span>
                    </div>
                    <div className="btn-card">
                      <a href="#" className="btn btn-linear btn-full btn-rounded btn-medium">Place a Bid</a>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-item">
                  <div className="image-holder">
                    <img src={require("./assets/images/collection-item6.jpg")} alt="collection" className="rounded-shape"/>
                  </div>
                  {/* <div className="product-detail bg-light">
                    <div className="card-header d-flex flex-wrap justify-content-between">
                      <h3 className="card-title">Hard Breath</h3>
                      <span className="currency">0.22 ETH</span>
                    </div>
                    <div className="clients-detail">
                      <img src={require("./assets/images/clients-item3.jpg")} alt="clients" className="circle-shape"/>
                      <span className="clients-name">Glam Lee</span>
                    </div>
                    <div className="btn-card">
                      <a href="#" className="btn btn-linear btn-full btn-rounded btn-medium">Place a Bid</a>
                    </div>
                  </div> */}
                </div>
              </div>
</Carousel>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
    <section id="top-creators" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="section-header align-center">
            <h2 className="section-title light">Financial Independence for Musicians</h2>
            <p className="grey">
            We're empowering African musicians with financial independence through blockchain technology and NFTs, 
            allowing them to focus on their passion for music instead of struggling financially.
            </p>
          </div>
          <div className="product-content overflow-hidden">
            <div className="row d-flex flex-wrap">
              <div className="col-md-3 col-sm-6">
                <div className="product-item card-bg border-rounded">
                  <div className="product-detail text-center">
                    <div className="clients-detail">
                      <img src={require("./assets/images/clients-item-lg1.jpg")} alt="clients" className="circle-shape"/>
                    </div>
                    <h3 className="block-title">Loura Chin</h3>
                    <div className="btn-card">
                      <a href="#" className="btn btn-linear btn-rounded btn-medium">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-item card-bg border-rounded">
                  <div className="product-detail text-center">
                    <div className="clients-detail">
                      <img src={require("./assets/images/clients-item-lg2.jpg")} alt="clients" className="circle-shape"/>
                    </div>
                    <h3 className="block-title">Kelvin Glan</h3>
                    <div className="btn-card">
                      <a href="#" className="btn btn-linear btn-rounded btn-medium">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-item card-bg border-rounded">
                  <div className="product-detail text-center">
                    <div className="clients-detail">
                      <img src={require("./assets/images/clients-item-lg3.jpg")} alt="clients" className="circle-shape"/>
                    </div>
                    <h3 className="block-title">Glam Lee</h3>
                    <div className="btn-card">
                      <a href="#" className="btn btn-linear btn-rounded btn-medium">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-item card-bg border-rounded">
                  <div className="product-detail text-center">
                    <div className="clients-detail">
                      <img src={require("./assets/images/clients-item-lg4.jpg")} alt="clients" className="circle-shape"/>
                    </div>
                    <h3 className="block-title">Alameda</h3>
                    <div className="btn-card">
                      <a href="#" className="btn btn-linear btn-rounded btn-medium">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="subscribe" className="padding-large pattern-circle">
      <div className="pattern-overlay">
        <img src="images/pattern-overlay.png" alt="pattern-overlay"/>
      </div>
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-center">
          <div className="col-md-5">
            <div className="image-holder">
              <img src={require("./assets/images/single-image.jpg")} alt="single image" className="banner-image"/>
            </div>
          </div>
          <div className="col-md-5">
            <div className="subscribe-content">
              <div className="subscribe-header">
                <h3 className="subscribe-title light">Join us make NFTs accessible to africans.</h3>
                <p className="grey">
                At African NFT Access, we are on a mission to democratize the world of NFTs (Non-Fungible Tokens) and ensure that every African artist, 
                creator, and collector has the opportunity to participate in this transformative digital economy.
                </p>
              </div>
              <form id="form" className="d-flex justify-content-between bg-blue-trans">
                {/* <input type="text" name="email" placeholder="Write your email here" className="btn-rounded content-dim-light"> */}
                <a href={"https://forms.gle/KmRq4GggXgotVDJ57"}  className="btn btn-linear btn-medium btn-full">Join now</a>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="nft-collection" className="padding-large">
      <div className="container">
        <div className="row overflow-hidden">
          <div className="section-header align-center" style={{border: "1px solid"}}>
            <h2 className="section-title light">Our community</h2>
            <p className="grey">Tap into a supportive network of fellow artists and music lovers who celebrate African music.</p>
          </div>
          <div className="product-content">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="product-item bg-blue-trans border-rounded-pill">
                  <div className="product-detail text-center">
                    <div className="clients-detail">
                      <img src={require("./assets/images/nft-item1.jpg")} alt="clients" className="circle-shape"/>
                    </div>
                    <h3 className="block-title">Broken Collection</h3>
                    <div className="btn-card">
                      <a href="#" className="btn btn-secondary btn-medium no-padding-top d-flex justify-content-center">View Collection</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-item bg-blue-trans border-rounded-pill">
                  <div className="product-detail text-center">
                    <div className="clients-detail">
                      <img src={require("./assets/images/nft-item2.jpg")} alt="clients" className="circle-shape"/>
                    </div>
                    <h3 className="block-title">Broken Collection</h3>
                    <div className="btn-card">
                      <a href="#" className="btn btn-secondary btn-medium no-padding-top d-flex justify-content-center">View Collection</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-item bg-blue-trans border-rounded-pill">
                  <div className="product-detail text-center">
                    <div className="clients-detail">
                      <img src={require("./assets/images/nft-item3.jpg")} alt="clients" className="circle-shape"/>
                    </div>
                    <h3 className="block-title">Broken Collection</h3>
                    <div className="btn-card">
                      <a href="#" className="btn btn-secondary btn-medium no-padding-top d-flex justify-content-center">View Collection</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="product-item bg-blue-trans border-rounded-pill">
                  <div className="product-detail text-center">
                    <div className="clients-detail">
                      <img src={require("./assets/images/nft-item4.jpg")} alt="clients" className="circle-shape"/>
                    </div>
                    <h3 className="block-title">Broken Collection</h3>
                    <div className="btn-card">
                      <a href="#" className="btn btn-secondary btn-medium no-padding-top d-flex justify-content-center">View Collection</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer id="footer" className="padding-large">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-4 col-md-6">
            <div className="footer-item item-001">
              <img src={require("./assets/images/main-logo.png")} alt="logo"/>
              <p className="grey">
              We support talented musicians of Africa to gain global exposure and financial independence via NFTs.
              </p>
              <div className="social-media">
                <ul className="d-flex list-unstyled">
                  <li className="bg-blue-trans border-rounded-circle">
                    <a href="#">
                      <i className="icon icon-facebook"></i>
                    </a>
                  </li>
                  <li className="bg-blue-trans border-rounded-circle">
                    <a href="#">
                      <i className="icon icon-twitter"></i>
                    </a>
                  </li>
                  <li className="bg-blue-trans border-rounded-circle">
                    <a href="#">
                      <i className="icon icon-instagram"></i>
                    </a>
                  </li>
                  <li className="bg-blue-trans border-rounded-circle">
                    <a href="#">
                      <i className="icon icon-youtube"></i>
                    </a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-item item-002 content-light">
              <h4>Marketplace</h4>
              <ul className="footer-menu list-unstyled">
                <li>
                  <a href="#">NFTs</a>
                </li>
                <li>
                  <a href="#">Art</a>
                </li>
                <li>
                  <a href="#">Collectibles</a>
                </li>
                <li>
                  <a href="#">Virtual world</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-item item-003 content-light">
              <h4>Info</h4>
              <ul className="footer-menu list-unstyled">
                <li>
                  <a href="#">Activity</a>
                </li>
                <li>
                  <a href="#">Stats</a>
                </li>
                <li>
                  <a href="#">Rankings</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-item item-004 content-light">
              <h4>Company</h4>
              <ul className="footer-menu list-unstyled">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Top Creators</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-item item-005 content-light">
              <h4>Resources</h4>
              <ul className="footer-menu list-unstyled">
                <li>
                  <a href="#">Info</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
                <li>
                  <a href="#">Associated</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <hr/>
    <div id="footer-bottom">
      <div className="container">
        <div className="row text-center">
          <p>© 2024 Copyright <a href="#" className="light">African NFT Market</a>. All rights reserved </p>
        </div>
      </div>
    </div> 
  </body>
    </>
  )
}

