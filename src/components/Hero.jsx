import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import X from "../assets/X.png";
import Cards from "./Cards";
import Carddata from "../constants/Carddata";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCards = Carddata.filter((card) =>
    card.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="flex justify-center items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 80 }}
        transition={{
          ease: "linear",
          duration: 0.8,
          x: { duration: 0.6 },
        }}
      >
        <img src={X} alt="heroimg" width={96} height={84} />
      </motion.div>
      <div className="mt-24 text-white font-mono text-2xl text-center font-bold mb-2">
        LIST OF SHOWS
      </div>
      <div className="flex items-center mt-4">
        <CiSearch
          onClick={handleSearchClick}
          className={`cursor-pointer bg-white ${isSearchOpen ? "hidden" : ""}`}
        />

        {isSearchOpen && (
          <input
            type="search"
            id="search"
            name="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full ml-2 py-2 px-3 rounded-md bg-white focus:ring focus:ring-purple-500 text-black font-mono text-xl"
          />
        )}
      </div>
      <motion.div className="flex flex-wrap justify-center w-full mt-8"
        initial={{opacity:0,y:80}}
        animate={{opacity:1,y:-10}}
        transition={{
          duration:0.8,
          delay:0.2
        }}
      >
        {filteredCards.map((data) => (
          <Cards key={data.id} {...data} />
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;