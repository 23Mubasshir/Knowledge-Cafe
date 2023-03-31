import React,{useEffect, useState} from 'react';
import './Main.css';
import '../../../public/blog.json';
import Cart from '../Cart/Cart'

const Main = () => {
    const [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
      fetch("blog.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    }, []);
  
    return (
        <div className='main-container'>

            <div className='cart-container'>
            {blogs.map(blog => 
          <Cart key={blog.id} blog={blog} >
            
          </Cart>)}
            </div>

            <div className='sidebar-container'>
                <h2>Spent time on read :  min</h2>
                <h2>Bookmarked Blogs : {blogs.length}</h2>
            </div>
            
        </div>
    );
};

export default Main;