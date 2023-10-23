import React from 'react';
import './htmlpost.css';
// import boilerplate from '../../images/rsz_boilerplate.png';
import htmltemplate from '../../images/rsz_htmltemplate.png';
import mhtmltemplate from '../../images/rsz_1htmltemplate.png';

function HtmlPost() {
  return (
    <div className="html-container">
        <div className="html-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="html-post-title"> Exploring HTML: The Building Blocks of the Web  </h1>
         {/* <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Coder Life </b> </span>
            <span className="html-post-date"> Oct 17 2023 </span>
         </div> */}
         <p className="html-blog-post">
          <div className="html-blog-info">
          HTML, which stands for HyperText Markup Language, is the standard markup language used to create web
          pages and define their structure and content. It is a fundamental building block of the World Wide
          Web and is used in conjunction with cascading style sheets (CSS) and JavaScript to create web 
          applications and websites.
<br />
<br />
          HTML consists of a series of elements, which are represented by tags. These tags are used to 
          structure the content of a web page, specifying things like headings, paragraphs, lists, links,
          images, and more. The structure and organization of the content on a web page are crucial for both 
          humans and web browsers to understand and render the page correctly.
          </div>
<br />
<br />
          <h1 className="basic-html-title"> Basic structure of an HTML5 template: </h1>
          <div className="html-post-img">
          <img src={htmltemplate} alt="" />
         </div>
         <div className="m-html-post-img">
          <img src={mhtmltemplate} alt="" />
         </div>
     
 <br />
          <div className="html-conclusion">
          In Conclusion, HTML isn't just a language; it's the architectural blueprint of the digital world we inhabit. With its tags and elements, HTML provides the framework for conveying ideas, sharing information, and creating immersive experiences on the web. As you continue your journey in web development, remember that every webpage's foundation rests upon the elegant simplicity of HTML.
          So embrace the tags, experiment with the elements, and shape your own corner of the internet using the magical language of HTML.     
          </div>
        

          </p>



        </div>
    
    </div>
  )
}

export default HtmlPost;