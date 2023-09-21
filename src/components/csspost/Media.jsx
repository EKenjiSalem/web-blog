import React from 'react';
import './csspost.css';
import cssimages from '../../images/rsz_css-image.png';
import mcssimages from '../../images/mimage.png';
import sizing from '../../images/rsz_sized-img.png';
import msizing from '../../images/rsz_1sized-img.png';
import filtering from '../../images/rsz_filtered-img.png';
import mfiltering from '../../images/rsz_1filtered-img.png';
import opacity from '../../images/rsz_opacity.png';
import mopacity from '../../images/rsz_1opacity.png';
import border from '../../images/border-shape.png';
import mborder from '../../images/rsz_1border.png';
import response from '../../images/rsz_response.png';
import mresponse from '../../images/rsz_1response.png';



const Media = () => {
  return (
    <div className="css-post">
        <div className="css-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="css-post-title"> Images</h1>
         <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div>
     
          <p className="media-main"> 
         <div className="intro-media">
          In the world of web design, images are more than just visual elements; they're storytellers,
           attention-grabbers, and mood-setters. Mastering CSS for images can take your web design
            skills to new heights. In this blog post, we'll explore some powerful techniques for using 
            HTML and CSS to enhance your web images.
            </div>
            <br />
            <br />

        <div className="background">
        <strong> Background Images: </strong>
        One of the most common ways to use CSS with images is by setting background images for HTML
         elements. This can instantly transform the look of your webpage. Let's create an enticing
          header with a background image:
          </div>

           <div className="media-img">
            <img src={cssimages} alt="" />
          </div>
          <div className="m-media-img">
            <img src={mcssimages} alt="" />
          </div>  

       <br />
       <br />

       <div className="sizing">
       <strong> Image Size and Scaling: </strong> 
      Controlling the size of images is essential for maintaining
      a consistent design. You can easily adjust the dimensions 
      of images using CSS properties like width and height. 
      This ensures that images fit seamlessly into your web 
      layout:
      </div>

         <div className="media-img">
            <img src={sizing} alt="" />
          </div>
          <div className="m-media-img">
            <img src={msizing} alt="" />
          </div>
    

       <br />
       <br />

       <div className="filtering"> 
       <strong> Image Filtering: </strong> 
       CSS supports various image filters like grayscale, blur,
      and sepia, which can be applied to images to create visual
       effects.
       </div>
         <div className="media-img">
            <img src={filtering} alt="" />
          </div>
          <div className="m-media-img">
            <img src={mfiltering} alt="" />
          </div>
      

       <br />
       <br />

       <div className="opacity">
       <strong>  Image Opacity:</strong> 
       CSS can control the transparency of images using the 
       opacity property. This is often used for creating image 
       overlays or hover effects.
       </div>
         <div className="media-img">
            <img src={opacity} alt="" />
          </div>
          <div className="m-media-img">
            <img src={mopacity} alt="" />
          </div>  

        <br />
       <br />

       <div className="borders">
       <strong>  Image Borders and Shapes:  </strong> 
       You can style the borders of images with CSS properties
        like border and border-radius. This can be used for
        creating rounded image corners or adding decorative
        borders.
        </div>

         <div className="media-img">
            <img src={border} alt="" />
          </div>
          <div className="m-media-img">
            <img src={mborder} alt="" />
          </div>  
          
       <br />
       <br />

       <div className="response">
       <strong> Responsive Images: </strong> 
       CSS media queries can be used to adjust the display of
        images based on the screen size or device, ensuring 
        images look good on different devices and screen 
        resolutions.
        </div>
          
        <div className="media-img">
            <img src={response} alt="" />
          </div>
          <div className="m-media-img">
            <img src={mresponse} alt="" />
          </div>  

            </p>
        </div>
    
    </div>
  )
}

export default Media;