import React from 'react';
import './javascript.css';
import domclick from '../../images/rsz_domexample.png';



const Dom = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Document Object Model (DOM) </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>
     
         <p className="js-main"> 

        <h1 className="dom-title"> What is the JavaScript DOM? </h1> 
        The Document Object Model - DOM - is a programming interface that represents the structure 
        and content of a web page as a hierarchical tree of objects. Each HTML element, such as
         headings, paragraphs, images, forms, and more, is represented as a node in this tree. The
        DOM provides a structured way to interact with and manipulate these nodes using JavaScript.

        <h1 className="dom-title-1"> Why is the DOM Important? </h1>
        <ul>
            <li> Access and Manipulation: JavaScript can be used to access, modify, or delete elements and their attributes in the DOM. You can change the content, style, and structure of the web page dynamically.</li>
            <li> Interactivity: JavaScript, in conjunction with the DOM, enables event handling. You can listen for user actions like clicks, keyboard input, and mouse movements, making your web pages responsive and interactive. </li>
            <li> Dynamic Web Content: The DOM allows you to dynamically update the content of a web page without requiring a full page reload. This is the foundation of web applications, enabling real-time updates and interactions.</li>
            <li> Cross-Browser Compatibility: The DOM is supported by all major web browsers, ensuring your JavaScript code works consistently across different platforms.</li>
        </ul>   


        <h1 className="dom-title-2"> How to work wit the Dom </h1>
        <ul>
            <li> Accessing Elements: You can access DOM elements by various methods, such as getElementById, querySelector, and getElementsByClassName. These methods return references to elements you want to work with..</li>
            <li> Modifying Content: You can change the content of HTML elements by manipulating their properties like innerHTML, textContent, and value (for form elements).</li>
            <li> Styling Elements: Use JavaScript to modify CSS properties (e.g., style.color, style.fontSize) to change the appearance of elements dynamically.</li>
            <li> Adding and Removing Elements: You can create new elements and append them to the DOM, or remove existing ones. This is useful for adding or deleting items from lists, for instance.</li>
            <li> Event Handling: Attach event listeners to elements using methods like addEventListener to respond to user interactions, such as clicks and key presses.</li>
            <li> Traversal: Navigate the DOM tree by accessing parent, child, and sibling nodes. This is useful for finding related elements or navigating complex structures.</li>
        </ul>   

        <h1 className="dom-title-3"> An Example: </h1>
        In this example, JavaScript and the DOM are used to hide and show a message when the button is
        clicked. The DOM manipulation occurs within the event listener.


         <div className="var-img">
          <img src={domclick} alt="" />
          </div>
            </p>

        </div>
    </div>
  )
}

export default Dom;