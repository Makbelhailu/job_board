import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useUser } from "@clerk/clerk-react";
const Footer = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const [accountType, setAccountType] = useState("");

  useEffect(() => {
    if (isSignedIn) {
      setAccountType(user.unsafeMetadata.AccountType);
    }
  }, [isLoaded]);

  return (
    <div
      className="footer_container xs:grid-cols-1 m-0 grid w-full
    grid-cols-5 items-start justify-between gap-14 rounded-t-3xl bg-secondary px-6 pb-2 pt-6 text-left
    text-white sm:grid-cols-2 md:grid-cols-5 md:gap-2 lg:gap-8"
    >
      <div className="overall md:col-span-2 lg:col-span-2 xl:col-span-2">
        <div className="logo text-left">
          <Link to="/">
            <h1 className="mb-5 text-2xl font-bold uppercase text-primary">
              job<span className="text-orangeish">hunt</span>
            </h1>
          </Link>
        </div>
        <div className="description">
          <p className="pr-16 text-xs font-medium text-slate-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            ratione fugiat beatae modi doloribus non iure at ad? Consequuntur
            quod
          </p>
        </div>
      </div>
      <div className="pages">
        <div className="title mb-4">
          <h3 className="text-sm font-bold ">Pages</h3>
        </div>
        <ul className="flex list-none flex-col gap-2 text-xs font-medium text-slate-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>

          {accountType && (
            <CustomLink type={accountType} path={path} setPath={setPath} />
          )}
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="legal">
        <div className="title mb-4">
          <h3 className="text-sm font-bold ">Legal</h3>
        </div>
        <ul className="flex list-none flex-col gap-2 text-xs font-medium text-slate-100">
          <li>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <Link>Terms and Conditions</Link>
          </li>
        </ul>
      </div>
      <div className="footer_contact ">
        <div className="title mb-4">
          <h3 className="text-sm font-bold ">Contact Us</h3>
        </div>
        <div className="flex flex-col gap-2">
          <div className="phone_contact flex items-center">
            <a href="tel:+251904537541" className="decoration-none">
              <p className="text-xs font-medium text-slate-100">
                +251-904-537-541
              </p>
            </a>
          </div>
          <div className="gmail_contact flex items-center">
            <a href="mailto:mcwelson32@gmail.com" className="decoration-none">
              <p
                className="break-words text-xs font-medium
                            text-slate-100"
              >
                mcwelson32@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function CustomLink({ type, path, setPath }) {
  if (type === "freelancer") {
    return (
      <li>
        <Link to="/applications">Applications</Link>
      </li>
    );
  } else if (type === "company") {
    return (
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    );
  }
}

export default Footer;
