import './htmlpost.css';
import idimg from '../../images/id.png';
import midimg from '../../images/rsz_id.png';
import idselector from '../../images/idselector.png';
import midselector from '../../images/rsz_idselector.png';
import classimg from '../../images/class.png';
import mclassimg from '../../images/rsz_class.png';
import hrefimg from '../../images/href.png';
import mhrefimg from '../../images/rsz_href.png';
import stylingimg from '../../images/styling.png';
import mstylingimg from '../../images/rsz_styling.png';
import classjsimg from '../../images/rsz_class-js.png';
import mclassjsimg from '../../images/rsz_3class-js.png';
import imgsrc from '../../images/imgsrc.png';
import mimgsrc from '../../images/rsz_imgsrc.png';
import scriptsrc from '../../images/scriptsrc.png';
import mscriptsrc from '../../images/rsz_scriptsrc.png';
import audiosrc from '../../images/audiosrc.png';
import maudiosrc from '../../images/rsz_audiosrc.png';
import videosrc from '../../images/videosrc.png';
import mvideosrc from '../../images/rsz_videosrc.png';
import alt from '../../images/alt.png';
import malt from '../../images/rsz_alt.png';
import imgwidth from '../../images/imgwidth.png';
import mimgwidth from '../../images/rsz_imgwidth.png';
import vidheight from '../../images/vidheight.png';
import mvidheight from '../../images/rsz_vidheight.png';
import tabwidth from '../../images/tabwidth.png';
import mtabwidth from '../../images/rsz_tabwidth.png';
import styleattr from '../../images/styleattr.png';
import mstyleattr from '../../images/rsz_styleattr.png';
import targetimg from '../../images/target.png';
import mtargetimg from '../../images/rsz_target.png';



