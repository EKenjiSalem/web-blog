import React from 'react';
import codepost from '../../images/cssmain.webp';
import './csspost.css';
import {Link} from 'react-router-dom';
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Css() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
  <section className="css-blog" id="html-blog">
   <div className="css-blog-container">
    <div className="css-blog-info" data-aos="fade-left">
      <img src={codepost} alt="" />
      <div className="css-blog-content">
        {/* <span className="css-blog-date"> April 25th, 2022 </span> */}
        <Link to="/CssPost"><h3 className="css-blog-title"> What is CSS? </h3></Link>
        <p className="css-blog-description"> 
          CSS, which stands for Cascading Style Sheets, is a stylesheet
          language used for describing the presentation and layout of web documents 
          written in HTML. CSS is used to control websites appearance and structure.
        </p>
        <Link to="/CssPost"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="css-blog-info" data-aos="zoom-in">
      <img src={codepost} alt="" />
      <div className="css-blog-content">
      {/* <span className="blog-date"> April 25th, 2022 </span> */}
       <Link to="/Selectors"><h3 className="css-blog-title"> Exploring Selectors </h3></Link> 
        <p className="css-blog-description"> 
        Selectors are powerful tools that allow you to target specific HTML elements and
         apply styles to them. Understanding how CSS selectors work is fundamental to 
         effective web design
     </p>
       <Link to="/Selectors"><button class="button"> Read More </button></Link>
      </div>
    </div>

    <div className="css-blog-info" data-aos="fade-right">
      <img src={codepost} alt="" />
      <div className="css-blog-content">
      {/* <span className="css-blog-date"> April 25th, 2022 </span> */}
        <Link to="/BoxModel"> <h3 className="css-blog-title"> The Craft of the Box Model  </h3></Link>
        <p className="css-blog-description"> 
       Layout and positioning are fundamental aspect of web development that empowers you to 
        precisely control the layout and placement of elements on your web page. Understanding how the
        Box Model works is crucial for mastering layout design and positioning elements.
       </p>
       <Link to="/BoxModel"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="css-blog-info" data-aos="fade-left">
      <img src={codepost} alt="" />
      <div className="css-blog-content">
      {/* <span className="css-blog-date"> April 25th, 2022 </span> */}
       <Link to="/FlexBox"><h3 className="css-blog-title"> Flex and the Grid Examined </h3></Link> 
        <p className="css-blog-description"> 
        Flexible Box Layout "FlexBox" is a one-dimensional layout model designed to help you
        arrange and distribute space efficiently among items within a container. Grid Layout "Grid", 
        is a two-dimensional layout system that allows you to create complex grid structures with 
        rows and columns.
       </p>
        <Link to="/FlexBox"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="css-blog-info" data-aos="zoom-in">
      <img src={codepost} alt="" />
      <div className="css-blog-content">
      {/* <span className="css-blog-date"> April 25th, 2022 </span> */}
        <Link to="/Mobile"><h3 className="css-blog-title"> Responsive Mobile Design </h3></Link>
        <p className="css-blog-description"> With the rise of mobile devices, responsive
         web design has become essential. Media queries in CSS allow you to control the
         responsiveness of a webpages structure by applying different styles based on the device's 
         screen size, ensuring your website looks great on various devices.
      </p>
        <Link to="/Mobile"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="css-blog-info" data-aos="fade-right">
      <img src={codepost} alt="" />
      <div className="css-blog-content">
      {/* <span className="css-blog-date"> April 25th, 2022 </span> */}
        <Link to="/Colors"><h3 className="css-blog-title"> The World of Colors </h3></Link>
        <p className="css-blog-description"> 
         Colors are an integral part of web design, setting the mood and tone of a web page. Colors can be
         applied to images, text, backgrounds, borders and even buttons. CSS provides a wide array of 
         options for defining and applying colors, from simple color names to sophisticated gradients. 
  
      </p>
        <Link to="/Colors"><button className="button"> Read More </button></Link>
      </div>
    </div>

    <div className="css-blog-info" data-aos="fade-left">
      <img src={codepost} alt="" />
      <div className="css-blog-content">
      {/* <span className="css-blog-date"> April 25th, 2022 </span> */}
        <Link to="/Specificity"><h3 className="css-blog-title"> Specificity </h3></Link>
        <p className="css-blog-description"> 
        In CSS, specificity is a set of rules that determine which styles are applied to
         an HTML element when multiple conflicting styles are present. Specificity is all 
         about how the browser decides which CSS rule to apply when there are competing 
         selectors targeting the same element.

  
      </p>
        <Link to="/Specificity"><button className="button"> Read More </button></Link>
      </div>
    </div>

        <div className="css-blog-info" data-aos="zoom-in">
      <img src={codepost} alt="" />
      <div className="css-blog-content">
      {/* <span className="css-blog-date"> April 25th, 2022 </span> */}
        <Link to="/Media"><h3 className="css-blog-title"> Images </h3></Link>
        <p className="css-blog-description"> 
        Web design has evolved beyond static text and images. Today, multimedia elements like images,
        videos, and audio are essential for creating engaging and dynamic web experiences.
        Multimedia elements enhance your website's visual appeal and storytelling capabilities.
      </p>
        <Link to="/Media"><button className="button"> Read More </button></Link>
      </div>
    </div>
    
    <div className="css-blog-info" data-aos="fade-right">
      <img src={codepost} alt="" />
      <div className="css-blog-content">
      {/* <span className="css-blog-date"> April 25th, 2022 </span> */}
        <Link to="/Animations"><h3 className="css-blog-title"> Amazing Animations </h3></Link>
        <p className="css-blog-description"> 
        CSS animations are a way to add motion, interactivity, and visual effects to elements on a web page
        using CSS. Animations include smooth transitions, effects, and dynamic changes in response to user
        interactions or predefined events.
    </p>
       <Link to="/Animations"> <button className="button"> Read More </button></Link>
      </div>
    </div>
  </div>






  
</section>
  )
}

export default Css;