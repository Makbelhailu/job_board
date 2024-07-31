import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { UserButton, useClerk, useUser } from "@clerk/clerk-react";

const NavBar = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const clerk = useClerk();
  const [accountType, setAccountType] = useState("");

  useEffect(() => {
    if (isSignedIn) setAccountType(user.unsafeMetadata.accountType);
  }, [isLoaded]);

  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
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
              className={`link ${path == "/" ? "active" : ""}`}
              onClick={(e) => {
                setPath("/");
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/jobs"
              className={`link ${path == "/jobs" ? "active" : ""}`}
              onClick={(e) => {
                setPath("/jobs");
              }}
            >
              Jobs
            </Link>
          </li>

          {accountType && <customLink type={accountType} />}
          <li>
            <Link
              to="/about"
              className={`link ${path == "/about" ? "active" : ""}`}
              onClick={(e) => {
                setPath("/about");
              }}
            >
              About
            </Link>
          </li>
        </ul>

        {isSignedIn ? (
          <UserButton
            appearance={{ elements: { userButtonAvatarBox: "w-9 h-9" } }}
          />
        ) : (
          <div className="profile ml-5 flex gap-2">
            <button
              className="btn-secondary"
              onClick={() => clerk.openSignIn()}
            >
              Login
            </button>
            <button className="btn-primary" onClick={() => clerk.openSignUp()}>
              Register
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

function customLink({ type }) {
  if (type === "freelancer") {
    return (
      <li>
        <Link
          to="/applications"
          className={`link ${path == "/applications" ? "active" : ""}`}
          onClick={(e) => {
            setPath("/applications");
          }}
        >
          Applications
        </Link>
      </li>
    );
  } else if (type === "company") {
    return (
      <li>
        <Link
          to="/posts"
          className={`link ${path == "/posts" ? "active" : ""}`}
          onClick={(e) => {
            setPath("/posts");
          }}
        >
          Posts
        </Link>
      </li>
    );
  }
}

export default NavBar;
