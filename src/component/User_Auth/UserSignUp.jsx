import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

const UserSignUp = () => {
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
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50/30 via-white to-indigo-100 transition-all duration-300"
    >
      {/* Sign-Up Card */}
      <div
        className={`relative w-[90%] sm:w-[75%] md:w-[45%] lg:w-[35%] 
        bg-white/60 backdrop-blur-lg border border-white/40 
        rounded-3xl shadow-[0_6px_20px_rgba(99,102,241,0.15)]
        p-8 transition-all duration-500 ease-in-out 
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      >
        {/* Close Button */}
        <button
          onClick={handleCloseIcon}
          className="absolute top-5 right-5 text-gray-600 hover:text-red-500 transition-all duration-200"
        >
          <FaXmark className="text-2xl" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
            Create an Account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Join our <span className="text-indigo-600 font-medium">Room Rento</span>{" "}
            community
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 
              bg-white/70 focus:ring-2 focus:ring-indigo-400 outline-none
              text-gray-700 placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 
              bg-white/70 focus:ring-2 focus:ring-indigo-400 outline-none
              text-gray-700 placeholder-gray-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              maxLength={10}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 
              bg-white/70 focus:ring-2 focus:ring-indigo-400 outline-none
              text-gray-700 placeholder-gray-400"
            />
            <p className="text-xs text-gray-400 mt-1">Max 10 characters</p>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white 
            font-semibold py-2.5 rounded-xl shadow-md transition-all duration-300
            hover:shadow-lg"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => {
              setShow(false);
              setTimeout(() => navigate("/Sign-In"), 300);
            }}
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
