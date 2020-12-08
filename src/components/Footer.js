import React from "react";
import Cow from "../img/cooww.gif";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <img src={Cow} alt="" />
        Made with
        <a href="https://www.youtube.com/watch?v=EgT_us6AsDg"> &nbsp; 🤍</a>
        &nbsp; With <a href="org">&nbsp; React</a>
        &nbsp; by <a href="https://github.com/willymmerlet12">&nbsp; Will</a>
        <img id="coww" src={Cow} alt="" />
      </footer>
    </div>
  );
};

export default Footer;
