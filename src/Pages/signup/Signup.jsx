import React, { useState } from "react";
import bro from "../../images/bro.png";
import vector from "../../images/Vector.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Email from "../../../svg components/Email";
import PassLock from "../../../svg components/PassLock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { store } from "../../GlobalStateManagement/globalStore";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError("Your password must be at least 8 characters long.");
    } else {
      setPasswordError("");
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (!email || !password || emailError || passwordError) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signin",
        {
          email,
          password,
        }
      );
      console.log(response.data); // Assuming your API returns some data upon successful sign-in
      if (response.data) {
        // Dispatch login action with user data
        
        store.data = response.data;
        navigate("/Dashboard");
      }
    } catch (err) {
      setEmailError(err.response.data.message); // Assuming your API returns error messages
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    // setShowPassword(!showPassword);
   

  };

  return (
    <div className="main flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="left w-full md:w-1/2 bg-[#4BCBEB] h-auto px-6 md:px-20 py-20 bg-[rgba(255, 255, 255, 0.06)] hidden md:block">
        <div className="flex items-center">
          <img src={vector} alt="Logo" className="mr-2 px-4" />
          <span>
            <h2 className="text-3xl font-bold text-white">Task Manager List</h2>
          </span>
        </div>
        <img src={bro} />
      </div>
      <div className="right w-1/2 md:w-1/2 h-full py-20">
        <div className="flex flex-col mx-6 md:mx-20">
          <h5 className="mb-3 text-3xl font-bold">Sign In to Your Account</h5>
          <p className="text-[#64748B]">
            Welcome Back! Please Enter Your Details!
          </p>
          <div className="relative">
            <div className="flex items-center border border-solid border-gray-300 rounded w-4/5">
              <div className="mt-1 ml-2">
                <Email />
              </div>
              <input
                id="email"
                className="text-sm flex-1 px-4 py-4 border-none outline-none"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
              />
            </div>
            {emailError && (
              <div className="text-red-500 text-xs mt-1">{emailError}</div>
            )}
          </div>
          <br />
          <div className="relative">
            <div className="flex items-center border border-solid border-gray-300 rounded w-4/5">
              <div className="mt-1 ml-2">
                <PassLock />
              </div>
              <input
                id="password"
                className="text-sm flex-1 px-4 py-4 border-none outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
                required
              />
              <span
                className="cursor-pointer"
                onClick={handleTogglePasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="text-gray-400 pr-2"
                />
              </span>
            </div>
            {passwordError && (
              <div className="text-red-500 text-xs mt-1">{passwordError}</div>
            )}
          </div>
          <br />
          <div className="mt-4 flex justify-between font-semibold text-sm mr-40">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mb-5" type="checkbox" required />
              <span className="pl-5">Remember me</span>
            </label>
            <span>
              <a
                className="text-[#4BCBEB] hover:underline hover:underline-offset-4 text-sm"
                href="/ResetPass"
              >
                Forgot Password?
              </a>
            </span>
          </div>
          <div className="text-center md:text-left">
            <button
              className="rounded-full mt-4 px-4 py-4 w-4/5 bg-[#4BCBEB] hover:bg-[#4BCBEB] text-white uppercase text-sm tracking-wider"
              type="submit"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </div>
          <div className="mt-8 mx-[70px] font-semibold text-sm text-slate-500 text-center md:text-left">
            Do not have an account?
            <span>
              <a
                className="text-[#4BCBEB] hover:underline hover:underline-offset-4 text-base font-bold"
                href="/"
              >
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
