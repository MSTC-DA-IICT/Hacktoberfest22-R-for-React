import React, { useState } from "react";
import { FaFontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import signUp from "../images/login-image.svg";
import googleLogo from "../images/google-logo-9822.png";

const SignUp = () => {
  const [formData, SetFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: parseInt(),
    password: "",
    confirmPassword: "",
    termIsAgree: false,
  });
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    SetFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <div className="inner">
      <div className="left__form">
        <img src={signUp} alt="sign up logo" />
        <p className="description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="right__form">
        <h1>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__input">
            <input
              type="text"
              name="userName"
              // id="firstName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span>User Name</span>
          </div>
          <div className="form__input">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>Email</span>
          </div>
          <div className="form__input">
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span>Phone</span>
          </div>
          <div className="form__input">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon icon={faLock} className="icon" />
            <span>Password</span>
          </div>
          <div className="form__input">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <FontAwesomeIcon icon={faLock} className="icon" />
            <span>Confirm password</span>
          </div>
          <span>
            <input
              type="checkbox"
              id="agree"
              name="termIsAgree"
              checked={formData.termIsAgree}
              onChange={handleChange}
              required
            />{" "}
            <label htmlFor="agree">Agree to our</label>
            <span className="terms"> Terms and Conditions?</span>
          </span>
          <div className="btn__div">
            <button className="btn__submit">Create Account</button>
          </div>
        </form>
        <div className="btn">
          <img src={googleLogo} alt="google logo" className="google__logo" />
          <button className="btn__submit google">sign up with Google</button>
        </div>
        <p className="is__account">
          Already have an Account?{" "}
          <Link to="/SignIn" className="login__link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
