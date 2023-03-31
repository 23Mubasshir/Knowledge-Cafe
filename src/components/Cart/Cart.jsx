import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props);
  const { img, authorName, authorImage, publishDate, readTime, blogTitle, id} = props.blog;
  return (
    <div className="cart">
      <img className="blog-img" src={img} alt="" />

      <div className="top-section">
        <div className="top-sec-1">
          <img className="author-img" src={authorImage} alt="" />

          <div className="top-sec-a1">
            <h3>{authorName}</h3>
            <h5>{publishDate}</h5>
          </div>
        </div>

        <div>
          <h5>{readTime} min read</h5>
        </div>
      </div>

      <div className="middle-section">
        <h1>{blogTitle}</h1>
        <a href="/mark">Mark as read</a>
      </div>
    </div>
  );
};

export default Cart;