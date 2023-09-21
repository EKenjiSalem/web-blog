import React from 'react';
import './htmlpost.css';
import boilerplate from '../../images/rsz_boilerplate.png';

function HtmlPost() {
  return (
    <div className="html-post">
        <div className="html-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="html-post-title"> Demystifying HTML: The Building Blocks of the Web  </h1>
         <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Elias </b> </span>
            <span className="html-post-date"> 1 hour ago </span>
         </div>
         <p className="html-blog-post">
          HTML is a markup language used to create the structure of web pages. HTML employs a set of predefined
           elements, each with a specific purpose, to organize and present content. These elements, often 
           represented as tags, act as building blocks that browsers interpret to render text, images, links, and other multimedia.
          <br />
          <br />
          <div className="html-img">
          Basic structure of an HTMl5 template:
          <img src={boilerplate} alt="" className="boiler-img" />
          </div>
          <br />
          In Conclusion, HTML isn't just a language; it's the architectural blueprint of the digital world we inhabit. With its tags and elements, HTML provides the framework for conveying ideas, sharing information, and creating immersive experiences on the web. As you continue your journey in web development, remember that every webpage's foundation rests upon the elegant simplicity of HTML.
          So embrace the tags, experiment with the elements, and shape your own corner of the internet using the magical language of HTML.     
          </p>
        </div>
    
    </div>
  )
}

export default HtmlPost;