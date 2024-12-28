import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Clinic</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/appointments" className="hover:text-gray-200 transition">Booked Appointments</Link>
          </li>
          <li>
            <Link to="/doctors" className="hover:text-gray-200 transition">Doctors</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
