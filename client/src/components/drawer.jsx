import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { UserButton, useClerk, useUser } from "@clerk/clerk-react";
import Drawer from "@mui/material/Drawer";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";
import { FiBriefcase } from "react-icons/fi";
import { TiInfoLargeOutline } from "react-icons/ti";

import { Divider } from "@mui/material";
import CustomLink from "./customLink";
import { FaRegFolderClosed } from "react-icons/fa6";

export default function MyDrawer({ customLink }) {
  const [open, setOpen] = useState(false);
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

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    console.log(newOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleDrawer(true)}>
        <IoMenu className="text-3xl" />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className="h-full w-72 bg-primary px-6 py-6">
          {isSignedIn ? (
            <div className="flex items-center justify-between pl-3">
              <UserButton
                appearance={{
                  elements: { userButtonAvatarBox: "w-12 h-12" },
                }}
              />
              <IoClose
                className="cursor-pointer text-4xl"
                onClick={toggleDrawer(false)}
              />
            </div>
          ) : (
            <div className="profile flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                <button
                  className="btn-secondary"
                  onClick={() => clerk.openSignIn()}
                >
                  Login
                </button>
                <button
                  className="btn-primary"
                  onClick={() => clerk.openSignUp()}
                >
                  Register
                </button>
              </div>
              <IoClose
                className="cursor-pointer text-3xl"
                onClick={toggleDrawer(false)}
              />
            </div>
          )}
          <Divider className="!my-6 !h-[2px] rounded-md !bg-gray-200" />
          <ul className="flex flex-col items-center justify-center gap-y-6 text-center text-lg font-semibold">
            <li
              className={`flex w-full items-center justify-start gap-3 py-2 pl-10 ${path == "/" ? "rounded-xl bg-secondary-100  text-secondary" : "link"}`}
            >
              <BiHomeAlt />
              <Link
                to="/"
                className={`w-full text-start`}
                onClick={() => {
                  setPath("/");
                  toggleDrawer(false)();
                }}
              >
                Home
              </Link>
            </li>
            <li
              className={`flex w-full items-center justify-start gap-3 py-2 pl-10 ${path == "/jobs" ? "rounded-xl bg-secondary-100  text-secondary" : "link"}`}
            >
              <FiBriefcase />
              <Link
                to="/jobs"
                className={`w-full text-start`}
                onClick={() => {
                  setPath("/jobs");
                  toggleDrawer(false)();
                }}
              >
                Jobs
              </Link>
            </li>

            {accountType && (
              <li
                className={`flex w-full items-center justify-start gap-3 py-2 pl-10 ${path == "/my-post" || path == "/applications" ? "rounded-xl bg-secondary-100 text-secondary" : "link"}`}
              >
                <FaRegFolderClosed />
                <CustomLink
                  type={accountType}
                  setPath={setPath}
                  toggleDrawer={toggleDrawer(false)}
                  className="w-full text-start"
                />
              </li>
            )}
            <li
              className={`flex w-full items-center justify-start gap-3 py-2 pl-10 ${path == "/about" ? "rounded-xl bg-secondary-100  text-secondary" : "link"}`}
            >
              <TiInfoLargeOutline />
              <Link
                to="/about"
                className="w-full text-start"
                onClick={() => {
                  setPath("/about");
                  toggleDrawer(false)();
                }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
}
