import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { UserButton, useClerk, useUser } from "@clerk/clerk-react";

import MyDrawer from "./drawer";
import CustomLink from "./customLink";

const NavBar = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const clerk = useClerk();
  const [accountType, setAccountType] = useState("");

  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    if (isSignedIn) {
      setAccountType(user.unsafeMetadata.AccountType);
    }
  }, [isLoaded]);

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <div className="my-4 flex w-full items-center justify-between px-2">
      <div className="logo">
        <h1 className="ml-3 text-2xl font-bold uppercase text-secondary">
          job<span className="text-orangeish">hunt</span>
        </h1>
      </div>
      <nav className=" hidden items-center justify-between gap-16 md:flex">
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
          {isSignedIn && (
            <li>
              <Link
                to="/dashboard"
                className={`link ${path == "/dashboard" ? "active" : ""}`}
                onClick={() => {
                  setPath("/dashboard");
                }}
              >
                Dashboard
              </Link>
            </li>
          )}
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

          {accountType && (
            <li>
              <CustomLink
                type={accountType}
                path={path}
                setPath={setPath}
                className="link"
              />
            </li>
          )}
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
              className="text-md border-none px-3 font-semibold"
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
      <MyDrawer customLink={<CustomLink />} />
    </div>
  );
};

export default NavBar;
