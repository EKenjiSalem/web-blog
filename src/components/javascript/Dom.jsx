import React from 'react';
import './javascript.css';
import domclick from '../../images/rsz_toggledom.png';
import mdomclick from '../../images/m_toggledom.png';



const Dom = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Document Object Model (DOM) </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
        <p className="js-main"> 
        The Document Object Model - DOM - is a programming interface that represents the structure 
        and content of a web page as a hierarchical tree of objects. Each HTML element, such as
         headings, paragraphs, images, forms, and more, is represented as a node in this tree. The
        DOM provides a structured way to interact with and manipulate these nodes using JavaScript.

        <h1 className="dom-title-1"> Why is the DOM Important? </h1>
        <ul>
            <li className="dom-list"><strong> Access and Manipulation: </strong> JavaScript can be used to access, modify, or delete elements and their attributes in the DOM. You can change the content, style, and structure of the web page dynamically.</li>
            <li className="dom-list"><strong> Interactivity: </strong> JavaScript, in conjunction with the DOM, enables event handling. You can listen for user actions like clicks, keyboard input, and mouse movements, making your web pages responsive and interactive. </li>
            <li className="dom-list"><strong> Dynamic Web Content: </strong> The DOM allows you to dynamically update the content of a web page without requiring a full page reload. This is the foundation of web applications, enabling real-time updates and interactions.</li>
            <li className="dom-list"><strong> Cross-Browser Compatibility: </strong> The DOM is supported by all major web browsers, ensuring your JavaScript code works consistently across different platforms.</li>
        </ul>   


        <h1 className="dom-title-2"> How to work wit the Dom </h1>
        <ul>
            <li className="dom-list"><strong> Accessing Elements: </strong> You can access DOM elements by various methods, such as getElementById, querySelector, and getElementsByClassName. These methods return references to elements you want to work with..</li>
            <li className="dom-list"><strong> Modifying Content: </strong>  You can change the content of HTML elements by manipulating their properties like innerHTML, textContent, and value (for form elements).</li>
            <li className="dom-list"><strong> Styling Elements:</strong> Use JavaScript to modify CSS properties (e.g., style.color, style.fontSize) to change the appearance of elements dynamically.</li>
            <li className="dom-list"><strong> Adding and Removing Elements:</strong> You can create new elements and append them to the DOM, or remove existing ones. This is useful for adding or deleting items from lists, for instance.</li>
            <li className="dom-list"><strong> Event Handling: </strong> Attach event listeners to elements using methods like addEventListener to respond to user interactions, such as clicks and key presses.</li>
            <li className="dom-list"><strong> Traversal: </strong> Navigate the DOM tree by accessing parent, child, and sibling nodes. This is useful for finding related elements or navigating complex structures.</li>
        </ul>   

        <h1 className="dom-title-3"> An Example: </h1>
        In this example, JavaScript and the DOM are used to hide and show a message when the button is
        clicked. The DOM manipulation occurs within the event listener.


          <div className="js-dom-img">
           <img src={domclick} alt="" />
          </div>
          <div className="m-js-dom-img">
           <img src={mdomclick} alt="" />
          </div>
<br />
<br />
            </p>

        </div>
    </div>
  )
}

export default Dom;