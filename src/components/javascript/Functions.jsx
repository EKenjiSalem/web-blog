import React from 'react';
import './javascript.css';
import funcdeclartion from '../../images/funcdeclar.png';
import funcexpress from '../../images/functionexpress.png';
import mfuncexpress from '../../images/m_functionexpress.png';
import funcarrow from '../../images/jsarrowfunction.png';
import mfuncarrow from '../../images/rsz_jsarrowfunction.png';
import globalvar from '../../images/globalvar.png';
import mglobalvar from '../../images/rsz_globalvar.png';
import localvar from '../../images/localvar.png';
import mlocalvar from '../../images/rsz_localvar.png';
import closures from '../../images/rsz_closures.png';
import mclosures from '../../images/m_closures.png';
import hfunction from '../../images/higherfunction.png';
import returnfunction from '../../images/rehighfunction.png';
import mapfunction from '../../images/mapfunction.png';
import filterfunction from '../../images/filterfunction.png';
import reducefunction from '../../images/reducefilter.png';
import mmapfunction from '../../images/m_mapfunction.png';
import mfilterfunction from '../../images/m_filterfunction.png';
import mreducefunction from '../../images/m_reducefilter.png';
import functionex from '../../images/rsz_functionex.png';
import mfunctionex from '../../images/m_functionex.png';


