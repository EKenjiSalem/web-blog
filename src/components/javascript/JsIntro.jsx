import React from 'react';
import './javascript.css';



const JsIntro = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> JavaScript Intro </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
         <p className="js-main"> 
         JavaScript is a widely-used programming language primarily known for its role in 
         web development. It allows you to add interactivity, manipulate HTML and CSS, and 
         create dynamic web content. 

         JavaScript is a versatile, high-level, and dynamic programming language primarily used for 
         front-end web development. It enables web developers to create interactive and responsive
         websites by adding behavior and functionality to web pages.

<br />
<br />
        Before we get started, note that there are 2 types paradigms in javascript.
        Functional Programming and Object-Oriented Programming which are two distinct
        programming paradigms, each with its own set of principles, advantages, 
        and use cases. 

<br />
<br />
      
        <strong> Here are some of the fundamental concepts of JavaScript: </strong>
<br />
<br />
       <strong> Variables: </strong> Variables are used to store data. In JavaScript, you declare variables using the var, let, or const keyword. var has global scope or function scope, while let and const have block scope .
<br />
<br />
        <strong>Data Types: </strong> JavaScript has various data types, including numbers, strings, booleans, objects, arrays, functions, and more. It's dynamically typed, meaning variables can change data types during runtime.
<br />
<br />
        <strong> Operators:</strong> JavaScript supports a wide range of operators, such as arithmetic operators, comparison operators, and logical operators &&, ||, !, which allow you to perform operations on data.
<br />
<br />
        <strong> Control Structures:</strong> JavaScript provides control structures like if statements, switch statements, for loops, while loops, and do...while loops for making decisions and controlling the flow of your code.
<br />
<br />
        <strong> Functions: </strong> Functions are reusable blocks of code. You can define functions using the function keyword, and they can accept parameters and return values. JavaScript also supports anonymous functions and arrow functions.
<br />
<br />
        <strong> Objects: </strong> Objects are used to group related data and functions together. They are a fundamental concept in JavaScript and are created using curly braces. Object properties can be accessed using dot notation object.property or bracket notation object'property'.
<br />
<br />
        <strong> Arrays: </strong>Arrays are used to store lists of data. JavaScript arrays are zero-indexed and can contain elements of different data types.
<br />
<br />      
        <strong> Events: </strong> JavaScript allows you to respond to user interactions or other events on a web page. Event handling is a key concept for creating interactive web applications.
<br />
<br />
        <strong> Callbacks and Promises: </strong> JavaScript supports asynchronous programming. Callback functions and Promises are used to handle asynchronous operations like fetching data from a server or waiting for user input.
<br />
<br />
      <strong> Closures: </strong> Closures are functions that remember the environment in which they were created, even after that environment is no longer accessible. They are a powerful concept for managing scope and data privacy.
<br />
<br />
        <strong> Object-Oriented Programming:</strong> JavaScript uses a prototype-based inheritance model rather than class-based. You can create and extend objects using prototypes, and this is a fundamental concept for understanding JavaScript's object-oriented capabilities.
<br />
<br />
        <strong> Modules: </strong> JavaScript allows you to organize your code into modules, making it easier to manage and maintain large codebases. The ES6 module system introduced import and export statements for this purpose.
<br />
<br />
        <strong>DOM Manipulation: </strong>The Document Object Model DOM represents the structure of an HTML document. JavaScript can be used to manipulate and interact with the DOM, allowing you to update the content and behavior of web pages dynamically.
<br />
<br />
        <strong> Error Handling:</strong> JavaScript provides mechanisms for handling errors using try...catch blocks, allowing you to gracefully handle exceptions in your code.
<br />
<br />
        <strong> Asynchronous Programming: </strong> JavaScript is well-suited for asynchronous programming, which allows tasks to be executed independently without blocking the main program flow. This is crucial for tasks like handling user input and making network requests.
<br />
<br />
        <strong> Libraries and Frameworks: </strong> There are many libraries and frameworks built on top of JavaScript that simplify web development tasks. Some popular ones include jQuery, React, Angular, and Vue.js.

<br />
<br />
            </p>
        </div>
    </div>
  )
}

export default JsIntro;