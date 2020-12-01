import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import cow from "../img/cow.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import YearPicker from "react-year-picker";

const Signup = ({ setUser }) => {
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setVegan(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [location, setLocation] = useState("");
  const [birth, setBirth] = useState([]);
  const [vegan, setVegan] = useState([]);

  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("location", location);
  formData.append("birth", birth);
  formData.append("vegStatus", vegan);

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (username && email && password) {
        const response = await axios.post(
          "http://localhost:3100/user/signup",
          formData
        );
        console.log(response.data);
        setUser(response.data.token);
        history.push("/");
      } else {
        alert("missing informations!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="cont">
        <img className="cow" src={cow} alt="" />

        <div className="signup-container">
          <form onSubmit={handleSubmit} className="signup-form">
            <h3>
              Join the largest vegan community and vegetarian community in the
              world.
            </h3>
            <div className="input-user-pass">
              <div className="col">
                <label htmlFor="username">Username</label>
                <input
                  className="text-input"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  placeholder="Username"
                />
              </div>
              <div className="col">
                <label htmlFor="password">Password</label>
                <input
                  className="text-input"
                  type="password"
                  name="password"
                  secureEntry={secure}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  placeholder="Password"
                />
                {secure ? (
                  <FontAwesomeIcon
                    icon="fa-eye"
                    onPress={() => setSecure(false)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="fa-eye-slash"
                    onPress={() => setSecure(true)}
                  />
                )}
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <input
              className="email-input"
              type="email"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              placeholder="Email"
            />
            <div className="input-user-pass">
              <div className="col">
                <label id="open-select-label">VegStatus</label>
                <Select
                  className="select"
                  labelId="open-select-label"
                  id="open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={vegan}
                  onChange={(event) => {
                    setVegan(event.target.value);
                  }}
                >
                  <MenuItem value="none">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Vegan</MenuItem>
                  <MenuItem value={20}>Vegetarian</MenuItem>
                  <MenuItem value={30}>Mid-Veg</MenuItem>
                  <MenuItem value={40}>Herbivore</MenuItem>
                  <MenuItem value={50}>Fruitarian</MenuItem>
                </Select>
              </div>
              <div className="col">
                <label id="open-select-label" className="are">
                  Birth Year
                </label>
                <YearPicker className="year-picker" />
              </div>
            </div>
            <label id="open-select-label">Your home city</label>
            <input
              className="email-input city-input"
              type="text"
              name="location"
              value={location}
              onChange={(event) => {
                setLocation(event.target.value);
              }}
              placeholder="Your home city"
            />
            <div className="row">
              <p className="conditions">
                I agree to the Terms of Use and Privacy Policy and default
                notification settings. I am 13+ years old.
              </p>
              <input
                type="radio"
                name="demo2"
                class="demo2 demoyes"
                id="demo2-a"
                checked
              />
              <label for="demo2-a">I agree</label>
              <input
                type="radio"
                name="demo2"
                class="demo2 demono"
                id="demo2-b"
              />
              <label for="demo2-b">I don't agree</label>
            </div>
            <div className="row">
              <p className="update ">
                Get updates on new openings, vegan products, and local specials
                near you.
              </p>
              <input type="checkbox" className="check" />
            </div>
            <p className="sell">
              We never sell your info or let other companies use it. You may
              adjust settings later via your profile on the website.
            </p>
            <button className="but-signup" type="submit">
              Register
            </button>
          </form>
          <Link to="/login"> Tu as déjà un compte? Connecte-toi!</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
