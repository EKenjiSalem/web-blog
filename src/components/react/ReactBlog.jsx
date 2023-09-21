import React from 'react';
import codepost from '../../images/rsz_post.jpg';
import './react.css';
import {Link} from 'react-router-dom';

function ReactBlog() {
  return (
  <section className="react-blog" id="html-blog">
   <div className="react-blog-container">
    <div className="react-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="react-blog-content">
        <span className="react-blog-date"> April 25th, 2022 </span>
        <Link to="/HtmlPost"><h3> Mastering React </h3></Link>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/CssPost"><button className="button"> Read More </button></Link>
      </div>
    </div>
    <div className="react-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="react-blog-content">
      <span className="react-blog-date"> April 25th, 2022 </span>
        <a href="#"><h3> Post Title Goes Here </h3></a>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <a href="#"><button class="button"> Read More </button></a>
      </div>
    </div>
    <div className="react-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="react-blog-content">
      <span className="react-blog-date"> April 25th, 2022 </span>
        <a href="#"><h3> Post Title Goes Here </h3></a>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <a href="#"><button className="button"> Read More </button></a>
      </div>
    </div>
    <div className="react-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="react-blog-content">
      <span className="react-blog-date"> April 25th, 2022 </span>
        <a href="#"><h3> Post Title Goes Here </h3></a>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <a href="#"><button className="button"> Read More </button></a>
      </div>
    </div>
    <div className="react-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="react-blog-content">
      <span className="react-blog-date"> April 25th, 2022 </span>
        <a href="#"><h3> Post Title Goes Here </h3></a>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <a href="#"><button className="button"> Read More </button></a>
      </div>
    </div>
    
    <div className="react-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="react-blog-content">
      <span className="react-blog-date"> April 25th, 2022 </span>
        <a href="#"><h3> Post Title Goes Here </h3></a>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <a href="#"><button className="button"> Read More </button></a>
      </div>
    </div>
  </div>
</section>
  )
}

export default ReactBlog;