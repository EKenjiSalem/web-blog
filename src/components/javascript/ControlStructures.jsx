import React from 'react';
import './javascript.css';
import ifstate from '../../images/ifstate.png';
import mifstate from '../../images/rsz_ifstate.png';
import ifstatetemp from '../../images/ifstatetemp.png';
import mifstatetemp from '../../images/rsz_ifstatetemp.png';
import adifstate from '../../images/advanceifstate.png';
import madifstate from '../../images/rsz_advanceifstate.png';
import ifstateex from '../../images/rsz_ifstateex.png';
import mifstateex from '../../images/m_ifstateex.png';
import forloop from '../../images/forloopjs.png';
import mforloop from '../../images/rsz_forloopjs.png';
import whileloop from '../../images/whileloopjs.png';
import dowhileloop from '../../images/dowhileloopjs.png';
import forofloop from '../../images/forofloopjs.png';
import mforofloop from '../../images/rsz_forofloopjs.png';
import forinloop from '../../images/forinloopjs.png';
import mforinloop from '../../images/rsz_forinloopjs.png';
import forloopexamp from '../../images/rsz_2loopexamp.png';
import mforloopexamp from '../../images/m_loopexamp.png';
import forinloopex from '../../images/forinloopexamp.png';
import mforinloopex from '../../images/rsz_forinloopexamp.png';


const ControlStructures = () => {

  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> If Statements & Loops </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
        <p className="ifstate-main"> 
        An if statement is a conditional statement that allows you to
        execute specific code blocks based on whether a certain condition evaluates 
        to true or false. These conditions are typically expressed as Boolean 
        expressions or comparisons, and they determine the path your program takes.
<br />
<br />
        if statements are essential tools for implementing conditional logic in your 
        code. By using them, you can create dynamic and responsive programs that adapt 
        to different situations.
        </p>

    <br />
    <br />

        <h1 className="examine-component-title"> Let's Examine the Components: </h1> 
        <ul className="examine-component-container">
         <li className="ifstate-list"><strong> if </strong> - This keyword starts the conditional statement.</li>
         <li className="ifstate-list"><strong> condition </strong> - This is an expression that results in either true or false..</li>
         <li className="ifstate-list"><strong> curly braces </strong> - These curly braces enclose the code block to be executed if the condition is true.</li>
        </ul> 
        <div className="ifstate-img">
         <img src={ifstate} alt="" />
        </div>
        <div className="m-ifstate-img">
         <img src={mifstate} alt="" />
        </div>
<br />
        <h1 className="howifstate-title"> How if Statements Work: </h1>
         <ul className="howifstate-container"> 
          <li className="ifstate-list"> The if statement begins with the evaluation of the specified condition.</li>
          <li className="ifstate-list"> If the condition is true, the code block inside the curly braces is executed.</li>
          <li className="ifstate-list"> If the condition is false, the code block is skipped, and the program continues with
           the next statement after the if block.</li>
<br />
          In this example, the code checks the temperature and prints a message based on whether it's hot or not.

           <div className="ifstatetemp-img">
         <img src={ifstatetemp} alt="" />
        </div>
        <div className="m-ifstatetemp-img">
         <img src={mifstatetemp} alt="" />
        </div>
        
        </ul>

<br />

       <h1 className="advanceduseage-title"> Advanced Usage: </h1> 
<br />
<br />
        <p className="advanceifstatement">
        if statements can be combined with else if and else clauses to handle more 
        complex conditional logic. You can also nest if statements within each other
        for even greater control over your program's flow.
        </p>
        <div className="adifstate-img">
         <img src={adifstate} alt="" />
        </div>
        <div className="m-adifstate-img">
         <img src={madifstate} alt="" />
        </div>

<br />

    <h1 className="ifstateaction-title"> If Statement in Action: </h1>
<br />
<br />
      <p className="ifstate-action">
      In this example, we create a simple web page with a button. When the button is 
      clicked, it triggers a JavaScript function that uses an if statement to check if 
      a number entered by the user is even or odd and displays a message accordingly.
      </p>
       <div className="ifstateex-img">
         <img src={ifstateex} alt="" />
        </div>
        <div className="m-ifstateex-img">
         <img src={mifstateex} alt="" />
        </div>

  <hr className="loops-line" />
    <h1 className="loops-title"> Loops </h1>
  <hr className="loops-line" />
    
      <p className="loops-main">
      Loops are control structures that allow you to repeatedly execute a block of code
      as long as a certain condition is true or for a specified number of times.
      JavaScript provides several types of loops:
<br />
<br />
      Loops are essential for automating repetitive tasks and processing data structures
      like arrays and objects. It's important to be cautious when using loops to avoid 
      infinite loops (loops that never exit) and to ensure that you have a clear exit 
      condition to prevent them.
    </p>
  
<br />
<br />
          <h1 className="loopstype-title"> Loop Types: Functional Programming </h1>
<br />
<br />
            <p className="forloop-main">   <strong> for loop: </strong> 
            Are the most commonly used loop in JavaScript. It consists of three
            parts: initialization, condition, and increment/decrement. The loop continues to 
            execute as long as the condition is true.
       
          <div className="forloop-img">
            <img src={forloop} alt="" />
          </div>
          <div className="m-forloop-img">
            <img src={mforloop} alt="" />
          </div>
  <br />
          <strong> while loop: </strong> This loop executes a block of code as long as a specified condition
          is true.
          <div className="whileloop-img">
            <img src={whileloop} alt="" />
          </div>
  <br />
         <strong> do while loop: </strong> Similar to the while loop, but it always executes the code block
         at least once before checking the condition.
        <div className="dowhileloop-img">
          <img src={dowhileloop} alt="" />
        </div>
        </p>
  <br />
  <br />
          <h1 className="objectlooptypes-title"> Loop Types: Object Oriented Programming </h1>
  <br />
        <p className="objectloops-main"> <strong> for in loop: </strong>
        Used to iterate over the properties of an object. It loops through all enumerable
        properties of an object.
        <div className="forinloop-img">
          <img src={forinloop} alt="" />
        </div>
        <div className="m-forinloop-img">
          <img src={mforinloop} alt="" />
        </div> 

  <br />
          <strong> for of loop: </strong> This loop is used to iterate 
           over iterable objects like arrays and strings.
            <div className="forofloop-img">
             <img src={forofloop} alt="" />
           </div>
           <div className="m-forofloop-img">
             <img src={mforofloop} alt="" />
           </div>
  <br />

        <h1 className="objectloop-action"> Loops in Action: </h1>
        In this example, the for loop to displays the numbers 1 - 10 in an HTML in an
        unodered list:
        <div className="forloopexamp-img">
         <img src={forloopexamp} alt="" />
        </div>
        <div className="m-forloopexamp-img">
         <img src={mforloopexamp} alt="" />
        </div> 

  <br />

         An example of how to loop through the properties 
        of an object in JavaScript using a for...in loop: 
         <div className="forinloopexamp-img">
          <img src={forinloopex} alt="" />
        </div>
        <div className="m-forinloopexamp-img">
          <img src={mforinloopex} alt="" />
        </div> 
        </p>

  <br />
  <br />
        </div>
    </div>
  )
}

export default ControlStructures;