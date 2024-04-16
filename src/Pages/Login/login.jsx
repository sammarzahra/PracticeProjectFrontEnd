import React from "react";

import { UserIcon, MailIcon, KeyIcon } from "@heroicons/react/outline";

function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 sm:flex-row">
      <div className="sm:w-1/2 bg-white p-8 flex justify-center">
        <img
          src="https://via.placeholder.com/300"
          alt="Placeholder"
          className="h-48"
        />
      </div>
      <div className="sm:w-1/2 bg-white p-8 flex justify-center items-center">
        <div className="sm:max-w-md w-full">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Sign Up for an account
          </h2>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div>
              {/* <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              ></label> */}

              <div className="relative">
                <UserIcon className="h-5 w-5 inline-block -mt-1 mr-2" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Your Full Name"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                <MailIcon className="h-5 w-5 inline-block -mt-1 mr-2" />
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                <KeyIcon className="h-5 w-5 inline-block -mt-1 mr-2" />
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
              />
              <small className="block text-xs text-gray-400">
                Your Password must have at least 8 characters
              </small>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-900"
              >
                By creating an account means you agree to the
                <span className="font-bold"> Terms & Conditions</span>
                and our
                <span className="font-bold"> privacy Policy</span>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
