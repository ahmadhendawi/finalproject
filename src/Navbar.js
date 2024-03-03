import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Log in</a>
        </li>
        <li>
          <a href="/signup">Sign up</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;