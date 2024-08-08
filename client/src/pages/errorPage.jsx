import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className=" h-full w-full">
      <section className="page_404">
        <div className="hit-the-floor">404</div>
        <div className="four_zero_four_bg"></div>

        <div className="contant_box_404 text-center">
          <h3 className="text-[2rem] font-medium">Look like you're lost</h3>

          <p className="text-xs text-slate-700">
            the page you are looking for not available!
          </p>

          <Link to="/" className="btn-primary link_404">
            Go to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
