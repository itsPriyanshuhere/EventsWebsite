import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";

const arr = [
  { name: "Home", hash: "/" },
  { name: "Shows", hash: "shows" },
  { name: "Contact", hash: "contact" },
];

const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20, top: 0 }}
        animate={{ opacity: 1, y: 0, top: 6 }}
        transition={{ duration: 0.8 }}
        className="fixed text-white top-6 left-4 right-4 bg-opacity-80 bg-black z-10 px-2 py-1"
      >
        <nav className="flex justify-between items-center pt-6">
          <div className="flex items-center space-x-12">
            {/* Spacer to push the links to the center */}
            <div className="flex-grow"></div>
            {arr.map((item) => (
              <Link
                key={item.hash}
                to={`${item.hash}`}
                className="text-white text-2xl font-bold shadow-md items-center justify-center font-raleway transition duration-300 hover:text-purple-400"
              >
                {item.name}
              </Link>
            ))}
            {/* Spacer to push the links to the center */}
            <div className="flex-grow"></div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center gap-2 text-white hover:text-purple-400 transition duration-300"
            >
              <FaRegUser /> <span className="font-bold">Login</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-2 text-white hover:text-purple-400 transition duration-300"
            >
                <span className="font-bold">SignUp</span>
            </Link>
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
