import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className="bg-gray-900/90 backdrop-blur-lg border-b border-gray-700 sticky top-0 z-50 ">
            <div className="mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold text-white">Sameer Gopali</h1>
                    <div className="flex gap-6">
                        <Link
                            to="/"
                            className={`flex items-center transition-colors ${
                                location.pathname === "/"
                                    ? "text-blue-400"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/projects"
                            className={`flex items-center transition-colors ${
                                location.pathname === "/projects"
                                    ? "text-blue-400"
                                    : "text-gray-300 hover:text-white"
                            }`}
                        >
                            Projects
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
