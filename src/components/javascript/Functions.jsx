import React from 'react';
import './javascript.css';
import funcdeclartion from '../../images/funcdeclar.png';
import funcexpress from '../../images/funcexpress.png';
import funcarrow from '../../images/funcarrow.png';
import globalvar from '../../images/globalvar.png';
import localvar from '../../images/localvar.png';
import closures from '../../images/rsz_closures.png';
import hfunction from '../../images/higherfunction.png';
import returnfunction from '../../images/rehighfunction.png';
import mapfunction from '../../images/mapfunction.png';
import filterfunction from '../../images/filterfunction.png';
import reducefunction from '../../images/reducefilter.png';
import functionex from '../../images/rsz_functionex.png';


const Functions = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Functions </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>
     
         <p className="js-main"> 
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

      <br />
      <br />
        <strong> The anatomy of a function consist of: </strong> 
        <ul>
         <li> Declarations: Functions can be declared using the function keyword, 
         followed by a name and a set of parentheses that may contain parameters.  
         </li>
         <li> Parameters and Arguments: Parameters are variables declared within 
         the function's parentheses, which act as placeholders for values passed when 
         the function is called. 
         <br />
         Arguments are the actual values or expressions that
         are passed to a function when it is called. correspond to the parameters declared
         in the function's definition. The values of the arguments are supplied when the 
         function is invoked, and they are used as the initial values of the parameters 
         within the function's body.
         </li>
         <li> Function Body: The code inside the curly braces {} is the function's body.
          It contains the instructions that are executed when the function is called.
          </li>
          <li> Return Statement: Functions can return values using the return statement.
           If a function does not have a return statement, it returns undefined by
            default.
          </li>
          <li>  Function Invocation: Functions are executed or "invoked" using their name
           followed by parentheses. Arguments are passed inside the parentheses when calling 
           the function.</li>
        </ul>
  
        <br />
        <br />

        <strong> There are 3 ways to create functions: Declarations, Expressions, and Arrow Functions</strong>
  <br />
  <br />
        <strong> Function Declaration: </strong>

         Functions can be declared using the function keyword, followed by a name and a
         set of parentheses that may contain parameters. Function declaration are also 
         known as named function. In addtion function declarations can be hoisted, 
         which means the function can be called/invoked before the function is declared. 
        <div className="var-img">
         <img src={funcdeclartion} alt="" />
        </div>
        
        <br />
        <br />
        <strong> Function Expressions:  </strong>
        A function expression in JavaScript is a way to define a function as 
        an expression and assign it to a variable. Function expressions are also 
        known as anonymous (no function name) functions. Expressions are often 
        used as arguments to other functions:
        <div className="var-img">
         <img src={funcexpress} alt="" />
        </div>

    <br />
    <br />

        <strong> Arrow Functions: </strong>
        Arrow functions are a more concise way to define functions.
        <div className="var-img">
         <img src={funcarrow} alt="" />
        </div>
        
        <br />
        <br />

        <strong> Function in Action </strong>
  <br />
  <br />
        In this example, we'll create a webpage with a button that, when clicked, 
        triggers a JavaScript function to change the background color of the page.

        <div className="var-img">
         <img src={functionex} alt="" />
        </div>

  <br />
  <br />

        
        <hr />
         <h1 className="scope-title"> Scope: </h1>
        <hr />

        Variables and functions have different scopes, with the two main scopes being global 
        and local (also known as function scope). These scopes determine where a variable or function is 
        accessible and where it isn't.
<br />
<br />
       <strong> Global Scope: </strong>
       <ul>
        <li> Global scope refers to the outermost scope in a JavaScript program or the scope outside of any function.</li>
        <li> Variables declared in the global scope are accessible from anywhere in the program, both inside and outside of functions.</li>
        <li>  Variables declared in the global scope are often referred to as global variables.</li>
       </ul>
       <div className="var-img">
         <img src={globalvar} alt="" />
        </div> 

  <br />
  <br />

     <strong> Local (Function) Scope: </strong>   

      <li> Local scope, also known as function scope, refers to the scope within a specific function.</li>

      <li> Variables declared within a function are accessible only within that function and are not visible outside of it.</li>

      <li> Each function creates its own local scope, which is separate from the global scope and the local scopes of other functions.</li>

      <li> Local scope is beneficial for encapsulating data and logic, as it helps avoid naming conflicts and unintended modifications of variables.</li>

        <div className="var-img">
         <img src={localvar} alt="" />
        </div>

<br />
<br />


    <hr />
     <h1 className="closures-title"> Closures: </h1> 
    <hr />
    Functions in JavaScript "remember" their outer scope and can access variables from that scope 
    even after the outer function has finished executing. This behavior is known as closures.

<br />
<br />
   <strong> Here are 3 key points to understand about closures:</strong> 
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
      
       <div className="var-img">
        <img src={closures} alt="" />
      </div> 
<br />
<br />

<hr />
       <h1 className="higher-functions-title"> Higher-Order Functions: </h1> 
      <hr />
     
      Higher-order functions are a concept in functional programming where functions 
      can be passed as arguments to other functions, returned as values from other functions,
       and assigned to variables. In essence, a higher-order function is a function that 
       operates on other functions, either by taking them as arguments, returning them 
       as results, or both.

       <br />
       <br />
      <strong> Function that Takes a Function: </strong>
       Consider a function apply that takes two arguments: another
       function func and a value x. Here's what it might look like in JavaScript:
        
        <div className="var-img">
         <img src={hfunction} alt="" />
        </div>
        In this case, apply is a higher-order function because it takes a function func
        as one of its arguments and applies func to the value x.

<br />
<br />

       <strong> Function that Returns a Function: </strong>
        Now, let's look at a function multiplyBy that returns another function. This 
        function takes a multiplier factor and returns a new function that multiplies its 
        argument by factor:

        <div className="var-img">
         <img src={returnfunction} alt="" />
        </div>

        Here, multiplyBy is a higher-order function because it returns a function as its 
        result.
    <br />
    <br />
    <br />

    <strong> Common Higher-Order Functions: </strong> 
    Functional programming languages and libraries often provide a set of built-in
    higher-order functions for common tasks. Here are a few examples:
    <br />
    <br />
    <strong> Map: </strong>
    The map function applies a given function to each element of a collection
     - e.g., an array - and returns a new collection containing the results. It's great 
     for transforming data.

      <div className="var-img">
        <img src={mapfunction} alt="" />
      </div>

   <br />
   <br />

      <strong> Filter: </strong>
      The filter function takes a collection and a filtering function. It returns a new collection
      containing only the elements that satisfy the condition specified by the filtering function.
        <div className="var-img">
         <img src={filterfunction} alt="" />
        </div>

      <br />
      <br />

      <strong> Reduce: </strong> 
      The reduce function combines the elements of a collection into a single result by
      repeatedly applying a combining function.

      <div className="var-img">
         <img src={reducefunction} alt="" />
        </div>





            </p>

        </div>
    </div>
  )
}

export default Functions;