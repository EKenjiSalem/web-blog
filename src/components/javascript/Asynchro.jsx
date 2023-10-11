import React from 'react';
import './javascript.css';
import callbacks from '../../images/Callback.png';
import promises from '../../images/rsz_promise.png';
import asyncawait from '../../images/rsz_async.png';
import fetchapi from '../../images/rsz_apifetch.png';




const Asynchro = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Ajax </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>

   
     
         <p className="js-main"> 
        <strong>Ajax (Asynchronous JavaScript and XML): </strong>
        Ajax is a technique used in web development to create asynchronous web applications. This allows
        web pages to send and receive data from a server without having to refresh the entire page. 
        This enables dynamic and interactive user experiences. Ajax is not a specific technology; 
        instead, it's a combination of various technologies, including JavaScript, XMLHttpRequest 
        (or more modern alternatives like the Fetch API), HTML, and CSS. It can be used to update
         parts of a web page without requiring a full page reload. Although AJAX is often associated 
         with XML due to its name, it's important to note that AJAX is not limited to XML 
         and can work with various data formats, including JSON and plain text.
<br />
<br />
        <strong> APIs (Application Programming Interfaces): </strong>
        APIs are a set of rules and protocols that allow different software applications to 
        communicate with each other. In the context of web development, APIs are often used to 
        retrieve and send data between a web application and a server. Web APIs, such as RESTful 
        APIs or GraphQL APIs, provide endpoints that can be accessed over the internet. These 
        endpoints allow developers to request data (GET requests) or send data (POST, PUT, DELETE 
        requests) to interact with a server or a third-party service. APIs are commonly used to 
        access data and functionality from external sources, like social media platforms or databases.

<br />
<br />
          <strong> JSON (JavaScript Object Notation): </strong>
          JSON is a data interchange format that is simple for humans to read and write.
          JSON is often used as a data format in web development, particularly when data is
          exchanged between a web application and a server using APIs. JSON data is represented 
          as key-value pairs, making it a suitable choice for structuring data in a way that can
          be easily converted to and from JavaScript objects. JSON is commonly used because
          it's simple to work with in JavaScript, and widely supported by web APIs.
<br />
<br />
<br />
        <strong> What is asynchronous in javascript? </strong>
<br />
<br />
         Asynchronous refers to a programming paradigm and mechanism that allows you to perform 
         tasks without blocking the execution of other code. Asynchronous operations are commonly
          used for tasks that may take some time to complete, such as fetching data from a remote
           server, reading/writing to a file, or waiting for user input.
<br />
<br />
        Before delving into asynchronous programming, let's discuss the problem it aims to solve. 
        JavaScript is a single-threaded language, meaning it executes one task at a time. When a 
        time-consuming operation, such as fetching data from a server or reading a large file, 
        is performed synchronously, it can block the entire program, causing the user interface to become unresponsive. This is where asynchronous programming comes into play.

<br />
<br />
        The primary way to work with asynchronous code in JavaScript is through the use of <strong> callbacks,
        Promises, and async/await.</strong>
<br />
<br />
          <strong> Callbacks: </strong>
          Callbacks are functions that are passed as arguments to other functions and are 
          executed once the asynchronous operation is completed. Callbacks are a fundamental way of
          handling asynchronous code in JavaScript, but they can lead to callback hell (nested 
          callbacks), making code hard to read and maintain.
          <div className="var-img">
            <img src={callbacks} alt="" />
          </div>
<br />
<br />
          <strong>  Promises: </strong>  
          Promises provide a more structured way to work with asynchronous code. A Promise 
          represents a future value or error, and you can chain .then() and .catch() methods to handle
          the resolution or rejection of the Promise.
          <div className="var-img">
            <img src={promises} alt="" />
          </div>
