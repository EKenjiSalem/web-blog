import React from 'react';
import sidebar from '../../images/rsz_sidebar.jpg';
import jspost from '../../images/js-logo.png';
import csspost from '../../images/cssmain.webp';
import reactpost from '../../images/react.svg';
import {Link} from 'react-router-dom';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './blogcard.css';

function BlogCard() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="blog" id="blog">
      <div className="blog-container">

          <div className="blog-info" data-aos="zoom-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
              {/* <span className="blog-date"> April 25th, 2022 </span> */}
           
               <Link to="/MasterWeb"> <h3 className='blog-title'> Mastering Web Development </h3> </Link> 
          
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this post will walk you through the key components 
                of web development.</p>
               <Link to="/MasterWeb"><button className="button"> Read More </button></Link>
            </div>
          </div>

          <div className="blog-info" data-aos="zoom-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
        
            {/* <span className="blog-date"> April 25th, 2022 </span> */}
              <Link to="/Certificate"><h3 className='blog-title'> Meta Front-End Web Development Certificate </h3></Link>
         
              <p className="blog-description"> 
               Coursera, a popular online educational platform offers a front end web developer certificate program 
               designed by Meta. In this blog post, we will review the course's structure, curriculum, instructors,
               and job assistance. If you want a insight from an actual graduate of the certificate program, please 
               feel free to join me on this journey of reviewing a top rated coding program.</p>
              <Link to="/Certificate"><button class="button"> Read More </button></Link>
            </div>
          </div>


          <div className="react-blog-info" data-aos="zoom-in">
            <img src={reactpost} className="react-img" alt="" />
            <div className="react-blog-content">
            {/* <span className="blog-date"> April 25th, 2022 </span> */}
              <Link to="/ApiReact"><h3 className='react-blog-title'> React Api's </h3></Link>
              <p className="blog-description"> 
              In the world of web development, REST APIs (Representational State Transfer Application 
              Programming Interfaces) have become the backbone for building scalable and dynamic 
              applications. Leveraging the power of RESTful services, developers can seamlessly retrieve
               and manipulate data from servers. In this blog post, we will explore the fundamentals of
                REST APIs and dive into the usage of the fetch function in React, a versatile tool for
                 making HTTP requests.
             </p>
              <Link to="/ApiReact"><button class="button"> Read More </button></Link>
            </div>
          </div>



        {/* 
          <div className="blog-info" data-aos="zoom-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
              <Link to="/Certificate"><h3 className='blog-title'> Variables, Properties, Methods </h3></Link>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development.</p>
              <Link to="Certificate"><button className="button"> Read More </button></Link>
            </div>
          </div> */}

          <div className="blog-info" data-aos="zoom-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
            {/* <span className="blog-date"> April 25th, 2022 </span> */}
              <Link to="/DomLearn"><h3 className='blog-title'> Why is the DOM taught Last? </h3></Link>
              <p className="blog-description"> 
              As a self taught developer with years of experience studying and building freelance projects.
              I come to a moment of clarity to critique a common aspect of learning web development, that
              many popular courses and learning platforms contribute to. In this blog post, we will examine 
              a new revolutionary concept that simply put, the javascript DOM should be a one of the first
              concepts taught to students.  </p>
              <Link to="/DomLearn"><button className="button"> Read More </button></Link>
            </div>
          </div>

          <div className="blog-info" data-aos="zoom-in">
            <img src={csspost} alt="" />
            <div className="blog-content">
              <Link to="/Animations"><h3 className='blog-title'> Amazing Animations </h3></Link>
              <p className="blog-description"> 
              In the ever-evolving landscape of web development, creating visually stunning and 
              interactive user interfaces is a key aspect of engaging and captivating digital experiences.
              One of the tools in a web developer's toolbox that facilitates this is CSS animations.
              In this blog post, we'll embark on a journey into the world of CSS animations, exploring
              their fundamentals, usage, and best practices.
              </p>
              <Link to="/Animations"><button className="button"> Read More </button></Link>
             </div>
           </div>

          {/* <div className="blog-info" data-aos="zoom-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
              <Link to="/Functional"><h3 className='blog-title'> Functional V.S Object Oriented Programming </h3></Link>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development.</p>
              <Link to="/Functional"><button className="button"> Read More </button></Link>
             </div>
           </div> */}


           <div className="js-blog-info" data-aos="zoom-in">
            <img src={jspost}  alt="" />
            <div className="js-blog-content">
            {/* <span className="blog-date"> April 25th, 2022 </span> */}
              <Link to="/Functions"> <h3 className='js-blog-title'> Functions </h3></Link>
              <p className="blog-description"> 
              JavaScript functions are a fundamental building block of JavaScript, providing a way to 
              structure code, promote reusability, and encapsulate logic.  In this blog post, we will dive into
              the world of JavaScript functions, exploring their syntax, usage, and the myriad ways they
              contribute to building dynamic and interactive web applications.
             </p>
              <Link to="/Functions"><button className="button"> Read More </button></Link>
            </div>
          </div>
          
           {/* <div className="blog-info" data-aos="zoom-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
              <Link to="/TechMarketing"> <h3 className='blog-title'> Should Web Development Be Considered Tech? </h3></Link>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development. </p>
              <Link to="/TechMarketing"><button className="button"> Read More </button></Link>
            </div>
          </div> */}

        </div>
    </section>
  )
}

export default BlogCard;