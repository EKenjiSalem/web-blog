import React from 'react';
import './htmlpost.css';
// import sidebar from '../../images/rsz_sidebar.jpg';
import mediaimg from '../../images/rsz_media-img.png';
import mmediaimg from '../../images/rsz_1media-img.png';
import mediavid from '../../images/rsz_media-vid.png';
import mmediavid from '../../images/mobilevideo.png';
import mediaaudio from '../../images/rsz_media-aud.png';
import mmediaaudio from '../../images/mobilemedia-aud.png';
import mediaembedded from '../../images/rsz_mediaex.png';
import mobilemedia from '../../images/mobilemedia.png';


function Multimedia() {
  return (
    <div className="html-container">
        <div className="html-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="html-media-title"> Images, Videos, and Audio </h1>
         {/* <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Elias </b> </span>
            <span className="html-post-date"> 1 hour ago </span>
         </div> */}
         <p className="html-media-post">
          <div className="media-content-info"> 
         In HTML, images, videos, and audio are multimedia elements that can be embedded in a web
         page to provide visual and auditory content. These elements enhance the user experience by
         allowing you to incorporate visual, audio, and video content directly into your HTML 
         documents.
         </div>
      
          <ul>
            <li className="media-list"> <strong> Images: </strong> are used to display visual content on a web page.
          The img element is used to embed images, and it has a src attribute that specifies the 
          URL of the image file.<br /><br />
          
          The src attribute specifies the image file's URL. The alt attribute provides alternative text that is displayed if the image cannot
          be loaded or for accessibility purposes. Lastly, height and width can be set to adjust postioning.
          </li>

          <div className="media-main-img">
            <img src={mediaimg} alt="" />
          </div>
          <div className="m-media-main-img">
            <img src={mmediaimg} alt="" />
          </div>
<br />
          <li className="media-list">
          <strong> Video: </strong> the video element is used to embed videos on a web page. The video tag can contain one 
          or more source elements, each specifying different video formats for better browser compatibility.
          <br />
          <br />
          The controls attribute adds video playback controls play, pause, volume, etc. 
          The source elements inside provide different video formats for different browsers.
          </li>
           <div className="media-video-img">
            <img src={mediavid} alt="" />
           </div>
           <div className="m-media-video-img">
            <img src={mmediavid} alt="" />
           </div>          
<br />
<br />
          <li className="media-list-audio">
          <strong> Audio: </strong> the audio element is used to embed audio content on a web page. Similar to the video 
          element, it can contain one or more source elements specifying different audio formats. 
          </li>
          
          <div className="media-audio-img">
            <img src={mediaaudio} alt="" />
          </div>
          <div className="m-media-audio-img">
            <img src={mmediaaudio} alt="" />
          </div>
          </ul>
<br />
<br />
          <h1 className="media-embed-title"> Media Embedding Example: </h1>
           <div className="media-embed-img">
            <img src={mediaembedded} alt="" />
           </div>
           <div className="m-media-embed-img">
            <img src={mobilemedia} alt="" />
           </div>
         </p>
         </div>    
      </div>
  )
}

export default Multimedia;