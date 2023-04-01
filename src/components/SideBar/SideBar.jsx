import React from 'react';
import './SideBar.css'

const SideBar = (props) => {
    const {cart} = props;
    // const {bookMark} = props;

    let total = 0;
    for (const blog of cart){
        total = total + blog.readTime;
    }
    
    return (
        <div className='sidebar-container'>
            <h2 className='spent-time'>Spent time on read : {total} min</h2>
            {/* <div className='book-mark'>
            <h2 >Bookmarked Blogs : {bookMark?.length} </h2>
            </div> */}
        </div>
    );
};

export default SideBar;