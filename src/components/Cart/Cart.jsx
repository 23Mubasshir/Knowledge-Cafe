import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
  console.log(props);
  const {
    img,
    authorName,
    authorImage,
    publishDate,
    readTime,
    blogTitle,
    id,
    hasTag,
  } = props.blog;
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
          <h4>{readTime} min read  <FontAwesomeIcon icon={faBookmark} /></h4>
        </div>
      </div>

      <div className="middle-section">
        <div>
          <h1>{blogTitle}</h1>
          <h4>{hasTag}</h4>
        </div>

        <div>
          <a href="/mark">Mark as read</a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