<br />
<br />
         <strong> Async/Await: </strong>   
        Introduced in ECMAScript 2017 (ES8), async and await provide a more readable and
        concise way to work with Promises. The async keyword is used to define a function as 
        asynchronous, and await is used to pause the execution of code until a Promise is resolved.
          <div className="var-img">
            <img src={asyncawait} alt="" />
          </div>

<br />
<br />
            <hr/> 
              <h1 className="api-title"> API's  </h1>
            <hr/>

            JavaScript APIs, or JavaScript Application Programming Interfaces, are sets of 
            rules and protocols that allow different software applications or components to
            communicate with each other. In the context of JavaScript, APIs provide a way for 
            your JavaScript code to interact with external services, libraries, or functionality
            provided by web browsers and other software.
<br />
<br />  
          <strong>Here are some common types of JavaScript APIs: </strong>
<br />
<br />
          <ul> 
            <li> 
          <strong> Web APIs: </strong> 
          These are APIs provided by web browsers to allow JavaScript to interact with various web
          platform features. Examples include the Document Object Model (DOM) API for manipulating
          HTML and XML documents, the XMLHttpRequest or Fetch API for making HTTP requests, the
          Geolocation API for accessing a user's location, and the Web Audio API for working with audio.
           </li>
           <li>
         <strong> Third-Party APIs:  </strong> 
          Many external services and platforms offer APIs that developers can use to integrate their
          functionality into their web applications. Examples include the Twitter API for posting tweets,
          the Google Maps API for embedding maps, and the Facebook Graph API for accessing Facebook data.
          </li>
          <li> 
         <strong> Node.js APIs:  </strong>
          If you're using JavaScript on the server-side with Node.js, there are a variety of built-in
          APIs that provide access to file system operations, network communication, and other server-related
          tasks.
          </li>
          
          </ul>


<br />
          <strong> Custom API's: </strong>
          You can also create your own APIs to encapsulate functionality within your JavaScript 
          code and make it available for use by other parts of your application or by external 
          developers.
<br />
<br />  

          <strong> Making API Calls in JavaScript: </strong>
          To interact with APIs in JavaScript, you typically make HTTP requests to a specific 
          URL or endpoint. API calls usually follow a request-response pattern, where one application,
          known as the client, sends a request to another application, known as the server, 
          specifying the desired action or data. The server processes the request and sends back 
          a response containing the requested information or the result of the requested action. 

          The information that is sent back can be parsed into data called JSON, which is a text-based
          data interchange format that is simple for humans to read and write and easy for machines
          to parse and generate. Note: xml is an older much more completed data interchange format 
  
<br />
<br />  
         <strong>  Using the Fetch API: </strong>

          The Fetch API is a modern and widely supported way to make HTTP requests in JavaScript. It 
          returns a Promise that resolves with the response to the request.

          A Promise is a JavaScript object used for handling asynchronous operations. It represents 
          a value (or the eventual result of an operation) that may not be available yet but will be 
          at some point in the future. In the follwing example the .then() and .catch() represents
          the promises.

          <div className="var-img">
              <img src={fetchapi} alt="" />
            </div> 
<br />  

        <strong>Practical Use Cases </strong>  
        Here are some practical use cases for JavaScript APIs:
        <ul> 
          <li><strong> Weather App:</strong> 
          Use a weather API to fetch and display current weather conditions for a given location. 
          </li>
         <li><strong>  Social Media Integration:</strong>
          Integrate social media sharing and authentication using APIs like the Twitter API or Facebook.
          </li>
          <li> <strong>Maps and Geolocation: </strong>
           Embed interactive maps on your website using APIs such as Google Maps or use the 
           Geolocation API to provide location-based services.
           </li>
           <li> <strong> Data Visualization: </strong>
         Fetch data from external sources and visualize it using charting libraries like D3.js.
           </li>
           <li> <strong> Authentication:</strong>
           Implement user authentication using third-party authentication providers like
          OAuth-based APIs.
           </li>
       </ul>
  
            </p>

        </div>
    </div>
  )
}

export default Asynchro;