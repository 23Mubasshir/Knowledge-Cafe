import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="title">
        <h1>Knowledge Cafe</h1>
      </div>

      <div>
        <a href="/home">Home</a>
        <a href="/category">Category</a>
        <a href="/blog-details">Blog Details</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
