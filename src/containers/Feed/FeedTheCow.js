import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../../components/Checkout/CheckOut";
import "./Feed.css";

const stripePromise = loadStripe(
  "pk_test_51HoU8OHjBeHezzTyg0Pm2ElnnPlw7fuAsIQ3EsYIPa9R0rPOZfImvT2xErEwg3C2IVCbvaFXWUHbDxUq2D6vtkdd00cWocRw8T"
);

const FeedTheCow = () => {
  return (
    <div className="feed-cont">
      <h3>Feed the Cow - We're Grateful</h3>
      <p style={{ lineHeight: 1.5, marginBottom: "10px", color: "#9e9e9e" }}>
        Although HappyCow is not a 501c3 (nor a non-profit organization), the
        site has been operating as a public service since its creation in 1999.
        All monetary payments go to build and improve this project. Everyone of
        us at HappyCow is fully dedicated to expanding this service, while
        maintaining the integrity of HappyCow. While you may notice our site
        does display advertisements, such revenue covers only a fraction of our
        expenses, and your individual contributions truly makes a difference in
        keeping the site running optimally. Learn more about this project
      </p>
      <p style={{ lineHeight: 1.5, marginBottom: "10px", color: "#9e9e9e" }}>
        payment will be used to maintain, improve, and create additional
        user-friendly features for the HappyCow website. This includes covering
        our monthly dedicated server costs, paying our vegan staff who help add
        and update listings, paying developers who are continuously working on
        improving site functionality, as well as paying for printing flyers and
        decals, outreach and events, and other operational expenses.
      </p>
      <p style={{ fontWeight: 700, marginBottom: "10px", marginTop: "20px" }}>
        Please choose your option for giving:
      </p>
      <ul>
        <li style={{ color: "#9e9e9e", marginBottom: "5px" }}>
          - Cash, checks, money orders by mail (HappyCow receives full amount)
        </li>
        <li style={{ color: "#9e9e9e", marginBottom: "10px" }}>
          - Credit or debit cards via Paypal.com (HappyCow pays 4% fee (more if
          under $5) for this type of service)
        </li>
      </ul>
      <p>
        Click on a link below to make a secure credit card payment for any
        amount you choose:
      </p>
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
};

export default FeedTheCow;
