import React from 'react';
import './htmlpost.css';
import organiz from '../../images/organiz.png';
import morganiz from '../../images/rsz_organiz.png';
import layout from '../../images/layout.png';
import mlayout from '../../images/rsz_layout.png';
import jsint from '../../images/rsz_1jsint.png';
import mjsint from '../../images/rsz_jsint.png';
import nesting from '../../images/nesting.png';
import mnesting from '../../images/rsz_1nesting.png';

function Div() {
  return (
    <div className="html-post">
        <div className="html-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="html-post-title"> The Magnificent Div </h1>
         {/* <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Elias </b> </span>
            <span className="html-post-date"> 1 hour ago </span>
         </div> */}
         <p className="div-blog-post">
         In HTML, div is a fundamental and versatile element that is used to 
         create a division or a container for grouping and structuring content
          within a web page. The term "div" stands for "division." It is a 
          non-semantic element, meaning it doesn't inherently convey any specific 
          meaning like headings or paragraphs do, but it is incredibly useful for 
          styling and layout purposes.
<br />
<br />
          The div is also a blank canvas that holds other HTML elements and
          content. Unlike semantic elements like headings h1 to h6, paragraphs
          p, or lists ul, ol, div elements do not carry any inherent meaning.
          Instead, they provide a structural framework and styling hooks for 
          your web page.
<br />
<br />
          The div element is a cornerstone of web development and often used as a building block in combination with 
          CSS Cascading Style Sheets to create layouts, apply styling, and organize
           content. It allows you to group multiple HTML elements together and 
           apply styling or functionality to the group as a whole. 
          </p>

      
         <h1 className="organiz-main-title"> The Main Purposes for a Div: </h1>
         <h3 className="organiz-title"> Structural Organization: </h3>
         <p className="organiz-main"> The primary role of div elements
           is to divide and structure the content of a web page. By placing 
           content within div elements, you can group related elements
           together, creating a logical structure that enhances the 
           organization and readability of your HTML. </p>

      <div className="organiz-img"> <img src={organiz} alt=""/> </div>

      <div className="m-organiz-img"> <img src={morganiz} alt=""/> </div>
      
      <h1 className="layout-main-title"> Styling and Layout: </h1>
      <p className="layout-main">  div  elements act as containers for
       applying CSS styles and creating layouts. By assigning unique IDs 
       or classes to div elements, you can target and style them precisely, 
       making it easier to control the presentation of your web page.</p>

      <div className="layout-img"> <img src={layout} alt=""/> </div>

      <div className="m-layout-img"> <img src={mlayout} alt=""/> </div>


       <h1 className="jsint-title"> Javascript Intergration: </h1>
        <p className="jsint-main"> When combined with JavaScript, div elements
         become dynamic building blocks for creating interactive web applications.
         JavaScript can manipulate and update the content and behavior of div 
         containers based on user interactions and application logic. </p>

      <div className="jsint-img"> <img src={jsint} alt=""/> </div>

      <div className="m-jsint-img"> <img src={mjsint} alt=""/> </div>


      <h1 className="nest-title"> Nesting Div Elements: </h1>
      <p className="nest-main"> 
      Nesting div elements involves placing one div inside another,
      creating a hierarchical structure for your content. This practice offers
      several benefits:

      <ul>
      <li className="nest-list"><strong> Improved Organization: </strong> Nesting div elements helps organize your content
      into logical sections, making it easier to manage and style. </li>

     <li className="nest-list"><strong> Precise Styling: </strong> Each nested div can be assigned unique IDs or classes,
      allowing for precise CSS styling and layout control. </li> 

      <li className="nest-list"> <strong> Complex Layouts: </strong> For more complex page layouts, nesting is essential. 
      You can create grids, columns, and intricate structures by combining
      nested div elements.</li>
      </ul>
     </p>

      <div className="nest-img"> <img src={nesting} alt=""/> </div>

      <div className="m-nest-img"> <img src={mnesting} alt=""/> </div>

      </div>
    </div>
  )
}

export default Div;