import React from 'react';
import './SideBar.css'

const SideBar = (props) => {
    const {cart} = props;

    let total = 0;
    for (const blog of cart){
        total = total + blog.readTime;
    }
    
    return (
        <div className='sidebar-container'>
            <h2 className='spent-time'>Spent time on read : {total} min</h2>
        </div>
    );
};

export default SideBar;