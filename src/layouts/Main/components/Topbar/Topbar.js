import React from "react";
import { Link as RouteLink } from "react-router-dom";

const Topbar = () => {
  return (
    <nav className="navbar bg-primary">
      <div>
        <RouteLink to="/">Cosmome</RouteLink>
      </div>
      <ul>
        <li>
          <RouteLink to="/">Join Comunity</RouteLink>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
