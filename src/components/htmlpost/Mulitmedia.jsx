import React from 'react';
import './htmlpost.css';
// import sidebar from '../../images/rsz_sidebar.jpg';
import mediaimg from '../../images/rsz_media-img.png';
import mediavid from '../../images/rsz_media-vid.png';
import mediaaud from '../../images/rsz_media-aud.png';


function Multimedia() {
  return (
    <div className="html-post">
        <div className="html-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="html-post-title"> Images, Videos, and Audio </h1>
         <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Elias </b> </span>
            <span className="html-post-date"> 1 hour ago </span>
         </div>
         <p className="html-blog-post">
         In HTML, images, videos, and audio are multimedia elements that can be embedded in a web
         page to provide visual and auditory content. These elements enhance the user experience by
         allowing you to incorporate visual, audio, and video content directly into your HTML 
         documents.
         </p>

         <div className="multimedia-content">
          <ul>
            <li className="content"> <strong> Images: </strong> are used to display visual content on a web page.
          The img element is used to embed images, and it has a src attribute that specifies the 
          URL of the image file.<br /><br />
          
          The src attribute specifies the image file's URL. The alt attribute provides alternative text that is displayed if the image cannot
          be loaded or for accessibility purposes. Lastly, height and width can be set to adjust postioning.
          </li>

          <div className="media-img">
            <img src={mediaimg} alt="" />
          </div>
          
          <br />
          <li className="content-1">
          <strong> Video: </strong> the video element is used to embed videos on a web page. The video tag can contain one 
          or more source elements, each specifying different video formats for better browser compatibility.
          <br />
          <br />
          The controls attribute adds video playback controls play, pause, volume, etc. 
          The source elements inside provide different video formats for different browsers.
          </li>
           <div className="media-img">
            <img src={mediavid} alt="" />
           </div>
          
          <br />
          <br />
          <li className="content-2">
          <strong> Audio: </strong> the audio element is used to embed audio content on a web page. Similar to the video 
          element, it can contain one or more source elements specifying different audio formats. 
          </li>
          
           <div className="media-img">
             <img src={mediaaud} alt="" />
           </div>


          </ul>
         </div>
    
        </div>    
    </div>
  )
}

export default Multimedia;