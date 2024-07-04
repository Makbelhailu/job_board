import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [type, setType] = useState("freelancer");

    return (
        <div
            className="footer_container m-0 grid w-full grid-cols-5
    items-start justify-between gap-14 md:gap-2 lg:gap-8 rounded-t-3xl bg-secondary px-6 pb-2 pt-6
    text-left text-white xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-5"
        >
            <div className="overall lg:col-span-2 md:col-span-2 xl:col-span-2">
                <div className="logo text-left">
                    <h1 className="mb-5 text-2xl font-bold uppercase text-primary">
                        job<span className="text-orangeish">hunt</span>
                    </h1>
                </div>
                <div className="description">
                    <p className="pr-16 text-xs font-medium text-slate-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis ratione fugiat beatae modi doloribus non iure at
                        ad? Consequuntur quod
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
                    {type === "freelancer" ? (
                        <li>
                            <Link to="/applications">Applications</Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
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
                        <a
                            href="mailto:mcwelson32@gmail.com"
                            className="decoration-none"
                        >
                            <p
                                className="text-xs font-medium text-slate-100
                            break-words"
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

export default Footer;
