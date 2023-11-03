import React from 'react';
import codepost from '../../images/rsz_post.jpg';
import './react.css';
import {Link} from 'react-router-dom';
import {useEffect} from "react"
import ReactIcon from '../../images/react.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


function ReactBlog() {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
  <section className="react-blog" id="html-blog">
   <div className="react-blog-container">
   
    <div className="react-blog-info" data-aos="fade-right">
      <img src={ReactIcon} className="react-img" alt="" />
      <div className="react-blog-content">
        {/* <span className="react-blog-date"> April 25th, 2022 </span> */}
        <Link to="/ReactIntro"><h3 className="react-main-title"> What is React? </h3></Link>
        <p className="react-blog-description"> 
        React.js is a powerful library for building dynamic, responsive, and maintainable user 
        interfaces for web applications. Its component-based architecture, virtual DOM, 
        declarative syntax, and active developer community make it a top choice for modern 
        web development. Whether you're building a simple website or a complex single-page
         application, React can help you create engaging and efficient user experiences.
          So, if you haven't already, consider adding React.js to your web development toolkit.</p>
        <Link to="/ReactIntro"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="react-blog-info" data-aos="zoom-in">
      <img src={ReactIcon} className="react-img"  alt="" />
      <div className="react-blog-content">
      {/* <span className="react-blog-date"> April 25th, 2022 </span> */}
        <Link to="/Syntax"><h3 className="react-main-title"> JSX</h3></Link>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/Syntax"><button class="button"> Read More </button></Link>
      </div>
    </div>

    <div className="react-blog-info" data-aos="fade-left">
      <img src={ReactIcon} className="react-img"  alt="" />
      <div className="react-blog-content">
      {/* <span className="react-blog-date"> April 25th, 2022 </span> */}
        <Link to="/Components"><h3 className="react-main-title"> Components </h3></Link>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/Components"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="react-blog-info" data-aos="fade-left">
      <img src={ReactIcon} className="react-img" alt="" />
      <div className="react-blog-content">
      {/* <span className="react-blog-date"> April 25th, 2022 </span> */}
        <Link to="/Router"><h3 className="react-main-title"> React Router </h3></Link>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/Router"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="react-blog-info" data-aos="zoom-in">
      <img src={ReactIcon} className="react-img" alt="" />
      <div className="react-blog-content">
      {/* <span className="react-blog-date"> April 25th, 2022 </span> */}
        <Link to="/Props"><h3 className="react-main-title"> Props </h3></Link>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/Props"><button className="button"> Read More </button></Link>
      </div>
    </div>
    
    <div className="react-blog-info" data-aos="fade-right">
      <img src={ReactIcon} className="react-img" alt="" />
      <div className="react-blog-content">
      {/* <span className="react-blog-date"> April 25th, 2022 </span> */}
        <Link to="/State"><h3 className="react-main-title"> State </h3></Link>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/State"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="react-blog-info" data-aos="fade-left">
      <img src={ReactIcon} className="react-img" alt="" />
      <div className="react-blog-content">
      {/* <span className="react-blog-date"> April 25th, 2022 </span> */}
        <Link to="/Hooks"><h3 className="react-main-title"> Hooks </h3></Link>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/Hooks"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="react-blog-info" data-aos="zoom-in">
      <img src={ReactIcon} className="react-img" alt="" />
      <div className="react-blog-content">
      {/* <span className="react-blog-date"> April 25th, 2022 </span> */}
        <Link to="/ApiReact"><h3 className="react-main-title"> API </h3></Link>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/ApiReact"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="react-blog-info" data-aos="fade-right">
      <img src={ReactIcon} className="react-img" alt="" />
      <div className="react-blog-content">
      {/* <span className="react-blog-date"> April 25th, 2022 </span> */}
        <Link to="/Operators"><h3 className="react-main-title"> Operators </h3></Link>
        <p className="react-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/Operators"><button className="button"> Read More </button></Link>
      </div>
    </div>

  </div>
</section>
  )
}

export default ReactBlog;