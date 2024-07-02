import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [path, setPath] = useState(window.location.pathname.split("/")[1]);

  useEffect(() => {
    setPath(window.location.pathname.split("/")[1]);
  }, []);
  return (
    <div className="my-4 flex w-full items-center justify-between">
      <div className="logo">
        <h1 className="ml-5 text-2xl font-bold uppercase text-secondary">
          job<span className="text-orangeish">hunt</span>
        </h1>
      </div>
      <nav className="flex items-center justify-between  gap-10">
        <ul className="text-md inline-flex gap-x-10 text-center font-semibold">
          <li>
            <Link
              to="/"
              className={`link ${path == "" ? "active" : ""}`}
              onClick={(e) => {
                setPath("");
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`link ${path == "about" ? "active" : ""}`}
              onClick={(e) => {
                setPath("about");
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/jobs"
              className={`link ${path == "jobs" ? "active" : ""}`}
              onClick={(e) => {
                setPath("jobs");
              }}
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className={`link ${path == "service" ? "active" : ""}`}
              onClick={(e) => {
                setPath("service");
              }}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`link ${path == "contact" ? "active" : ""}`}
              onClick={(e) => {
                setPath("contact");
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="profile ml-5 flex gap-2">
          <button className="btn-secondary">Login</button>
          <button className="btn-primary">Register</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
