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
              {/* <span className="blog-date"> April 25th, 2022 </span> */}
              <Link to="/MasterWeb"> <h3 className='blog-title'> Mastering Web Development </h3> </Link>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development.</p>
              <Link to="/MasterWeb"><button className="button"> Read More </button></Link>
            </div>
          </div>

          <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
            {/* <span className="blog-date"> April 25th, 2022 </span> */}
              <Link to="/Certificate"><h3 className='blog-title'> Meta Front-End Web Development Certificate </h3></Link>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development.</p>
              <Link to="/Certificate"><button class="button"> Read More </button></Link>
            </div>
          </div>

          <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
            {/* <span className="blog-date"> April 25th, 2022 </span> */}
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
          </div>

          <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
            {/* <span className="blog-date"> April 25th, 2022 </span> */}
              <Link to="/DomLearn"><h3 className='blog-title'> Why is the DOM taught Last? </h3></Link>
              <p className="blog-description"> 
               Web development has evolved into a dynamic and vital field that powers the digital 
               landscape we interact with daily. From the simplest static websites to complex
                web applications, the process of web development encompasses various technologies,
                 methodologies, and best practices. Whether you're an aspiring developer or 
                 a seasoned pro looking to stay updated, this guide will walk you through the key components 
                 and insights of web development. </p>
              <Link to="/DomLearn"><button className="button"> Read More </button></Link>
            </div>
          </div>
          
          <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
            {/* <span className="blog-date"> April 25th, 2022 </span> */}
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
          </div>
          
          <div className="blog-info" data-aos="fade-in">
            <img src={sidebar} alt="" />
            <div className="blog-content">
            {/* <span className="blog-date"> April 25th, 2022 </span> */}
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
          </div>
        </div>

    </section>
  )
}

export default Blog