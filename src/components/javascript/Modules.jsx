import React from 'react';
import './javascript.css';




const Modules = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Modules </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>
     
         <p className="js-main"> 

        JavaScript modules are a way to organize and structure your JavaScript code into reusable and
        maintainable pieces. They provide a mechanism for encapsulating and separating functionality,
        variables, and classes into distinct files, making it easier to work on large and complex JavaScript 
        applications.
    <br />
    <br />

         <strong> Here are some key features and concepts related to JavaScript modules: </strong> 
        <ul>
          <li> <strong> Encapsulation: </strong> 
        Modules encapsulate their internal functionality, meaning that the variables, functions, and
        classes defined within a module are not accessible from outside the module unless explicitly 
        exported. 
        </li>
        <li>
        <strong> Exporting: </strong>
         Modules allow you to specify which parts of the module should be accessible from other modules.
        You can export variables, functions, or classes using the export keyword.
         </li>
        </ul>
    
            </p>

        </div>
    </div>
  )
}

export default Modules;