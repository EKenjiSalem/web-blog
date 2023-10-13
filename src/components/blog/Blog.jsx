import React from 'react';
import sidebar from '../../images/rsz_sidebar.jpg'
import {Link} from 'react-router-dom';
import './blog.css';

function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="blog-container">
          <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
              <span className="blog-date"> April 25th, 2022 </span>
              <Link to="/SinglePost"> <h3 className='blog-title'> Mastering Web Development </h3> </Link>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development.</p>
              <Link to="/SinglePost"><button className="button"> Read More </button></Link>
            </div>
          </div>
          <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
            <span className="blog-date"> April 25th, 2022 </span>
              <a href="#"><h3 className='blog-title'> Meta Front-End Web Development Certificate </h3></a>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development.</p>
              <a href="#"><button class="button"> Read More </button></a>
            </div>
          </div>
          <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
            <span className="blog-date"> April 25th, 2022 </span>
              <a href="#"><h3 className='blog-title'> Variables, Properties, Methods </h3></a>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development.</p>
              <a href="#"><button className="button"> Read More </button></a>
            </div>
          </div>
          <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
            <span className="blog-date"> April 25th, 2022 </span>
              <a href="#"><h3 className='blog-title'> Why is the DOM taught Last? </h3></a>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development. </p>
              <a href="#"><button className="button"> Read More </button></a>
            </div>
          </div>
          <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
            <span className="blog-date"> April 25th, 2022 </span>
              <a href="#"><h3 className='blog-title'> Functional V.S Object Oriented Programming   </h3></a>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development.</p>
              <a href="#"><button className="button"> Read More </button></a>
            </div>
          </div>
          
          <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="article-content">
            <span className="blog-date"> April 25th, 2022 </span>
              <a href="#"><h3 className='blog-title'> Should Web Development Be Considered Tech? </h3></a>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development. </p>
              <a href="#"><button className="button"> Read More </button></a>
            </div>
          </div>
        </div>



    </section>
  )
}

export default Blog