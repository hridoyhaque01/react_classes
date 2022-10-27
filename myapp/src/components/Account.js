import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Account.module.css";

export default function Account() {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/signup">Signup</Link>
      <Link to="/signin">Signin</Link>
      {/* <span className="material-icons-outlined" title="Logout">
          {" "}
          logout{" "}
        </span>{" "} */}
    </div>
  );
}
