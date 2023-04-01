import React from "react";
import "./BookMarkBar.css";

const BookMarkBar = (props) => {
  return (
    <div className="sidebar-container2">
      <div className="book-mark">
        <h2 className="blog-title">{props.single.blogTitle} </h2>
      </div>
    </div>
  );
};

export default BookMarkBar;


