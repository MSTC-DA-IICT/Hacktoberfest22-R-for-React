import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import signIn from "../images/Mobile login-pana.svg";
import googleLogo from "../images/google-logo-9822.png";
const SignIn = () => {
  const [signInData, setSignInData] = useState({
    userName: "",
    password: "",
    termIsAgree: true,
  });
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setSignInData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <div className="inner">
      <div className="left__form">
        <img src={signIn} alt="sign up logo" />
        <p className="description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="right__form signin">
        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__input">
            <input
              type="text"
              name="userName"
              // id="firstName"
              value={signInData.userName}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span>User Name</span>
          </div>
          <div className="form__input">
            <input
              type="password"
              name="password"
              value={signInData.password}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon icon={faLock} className="icon" />
            <span>Password</span>
          </div>
          <div className="wrap__input agree__signin">
            <span>
              <input
                type="checkbox"
                id="agree"
                name="termIsAgree"
                checked={signInData.termIsAgree}
                onChange={handleChange}
              />
              <label htmlFor="agree">Remember me</label>
            </span>
            <span className="password__forgot">Forgot Password?</span>
          </div>
          <div className="btn__div">
            <button className="btn__submit">Login</button>
          </div>
        </form>
        <div className="btn">
          <img src={googleLogo} alt="google logo" className="google__logo" />
          <button className="btn__submit google">Sign in with Google</button>
        </div>
        <p className="is__account">
          don't yet have an account?
          <Link to="/" className="login__link"> SignUp</Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;
