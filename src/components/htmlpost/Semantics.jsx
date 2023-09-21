import React from 'react';
import './htmlpost.css';
import semantics from '../../images/rsz_1semantics.png';
import msemantics from '../../images/rsz_semantics.png';

function Semantics() {
  return (
    <div className="html-post">
        <div className="html-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="html-post-title"> The Importance of Semantics </h1>
         <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Elias </b> </span>
            <span className="html-post-date"> 1 hour ago </span>
         </div>
         <p className="semantics-post">
         HTML semantics refer to the meaning or purpose behind the elements and 
         tags used in HTML to structure web content. Semantic HTML elements provide
        information about the structure of a web page and the meaning of its content,
         making it easier for both humans and computers search engines to understand
        the document's organization and content. Using semantic HTML helps improve accessibility,
         search engine optimization SEO, and the overall readability and maintainability of
         web pages.
          </p>
          <br />
          <br />

          <h1 className="semantics-title"> Here are some common examples of semantics elements and their purposes: </h1>
           <p className="semantics-main">

           <ul> 
            <li className="semantics-list"> <strong> Header: </strong> Represents the introductory content at the top of a web page or a section and typically contains headings, logos, navigation menus, and other related content. </li>
           
            <li className="semantics-list"> <strong> Nav: </strong> Defines a section of navigation links, such as menus, lists of links to other pages, or table of contents. </li>
       
            <li className="semantics-list"> <strong> Main: </strong> Represents the main content of a web page and is typically unique to each page. There should be only one main element per page. </li>

            <li className="semantics-list"> <strong> Article: </strong> Represents a self-contained piece of content that can be distributed and reused independently, such as a blog post, news article, or forum post. </li> 

            <li className="semantics-list"> <strong> Section: </strong> Defines a thematic grouping of content within an HTML document, like chapters in a book, or sections of a long article. </li>

            <li className="semantics-list"> <strong> Aside </strong> Represents content that is tangentially related to the content around it, like sidebars, pull quotes, or advertisements. </li>

            <li className="semantics-list"> <strong> Footer: </strong> Represents the footer of a web page or a section, usually containing copyright information, contact details, and other related content. </li>

            <li className="semantics-list"> <strong> Figure and Figcaption: </strong> These elements are used together to associate a caption with an image, diagram, chart, or other media content. </li>

            <li className="semantics-list"> <strong> Time: </strong>Specifies a specific time or range of time, which can be useful for dates, times, and events on a web page. </li>

            <li className="semantics-list"> <strong> Mark: </strong> Highlights a portion of text within a block of content for emphasis. </li>
           
            </ul>
            </p>

            <div className="semantics-img">
             <img src={semantics} alt="" />
            </div>

            <div className="m-semantics-img">
             <img src={msemantics} alt="" />
            </div>

        </div>
    
    </div>
  )
}

export default Semantics;