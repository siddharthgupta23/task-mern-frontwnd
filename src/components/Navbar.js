import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="text-xl font-bold">Restaurant Booking</a>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-yellow-400">Home</a></li>
          <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          <li><a href="/login" className="hover:text-yellow-400">Login</a></li>
          <li><a href="/signup" className="hover:text-yellow-400">Signup</a></li>
      
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
