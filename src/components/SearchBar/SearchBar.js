import React, { useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import data from "../../assets/restaurants.json";
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
import "./SearchBar.css";

const SearchBar = () => {
  let history = useHistory();
  const { search } = useParams();
  const result = () => {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].address.toLowerCase().includes(search.toLowerCase()) === true ||
        data[i].name.toLowerCase().includes(search.toLowerCase()) === true
      ) {
        res.push(data[i]);
      }
    }
    return res;
  };
  const res = result();

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
    } else if (type.type === "Other") {
      return Other;
    } else if (type.type === "Bakery") {
      return Bakery;
    } else if (type.type === "Health Store") {
      return HealthStore;
    } else if (type.type === "Professional") {
      return Pro;
    } else if (type.type === "Ice Cream") {
      return IceCream;
    }
  };

  const DisplayRightColor = (type) => {
    if (
      type.type === "vegan" ||
      type.type === "Veg Store" ||
      type.type === "delivery"
    ) {
      return "green";
    } else if (type.type === "veg-options") {
      return "#dc5d5b";
    } else if (type.type === "vegetarian") {
      return "#8a2091";
    } else if (type.type === "Bakery") {
      return "#9c732a";
    } else if (type.type === "Other") {
      return "lightblue";
    } else if (type.type === "Market Vendor") {
      return "blue";
    } else if (type.type === "Juice Bar") {
      return "orange";
    } else if (type.type === "Health Store") {
      return "#b49a07";
    }
  };
  const limit = 100;
  const [pageMax, setPageMax] = useState(0);
  const [page, setPage] = useState(1);

  const handleClickPage = (event) => {
    console.log(event);
    setPage(event.selected + 1);
  };

  return (
    <div>
      <h3 className="titre-search">Results of : {search}</h3>

      <div className="container-result">
        {res.map((resu, i) => {
          if (resu.thumbnail) {
            return (
              <>
                <div className="border-res">
                  <Link to={`/restaurant/${resu.placeId}`}>
                    <img className="pic-sea" src={resu.thumbnail} alt="" />
                    <p className="title-search" style={{ marginTop: "15px" }}>
                      {resu.name && resu.name.slice(0, 21)}
                    </p>
                  </Link>
                  <div
                    className="row"
                    style={{
                      backgroundColor: DisplayRightColor(resu),
                      width: "110px",
                      borderRadius: 5,
                      padding: 2,
                      marginBottom: "5px",
                    }}
                  >
                    <img
                      className="logo-veg"
                      src={DisplayRightImg(resu)}
                      alt=""
                    />
                    <p
                      style={{ color: "white", lineClamp: "none" }}
                      className="veg-stat"
                    >
                      {resu.type}
                    </p>
                  </div>
                  <div className="row">
                    <FontAwesomeIcon
                      icon="star"
                      color={resu.rating > 0 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={resu.rating > 1 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={resu.rating > 2 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={resu.rating > 3 ? "#fbb30c" : "lightgrey"}
                    />
                    <FontAwesomeIcon
                      icon="star"
                      color={resu.rating > 4 ? "#fbb30c" : "lightgrey"}
                    />
                  </div>

                  <p style={{ fontSize: "12px", marginTop: "5px" }}>
                    {resu.address && resu.address.slice(0, 28) + "..."}
                  </p>
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SearchBar;
