import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./containers/Login/Login";
import Signup from "./containers/Signup/Signup";
import Cookie from "js-cookie";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Details from "./containers/Detail/Details";
import NewsLetter from "./containers/NewsLetter/NewsLetter";
import SearchBar from "./components/SearchBar/SearchBar";
import FeedTheCow from "./containers/Feed/FeedTheCow";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDoubleDown,
  faEyeSlash,
  faEye,
  faStar,
  faHome,
  faClock,
  faPhone,
  faMapMarker,
  faDollarSign,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngleDoubleDown,
  faEye,
  faEyeSlash,
  faStar,
  faHome,
  faClock,
  faPhone,
  faMapMarker,
  faDollarSign,
  faSearch
);

function App() {
  const [token, setToken] = useState(Cookie.get("userToken") || null);

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookie.set("userToken", tokenToSet);
      setToken(tokenToSet);
    } else {
      Cookie.remove("userToken");
      setToken(null);
    }
  };
  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <Switch>
        <Route path="/feedthecow">
          <FeedTheCow />
        </Route>
        <Route path="/newsletter">
          <NewsLetter />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/restaurant/:id">
          <Details />
        </Route>
        <Route path="/result/:search">
          <SearchBar />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
