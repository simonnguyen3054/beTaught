import React from "react";
import { Link as RouteLink } from "react-router-dom";

const Topbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <RouteLink to="/">Cosmome</RouteLink>
      </h1>
      <ul>
        <li>
          <RouteLink to="/">Join Comunity</RouteLink>
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
