import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div>
      <img
        className="page404"
        src="https://cdn.dribbble.com/users/1711059/screenshots/6845279/dribbble_404_phc.png"
        alt="404"
      />
      <br />
      Go back to the &nbsp;<Link to="/">home page</Link>
    </div>
  );
}