const Functions = () => {
        
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Functions </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
         <p className="function-intro"> 
         JavaScript functions are blocks of reusable code that perform specific tasks or calculations
         when called or invoked. They are a fundamental building block of JavaScript and play a crucial 
         role in structuring and organizing code. Functions are used to encapsulate logic, making it easier 
         to manage and maintain your code, as well as promote code reusability.
<br />
<br />
         Functions are a fundamental part of JavaScript and are used extensively in web 
         development to handle events, manipulate the DOM  make AJAX requests, and 
         perform various other tasks. They provide a way to structure code and make it 
         more organized and modular.
        </p>

<br />

        <h1 className="anatomy-title"> The anatomy of a function consist of: </h1> 

        <ul className="anatomy-list-container">
         <li className="anatomy-list"><strong> Declarations: </strong> Functions can be declared using the function keyword, 
         followed by a name and a set of parentheses that may contain parameters.  
         </li>
         <li className="anatomy-list"><strong> Parameters and Arguments: </strong> Parameters are variables declared within 
         the function's parentheses, which act as placeholders for values passed when 
         the function is called. 
<br />
         <span className="arguments"> Arguments are the actual values or expressions that
         are passed to a function when it is called. correspond to the parameters declared
         in the function's definition. The values of the arguments are supplied when the 
         function is invoked, and they are used as the initial values of the parameters 
         within the function's body. </span>
         </li>
         <li className="anatomy-list"> <strong> Function Body: </strong> The code inside the curly braces {} is the function's body.
          It contains the instructions that are executed when the function is called.
          </li>
          <li className="anatomy-list"> <strong> Return Statement: </strong> Functions can return values using the return statement.
           If a function does not have a return statement, it returns undefined by
            default.
          </li>
          <li className="anatomy-list"> <strong> Function Invocation: </strong> Functions are executed or "invoked" using their name
           followed by parentheses. Arguments are passed inside the parentheses when calling 
           the function.
           </li>
        </ul>
  
<br />
<br />

         <h1 className="create-function-title"> There are 3 ways to create functions: Declarations, Expressions, and Arrow Functions</h1>
<br />
<br />
        <h1 className="function-declaration-title"> Function Declaration: </h1>
        <p className="function-declaration">
         Functions can be declared using the function keyword, followed by a name and a
         set of parentheses that may contain parameters. Function declaration are also 
         known as named function. In addtion function declarations can be hoisted, 
         which means the function can be called/invoked before the function is declared. 
        </p>
         <div className="function-declaration-img">
          <img src={funcdeclartion} alt="" />
         </div>
        
<br />
<br />
        <h1 class="function-expression-title"> Function Expressions:  </h1>
        <p className="function-expression"> 
        A function expression in JavaScript is a way to define a function as 
        an expression and assign it to a variable. Function expressions are also 
        known as anonymous (no function name) functions. Expressions are often 
        used as arguments to other functions:
        </p>
        <div className="function-expression-img">
         <img src={funcexpress} alt="" />
        </div>
        <div className="m-function-expression-img">
         <img src={mfuncexpress} alt="" />
        </div>

<br />
<br />

        <h1 className="arrow-function-title"> Arrow Functions: </h1>
        <p className="arrow-function">
        Arrow functions are a more concise way to define functions.
        </p>
        <div className="arrow-function-img">
         <img src={funcarrow} alt="" />
        </div>
        <div className="m-arrow-function-img">
         <img src={mfuncarrow} alt="" />
        </div>
        
<br />
<br />

        <h1 className="function-action-title"> Function in Action: </h1>
<br />
<br />
        <p className="function-action">
        In this example, we'll create a webpage with a button that, when clicked, 
        triggers a JavaScript function to change the background color of the page.
        </p>

        <div className="function-action-img">
         <img src={functionex} alt="" />
        </div>

        <div className="m-function-action-img">
         <img src={mfunctionex} alt="" />
        </div>
  <br />
  <br />

        <hr className="scope-line" />
         <h1 className="scope-title"> Scope: </h1>
        <hr className="scope-line"  />

          <p className="scope-main">
          Variables and functions have different scopes, with the two main scopes being global 
          and local (also known as function scope). These scopes determine where a variable or function is 
          accessible and where it isn't.
          </p>
<br />
<br />
       <h1 className="global-scope-title"> Global Scope: </h1>
       <ul>
        <li className="global-list"> Global scope refers to the outermost scope in a JavaScript program or the scope outside of any function.</li>
        <li className="global-list"> Variables declared in the global scope are accessible from anywhere in the program, both inside and outside of functions.</li>
        <li className="global-list"> Variables declared in the global scope are often referred to as global variables.</li>
       </ul>
       <div className="global-scope-img">
         <img src={globalvar} alt="" />
        </div> 
        <div className="m-global-scope-img">
         <img src={mglobalvar} alt="" />
        </div> 

  <br />
  <br />

     <h1 className="local-scope-title"> Local (Function) Scope: </h1>   

      <li className="local-scope-list"> Local scope, also known as function scope, refers to the scope within a specific function.</li>
      <li className="local-scope-list"> Variables declared within a function are accessible only within that function and are not visible outside of it.</li>
      <li className="local-scope-list"> Each function creates its own local scope, which is separate from the global scope and the local scopes of other functions.</li>
      <li className="local-scope-list"> Local scope is beneficial for encapsulating data and logic, as it helps avoid naming conflicts and unintended modifications of variables.</li>

        <div className="local-scope-img">
         <img src={localvar} alt="" />
        </div>
        <div className="m-local-scope-img">
         <img src={mlocalvar} alt="" />
        </div>

<br />
<br />


    <hr className="closure-line" />
     <h1 className="closures-title"> Closures: </h1> 
    <hr className="closure-line" />

        <p className="closure-main"> 
        Functions in JavaScript "remember" their outer scope and can access variables from that scope 
        even after the outer function has finished executing. This behavior is known as closures.
<br />   
<br />
      <strong> Key points to understand about closures:</strong> 
<br />
<br />
        <strong> Encapsulation: </strong>Closures provide a way to encapsulate data and functions, making them 
        private to the scope of the enclosing function. This is important for creating modular and maintainable 
        code.
<br />
<br />
        <strong> Access to Outer Scope:  </strong> Closures allow inner functions to access and manipulate 
         variables from their containing (outer) functions, even after those outer functions have completed 
         their execution.
<br />
<br />
         <strong> Data Persistence: </strong> Closures enable the persistence of data across
          multiple function calls, as the data is stored in the closure's scope.
          </p>
      
          <div className="closure-img">
            <img src={closures} alt="" />
          </div> 
          <div className="m-closure-img">
            <img src={mclosures} alt="" />
          </div> 
<br />
<br />

         <hr className="hof-line" />
          <h1 className="higher-functions-title"> Higher-Order Functions: </h1> 
         <hr className="hof-line" />
<br />
           <p className="higher-function-main">
           Higher-order functions are a concept in functional programming where functions 
           can be passed as arguments to other functions, returned as values from other functions,
           and assigned to variables. In essence, a higher-order function is a function that 
           operates on other functions, either by taking them as arguments, returning them 
           as results, or both.
          </p>
<br />
<br />
         <h1 className="common-higher-function-title"> Common Higher-Order Functions: </h1> 
         <p className="common-higher-functions"> 
         Functional programming languages and libraries often provide a set of built-in
         higher-order functions for common tasks. Here are a few examples:
<br />
<br />
          <strong> Map: </strong>
          The map function applies a given function to each element of a collection
           - e.g., an array - and returns a new collection containing the results. It's great 
          for transforming data.
          <div className="mapfunction-img">
           <img src={mapfunction} alt="" />
          </div>
          <div className="m-mapfunction-img">
           <img src={mmapfunction} alt="" />
          </div>
  <br />
           <strong> Filter: </strong>
           The filter function takes a collection and a filtering function. It returns a new collection
           containing only the elements that satisfy the condition specified by the filtering function.
           <div className="filterfunction-img">
             <img src={filterfunction} alt="" />
           </div>
            <div className="m-filterfunction-img">
             <img src={mfilterfunction} alt="" />
           </div>
<br />
            <strong> Reduce: </strong> 
            The reduce function combines the elements of a collection into a single result by
            repeatedly applying a combining function.
            <div className="reducefunction-img">
              <img src={reducefunction} alt="" />
             </div>
             <div className="m-reducefunction-img">
              <img src={mreducefunction} alt="" />
             </div>
             </p>
        </div>
    </div>
  )
}

export default Functions;