import React from 'react';
import './csspost.css';


const Selectors = () => {
  return (
    <div className="css-post">
        <div className="css-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="css-post-title"> Animations </h1>
         <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div>
         <p className="animations-main"> 
           CSS, which stands for Cascading Style Sheets, is a stylesheet
          language used for describing the presentation and layout of web documents 
          written in HTML and XML. In simpler terms, CSS is used to control how web pages
          look and are structured. It allows you to define the visual style, formatting,
           and positioning of elements on a web page.

           <h1 className="animations-title"> Understanding the Basic Concepts of CSS </h1> 
         
  

          {/* <div className="ul-img">
            <img src={ul} alt="" />
          </div>
          <div className="m-ul-img">
            <img src={ul} alt="" />
          </div>  

        */}

          
            </p>
        </div>
    
    </div>
  )
}

export default Selectors;