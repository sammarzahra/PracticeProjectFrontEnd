// import React, { useState } from "react";
// import bro from "../../images/bro.png";
// import vector from "../../images/Vector.png";
// function Signup() {
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const handlePasswordChange = (e) => {
//     const newPassword = e.target.value;
//     setPassword(newPassword);
//     if (newPassword.length < 8) {
//       setPasswordError("Your password is not strong enough.");
//     } else {
//       setPasswordError("");
//     }
//   };
//   return (
//     <div className="main flex justify-center items-center h-screen">
//       <div className="left w-1/2 bg-[#4BCBEB] h-full px-[130px] pt-[100px] bg-[  rgba(255, 255, 255, 0.06)]">
//         <div className="flex items-center">
//           <img src={vector} alt="Logo" className="mr-2 px-4" />
//           <span>
//             <h2 className="text-3xl font-bold text-white">Task Manager List</h2>
//           </span>
//         </div>
//         <img src={bro} />
//       </div>
//       <div className="right w-1/2  h-full pt-[100px] ">
//         <div className="flex flex-col mx-[100px]">
//           <h5 className="mb-3 font-bold text-3xl">Sign In To your Account</h5>
//           <p className="text-[#64748B]">
//             Welcome back!please enter your details
//           </p>

//           <input
//             id="email"
//             className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded mt-4"
//             type="email"
//             placeholder="Email"
//             required
//           />
//           <input
//             id="password"
//             className="text-sm w-4/5 px-4 py-4 border border-solid border-gray-300 rounded my-4"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//           {passwordError && (
//             <div className="text-red-500 text-xs mt-1">{passwordError}</div>
//           )}
//           <div className="mt-4 flex justify-between font-semibold text-sm">
//             <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
//               <input className="mr-1 mb-5" type="checkbox" required />
//               <span>
//                 <strong className=" text-[#0F172A] font-Poppins line-height[21px] pr-32 ">
//                   Remember me
//                 </strong>

//                 <b>Forgot Password?</b>
//               </span>
//             </label>
//           </div>
//           <div className="text-center md:text-left">
//             <button
//               className="mt-4 w-4/5 bg-[#4BCBEB] hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
//               type="submit"
//             >
//               SignUp
//             </button>
//           </div>
//           <div className="mt-8 mx-[70px] mx-4 font-semibold text-sm text-slate-500 text-center md:text-left">
//             Don't have an account?
//             <span>
//               <a
//                 className="text-[#4BCBEB] hover:underline hover:underline-offset-4"
//                 href="#"
//               >
//                 Signup
//               </a>
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Signup;

import React, { useState } from "react";
import bro from "../../images/bro.png";
import vector from "../../images/Vector.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Email from "../../../../svg components/Email";
import PassLock from "../../../../svg components/PassLock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://localhost:3000/api/users/signin",
				{
					email,
					password,
				}
			);
			console.log(response.data); // Assuming your API returns some data upon successful sign-in
			// Handle successful sign-in, e.g., redirect to another page
			navigate("/dashboard");
		} catch (err) {
			setError(err.response.data.message); // Assuming your API returns error messages
		}
	};

	const handleTogglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	const validateEmail = () => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!regex.test(email)) {
			setError("Please enter a valid email address.");
		} else {
			setError("");
		}
	};

	return (
		<div className="main flex flex-col md:flex-row justify-center items-center h-screen">
			<div className="left w-full md:w-1/2 bg-[#4BCBEB] h-auto px-6 md:px-20 py-20 bg-[  rgba(255, 255, 255, 0.06)] hidden md:block">
				<div className="flex items-center">
					<img src={vector} alt="Logo" className="mr-2 px-4" />
					<span>
						<h2 className="text-3xl font-bold text-white">Task Manager List</h2>
					</span>
				</div>
				<img src={bro} />
			</div>
			<div className="right w-1/2 md:w-1/2  h-full py-20  ">
				<div className="flex flex-col mx-6  md:mx-20">
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
								onChange={(e) => setEmail(e.target.value)}
								onBlur={validateEmail}
							/>
						</div>
						{error && (
							<div className="text-red-500 text-xs mt-1">{error}</div>
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
					</div>
					<br />
					<div className="mt-4 flex justify-between font-semibold text-sm mr-40">
						<label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
							<input className=" mb-5" type="checkbox" required />
							<span className="pl-5">Remember me</span>
						</label>
						<span>
							<a
								className="text-[#4BCBEB] hover:underline hover:underline-offset-4 text-sm"
								href=""
							>
								Forgot Password?
							</a>
						</span>
					</div>
					<div className="text-center md:text-left">
						<button
							className="rounded-full mt-4 px-4 py-4 w-4/5 bg-[#4BCBEB] hover:bg-blue-700  text-white uppercase text-sm tracking-wider"
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
								href="#"
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
export default SignUp;

