import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mb-5 flex w-full items-center justify-between">
      <div className="logo">
        <h1 className="ml-5 text-2xl font-bold uppercase text-secondary">
          job<span className="text-orangeish">hunt</span>
        </h1>
      </div>
      <nav className="flex items-center justify-between  gap-10">
        <ul className="text-md inline-flex gap-x-10 text-center font-semibold">
          <li>
            <Link to="/" className="font-bold opacity-100">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="opacity-70">
              About
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="opacity-70">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/service" className="opacity-70">
              Service
            </Link>
          </li>
          <li>
            <Link to="/contact" className="opacity-70">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="profile ml-5 flex gap-2">
          <button className="btn-primary">Login</button>
          <button className="btn-secondary">Register</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
