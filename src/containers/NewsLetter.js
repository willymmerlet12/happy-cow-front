import React from "react";
import Mooz from "../img/moozine.png";

const NewsLetter = () => {
  return (
    <div className="row">
      <img className="mooz" src={Mooz} alt="" />
      <div style={{ flexDirection: "column" }}>
        <h3
          style={{
            fontWeight: 700,
            marginTop: "20px",
            marginLeft: "10px",
            fontSize: "38px",
          }}
        >
          Receive our Vegin'Out News'
        </h3>
        <p
          style={{
            lineHeight: 2,
            width: "55%",
            marginLeft: "20px",
            color: "#525252",
          }}
        >
          Updates on new features being implemented on this website Reports on
          relevant U.S. & International news headlines News on veg*n restaurants
          and veg-friendly businesses worldwide
        </p>
        <p style={{ marginLeft: "20px", marginTop: "7px", color: "#525252" }}>
          Participation in decision-making that determines the future of this
          site, plus contests & giveaways!
        </p>
        <p
          style={{
            marginTop: "30px",
            marginLeft: "20px",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          Join Here - It's Free
        </p>
        <div className="input-col">
          <label
            style={{ marginLeft: "20px", marginTop: "30px", fontWeight: 700 }}
            htmlFor=""
          >
            Name:
          </label>
          <input className="input-news" type="text" />
        </div>
        <div className="input-col">
          <label
            style={{ marginLeft: "20px", marginTop: "20px", fontWeight: 700 }}
            htmlFor=""
          >
            Email:
          </label>
          <input className="input-news" type="text" />
          <div className="row">
            <p
              className="conditions"
              style={{ marginLeft: "20px", marginTop: "30px" }}
            >
              I agree to the Terms of Use and Privacy Policy.
            </p>
            <input
              type="radio"
              name="demo2"
              class="demo2 demoyes"
              id="demo2-a"
              checked
            />
            <label
              style={{ marginLeft: "20px", marginTop: "20px" }}
              for="demo2-a"
            >
              I agree
            </label>
            <input
              type="radio"
              name="demo2"
              class="demo2 demono"
              id="demo2-b"
            />
            <label
              style={{ marginLeft: "20px", marginTop: "20px" }}
              for="demo2-b"
            >
              I don't agree
            </label>
          </div>
          <button className="button-news">Subscribe to Moozine</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
