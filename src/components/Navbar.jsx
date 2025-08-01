import React from "react";

const Navbar = () => (
  <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50 mb-4">
    <div className="mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Sameer Gopali</h1>
        <div className="flex gap-6">
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center ">
            Projects
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
