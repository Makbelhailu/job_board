import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className=" h-full w-full">
      <section class="page_404">
        <div class="hit-the-floor">404</div>
        <div class="four_zero_four_bg"></div>

        <div class="contant_box_404 text-center">
          <h3 class="text-[2rem] font-medium">Look like you're lost</h3>

          <p className="text-xs text-slate-700">
            the page you are looking for not available!
          </p>

          <Link to="/" class="btn-primary link_404">
            Go to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
