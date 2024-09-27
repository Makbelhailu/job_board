import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CustomLink({
  type,
  path,
  setPath,
  toggleDrawer,
  className,
}) {
  if (type === "freelancer") {
    return (
      <Link
        to="/applications"
        className={`${path == "/applications" ? "active" : ""} ${className}`}
        onClick={() => {
          setPath("/applications");
          toggleDrawer();
        }}
      >
        Applications
      </Link>
    );
  } else {
    return (
      <Link
        to="/my-post"
        className={`${path == "/my-post" ? "active" : ""} ${className}`}
        onClick={() => {
          setPath("/my-post");
          toggleDrawer();
        }}
      >
        Posts
      </Link>
    );
  }
}
