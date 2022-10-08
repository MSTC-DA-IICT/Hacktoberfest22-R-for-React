import React from "react";
const SignUp = () => {
  return (
    <div>
        <h1>Sign up</h1>
        <form>
            <div>
                <input type="text" placeholder="first name*" name="firstName" id="firstName"/>
                <input type="text" placeholder="last name*" name="lastName" id="lastName"/>
            </div>
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="Password" name="passWord"/>
            <input type="password" placeholder="Confirm password" name="confirmPassword" />
            <button>Create Account</button>
        </form>
    </div>
  )
}
export default SignUp