function Attributes() {
  return (
    <div className="html-container">
        <div className="html-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="html-post-title"> Exploring Attributes </h1>
         {/* <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Elias </b> </span>
            <span className="html-post-date"> 1 hour ago </span>
         </div> */}
         
         <p className="html-attr-intro">
         HTML attributes are additional pieces of information added to HTML elements to define their 
         characteristics, modify their behavior, or provide supplementary data. These attributes
          are specified within the opening tag of an HTML element and consist of a name-value pair. 
          The name and value are separated by an equal sign =, and the value is enclosed in double or
           single quotation marks.
          </p>

         <hr className="id-line" />
          <h1 className="attr-post-title"> ID Attributes: </h1>
          <hr className="id-line"/> 
    
         <p className="attr-main">
         HTML attributes can vary depending on the element they are applied to.
         Let's explore some commonly used attributes and their purposes:
<br />
<br />
        The id attribute assigns a unique identifier to an element on the page. It's often used 
        in CSS and JavaScript to select and style specific elements.
         </p>

         <div className="attr-post-img">
          <img src={idimg} alt="" />
         </div>
         <div className="m-attr-img">
          <img src={midimg} alt="" />
         </div>
<br />
<br />
         <h1 className="id-attr-title"> ID Attributes with JavaScript: </h1>
          <p className="attr-main">
          You can use JavaScript's Document Object Model (DOM) to select an element by its id 
          attribute.
<br />
<br />
         In this example, document.getElementById("myElement") is used to select the HTML element
         with the id attribute set to "myElement." After selecting the element, you can manipulate
         or access its properties and content.

         </p>

         <div className="attr-post-img">
          <img src={idselector} alt="" />
         </div>
         <div className="m-idselector-img">
          <img src={midselector} alt="" />
         </div>

        <hr className="id-line" />
         <h1 className="class-post-title"> Class Attributes: </h1>
        <hr className="id-line" />

         <p className="class-main">
         The class attribute in HTML is used to assign one or more class names to
          elements. These class names are typically used for styling with CSS and 
          for selecting elements with JavaScript. Here are various uses for the 
          class attribute in HTML:
<br />
<br />
          This attribute is a versatile tool that allows you to style, select,
          and enhance the functionality of elements on your web page. It's a fundamental part of
           web development, enabling you to create consistent and responsive designs while also 
           facilitating interactivity within your HTML documents.
         </p>
         <div className="class-post-img">
          <img src={classimg} alt="" />
         </div>
         <div className="m-class-img">
          <img src={mclassimg} alt="" />
         </div>

         <h1 className="class-styles-title"> Class to Style with CSS: </h1>
         <p className="class-styles">
          The primary use of the class attribute is to apply
          specific CSS styles to elements. By defining styles in a CSS stylesheet 
          and associating them with class names, you can easily apply consistent
           styling across multiple elements.   </p>
           <div className="styling-img">
          <img src={stylingimg} alt="" />
         </div>
         <div className="m-styling-img">
          <img src={mstylingimg} alt="" />
         </div>
<br />
<br />
         <h1 className="class-js-title">  Class to create functionality in JavaScript: </h1>
         <p className="class-js"> Selecting Elements with JavaScript: JavaScript can target elements
          with specific class names.</p>
           <div className="class-js-img">
          <img src={classjsimg} alt="" />
         </div>
          <div className="m-class-js-img">
          <img src={mclassjsimg} alt="" />
         </div>
<br />
<br /> 
         <hr className="id-line" />
          <h1 className="href-post-title"> Href Attributes: </h1>
         <hr className="id-line" />

         <p className="href-main">
          HTML attributes can vary depending on the element they are applied to.
          Let's explore some commonly used attributes and their purposes:
<br />
<br />
          The id attribute assigns a unique identifier to an element on the page. It's often used 
          in CSS and JavaScript to select and style specific elements.
         </p>
         <div className="href-post-img">
          <img src={hrefimg} alt="" />
         </div>
         <div className="m-href-img">
          <img src={mhrefimg} alt="" />
         </div>

         <hr className="id-line" />
          <h1 className="src-post-title"> Src Attributes: </h1>
         <hr className="id-line" />

         <p className="src-main">
         The src attribute in HTML is used to specify the source - URL or file path -
          for various elements. Its usage depends on the type of HTML element it's 
          applied to. Here are some common uses for the src attribute:
         </p>

<br />

         <h1 className="src-title-img"> Image Src: </h1>
         <p className="src-main">  The src attribute in the img element specifies the source
          URL or file path of an image to be displayed on the web page. 
         </p>

         <div className="src-post-img">
          <img src={imgsrc} alt="" />
         </div>
         <div className="m-src-img">
          <img src={mimgsrc} alt="" />
         </div>

         <h1 className="script-src-title"> Script Files: </h1>
         <p className="src-main"> The src attribute is used to reference an external
          JavaScript file. This allows you to include JavaScript code from an
           external source. In other words the including the src with the script 
           file will connect the html file with the javascript file. Note: this 
           file is usually written directly above the ending body tag.
         </p>

         <div className="src-post-img">
          <img src={scriptsrc} alt="" />
         </div>
         <div className="m-src-img">
          <img src={mscriptsrc} alt="" />
         </div>

         <h1 className="audio-src-title"> Audio Src: </h1>
         <p className="audio-main"> When working with audio files, such as MP3 or WAV files, 
         the src attribute in the - audio - element specifies the URL or file path of
          the audio file to be played.
         </p>

         <div className="audio-src-img">
          <img src={audiosrc} alt="" />
         </div>
         <div className="m-audio-src-img">
          <img src={maudiosrc} alt="" />
         </div>

         <h1 className="video-src-title"> Video  Src: </h1>
         <p className="video-main">  Similar to audio, the src attribute in the
          video element is used to specify the source of video files. 
          This can be used for embedding videos on web pages.
         </p>

         <div className="video-src-img">
          <img src={videosrc} alt="" />
         </div>
         <div className="m-video-src-img">
          <img src={mvideosrc} alt="" />
         </div>

         <h1 className="alt-post-title"> alt Attributes: </h1>
         <p className="alt-main"> The alt attribute provides alternative text for
          images. It's essential for web accessibility, as it describes the 
          image to users who may not be able to see it.
         </p>
      
         <div className="alt-post-img">
          <img src={alt} alt="" />
         </div>
         <div className="m-alt-img">
          <img src={malt} alt="" />
         </div>
<br />
         <hr className="id-line" />
          <h1 className="width-post-title"> Width and Height Attributes: </h1>
         <hr className="id-line" />

         <p className="width-main">
         The width and height attributes are used to specify the dimensions of certain elements,
          such as image, video, and table cells td and th. These attributes determine the visual size 
          of the element on the web page. </p>
<br />
<br />
        
         <h1 className="image-width-title"> Image width and height Attributes: </h1>
         <p className="image-width-main">
         When you use the width and height attributes with an img element, you can 
         specify the width and height of the image in pixels. This allows you to control
          the displayed size of the image, regardless of its original dimensions.  
         </p>
         <div className="width-post-img">
          <img src={imgwidth} alt="" />
         </div>
         <div className="m-width-img">
          <img src={mimgwidth} alt="" />
         </div>

<br />
         <h1 className="video-width-title"> Video width and height Attributes: </h1>
         <p className="video-width-main">
         Similar to the image, the width and height of a video are set the same.
          These attributes allow you to specify the dimensions of the video player on 
          your web page.
         </p>
         <div className="vid-height-img">
          <img src={vidheight} alt="" />
         </div>
         <div className="m-vid-height-img">
          <img src={mvidheight} alt="" />
         </div>

<br />

         <h1 className="tab-width-title"> Table Cells </h1>
          <p className="tab-width-main"> In the context of HTML tables, you can use
          the width attribute to define the width of individual table cells td or table 
          headers th in pixels or as a percentage of the table's total width.
          </p>

         <div className="tab-width-img">
          <img src={tabwidth} alt="" />
         </div>
         <div className="m-tab-width-img">
          <img src={mtabwidth} alt="" />
         </div>

         <hr className="id-line" />
          <h1 className="style-attr-title"> Style Attribute: </h1>
         <hr className="id-line" />

         <p className="style-attr-main">
         The style attribute allows you to add inline CSS styles directly to an element, 
         affecting its appearance.
         <br />
         <br />
         </p>
         <div className="style-attr-img">
          <img src={styleattr} alt="" />
         </div>
         <div className="m-style-attr-img">
          <img src={mstyleattr} alt="" />
         </div>
         
         <hr className="id-line" />
          <h1 className="target-post-title"> Target Attribute: </h1>
         <hr className="id-line" />

         <p className="target-main">

         The target attribute is used in HTML to specify where to open 
         the linked resource when a user clicks on a hyperlink a or a form form
          is submitted. The target attribute can take several values, each of 
          which defines a different behavior for opening the linked resource.        
<br />
<br />
         <h1 className="target-blank-title"> _blank Attributes: </h1>
         This attributes opens the linked resource in a new browser window or tab,
          depending on the user's browser settings. It's often used for external 
          links that you want to open in a separate browsing context.
   
         </p>
         <div className="target-blank-img">
          <img src={targetimg} alt="" />
         </div>
         <div className="m-target-blank-img">
          <img src={mtargetimg} alt="" />
         </div>
        </div>
    </div>
  )
}

export default Attributes;