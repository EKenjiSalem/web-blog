import React from 'react';
import htmlblog from '../../images/html-blog.jpg';
import './html.css';
import {Link} from 'react-router-dom';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Html() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
  <section className="html-blog" id="html-blog">
   <div className="html-blog-container">
    <div className="html-blog-info" data-aos="fade-left">
      <img src={htmlblog} alt="" />
      <div className="html-blog-content">
        {/* <span className="html-blog-date"> April 25th, 2022 </span> */}
        <Link to="/HtmlPost"><h3 className="html-main-blog-title"> What is HTML? </h3></Link>
         <p className="html-blog-description"> 
            HTML stands for HyperText Markup Language. HTML is responsible for creating the structure
            for all websites and apps. It provides a way to define multiple elements on a webpage, such
            as text, headings, paragraphs, images, videos, links, and more.
            </p>
        <Link to="/HtmlPost"><button className="button"> Read More </button></Link>
      </div>
    </div>
    <div className="html-blog-info" data-aos="zoom-in">
      <img src={htmlblog} alt=""/>
      <div className="html-blog-content">
      {/* <span className="blog-date"> April 25th, 2022 </span> */}
      <Link to="/Multimedia"><h3 className="html-main-blog-title"> Images, Videos, and Audio </h3></Link>
        <p className="html-blog-description">  Using a video in HTML is quite straightforward.
        HTML5 introduced the video element, which allows you to embed videos directly into your
         webpages. Here's a basic example of how to use the video element......</p>
         <Link to="/Multimedia"><button className="button"> Read More </button></Link>
      </div>
    </div>
    <div className="html-blog-info" data-aos="fade-right">
      <img src={htmlblog} alt="" />
      <div className="html-blog-content">
      {/* <span className="html-blog-date"> April 25th, 2022 </span> */}
      <Link to="/Buttons"><h3 className="html-main-blog-title"> Creating Buttons </h3></Link>
        <p className="html-blog-description"> 
        An HTML button is an interactive element that allows users to trigger an action when clicked. Buttons 
        It's a fundamental component of web development and is used to create clickable controls on webpages.
         Buttons are used for a variety of purposes, such as submitting forms, triggering JavaScript 
         functions, navigating to different pages, and more......</p>
         <Link to="/Buttons"><button className="button"> Read More </button></Link>
      </div>
    </div>
    <div className="html-blog-info" data-aos="fade-left">
      <img src={htmlblog} alt="" />
      <div className="html-blog-content">
      {/* <span className="html-blog-date"> April 25th, 2022 </span> */}
      <Link to="/Attributes"><h3 className="html-main-blog-title"> Exploring Attributes </h3></Link>
        <p className="html-blog-description"> 
        HTML attributes are one of the most important features in HTML. Attributes allow you to enhance the behavior, appearance, and accessibility of your web content.
        Also, attributes are the connectors between adding the styling and functionality to your web project.  
        </p>
        <Link to="/Attributes"><button className="button"> Read More </button></Link>
      </div>
    </div>
    <div className="html-blog-info" data-aos="zoom-in">
      <img src={htmlblog} alt="" />
      <div className="html-blog-content">
      {/* <span className="htm-blog-date"> April 25th, 2022 </span> */}
       <Link to="/Forms"><h3 className="html-main-blog-title"> User Forms and Inputs</h3></Link>
        <p className="html-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
           <Link to="/Forms"><button className="button"> Read More </button></Link>
      </div>
    </div>
    <div className="html-blog-info" data-aos="fade-right">
      <img src={htmlblog} alt="" />
      <div className="html-blog-content">
      {/* <span className="html-blog-date"> April 25th, 2022 </span> */}
      <Link to="/Div"><h3 className="html-main-blog-title"> The Magnificent Div </h3></Link>
        <p className="html-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
           <Link to="/Div"><button className="button"> Read More </button></Link>
      </div>
    </div>
    <div className="html-blog-info" data-aos="fade-left">
      <img src={htmlblog} alt="" />
      <div className="html-blog-content">
      {/* <span className="blog-date"> April 25th, 2022 </span> */}
      <Link to="/Text"><h3 className="html-main-blog-title"> Text </h3></Link>
        <p className="html-blog-description">  Using a video in HTML is quite straightforward.
        HTML5 introduced the video element, which allows you to embed videos directly into your
         webpages. Here's a basic example of how to use the video element......</p>
         <Link to="/Text"><button className="button"> Read More </button></Link>
      </div>
    </div>
    <div className="html-blog-info" data-aos="zoom-in">
      <img src={htmlblog} alt="" />
      <div className="html-blog-content">
      {/* <span className="blog-date"> April 25th, 2022 </span> */}
      <Link to="/List"><h3 className="html-main-blog-title"> The World of List </h3></Link>
        <p className="html-blog-description">  Using a video in HTML is quite straightforward.
        HTML5 introduced the video element, which allows you to embed videos directly into your
         webpages. Here's a basic example of how to use the video element......</p>
         <Link to="/List"><button className="button"> Read More </button></Link>
      </div>
    </div>
    <div className="html-blog-info" data-aos="fade-right">
      <img src={htmlblog} alt="" />
      <div className="html-blog-content">
      {/* <span className="blog-date"> April 25th, 2022 </span> */}
      <Link to="/Semantics"><h3 className="html-main-blog-title"> The Importnace of Semantics </h3></Link>
        <p className="html-blog-description">  Using a video in HTML is quite straightforward.
        HTML5 introduced the video element, which allows you to embed videos directly into your
         webpages. Here's a basic example of how to use the video element......</p>
         <Link to="/Semantics"><button className="button"> Read More </button></Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Html