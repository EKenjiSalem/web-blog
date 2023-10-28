import React from 'react';
import './csspost.css';
import metares from "../../images/rsz_metamobile.png";
import mmetamobile from "../../images/rsz_1metamobile.png";
import responsive from "../../images/rsz_responsive.png";
import mresponsive from "../../images/m-responsive.png";


const Mobile = () => {
  return (
    <div className="css-post">
        <div className="css-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="css-post-title"> Responsive Design </h1>
         {/* <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div> */}
         <p className="mobile-main"> 
         Responsive design refers to a web design approach aimed at creating websites and 
         web applications that provide an optimal viewing and interaction experience across
         a wide range of devices and screen sizes. The primary goal of responsive design
         is to ensure that the content and layout of a website automatically adapt to the
         screen size and device capabilities, ensuring a consistent and user-friendly
         experience for users on desktop computers, laptops, tablets, smartphones, and other
         devices.
<br />
<br />
         The following Meta tags must be included in the head section to
         control how the webpage is initially displayed and scaled on mobile 
         devices.
         <div className="metares-img">
            <img src={metares} alt="" />
          </div>
           <div className="m-metares-img">
            <img src={mmetamobile} alt="" />
          </div> 
<br />
<br /> 
         <strong> Media Queries: </strong> Media queries are used to apply different styles and layouts based on the characteristics of the user's device, such as screen width, height, and orientation.
<br />
<br />
         <strong> Breakpoints: </strong> Designers define specific breakpoints in their CSS where the layout and styling of the website can change to accommodate different screen sizes and orientations. Common breakpoints are often set for typical device widths, such as smartphones, tablets, and desktops.
         </p>
 
          <h1 className="mobile-title"> </h1> 
           <div className="mobile-img">
            <img src={responsive} alt="" />
          </div>

           <div className="m-ul-img">
            <img src={mresponsive} alt="" />
          </div>  
          </div>
        </div>
    

  )
}

export default Mobile;