import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Cookie from "js-cookie";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faAngleDoubleDown,
  faEyeSlash,
  faEye,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

library.add(faAngleDoubleDown, faEye, faEyeSlash, faStar);

function App() {
  const [token, setToken] = useState(Cookie.get("userToken") || null);
  const [isLoading, setIsLoading] = useState(true);
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
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
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
