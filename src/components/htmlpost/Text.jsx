import React from 'react';
import './htmlpost.css';
import sidebar from '../../images/rsz_text.png';

function Text() {
  return (
    <div className="html-post">
        <div className="html-post-wrapper">
        <h1 className="html-post-title"> Text</h1>
         <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Elias </b> </span>
            <span className="html-post-date"> 1 hour ago </span>
         </div>
         <p className="html-blog-post">
         Elements and Tags
HTML elements are the stars of the show. They encompass everything from text and images to forms and multimedia. Let's delve into some commonly used HTML elements:
<br />
<br />

<div className="html-formats"> 
Text Elements: h1 through h6 for headings, p for paragraphs, strong for strong emphasis, em for emphasis.
<img src={sidebar} alt="" />
</div>
    
          </p>
        </div>
    
    </div>
  )
}

export default Text;