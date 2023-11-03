import React from 'react';
import './htmlpost.css';
import textexample from '../../images/rsz_text.png';
import mobiletext from '../../images/mobile_text.png';


function Text() {
  return (
    <div className="html-post">
        <div className="html-post-wrapper">
        <h1 className="html-post-title"> Text</h1>
         {/* <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Elias </b> </span>
            <span className="html-post-date"> 1 hour ago </span>
         </div> */}
         <p className="text-blog-post">
        <h1 className="elements-title"> Elements and Tags: </h1>
         HTML elements are the stars of the show. They encompass everything from text and images to forms and multimedia. Let's delve into some commonly used HTML elements:
         </p>
<br />
<br />
        <p className="html-formats"> 
        <h1 className="text-block"> Text Block Elements: </h1> 
         <ul> 
          <li className="block-list"><strong>h1 - h6 </strong>for headings </li>
          <li className="block-list"><strong> p - </strong>  for paragraphs </li>
          <li className="block-list"><strong> div - </strong> A generic container for grouping and structuring content </li>
          <li className="block-list"><strong> ul - </strong> Unordered list is used to create a list of items </li>
          <li className="block-list"><strong> ol - </strong> Ordered numbered list is used to a create a list of items </li>
          <li className="block-list"><strong> li - </strong> Represents a list item within an ul or ol. </li>
          <li className="block-list"><strong> form -  </strong> Represents a form container for input fields, buttons, and other form elements. </li>
         </ul>
         </p>
        
         <p className="html-formats"> 
         <h1 className="text-inline"> Text Inline Elements: </h1>
         <ul> 
          <li className="inline-list"><strong> img - </strong> Used for embedding images within the text content </li>
          <li className="inline-list"><strong> a - </strong> Used for creating hyperlinks, allowing you to link to other web pages or resources </li>
          <li className="inline-list"><strong> strong - </strong> Creates a bold text </li>
          <li className="inline-list"><strong> em and i - </strong> Used to emphasize text or display it in italics </li>
          <li className="inline-list"><strong> input - </strong> Used in forms to create various input fields, such as text boxes and checkboxes </li>
          <li className="inline-list"><strong> button - </strong> Used to create clickable buttons, typically within forms or for other interactive elements </li>  
         </ul>
        </p>
          <h1 className="text-example-title"> An example of common block and inline elements: </h1>
          <div className="text-img">
           <img src={textexample} alt="" />
          </div>
          <div className="m-text-img">
           <img src={mobiletext} alt="" />
          </div>
    
       
        </div>
    
    </div>
  )
}

export default Text;