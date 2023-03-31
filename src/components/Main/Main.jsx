import React,{useEffect, useState} from 'react';
import './Main.css';
import '../../../public/blog.json'

const Main = () => {
    const [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
      fetch("blog.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    }, []);
  
    return (
        <div className='main-container'>

            <div className='blog-posts'>
                <h2>hello</h2>
            </div>
            <div className='sidebar'>
                <h2>Spent time on read :  min</h2>
                <h2>Bookmarked Blogs : {blogs.length}</h2>
            </div>
            
        </div>
    );
};

export default Main;