import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import page_not_found from "../../images/404-page.png";

const PageNotFound = () => {
  return (
    <div className="mt-5 mb-5">
      <img src={page_not_found} alt="" />
      <div className="mt-5">
        <Link to="/home" className="btn btn-dark">
          GO BACK
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
