import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bro from "../../images/bro.png";
import vector from "../../images/Vector.png";
function Login() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
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

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      navigate("/signup");
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

          <input
            id="fullName"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Enter Your Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="email"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded mt-4"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded my-4"
            type="password"
            placeholder="Password"
            value={password}
            // onChange={handlePasswordChange}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && (
            <div className="text-red-500 text-xs mt-1">{passwordError}</div>
          )}
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
