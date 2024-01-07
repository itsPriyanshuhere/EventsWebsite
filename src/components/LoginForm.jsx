import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success('Logged In');
    navigate('/dashboard');
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      onSubmit={submitHandler}
      className="max-w-md mx-auto bg-black text-white p-8 rounded-md mt-24"
    >
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        {/* <button className="bg-richblack-900 text-richblack-5 py-2 px-5 rounded-full">
  
        </button> */}
      </div>

      <form>
        <div className="flex gap-x-4 mt-4">
          <label className="w-full">
            <p className="text-sm text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter email address"
              name="email"
              className="rounded-md text-black w-full p-2"
            />
          </label>

          <label className="w-full relative">
            <p className="text-sm text-richblack-5 mb-1 leading-[1.375rem]">
              Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              name="password"
              className="rounded-md text-black w-full p-2"
            />

            <span
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>

            <Link to="/forgot-password">
              <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                Forgot Password
              </p>
            </Link>
          </label>
        </div>

        <button className="w-full bg-purple-500 rounded-md font-medium text-white px-4 py-2 mt-6">
          Sign In
        </button>
      </form>
    </motion.form>
  );
};

export default LoginForm;
