import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

export default function Header() {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/streams/new" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
}
