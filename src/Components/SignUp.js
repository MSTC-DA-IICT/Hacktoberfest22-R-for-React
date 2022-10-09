import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const SignUp = () => {
  const [formData, SetFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: parseInt(""),
    password: "",
    confirmPassword: "",
    termIsAgree: true,
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
    <div id="form__container">
      <div className="inner">
        <div className="left__form"></div>
        <div className="right__form">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className= 'form__input'>
            <input
              type="text"
              placeholder="User Name*"
              name="userName"
              // id="firstName"
              value={formData.userName}
              onChange={handleChange}
              />
            <span>User Name</span>
              </div>
            <div className= 'form__input'>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              />
            <span>Email</span>
              </div>
            <div className= 'form__input'>
            <input
              type="number"
              placeholder="Phone"
              name="phoneNumber"
              // id=""
              value={formData.phoneNumber}
              onChange={handleChange}
              />
            <span>Phone</span>
              </div>
            <div className= 'form__input'>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              />
            <span>Password</span>
              </div>
            <div className= 'form__input'>
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              />
            <span>Confirm password</span>
              </div>
            <label htmlFor="agree">
              <input
                type="checkbox"
                id="agree"
                name="termIsAgree"
                checked={formData.termIsAgree}
                onChange={handleChange}
              />{" "}
              Agree to our Terms and Conditions?
            </label>
            <button>Create Account</button>
          </form>
          <p>Already have an Account? </p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
