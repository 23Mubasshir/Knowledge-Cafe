import React,{useEffect, useState} from 'react';
import './Main.css';
import '../../../public/blog.json';
import Cart from '../Cart/Cart'
import SideBar from '../SideBar/SideBar';

const Main = () => {
    const [blogs, setBlogs] = useState([]);

    // For spent total time
    const [cart, setCart] = useState([]);

    // For Booked marked blogs
    const [bookMark, setBookMark] = useState([]);
  
    useEffect(() => {
      fetch("blog.json")
        .then((res) => res.json())
        .then((data) => setBlogs(data));
    }, []);
    
    // For spent total time
    const handleAddToCart = (blog) =>{
        const newCart = [...cart, blog];
        setCart(newCart);
    }

    // For Booked marked blogs
    const AddToBookMark = (blog) =>{
        const newBookMark = [...bookMark, blog];
        setBookMark(newBookMark);
    }
  
    return (
        <div className='main-container'>

            <div className='cart-container'>
            {blogs.map(blog => 
          <Cart 
          key={blog.id} 
          blog={blog}
          handleAddToCart={handleAddToCart} 
          AddToBookMark={AddToBookMark}>
          </Cart>)}
            </div>

            <div>
                <SideBar cart={cart} ></SideBar>
                {/* <SideBar bookMark = {bookMark}></SideBar> */}
            </div>
            
        </div>
    );
};

export default Main;