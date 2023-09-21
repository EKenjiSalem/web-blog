import React from 'react';
import './blogcard.css';
import codepost from "../../images/rsz_post.jpg";
import {Link} from 'react-router-dom';

function BlogCard() {
  return (
    <div className="container">

     <div className="blog-post">
        <div className="blog-post-image">
            <img src={codepost} alt="" className='image-post' />
        </div>
        <div className="blog-post-info">
        <h1 className="blog-post-title"> Front-End Web Development </h1>
        <p>  In the expansive realm of web development, HTML stands as the foundational language that brings web pages to life. 
         Short for HyperText Markup Language, HTML provides the structure and content that define the digital landscapes
         we interact with daily. In this article, we'll explore the key aspects of HTML, its elements, and its significance
         in shaping the modern internet.
        </p>
      <Link to="/HtmlPost"> <button className="main-btn"> Read More </button></Link> 
      </div>
     </div>

     <div className="blog-post">
        <div className="blog-post-image">
            <img src={codepost} alt="" className='image-post' />
        </div>
        <div className="blog-post-info">
        <h1 className="blog-post-title"> Coursera's Meta Front-End Web Developer Certificate </h1>
        <p>  In the expansive realm of web development, HTML stands as the foundational language that brings web pages to life. 
         Short for HyperText Markup Language, HTML provides the structure and content that define the digital landscapes
         we interact with daily. In this article, we'll explore the key aspects of HTML, its elements, and its significance
         in shaping the modern internet.
        </p>
        <button className="main-btn"> Read More </button>
      </div>
     </div>

     <div className="blog-post">
        <div className="blog-post-image">
            <img src={codepost} alt="" className='image-post' />
        </div>
        <div className="blog-post-info">
        <h1 className="blog-post-title"> Mastering HTML</h1>
        <p>  In the expansive realm of web development, HTML stands as the foundational language that brings web pages to life. 
         Short for HyperText Markup Language, HTML provides the structure and content that define the digital landscapes
         we interact with daily. In this article, we'll explore the key aspects of HTML, its elements, and its significance
         in shaping the modern internet.
        </p>
        <button className="main-btn"> Read More </button>
      </div>
     </div>

     <div className="blog-post">
        <div className="blog-post-image">
            <img src={codepost} alt="" className='image-post' />
        </div>
        <div className="blog-post-info">
        <h1 className="blog-post-title"> Mastering HTML</h1>
        <p>  In the expansive realm of web development, HTML stands as the foundational language that brings web pages to life. 
         Short for HyperText Markup Language, HTML provides the structure and content that define the digital landscapes
         we interact with daily. In this article, we'll explore the key aspects of HTML, its elements, and its significance
         in shaping the modern internet.
        </p>
        <button className="main-btn"> Read More </button>
      </div>
     </div>

     <div className="blog-post">
        <div className="blog-post-image">
            <img src={codepost} alt="" className='image-post' />
        </div>
        <div className="blog-post-info">
        <h1 className="blog-post-title"> Mastering HTML</h1>
        <p>  In the expansive realm of web development, HTML stands as the foundational language that brings web pages to life. 
         Short for HyperText Markup Language, HTML provides the structure and content that define the digital landscapes
         we interact with daily. In this article, we'll explore the key aspects of HTML, its elements, and its significance
         in shaping the modern internet.
        </p>
        <button className="main-btn"> Read More </button>
      </div>
     </div>

     <div className="blog-post">
        <div className="blog-post-image">
            <img src={codepost} alt="" className='image-post' />
        </div>
        <div className="blog-post-info">
        <h1 className="blog-post-title"> Mastering HTML</h1>
        <p>  In the expansive realm of web development, HTML stands as the foundational language that brings web pages to life. 
         Short for HyperText Markup Language, HTML provides the structure and content that define the digital landscapes
         we interact with daily. In this article, we'll explore the key aspects of HTML, its elements, and its significance
         in shaping the modern internet.
        </p>
        <button className="main-btn"> Read More </button>
      </div>
     </div>

    </div>
  )
}

export default BlogCard;