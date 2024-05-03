import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="mb-5 flex w-full justify-between items-center">
			<div className="logo">
				<h1 className="ml-5 text-2xl uppercase text-secondary font-bold">
					job<span className="text-orangeish">hunt</span>
				</h1>
			</div>
			<nav className="flex justify-between gap-10  items-center">
				<ul className="text-md inline-flex gap-x-10 text-center">
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
				<div className="profile flex gap-2 ml-5">
					<button className="btn-primary">
						Login
					</button>
					<button className="btn-secondary">
						Register
					</button>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
