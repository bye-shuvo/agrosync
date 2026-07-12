import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import borderBelow from "../../images/border-below.png";


const Navbar = ({ hero , about, tools , footer , newsLetter}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll direction for showing/hiding navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (window.scrollY > lastScrollY && window.scrollY > 300) {
        setIsVisible(false); // Scrolling down, hide navbar
      } else {
        setIsVisible(true); // Scrolling up, show navbar
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup when component unmounts
  }, [lastScrollY]); // Component did update

  return (
    <nav
      className={`text-white fixed top-0 left-0 w-full flex flex-col md:flex-row z-50 transition-transform duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolled ? "bg-[#2e5b3ca9]" : isMobileMenuOpen ? "bg-[#2e5b3ca9]" : "md:bg-transparent"}
        `}
    >
      <div className="w-full mx-auto px-6 py-3 md:py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl md:text-4xl font-bold flex items-center">
          <i className="fas fa-seedling mr-2"></i> AgroSync
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-10 text-2xl font-semibold">
          <span
            onClick={hero}
            className="hover:text-[#FFD700] group relative cursor-pointer"
          >
            <img
              className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.2rem] right-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            <Link to={"/"} className="">Home</Link>
          </span>
          <span
            onClick={tools}
            className="hover:text-green-200 group relative cursor-pointer"
          >
            <img
              className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.2rem] right-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            <Link to={"/"}>Tools</Link>
          </span>
          <span
            onClick={about}
            className="hover:text-green-300 group relative cursor-pointer"
          >
            <img
              className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.2rem] right-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            About
          </span>
          <span
            onClick={newsLetter}
            className="hover:text-green-200 group relative cursor-pointer"
          >
            <img
              className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.2rem] right-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            Newsletter
          </span>
          <span
            onClick={footer}
            className="hover:text-green-200 group relative cursor-pointer"
          >
            <img
              className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.2rem] right-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            Contact
          </span>
        </div>

        {/* CTA Button for Desktop */}
        {/* <div className="hidden md:block">
          <button className="text-xl font-bold bg-[#FFD700] text-[#2e5b3c] hover:bg-green-700 hover:text-white py-3 px-8 rounded-md transition-all duration-300 ease-in-out">
            Sign Up
          </button>
        </div> */}

        {/* Hamburger Menu for Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i
            className={`fas ${
              isMobileMenuOpen ? "fa-times" : "fa-bars"
            } md:text-3xl text-2xl`}
          ></i>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className={`md:hidden border-b-2 border-b-[#FFD700]`}>
          <div className="text-xl font-bold flex flex-col items-center space-y-4 py-4 px-6">
          <span
            onClick={hero}
            className="hover:text-[#FFD700] group relative cursor-pointer"
          >
            <img
              className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.2rem] right-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            <Link to={"/"}>Home</Link>
          </span>
          <span
            onClick={tools}
            className="hover:text-green-200 group relative cursor-pointer"
          >
            <img
              className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.2rem] right-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            <Link to={"/"}>Tools</Link>
          </span>
          <span
            onClick={about}
            className="hover:text-green-300 group relative cursor-pointer"
          >
            <img
              className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.2rem] right-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            <Link to={"/"}>About</Link>
          </span>
          <span
            onClick={newsLetter}
            className="hover:text-green-200 group relative cursor-pointer"
          >
            <img
              className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.2rem] right-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            <Link to={"/"}>Newsletter</Link>
          </span>
          <span
            onClick={footer}
            className="hover:text-green-200 group relative cursor-pointer"
          >
            <img
              className="absolute opacity-0 group-hover:opacity-100 bottom-[-0.2rem] right-0 transition-all duration-300 ease-in-out"
              src={borderBelow}
              alt="border-below"
            />
            <Link to={"/"}>Contact</Link>
          </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
