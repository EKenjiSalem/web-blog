import React from 'react';
import './javascript.css';
import callbacks from '../../images/Callback.png';
import promises from '../../images/rsz_promise.png';
import asyncawait from '../../images/rsz_async.png';




const Asynchro = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Asynchronous </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>
     
         <p className="js-main"> 
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
        The primary way to work with asynchronous code in JavaScript is through the use of callbacks,
        Promises, and async/await.
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


            </p>

        </div>
    </div>
  )
}

export default Asynchro;