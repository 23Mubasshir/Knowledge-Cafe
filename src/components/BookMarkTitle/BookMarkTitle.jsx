import React from 'react';
import './BookMarkTitle.css'

const BookMarkTitle = (props) => {
    return (
        <div>
            <h2 className='book-mark-title'>Bookmarked Blogs : {props.bookMark.length} </h2>
        </div>
    );
};

export default BookMarkTitle;