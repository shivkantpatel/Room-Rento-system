import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaXmark } from "react-icons/fa6";


const UserSignIn = () => {

    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 100);
    }, []);

    let handleClose = (e) => {
        if (e.target.id === 'overLay') {
            setShow(false);
            setTimeout(() => navigate("/"), 300);
        }

    }

    const handleCloseIcon = () => {
        setShow(false);
        setTimeout(() => navigate("/"), 300);
    };



    return (
        <div
            id='overLay'
            onClick={handleClose}
            className={`fixed inset-0 bg-black/30 flex justify-center items-center transition-opacity duration-300 `} >


            <div className={`transform w-[40%] p-[30px] bg-white rounded shadow-[0px_7px_0px_0px_#303f9fc2]
                   transition-all duration-300 ease-in-out
                   ${show ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}>

                <div className="flex justify-end">
                    <FaXmark onClick={handleCloseIcon} className="text-red-600 text-2xl cursor-pointer" />
                </div>

                <h1 className=" text-[22px] font-semibold">Sign in to</h1>
                <span className="capitalize text-[16px] font-normal">Room renting system</span>


                <div className='mt-6'>
                    <label className='mb-1 block capitalize' htmlFor="email">email</label>
                    <input type="email"
                        className='border w-full px-2 py-2 rounded'
                        placeholder='Your@gmial.com'

                    />
                </div>
                <div className='mt-6'>
                    <label className='mb-1 block capitalize' htmlFor="Password">Password</label>
                    <input type="Password"
                        className='border w-full px-2 py-2 rounded'
                        placeholder='Password'
                    />
                </div>

                <button className='mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Sign in</button>

                <p className=' text-[13px] font-normal text-slate-600 mt-3'>Need an account? <NavLink to={'/Sign-Up'} className='text-[14px] text-blue-800 underline'>Sign Up</NavLink> </p>
                <p className='text-[13px] font-normal    text-slate-600'>Forgot your password? <span className='text-[14px] text-blue-800 underline'>Reset it</span> </p>
            </div>

        </div>
    )
}

export default UserSignIn



