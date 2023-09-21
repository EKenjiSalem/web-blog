import React from 'react';
import codepost from '../../images/rsz_post.jpg';
import './javascript.css';
import {Link} from 'react-router-dom';

function JavaScript() {
  return (
  <section className="javascript-blog" id="html-blog">
   <div className="javascript-blog-container">
    <div className="javascript-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
        <span className="javascript-blog-date"> April 25th, 2022 </span>
        <Link to="/HtmlPost"><h3> Mastering JavaScript </h3></Link>
        <p className="javascript-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/CssPost"><button className="button"> Read More </button></Link>
      </div>
    </div>
    <div className="javascript-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <a href="#"><h3> Post Title Goes Here </h3></a>
        <p className="javascript-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <a href="#"><button class="button"> Read More </button></a>
      </div>
    </div>
    <div className="javascript-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <a href="#"><h3> Post Title Goes Here </h3></a>
        <p className="javascript-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <a href="#"><button className="button"> Read More </button></a>
      </div>
    </div>
    <div className="javascript-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <a href="#"><h3> Post Title Goes Here </h3></a>
        <p className="javascript-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <a href="#"><button className="button"> Read More </button></a>
      </div>
    </div>
    <div className="javascript-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <a href="#"><h3> Post Title Goes Here </h3></a>
        <p className="javascript-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <a href="#"><button className="button"> Read More </button></a>
      </div>
    </div>
    
    <div className="javascript-blog-info" data-aos="fade-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <a href="#"><h3> Post Title Goes Here </h3></a>
        <p className="javascript-blog-description"> 
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

export default JavaScript;