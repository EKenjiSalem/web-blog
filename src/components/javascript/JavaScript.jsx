import React from 'react';
import codepost from '../../images/js-logo.png';
import './javascript.css';
import {Link} from 'react-router-dom';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function JavaScript() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
  <section className="javascript-blog" id="html-blog">
   <div className="javascript-blog-container">
    <div className="javascript-blog-info" data-aos="fade-left">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
        <span className="javascript-blog-date"> April 25th, 2022 </span>
        <Link to="/JsIntro"><h3 className="js-intro-title"> Intro to JavaScript </h3></Link>
        <p className="javascript-blog-description"> 
        JavaScript is a versatile, high-level, and dynamic programming language primarily used for 
        front-end web development. JavaScript enables web developers to create interactive and responsive websites
         by adding behavior and functionality to web pages.</p>
        <Link to="/JsIntro"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="javascript-blog-info" data-aos="zoom-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
      <Link to="/JsVarPost"><h3 className="js-intro-title"> Variables & Operators </h3></Link>
        <p className="javascript-blog-description"> 
        Variables, operators, and data types are the buildingblocks of Javascript. They allow you to
         manipulate data, control program flow, and build complex applications. Knowing these 
         fundamental concepts are at the core of creating dynamic and interactive web applications. 
      </p>
      <Link to="/JsVarPost"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="javascript-blog-info" data-aos="fade-right">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <Link to="/Dom"><h3 className="js-intro-title"> DOM </h3></Link>
        <p className="javascript-blog-description"> 
        Most web development resources advise to learn the dom after learning more fundamental
        programming concepts first. Yet, as I reflect on my self learning experience, I think
        learning about the dom is the best starting point. Mainly because the dom is the primary
        connection between html, css, and javascript.
        </p>
        <Link to="/Dom"><button className="button"> Read More </button></Link>
      </div>
    </div>


    <div className="javascript-blog-info" data-aos="zoom-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <Link to="/Functions"><h3 className="js-intro-title"> Functions </h3></Link>
        <p className="javascript-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/Functions"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="javascript-blog-info" data-aos="zoom-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <Link to="/ControlStructures"><h3 className="js-intro-title"> If Statements & Loops </h3></Link>
        <p className="javascript-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/ControlStructures"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="javascript-blog-info" data-aos="zoom-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <Link to="/Arrays"><h3 className="js-intro-title"> Arrays </h3></Link>
        <p className="javascript-blog-description"> In JavaScript, an array is a data structure that
         allows you to store and manipulate a collection of values, such as numbers, strings, objects,
          or even other arrays. Arrays are commonly used to organize and work with data in a structured 
          way. Here are some key characteristics of JavaScript arrays:
       </p>
        <Link to="/Arrays"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="javascript-blog-info" data-aos="zoom-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <Link to="/ObjectProgram"><h3 className="js-intro-title"> Object Oriented Programming </h3></Link>
        <p className="javascript-blog-description"> 
         Web development has evolved into a dynamic and vital field that powers the digital 
         landscape we interact with daily. From the simplest static websites to complex
          web applications, the process of web development encompasses various technologies,
           methodologies, and best practices. Whether you're an aspiring developer or 
           a seasoned pro looking to stay updated, this guide will walk you through the key components 
           and insights of web development.</p>
        <Link to="/ObjectProgram"><button className="button"> Read More </button></Link>
      </div>
    </div>
    
    <div className="javascript-blog-info" data-aos="zoom-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <Link to="/Asynchro"><h3 className="js-intro-title"> AJAX </h3></Link>
        <p className="javascript-blog-description"> 
        AJAX is a set of web development techniques that enable web pages to interact with 
        a web server in the background, without requiring a full page refresh. It allows 
        data to be exchanged asynchronously between the browser and the server, enhancing 
        the user experience by providing real-time updates and interactivity.</p>
        <Link to="/Asynchro"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="javascript-blog-info" data-aos="zoom-in">
      <img src={codepost} alt="" />
      <div className="javascript-blog-content">
      <span className="javascript-blog-date"> April 25th, 2022 </span>
        <Link to="/Modules"><h3 className="js-intro-title"> Modules </h3></Link>
        <p className="javascript-blog-description"> 
        In the world of modern web development, managing the complexity of JavaScript code has become
         increasingly crucial. As applications grow in size and complexity, developers need tools 
         and techniques to organize, modularize, and maintain their code effectively. JavaScript
          modules have emerged as a fundamental building block for achieving these goals. In this
           blog post, we'll explore the concept of JavaScript modules, their benefits, and how to
            use them to structure your code for scalability and maintainability.</p>
        <Link to="/Modules"><button className="button"> Read More </button></Link>
      </div>
    </div>

  </div>
</section>
  )
}

export default JavaScript;



