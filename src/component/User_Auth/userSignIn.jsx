import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";

const UserSignIn = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  // Input states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  // ------------------------
  // LOGIN FUNCTION
  // ------------------------
 const handleLogin = async () => {
  if (!email || !password) return toast.error("Enter all fields");

  try {
    const res = await axios.post("http://localhost:5400/login", {
      email,
      password,
    });

    toast.success("Login Successful!");

    // Save JWT
    localStorage.setItem("token", res.data.token);

    // Redirect
    navigate("/profile");
  } catch (error) {
    toast.error(error.response?.data?.message || "Login failed");
  }
};


  return (
    <div
      id="overlay"
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50/30 via-white to-indigo-50 transition-all duration-300"
    >
      <div
        className={`relative w-[90%] sm:w-[70%] md:w-[45%] lg:w-[30%] p-8 bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg transition-all duration-500 transform ${
          show ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4">
          <FaXmark
            onClick={handleCloseIcon}
            className="text-gray-500 text-2xl cursor-pointer hover:text-red-500"
          />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome To Login</h1>
          <p className="text-gray-500 text-sm mt-2">
            Sign in to continue to <span className="font-semibold text-indigo-600">Room Rento</span>
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none text-gray-800"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg shadow-md transition duration-200"
          >
            Sign In
          </button>
        </div>

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
            <NavLink to="/Forget-Password" className="text-indigo-600 font-medium hover:underline cursor-pointer">
              Reset it
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignIn;
