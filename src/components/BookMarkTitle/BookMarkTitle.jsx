import React from "react";
import "./BookMarkTitle.css";
import { ToastContainer, toast } from "react-toastify";

const BookMarkTitle = (props) => {
  const { bookMark } = props;

  return (
    <div>
      <h2 className="book-mark-title">Bookmarked Blogs : {bookMark.length} </h2>
    </div>
  );
};

export default BookMarkTitle;
