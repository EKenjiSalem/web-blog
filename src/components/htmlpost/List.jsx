import React from 'react';
import './htmlpost.css';
import ul from '../../images/ul.png';
import ol from '../../images/ol.png';

function List() {
  return (
    <div className="html-post">
        <div className="html-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="html-post-title"> List  </h1>
         <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Elias </b> </span>
            <span className="html-post-date"> 1 hour ago </span>
         </div>
         <p className="list-main"> Lists are used to organize and display
          information in a structured and ordered or unordered manner on a web
           page. Lists are an essential part of web design and are commonly 
           used to present information in a more readable and organized format.
  
       
           The two most common list are <strong> "ul </strong> unordered and <strong> "ol" </strong> ordered list. 

           <h1 className="ul-list-title"> Unordered Lists: </h1> 
           Unordered lists are used to represent a list of items in no particular order. Each 
            item in an unordered list is typically preceded by a bullet point or some other marker.
            The HTML <strong> ul </strong> element is used to create an unordered list, and each
            list item is enclosed within <strong> li </strong> list item tags.
  

          <div className="ul-img">
            <img src={ul} alt="" />
          </div>
          <div className="m-ul-img">
            <img src={ul} alt="" />
          </div>  


          <h1 className="ol-list-title"> Ordered Lists: </h1> 
          Ordered lists are used to represent a list of items in a specific, 
          sequential order such as numbers or letters. Each item in an ordered 
          list is automatically numbered by the browser. The HTML <strong> ol </strong> element
          is used to create an ordered list, and each list item is enclosed
          within <strong> li </strong> tags.
       

          <div className="ol-img">
            <img src={ol} alt="" />
          </div>
          <div className="m-ol-img">
            <img src={ol} alt="" />
          </div>  

          These HTML list elements can be combined and nested within 
          each other to create more complex structures. Lists are commonly
           used in navigation menus, content organization, and other parts
            of a web page to enhance readability and structure. Additionally, 
            CSS can be used to style and customize the appearance of lists,
            including changing the bullet points or numbering style.
          
            </p>
        </div>
    
    </div>
  )
}

export default List;