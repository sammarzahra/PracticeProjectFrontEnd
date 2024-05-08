import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bro from "../../images/bro.png";
import vector from "../../images/Vector.png";
import UserIcon from "../../../../svg components/UserIcon";
import Email from "../../../../svg components/Email";
import PassLock from "../../../../svg components/PassLock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setPasswordError("Your password is not strong enough.");
    } else {
      setPasswordError("");
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:3000/api/users/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/signup");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="main flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="left w-full md:w-1/2 bg-[#4BCBEB] h-auto px-6 md:px-20 py-20 bg-[  rgba(255, 255, 255, 0.06)] hidden md:block">
        <div className="flex items-center">
          <img src={vector} alt="Logo" className="mr-2" />
          <span>
            <h2 className="text-3xl font-bold text-white">Task Manager List</h2>
          </span>
        </div>
        <img src={bro} alt="Illustration" className="w-full" />
      </div>
      <div className="right w-1/2 md:w-1/2  h-full py-20">
        <div className="flex flex-col mx-6  md:mx-20">
          <h5 className="mb-3 font-bold text-3xl">Sign Up for an Account</h5>
          <div className="relative">
            <div className="flex items-center border border-solid border-gray-300 rounded w-4/5">
              <div className=" mt-1 ml-2">
                <UserIcon />
              </div>
              <input
                id="fullName"
                className="text-sm flex-1 px-4 py-4 border-none outline-none"
                type="text"
                placeholder="Enter Your Full Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="relative">
            <div className="flex items-center border border-solid border-gray-300 rounded w-4/5">
              <div className=" mt-1 ml-2">
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
              <div className=" mt-1 ml-2">
                <PassLock />
              </div>
              <input
                id="password"
                className="text-sm flex-1 px-4 py-4 border-none outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
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
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1 mb-5" type="checkbox" required />
              <span>
                By creating an account means you agree to the
                <strong>
                  Terms <br />
                  and Conditions
                </strong>
                and our
                <strong> Privacy Policy</strong>
              </span>
            </label>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 px-4 py-4 w-4/5 bg-[#4BCBEB]   text-white uppercase rounded text-xs tracking-wider"
              type="submit"
              onClick={collectData}
            >
              SignUp
            </button>
          </div>
          <div className="mt-8  mx-16 font-semibold text-sm text-slate-500 text-center md:text-left">
            Already have an account?
            <span>
              <a
                className="text-[#4BCBEB] hover:underline hover:underline-offset-4"
                href="/signup"
              >
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
