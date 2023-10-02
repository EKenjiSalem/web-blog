import React from 'react';
import './javascript.css';
import ifstate from '../../images/ifstate.png';
import ifstatetemp from '../../images/ifstatetemp.png';
import adifstate from '../../images/advanceifstate.png';
import ifstateex from '../../images/rsz_ifstateex.png';
import forloop from '../../images/forloop.png';
import whileloop from '../../images/whileloop.png';
import dowhileloop from '../../images/dowhileloop.png';
import forofloop from '../../images/forofloop.png';
import forinloop from '../../images/forinloop.png';
import forloopexamp from '../../images/rsz_2loopexamp.png';


const ControlStructures = () => {

  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> If Statements & Loops </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>
     
         <p className="js-main"> 
        
        <strong> What is an if statement? </strong> 
   <br />
   <br />
        An if statement is a conditional statement that allows you to
        execute specific code blocks based on whether a certain condition evaluates 
        to true or false. These conditions are typically expressed as Boolean 
        expressions or comparisons, and they determine the path your program takes.
<br />
<br />
        if statements are essential tools for implementing conditional logic in your 
        code. By using them, you can create dynamic and responsive programs that adapt 
        to different situations.

    <br />
    <br />

        <strong> Let's Examine the Components: </strong> 
        <ul>
         <li> if: This keyword starts the conditional statement.</li>
         <li> condition: This is an expression that results in either true or false..</li>
         <li> {}: These curly braces enclose the code block to be executed if the condition is true.</li>
        </ul> 
        <div className="var-img">
         <img src={ifstate} alt="" />
        </div>
<br />
<br />
        <strong> How if Statements Work: </strong>
         <ul> 
          <li> The if statement begins with the evaluation of the specified condition.</li>
          <li> If the condition is true, the code block inside the curly braces is executed.</li>
          <li> If the condition is false, the code block is skipped, and the program continues with
           the next statement after the if block.</li>
<br />
          <strong> In this example, the code checks the temperature and prints a message based on whether it's hot or not. </strong> 

           <div className="var-img">
         <img src={ifstatetemp} alt="" />
        </div>
        
        </ul>

<br />

       <strong> Advanced Usage: </strong> 
<br />
<br />
        if statements can be combined with else if and else clauses to handle more 
        complex conditional logic. You can also nest if statements within each other
        for even greater control over your program's flow.
        <div className="var-img">
         <img src={adifstate} alt="" />
        </div>

<br />
<br />

    <strong> If Statement in Action: </strong>

<br />
<br />

    In this example, we create a simple web page with a button. When the button is 
    clicked, it triggers a JavaScript function that uses an if statement to check if 
    a number entered by the user is even or odd and displays a message accordingly.

      <div className="var-img">
         <img src={ifstateex} alt="" />
        </div>

  <hr />
    <h1 className="loops-title"> Loops </h1>
  <hr />

    Loops are control structures that allow you to repeatedly execute a block of code
     as long as a certain condition is true or for a specified number of times.
     JavaScript provides several types of loops:
<br />
<br />

      Loops are essential for automating repetitive tasks and processing data structures
      like arrays and objects. It's important to be cautious when using loops to avoid 
      infinite loops (loops that never exit) and to ensure that you have a clear exit 
      condition to prevent them.
<br />
<br />
       <strong> Loop Types: Functional Programming </strong>
<br />
<br />

          <strong> for loop: </strong> are the most commonly used loop in JavaScript. It consists of three
          parts: initialization, condition, and increment/decrement. The loop continues to 
          execute as long as the condition is true.
          <div className="var-img">
            <img src={forloop} alt="" />
          </div>

  <br />
  <br />

          <strong> while loop: </strong>This loop executes a block of code as long as a specified condition
          is true.
          <div className="var-img">
            <img src={whileloop} alt="" />
          </div>

  <br />
  <br />

         <strong> do while loop: </strong> Similar to the while loop, but it always executes the code block
         at least once before checking the condition.
        <div className="var-img">
          <img src={dowhileloop} alt="" />
        </div>
  
  <br />
  <br />
    
          <strong> Loop Types: Object Oriented Programming </strong>
  <br />
  <br />

        <strong> for in loop: </strong>Used to iterate over the properties of an object. It loops through
         all enumerable properties of an object.
        <div className="var-img">
          <img src={forinloop} alt="" />
        </div>

  <br />
  <br />
          <strong> for of loop: </strong> this loop is used to iterate 
           over iterable objects like arrays and strings.
          <div className="var-img">
              <img src={forofloop} alt="" />
            </div>

  <br />
  <br />

        <strong> Loops in Action: </strong>

        In this example, the for loop to displays the numbers 1 - 10 in an HTML in an
        unodered list:

        <div className="var-img">
            <img src={forloopexamp} alt="" />
          </div>

  <br />
  <br />

      Here's an example of how to loop through the properties 
      of an object in JavaScript using a for...in loop:

        <div className="var-img">
            <img src={forloopexamp} alt="" />
          </div>






            </p>
        </div>
    </div>
  )
}

export default ControlStructures;