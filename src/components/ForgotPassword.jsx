import { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  // const [email, setEmail] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission
  };

  return (
    <div className="place-items-center">
      <div className="max-w-md mx-auto bg-black text-white p-8 rounded-md mt-4">
        <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max"></div>

        <form onSubmit={handleOnSubmit}>
        <div className="mt-4">
          <label className="w-full">
            <p className="text-sm text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              
              placeholder="Enter Email Address"
              
              className="bg-richblack-800 rounded-md text-black w-full p-2"
            />
          </label>
        </div>

        <button className="w-[8rem] bg-purple-500 rounded-md font-medium text-white px-4 py-2 mt-6">
          Enter Email
        </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <Link to="/login">
            <p className="flex items-center gap-x-2 text-white">
              <BiArrowBack /> Back To Login
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
