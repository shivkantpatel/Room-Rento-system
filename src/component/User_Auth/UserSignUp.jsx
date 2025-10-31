import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

function UserSignUp() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    // start animation when mounted
    useEffect(() => {
        setTimeout(() => setShow(true), 100);
    }, []);

    const handleClose = (e) => {
        if (e.target.id === "overlay") {
            setShow(false);
            setTimeout(() => navigate("/"), 300); // wait for animation to finish
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
            className={`fixed inset-0 bg-black/30 flex justify-center items-center transition-opacity duration-300 
                `}
        >
            <div

                className={`transform w-[40%] p-[40px] bg-white rounded shadow-[0px_7px_0px_0px_#303f9fc2]
                   transition-all duration-300 ease-in-out
                   ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} >


                <div className="flex justify-end">
                    <FaXmark onClick={handleCloseIcon} className="text-red-600 text-2xl cursor-pointer" />
                </div>


                <h1 className="text-[22px] font-semibold">Sign Up to</h1>
                <span className="capitalize text-[16px] font-normal">
                    Room renting system
                </span>

                <div className="mt-6">
                    <label className="mb-1 block capitalize" htmlFor="email">
                        email
                    </label>
                    <input
                        type="email"
                        className="border w-full px-2 py-2 rounded"
                        placeholder="Your@gmail.com"
                    />
                </div>

                <div className="mt-6">
                    <label className="mb-1 block capitalize" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        className="border w-full px-2 py-2 rounded"
                        placeholder="Password"
                    />
                </div>

                <button

                    className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none
                     focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default UserSignUp;
