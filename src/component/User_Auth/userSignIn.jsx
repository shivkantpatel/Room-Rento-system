import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

const UserSignIn = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  const handleClose = (e) => {
    if (e.target.id === "overlay") {
      setShow(false);
      setTimeout(() => navigate("/"), 300);
    }
  };

  const handleCloseIcon = () => {
    setShow(false);
    setTimeout(() => navigate("/"), 300);
  };

  return (
    <div
      id="overlay"
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50/30 via-white to-indigo-50 transition-all duration-300"
    >
      <div
        className={`relative w-[90%] sm:w-[70%] md:w-[45%] lg:w-[30%] p-8 bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg transition-all duration-500 transform ${
          show ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <FaXmark
            onClick={handleCloseIcon}
            className="text-gray-500 text-2xl cursor-pointer hover:text-red-500 "
          />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back 👋</h1>
          <p className="text-gray-500 text-sm mt-2">
            Sign in to continue to <span className="font-semibold text-indigo-600">Room Rento</span>
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <div className="w-1/4 h-[1px] bg-gray-300"></div>
          <p className="text-gray-400 text-xs mx-2">OR</p>
          <div className="w-1/4 h-[1px] bg-gray-300"></div>
        </div>

        {/* Links */}
        <div className="text-center text-sm text-gray-600">
          <p>
            Need an account?{" "}
            <NavLink to="/Sign-Up" className="text-indigo-600 font-medium hover:underline">
              Sign Up
            </NavLink>
          </p>
          <p className="mt-1">
            Forgot password?{" "}
            <span className="text-indigo-600 font-medium hover:underline cursor-pointer">
              Reset it
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignIn;
