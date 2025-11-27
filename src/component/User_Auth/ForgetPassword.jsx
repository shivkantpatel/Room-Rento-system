import axios, { Axios } from "axios";
import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ============================================ 
  // 1️⃣ SEND OTP
  // ============================================

  const sendOtp = async () => {

    setLoading(true);

    if (!email) {
      toast.error("Please enter your email");
      setLoading(false);
      return;
    }

    try {

      const response = await axios.post("http://localhost:5400/forget-Email-verification", { email });

      if (response.status === 200) {
        toast.success(response.data.message);
        setStep(2) // ===== this condion tru so new step move =====
      }

    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message || "Something went wrong");
      } else {
        toast.error("Server not responding. Please try again later.");
      }

    } finally {
      setLoading(false);
    }
  }


  // ============================================
  // 2️⃣ VERIFY OTP
  // ============================================




  const verifyOtp = async () => {

    setLoading(true);
    const otpString = otp.join("");

    if (otpString.length !== 6) return alert("Enter all 6 digits of OTP");

    try {


      const response = await axios.post("http://localhost:5400/verify-otp", { email, otp });

      if (response.status === 200) {
        toast.success(response.data.message);
        setStep(3) // ===== this condion tru so new step move =====
      }

    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message || "Something went wrong");
      } else {
        toast.error("Server not responding. Please try again later.");
      }

    } finally {
      setLoading(false);
    }


  };

  // ============================================
  // 3️⃣ RESET PASSWORD
  // ============================================
 const resetPassword = async () => {
  if (!newPassword) return toast.error("Please enter a new password");

  try {
    const response = await axios.post(
      "http://localhost:5400/rest-new-password",
      { email, newPassword }
    );

    // Axios stores JSON in response.data
    toast.success(response.data.message);

    // Reset states
    setStep(1);
    setEmail("");
    setOtp(["", "", "", "", "", ""]);
    setNewPassword("");

  } catch (error) {
    if (error.response) {
      // Server responded with an error (400, 404, 500)
      toast.error(error.response.data.message || "Error updating password");
    } else {
      // Network error / server down
      toast.error("Server not responding. Try again later.");
    }

    console.error(error);
  }
};


  // ============================================
  // HANDLE OTP INPUT (auto jump)
  // ============================================
  const handleOtpChange = (value, index) => {
    if (value.length > 1) return;

    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Backspace → Go to previous input
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-[400px] border border-gray-100">

        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Forgot Password
        </h1>

        {/* STEP 1: SEND OTP */}
        {step === 1 && (
          <div className="space-y-5 animate-fadeIn">
            <label className="text-sm text-gray-600 font-medium">Email Address</label>

            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-400 text-lg" />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full p-3 pl-10 bg-gray-100 border border-gray-300 rounded-lg 
                outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button

              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white 
            font-semibold py-2.5 rounded-xl shadow-md transition-all duration-300 cursor-pointer
            hover:shadow-lg"
              disabled={loading}
              onClick={sendOtp}
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </div>
        )}

        {/* STEP 2: VERIFY OTP */}
        {step === 2 && (
          <div className="space-y-5 animate-fadeIn">
            <label className="text-sm text-gray-600 font-medium">Enter OTP</label>

            <div className="flex justify-between">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  id={`otp-${i}`}
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-12 h-12 bg-gray-100 border border-gray-300 rounded-lg text-center text-lg outline-none focus:ring-2 focus:ring-blue-400"
                />
              ))}
            </div>

            <button

              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white 
            font-semibold py-2.5 rounded-xl shadow-md transition-all duration-300 cursor-pointer
            hover:shadow-lg"
              disabled={loading}
              onClick={verifyOtp}
            >
              {loading ? "Verify OTP..." : "Verify OTP"}
            </button>
          </div>
        )}

        {/* STEP 3: RESET PASSWORD */}
        {step === 3 && (
          <div className="space-y-5 animate-fadeIn">
            <label className="text-sm text-gray-600 font-medium">New Password</label>

            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-400 text-lg" />
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full p-3 pl-10 bg-gray-100 border border-gray-300 rounded-lg 
                outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <button
              className="w-full p-3 rounded-lg cursor-pointer bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
              onClick={resetPassword}
            >
              Change Password
            </button>
          </div>
        )}

        <p
          className="text-center text-gray-500 text-sm mt-6 cursor-pointer hover:text-gray-700 transition"
          onClick={() => {
            setStep(1);
            setEmail("");
            setOtp(["", "", "", "", "", ""]);
            setNewPassword("");
          }}
        >
          Restart Process
        </p>
      </div>
    </div>
  );
}
