import React from 'react';
import './csspost.css';


function CssPost() {
  return (
    <div className="css-post">
        <div className="css-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="css-post-title"> What is CSS?  </h1>

         {/* <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div> */}

         <p className="css-main"> 
          CSS, which stands for Cascading Style Sheets, is a stylesheet
          language used for describing the presentation and layout of web documents 
          written in HTML. CSS is used to control websites appearance and structure.
          CSS allows you to define the visual style, formatting, and positioning.

          <br />
          <br />

           <h1 className="css-title"> Understanding the Basic Concepts of CSS: </h1> 
            <div className="css-basics">
             <ul className="list-container">
             <li> <strong> Selectors and Declarations: </strong>
                CSS is all about selecting HTML elements and applying styling and layout rules to them.
                 This is done through selectors and declarations. Selectors target specific 
                 elements, and declarations define how those elements should look. </li>
           <br />
             <li> <strong> Layout and Positioning / Box Model: </strong> 
              CSS positioning is a crucial aspect of web development that allows you to
              precisely control the layout and placement of elements on a web page. Understanding 
              CSS positioning is essential for crafting well-structured and 
              visually appealing websites </li>  
           <br />
             <li> <strong> Grid and Flexbox: </strong>
              CSS Grid and Flexbox are powerful layout tools. Although they're two different concepts and work indenpendently,
              flexbox and the grid can be combined to create amazing layout features. Grids focuses on two-dimensional layouts,
               while Flexbox focuses on one-dimensional layouts. </li>
          <br />
             <li> <strong> Responsive Mobile Design: </strong>
              Media queries allow you can change element positioning based on the screen 
              size. This is essential for ensuring your layout looks good on various devices.
               </li>
          <br />
             <li>  <strong> Specificity: </strong>
             Specificity is a set of rules that determine which styles are applied to an
              HTML element when multiple conflicting styles are present. Specificity is all
               about how the browser decides which CSS rule to apply when there are 
               competing selectors targeting the same element.</li>
          <br />
             <li> <strong> Animations: </strong>
             CSS animations are a way to add motion, interactivity, and visual effects to elements on a web page
              using CSS. Animations include smooth transitions, effects, and dynamic changes in response to user
              interactions or predefined events.</li>
          <br />
             <li> <strong> Multimedia: </strong> 
              Web design has evolved beyond static text and images. Today, multimedia elements like images,
              videos, and audio are essential for creating engaging and dynamic web experiences.
              Multimedia elements enhance your website's visual appeal and storytelling capabilities. </li>
          <br />
             <li> <strong> Colors: </strong> 
             Colors are an integral part of web design, setting the mood and tone of a web page. Colors can be
             applied to images, text, backgrounds, borders and even buttons. CSS provides a wide array of 
             options for defining and applying colors, from simple color names to sophisticated gradients. </li>
             </ul>
<br /> 
<br />
            </div>    
            </p>

        </div>
    </div>
  )
}

export default CssPost;