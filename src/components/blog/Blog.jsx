import React from 'react';
import sidebar from '../../images/rsz_sidebar.jpg'
import {Link} from 'react-router-dom';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './blog.css';

const Blog = () => {

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
               designed by Meta. In blog post, we will review the course's structure, curriculum, instructors and more. 
               If you want an insight from a actual graduate of the program, please feel free to join me on
               this journey of reviewing a top rated coding program. </p>
              <Link to="/Certificate"><button class="button"> Read More </button></Link>
            </div>
          </div>

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
              concepts taught to students. </p>
              <Link to="/DomLearn"><button className="button"> Read More </button></Link>
            </div>
          </div>
          

          {/* <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
              <Link to=""><h3 className='blog-title'> Variables, Properties, Methods </h3></Link>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development.</p>
              <Link to=""><button className="button"> Read More </button></Link>
            </div>
          </div> */}


          {/* <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
              <Link to="/Functional"><h3 className='blog-title'> Functional V.S Object Oriented Programming   </h3></Link>
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
          
           {/* <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
              <Link to="TechMarketing"><h3 className='blog-title'> Should Web Development Be Considered Tech? </h3></Link>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development. </p>
              <Link to="TechMarketing"><button className="button"> Read More </button></Link>
            </div>
          </div> */}
        </div>
    </section>
  )
}

export default Blog