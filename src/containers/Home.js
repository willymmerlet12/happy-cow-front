import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import data from "../assets/restaurants.json";
import Banane from "../img/banane.jpg";
import Insta from "../img/nsta-logo.png";
import Face from "../img/face.png";
import Vegan from "../img/vegan.svg";
import NoVeg from "../img/no-veg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-responsive-carousel";

const Home = ({ isLoading, setIsLoading }) => {
  const result = data.filter((item) => item.category === 0);

  const shop = data.filter((item) => item.category === 2);

  const cold = data.filter(
    (item) => item.category === 3 || item.category === 1
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return isLoading ? (
    <Loader
      type="Rings"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
      className="loader"
    />
  ) : (
    <div>
      <img className="hero-img" src={Banane} alt="pp" />
      <div className="rest-cont">
        <h3>Vegan places around you</h3>
        <Carousel
          className="carousel1"
          containerClass="carousel-container"
          itemClass="carousel-item"
          responsive={responsive}
          showArrows={false}
          showStatus={false}
        >
          <div className="row">
            {result.map((rest, i) => {
              if (rest.pictures[0]) {
                return (
                  <div>
                    <div>
                      {rest.pictures[0] && (
                        <img className="resto" src={rest.pictures[0]} alt="" />
                      )}
                    </div>
                    <div className="row">
                      <p className="title-resto">{rest.name}</p>

                      <img
                        className="logo-veg"
                        src={rest.vegOnly === 1 ? Vegan : NoVeg}
                        alt="Logo vegan"
                      />
                    </div>
                    <p className="address">
                      {rest.address && rest.address.slice(-20, -6)}
                    </p>
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 0 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 1 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 2 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 3 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 4 ? "#fbb30c" : "lightgrey"}
                    />

                    <p className="description">
                      {rest.description &&
                        rest.description.slice(0, 110) + "..."}
                    </p>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </Carousel>
        <h3>Vegan Produt, Spa, stores</h3>
        <Carousel
          className="carousel1"
          containerClass="carousel-container"
          itemClass="carousel-item"
          responsive={responsive}
        >
          <div className="row">
            {shop.map((rest, i) => {
              if (i < 10) {
                return (
                  <div>
                    {rest.pictures[0] && (
                      <img className="resto" src={rest.pictures[0]} alt="" />
                    )}
                    <div className="row">
                      <p className="title-resto">{rest.name}</p>
                      <img
                        className="logo-veg"
                        src={rest.vegOnly === 1 ? Vegan : NoVeg}
                        alt="Logo vegan"
                      />
                    </div>
                    <p className="address">
                      {rest.address && rest.address.slice(-20, -6)}
                    </p>
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 0 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 1 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 2 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 3 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 4 ? "#fbb30c" : "lightgrey"}
                    />
                    <p className="description">
                      {rest.description &&
                        rest.description.slice(0, 110) + "..."}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </Carousel>
        <h3>Vegan stores aound you</h3>
        <Carousel
          className="carousel1"
          containerClass="carousel-container"
          itemClass="carousel-item"
          responsive={responsive}
        >
          <div className="row">
            {cold.map((rest, i) => {
              if (rest.pictures[0]) {
                return (
                  <div>
                    {rest.pictures[0] && (
                      <img className="resto" src={rest.pictures[0]} alt="" />
                    )}
                    <div className="row">
                      <p className="title-resto">{rest.name}</p>
                      <img
                        className="logo-veg"
                        src={rest.vegOnly === 1 ? Vegan : NoVeg}
                        alt="Logo vegan"
                      />
                    </div>
                    <p className="address">
                      {rest.address && rest.address.slice(-20, -6)}
                    </p>

                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 0 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 1 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 2 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 3 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={rest.rating > 4 ? "#fbb30c" : "lightgrey"}
                    />
                    <p className="description">
                      {rest.description &&
                        rest.description.slice(0, 110) + "..."}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </Carousel>
        <h3>Get our newsletter</h3>
        <div className="row">
          <a href="https://www.instagram.com/happycow/">
            <div className="insta">
              <p className="text-insta">Follow us on Instagram</p>
              <img className="logo-insta" src={Insta} alt="" />
            </div>
          </a>
          <a href="https://www.facebook.com/HappyCow">
            <div className="insta border-face">
              <p className="text-insta">Like and follow us on Facebook</p>
              <img className="logo-insta " src={Face} alt="" />
            </div>
          </a>
          <div className="news">
            <p className="text-insta">
              Monthly updates on vegan news, worldwide restaurant and travel
              highlights, and giveaways!
            </p>
            <button className="but-news">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
