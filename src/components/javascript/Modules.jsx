import React from 'react';
import './javascript.css';
import modcommon from '../../images/rsz_modules.png';
import esmodules from '../../images/rsz_esmodules.png';
import namedex from '../../images/named.png';
import defaultex from '../../images/default.png';
import encapsulate from '../../images/rsz_encapsulation.png';





const Modules = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Modules </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
         <p className="modules-main"> 
         JavaScript modules are a way to encapsulate and organize code into discrete, reusable units.
         These units, or modules, can contain variables, functions, classes, or even objects. The 
         primary purpose of modules is to create a clean separation of concerns, making it simplier
         to work on different parts of an application independently.
  <br />
         <h1 className="modules-key-title"> Key Features and Concepts: </h1> 
        <ul>
         <li className="modules-list">
          <strong> File Sharing: </strong>
          At the core of modules are file sharing, where functions, variables, objects, etc. in one file
          are exported and then imported by another external file, where the data can be then extracted
          from the exported files and utlized in the imported file.
         </li>
        <li className="modules-list"> 
        <strong> Exporting: </strong>
         Modules allow you to specify which parts of the module should be accessible from other modules.
        You can export variables, functions, or classes using the export keyword.
         </li>
         <li className="modules-list">
        <strong> Importing: </strong>
         Other modules can import functionality from a module using the import statement.
         </li>
         <li className="modules-list"> <strong> Encapsulation: </strong> 
        Modules encapsulate their internal functionality, meaning that the variables, functions, and
        classes defined within a module are not accessible from outside the module unless explicitly 
        exported. 
        </li>
       </ul>
<br />
        <h1 className="modules-benefits-title"> Benefits of JavaScript Modules: </h1> 
        <ul>
          <li className="modules-list"> <strong> Reusability: </strong> 
          Modules can be imported and used in multiple parts of an application, promoting code reuse.
          This reduces duplication and promotes a DRY (Don't Repeat Yourself) coding philosophy.
        </li>
        <li className="modules-list">
        <strong> Maintainability:  </strong>
          By breaking down your code into smaller, manageable pieces, modules make it easier to 
          understand, debug, and maintain. This is especially important as your codebase grows.
         </li>
         <li className="modules-list">
         <strong> Dependency Management:  </strong>
           Modules enable explicit declaration and management of dependencies. You can clearly 
           see which modules depend on others, making it easier to understand the relationships
           between different parts of your application.
         </li>
        </ul>
  <br />
  <br />

         <strong> Types of JavaScript Modules: </strong> 

        <div class="modules-type"> There are two main types of JavaScript modules. </div>
     <ul> 
      <li className="module-type-list"> <strong> CommonJS Modules: </strong> These are typically used in server-side JavaScript, particularly in Node.js.
       CommonJS modules use require to import modules and module.exports to export values. </li>

       <div className="var-img">
          <img src={modcommon} alt="" />
        </div>


      <li className="module-type-list"> <strong> ECMAScript (ES) Modules: </strong> These are native to modern browsers and have become increasingly 
      popular in both browser and server-side development. ES modules use import and export statements 
      to define dependencies and exports. </li> 

         <div className="var-img">
          <img src={esmodules} alt="" />
        </div> 
<br />
       To run this ES Modules example, you can use modern browsers that support ES modules natively or
       a build tool like webpack or Babel to transpile the code for use in environments that do not 
       yet support ES modules.
<br />
<br />
      In summary, the key differences between CommonJS and ES Modules are the syntax used for
      importing and exporting modules. CommonJS uses require and module.exports, while ES Modules
      use import and export. The examples above illustrate how to work with both module systems
      in JavaScript.
    </ul>

<br />
<br />

        
          <hr />
            <h1 className="modules-title-named"> Named and Default Exports: </h1>
          <hr />

          In JavaScript modules, you can export and import both named exports and a default export.
          Each serves a specific purpose, and they can be used together within the same module or 
          across different modules. Let's explore the differences between named and default exports:
<br />
<br />
          <strong> Named Exports: </strong>
<br />
<br />
          <strong> Multiple Exports: </strong>
           With named exports, you can export multiple variables, functions, or classes from 
           a module by giving each export a name. This makes it easy to expose specific pieces 
           of functionality.
<br />
<br />
          <strong> Named Import: </strong>
          When importing named exports in another module, you need to use the same name for the
          imported variable as the exported one. This is also known as a destructuring import.    
<br />
<br />
            <strong> Example of named exports: </strong>
            <div className="var-img">
               <img src={namedex} alt="" />
            </div> 
<br />
<br />
        <strong> Default Exports: </strong>
<br />
<br />

       <strong> Single Default Export: </strong> A module can have only one default export. It 
        is often used to represent the main functionality or object provided by the module.
<br />
<br />
        <strong> No Need for Curly Braces: </strong> When importing a default export, you don't 
        need to use curly braces. You can assign any name you want to the imported value.
<br />
<br />
       <strong> Example of a default export: </strong> 
        <div className="var-img">
            <img src={defaultex} alt="" />
        </div> 

<br />
<br />

          <hr />
            <h1 className="modules-title-named"> Encapsulation </h1>
          <hr />

          Encapsulation in JavaScript modules involves hiding the internal implementation details
           of a module and exposing only the necessary interface or public API. This helps prevent
            the accidental modification of internal variables and functions from outside the module,
             promoting information hiding and reducing the risk of unintended side effects.
<br />
<br />
       <strong> In this example: </strong> 
        The count variable and the increment function are encapsulated within the counter.js module.
        They are not accessible from outside the module. The getCount and reset functions are part 
        of the module's public interface and are exported. These functions allow external code to
        interact with the encapsulated data and behavior. Note: the module's data being accessed 
        by the main.js file.
    
        <div className="var-img">
            <img src={encapsulate} alt="" />
        </div> 



            </p>

        </div>
    </div>
  )
}

export default Modules;