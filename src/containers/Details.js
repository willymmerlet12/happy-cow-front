import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import DATA from "../assets/restaurants.json";
import { useParams } from "react-router-dom";
import Vegan from "../img/vegan.svg";
import NoVeg from "../img/no-veg.svg";
import VegStore from "../img/veg-store.svg";
import Vegetarian from "../img/vegetarian.svg";
import Delivery from "../img/delivery.svg";
import Bakery from "../img/bakery.svg";
import HealthStore from "../img/health-store.svg";
import Pro from "../img/professional.svg";
import IceCream from "../img/ice-cream.svg";
import Other from "../img/other.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleMapReact from "google-map-react";
import { Carousel } from "react-responsive-carousel";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const AnyReactComponent = () => (
    <FontAwesomeIcon icon="map-marker" className="mapMarker" />
  );

  useEffect(() => {
    const fetchData = () => {
      const response = DATA.find((rest) => {
        //   console.log(id === rest.placeId.toString());
        return id === rest.placeId.toString();
      });
      setData(response);
      console.log(response);
      console.log(data);
    };
    fetchData();
  }, [id]);

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

  const DisplayRightImg = (type) => {
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

  return data ? (
    <div>
      <div className="detail-bordure">
        <div className="resto-cont">
          <p className="reso-title">{data.name}</p>
          <div className="row">
            <div className="row veg">
              <img className="logo-veg" src={DisplayRightImg(data)} alt="" />
              <p className="veg-stat">{data.type}</p>
            </div>
            <FontAwesomeIcon
              icon="star"
              color={data.rating > 0 ? "#fbb30c" : "lightgrey"}
            />
            <FontAwesomeIcon
              icon="star"
              color={data.rating > 1 ? "#fbb30c" : "lightgrey"}
            />
            <FontAwesomeIcon
              icon="star"
              color={data.rating > 2 ? "#fbb30c" : "lightgrey"}
            />
            <FontAwesomeIcon
              icon="star"
              color={data.rating > 3 ? "#fbb30c" : "lightgrey"}
            />
            <FontAwesomeIcon
              icon="star"
              color={data.rating > 4 ? "#fbb30c" : "lightgrey"}
            />
          </div>
        </div>
      </div>
      <div className="resto-cont">
        <p className="address-id">
          <FontAwesomeIcon icon="home" /> /
          {data.address && data.address.slice(-20, -6).replace(/,/g, " /")}
          Europe
        </p>
        <div className="row">
          <div className="column">
            <div className="row hours">
              <FontAwesomeIcon className="clock" icon="clock" />
              <h3 className="h3-detail">HOURS</h3>
            </div>
            <p className="description1">
              {data.description && data.description.split("Open")[1]}
            </p>
          </div>
          <div className="contact">
            <div className="row hours">
              <FontAwesomeIcon className="clock" icon="phone" />
              <h3 className="h3-detail">CONTACT</h3>
            </div>
            <p className="phone">{data.phone}</p>
          </div>
          <div className="cont column1">
            <div className="row hours">
              <FontAwesomeIcon className="clock" icon="map-marker" />
              <h3 className="h3-detail">FIND</h3>
            </div>
            <p className="phone">{data.address}</p>
          </div>
          <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyC8CQvxh5dCiTA_nacJwrGlgQpZQi4CUBM",
              }}
              defaultCenter={{ lat: 59.955413, lng: 30.337844 }}
              defaultZoom={11}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text={data.name}
              />
            </GoogleMapReact>
          </div>
        </div>
        <p className="dess">
          {data.description && data.description.split("Open")[0]}
        </p>
        <Carousel
          className="carousel-details"
          containerClass="carousel-container"
          itemClass="carousel-item"
          responsive={responsive}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
        >
          <div className="row">
            {data.pictures && (
              <img className="resto1" src={data.pictures[0]} alt="" />
            )}
            {data.pictures && (
              <img className="resto1" src={data.pictures[1]} alt="" />
            )}
            {data.pictures && (
              <img className="resto1" src={data.pictures[2]} alt="" />
            )}
            {data.pictures && (
              <img className="resto1" src={data.pictures[3]} alt="" />
            )}
            {data.pictures && (
              <img className="resto1" src={data.pictures[4]} alt="" />
            )}
          </div>
        </Carousel>
      </div>
    </div>
  ) : (
    <span>is loading</span>
  );
};

export default Details;
