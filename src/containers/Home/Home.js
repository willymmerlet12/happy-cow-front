import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import data from "../../assets/restaurants.json";
import Donut from "../../img/donut.jpg";
import Insta from "../../img/nsta-logo.png";
import Face from "../../img/face.png";
import Vegan from "../../img/vegan.svg";
import NoVeg from "../../img/no-veg.svg";
import VegStore from "../../img/veg-store.svg";
import Vegetarian from "../../img/vegetarian.svg";
import Delivery from "../../img/delivery.svg";
import Bakery from "../../img/bakery.svg";
import HealthStore from "../../img/health-store.svg";
import Pro from "../../img/professional.svg";
import IceCream from "../../img/ice-cream.svg";
import Other from "../../img/other.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const result = data.filter((item) => item.category === 0);

  const shop = data.filter((item) => item.category === 2);

  const cold = data.filter(
    (item) => item.category === 3 || item.category === 1
  );

  const DisplayRightImg = (type) => {
    // params type === restau so type.type = restau.type
    if (type.type === "veg-options") {
      return NoVeg;
    } else if (type.type === "vegan") {
      return Vegan;
    } else if (type.type === "Veg Store") {
      return VegStore;
    } else if (type.type === "vegetarian") {
      return Vegetarian;
    } else if (type.type === "delivery") {
      return Delivery;
    } else if (type.type === "other") {
      return Other;
    } else if (type.type === "bakery") {
      return Bakery;
    } else if (type.type === "Health Store") {
      return HealthStore;
    } else if (type.type === "Professional") {
      return Pro;
    } else if (type.type === "Ice Cream") {
      return IceCream;
    }
  };

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
  const [search, setSearch] = useState("");
  let history = useHistory();

  return (
    <div>
      <div>
        <h1 className="vegan-title">Find Vegan Restaurant Nearby</h1>
        <form
          className="input-search"
          onSubmit={(event) => {
            event.preventDefault();
            history.push("/result/" + search);
          }}
        >
          <input
            className="search-bar"
            type="text"
            value={search}
            placeholder="Search for city, region, or zipcode"
            onChange={(event) => {
              const value = event.target.value;
              setSearch(value);
            }}
          />
          <button className="bar" type="submit">
            <FontAwesomeIcon icon="search" className="search-i" />
          </button>
        </form>
      </div>
      <img className="hero-img" src={Donut} alt="pp" />

      <div className="rest-cont">
        <h3 className="h3-home" style={{ marginTop: "120px" }}>
          Vegan places around you
        </h3>
        <Carousel
          className="carousel1"
          containerClass="carousel-container"
          itemClass="carousel-item"
          responsive={responsive}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div className="row">
            {result.map((rest, i) => {
              if (rest.pictures[0]) {
                return (
                  <div>
                    <Link rest to={`/restaurant/${rest.placeId}`}>
                      <div>
                        {rest.pictures[0] && (
                          <img
                            className="resto"
                            src={rest.pictures[0]}
                            alt=""
                          />
                        )}
                      </div>
                      <div className="row">
                        <p className="title-resto">{rest.name}</p>

                        <img
                          className="logo-veg"
                          src={DisplayRightImg(rest)}
                          alt=""
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
                    </Link>
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
                    <Link rest to={`/restaurant/${rest.placeId}`}>
                      {rest.pictures[0] && (
                        <img className="resto" src={rest.pictures[0]} alt="" />
                      )}
                      <div className="row">
                        <p className="title-resto">{rest.name}</p>
                        <img
                          className="logo-veg"
                          src={DisplayRightImg(rest)}
                          alt=""
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
                    </Link>
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
                    <Link rest to={`/restaurant/${rest.placeId}`}>
                      {rest.pictures[0] && (
                        <img className="resto" src={rest.pictures[0]} alt="" />
                      )}
                      <div className="row">
                        <p className="title-resto">{rest.name}</p>
                        <img
                          className="logo-veg"
                          src={DisplayRightImg(rest)}
                          alt=""
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
                    </Link>
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

            <button className="but-news">
              <Link to="/newsletter">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
      <svg
        className="wave"
        style={{}}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,288L30,256C60,224,120,160,180,160C240,160,300,224,360,240C420,256,480,224,540,229.3C600,235,660,277,720,282.7C780,288,840,256,900,250.7C960,245,1020,267,1080,266.7C1140,267,1200,245,1260,218.7C1320,192,1380,160,1410,144L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Home;
