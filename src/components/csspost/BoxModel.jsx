import React from 'react';
import './csspost.css';
import boxmodel from '../../images/rsz_box_model.png';
import mboxmodel from '../../images/rsz_1box_model.png';
import margin from '../../images/margin.png';
import mmargin from '../../images/rsz_margin.png';
import content from '../../images/content.png';
import mcontent from '../../images/rsz_content.png';
import padding from '../../images/padding.png';
import mpadding from '../../images/rsz_padding.png';
import border from '../../images/border.png';
import mborder from '../../images/rsz_border.png';
import radborder from '../../images/radborder.png';
import mradborder from '../../images/rsz_radborder.png';


const BoxModel = () => {
  return (
    <div className="css-post">
        <div className="css-post-wrapper">
        <h1 className="css-post-title"> BoxModel </h1>
         {/* <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div> */}

         <main> 
          <p className="boxmodel-main"> 
            The box model is a fundamental concept in web development and design that 
            controls element spacing, layout, and how their dimensions are calculated.
            By adjusting the padding, border, and margin properties, designers can create 
            visually pleasing and well-organized web layouts. Additionally, the box model helps
            ensure that elements interact correctly with each other, preventing layout issues
            and conflicts on a webpage.

           <div className="boxmodel-img">
            <img src={boxmodel} alt="" />
           </div>
           <div className="m-boxmodel-img">
            <img src={mboxmodel} alt="" />
           </div>  
<br />
<br />

    <ul>
    <h1 className="width-heigth-title"> Width and Height: </h1>
   width and height properties are part of the CSS Box Model, yet are are used to 
   specify the dimensions of the content area of an element.

<br />
<br />
    The width property defines the horizontal dimension of the content area,
    while the height property determines the vertical dimension. 
    These properties directly affect the size of the content box within 
    the box model.

<br />
<br />
    <h1 className="layout-spacing-title"> To Control Spacing, The Box Model offer 4 Main Components: Content, Margin, Border, Padding </h1>
<br />
    <strong> Note: </strong> margin and padding shorthand for top, bottom, right, left - margin/padding: 1rem 5rem 4rem 7rem;
<br />
     <li className="spacing-list"> 
     <strong> Content: </strong>
      The content is the innermost part of the element, where the actual content,
      such as text or images, is placed.
     </li>
 
         <div className="content-img">
            <img src={content} alt="" />
           </div>
           <div className="m-content-img">
            <img src={mcontent} alt="" />
           </div>  

     <li className="spacing-list">   
      <strong> Padding: </strong>
      Padding is the space between the content and the element's border. It provides
      spacing and separation. 
     </li>

         <div className="padding-img">
            <img src={padding} alt="" />
           </div>
           <div className="m-padding-img">
            <img src={mpadding} alt="" />
           </div>  

     
     <li className="spacing-list"> 
      <strong> Border: </strong>
      The border surrounds the padding and content, creating a visible boundary around 
      the element. You can customize borders with styles, colors, and widths.
      </li>
         <div className="border-img">
            <img src={border} alt="" />
           </div>
           <div className="m-border-img">
            <img src={mborder} alt="" />
           </div>  

      <li className="spacing-list"> 
      <strong> Border-Radius: </strong>
      Allows you to round the edges of a content box. 
      </li>
         <div className="border-radius-img">
            <img src={radborder} alt="" />
           </div>
           <div className="m-border-radius-img">
            <img src={mradborder} alt="" />
           </div>  



      <li className="spacing-list"> 
      <strong> Margin: </strong>
      The margin is the outermost part of the box model, representing the space between
      the element's border and adjacent elements on the page. Margins control spacing 
      between elements.
      </li>
          <div className="margin-img">
            <img src={margin} alt="" />
           </div>
           <div className="m-margin-img">
            <img src={mmargin} alt="" />
           </div>  
    </ul>




          </p>
         </main>

        </div>
    </div>
  )
}

export default BoxModel;



