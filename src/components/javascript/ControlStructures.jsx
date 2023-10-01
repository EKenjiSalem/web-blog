import React from 'react';
import './javascript.css';
import ifstate from '../../images/ifstate.png';
import ifstatetemp from '../../images/ifstatetemp.png';
import adifstate from '../../images/advanceifstate.png';
import ifstateex from '../../images/rsz_ifstateex.png';



const ControlStructures = () => {

  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> If Statements and Loops </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>
     
         <p className="js-main"> 
        
        <strong> What is an if statement? </strong> 
   <br />
   <br />
        An if statement in JavaScript is a conditional statement that allows you to
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

        <strong> Lets Examine the components: </strong> 
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




            </p>

        </div>
    </div>
  )
}

export default ControlStructures;