import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const Footer = forwardRef((props , ref) => {
  return (
    <footer ref={ref} className="md:h-[50vh] bg-[#23472f] relative text-gray-300 py-10">{/* have to work on this */}
      <img className="absolute top-[-3.5%] md:top-[-6%] left-0 h-6 w-full object-cover hue-rotate-[40deg]" src="/src/images/grass-line.png" alt="green-grass" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-white text-lg md:text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-sm md:text-xl mb-4">
            We are committed to revolutionizing agriculture with modern tools, technologies, and insights to empower farmers worldwide.
            <br />
            <br />
            Developed by: Team AgroSync
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-white text-lg md:text-3xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 md:text-xl mb-4">
            <li>
              <Link href="/" className="hover:text-white ">Home</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h2 className="text-white text-lg md:text-3xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2 md:text-xl mb-4">
            <li>Email: <a href="mailto:agrosyncbd@gmail.com" className="hover:text-white">agrosyncbd@gmail.com</a></li>
            <li>Phone: <a href="tel:+123456789" className="hover:text-white">+1 234 567 89</a></li>
            <li>Address: FEC</li>
          </ul>
          <div className="flex space-x-4 mt-4 md:text-2xl">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-[#FFD700] pt-6 text-center text-lg md:text-xl">
        <p>&copy; {new Date().getFullYear()} Agro-Sync. All Rights Reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;
