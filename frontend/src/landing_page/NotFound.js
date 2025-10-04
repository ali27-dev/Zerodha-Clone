import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">404 Page Not Found :)</h1>
        <p className="mb-3">Sorry, The page you looking for does not exist.</p>
        <Link
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          to="/"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
