import React from 'react';
import './javascript.css';
import vars from '../../images/vars.png';
import mvars from '../../images/rsz_vars.png';
import addopers from '../../images/addopers.png';
import assign from '../../images/assign.png';
import massign from '../../images/rsz_assign.png';
import comped from '../../images/comp.png';
import logical from '../../images/logical.png';
import mlogical from '../../images/rsz_logical.png';
import unary from '../../images/unary-op.png';
import munary from '../../images/rsz_unary-op.png';
import ternary from '../../images/ternary.png';
import mternary from '../../images/rsz_ternary.png';
import numdata from '../../images/numdata.png';
import strdata from '../../images/strdata.png';
import booldata from '../../images/booldata.png';
import undedata from '../../images/undedata.png';
import nulldata from '../../images/nulldata.png';
import symdata from '../../images/symdata.png';
import msymdata from '../../images/rsz_symdata.png';
import objedata from '../../images/jsobject.png';
import mobjedata from '../../images/rsz_jsobject.png';
import arrdata from '../../images/js-array.png';
import marrdata from '../../images/rsz_js-array.png';
import funcdata from '../../images/funcdata.png';
import compareoperate from '../../images/rsz_compareoperate.png';
import mcompareoperate from '../../images/mobile_compareoperate.png';



function JsVarPost() {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Variables, Operators, Data Types </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}

         <p className="js-var-main"> 
         JavaScript, often hailed as the "language of the web," is a versatile programming language that
         plays a pivotal role in web development. Whether you're a beginner or an experienced developer, 
         understanding the core concepts of variables, operators, and data types is essential to harness
          the full power of JavaScript. In this blog post, we'll take a deep dive into these fundamental 
          concepts, shedding light on how they work and how you can leverage them in your coding endeavors.

<br />
<br />
      <hr className="var-line" />
        <h1 className="var-title"> Variables: The Building Blocks: </h1>
      <hr className="var-line" />

      <ul className="varlist-container">
        <li className="var-list"> Variables are used to store and manage data in JavaScript.</li>
        <li className="var-list"> Variables are essentially placeholders for values that can be constantly manipulated. </li>
        <li className="var-list"> Variables are declared using keywords like var, let, or const, followed by a variable name. </li>
        <li className="var-list"> You can assign values of various types (data types) to variables. </li>
      </ul>

           <div className="var-img">
             <img src={vars} alt="" />
            </div>
            <div className="m-var-img">
             <img src={mvars} alt="" />
            </div>

<br />
<br />

        <hr />
          <h1 className="operators-title"> Performing Operations: </h1> 
        <hr />

        <ul className="operatorlist-container"> 
         <li className="operator-list"> Operators in JavaScript are used to perform operations on variables and values.</li>
         <li className="operator-list"> They enable you to manipulate and work with data in various ways.</li>
         <li className="operator-list"> There are many different types of operators, including arithmetic, assignment, comparison, logical, and more.</li>
        </ul>
<br />
       <h1 className="mathoperator-title"> Arithmetic Operators:</h1>
<br />
<br />

       <ul>
        <li className="mathoperator-list"><strong> + (Addition): </strong> Adds two values. </li>
        <li className="mathoperator-list"><strong> - (Subtraction):  </strong> Subtracts the right operand from the left operand. </li>
        <li className="mathoperator-list"><strong> * (Multiplication): </strong> Multiplies two values.</li>
        <li className="mathoperator-list"><strong> / (Division):  </strong> Divides the left operand by the right operand. </li>
        <li className="mathoperator-list"><strong> % (Modulus): </strong> Returns the remainder of the division of the left operand by the right operand.</li>
        <li className="mathoperator-list"><strong> ** (Exponentiation): </strong> Raises the left operand to the power of the right operand.</li>
       </ul>
            
            <div className="math-img">
              <img src={addopers} alt="" />
            </div>

            <div className="m-math-img">
              <img src={addopers} alt="" />
            </div>
<br />
<br />

       <h1 className="assignment-title"> Assignment Operators:</h1>
       <ul>
        <li className="assignment-list"> <strong> = (Assignment): </strong> Assigns a value to a variable. </li>
        <li className="assignment-list"> <strong> +=,  -=,  *=,  /=,  %= (Compound Assignment): </strong> <br /> Performs an 
        operation and assigns the result to a variable in one step. </li>
       </ul>

        <div className="assign-img">
          <img src={assign} alt="" />
        </div>
        <div className="m-assign-img">
          <img src={massign} alt="" />
        </div>

<br />
<br />

      <h1 className="comparison-title"> Comparison Operators: </h1>
      <ul>
        <li className="comparison-list"> <strong> == (Equality): </strong> Checks if two values are equal.</li>
        <li className="comparison-list"> <strong> === (Strict Equality): </strong> Checks if two values are equal without type coercion.</li>
        <li className="comparison-list"> <strong> !=  (Inequality): </strong> Checks if two values are not equal. </li>
        <li className="comparison-list">  <strong>  !==  (Strict Inequality): </strong> Checks if two values are not equal without type coercion.  </li>
        <li className="comparison-list"> <strong> {">"} (Greater Than): </strong> Checks if the left operand is greater than the right operand. </li>
        <li className="comparison-list">  <strong> {"<"} (Less Than): </strong> Checks if the left operand is less than the right operand </li>
        <li className="comparison-list">  <strong> {">="}  (Greater Than or Equal to): </strong> Checks if the left operand is greater than or equal to the right operand.</li>
        <li className="comparison-list">  <strong> {"<="} (Less Than or Equal to): </strong> Checks if the left operand is less than or equal to the right operand.</li>
      </ul>
        <div className="comparison-img">
         <img src={compareoperate} alt="" />
        </div>
        <div className="m-comparison-img">
         <img src={mcompareoperate} alt="" />
        </div>

<br />

        <h1 className="logical-title"> Logical Operators: </h1>
        <ul>
         <li className="logical-list"><strong> && (Logical AND): </strong> Returns true if both operands are true. </li>
         <li className="logical-list"><strong> || (Logical OR): </strong> Returns true if at least one operand is true. </li>
         <li className="logical-list"><strong> ! (Logical NOT): </strong> Returns the opposite of the operand's value.</li>
        </ul> 
        <div className="logical-img">
          <img src={logical} alt="" />
        </div>
        <div className="m-logical-img">
          <img src={mlogical} alt="" />
        </div>

<br />
<br />

        <h1 className="unary-title"> Unary Operators: </h1>
         <ul>
         <li className="unary-list"><strong> + (Unary Plus): </strong> Converts its operand into a number.</li>
         <li className="unary-list"><strong> |- (Unary Minus): </strong>  Converts its operand into a negative number. </li>
         <li className="unary-list"><strong> ++ (Increment): </strong>  Increases the value of a variable by 1.</li>
         <li className="unary-list"><strong> -- (Decrement): </strong> Decreases the value of a variable by 1. </li>
         </ul>

         <div className="unary-img">
           <img src={unary} alt="" />
         </div>

         <div className="m-unary-img">
           <img src={munary} alt="" />
         </div>
<br />

          <h1 className="ternary-title"> Conditional (Ternary) Operator: </h1>

          <ul>
            <li className="ternary-list"> <strong> condition ? expression1 : expression2 </strong> 
<br />
             Evaluates a condition 
             and returns expression1 if true, or expression2 if false. </li>
          </ul>
           <div className="js-ternary-img">
             <img src={ternary} alt="" />
           </div>
           <div className="m-js-ternary-img">
             <img src={mternary} alt="" />
           </div>
<br />
<br />
             <hr />
              <h1 className="datatype-title"> Data Types: </h1> 
             <hr />

          <ul>  
            <li className="datatype-list"> Data types in JavaScript define the type of data that can be stored in variables.
                JavaScript has two main categories of data types: Primitive/Value and Reference/Object.  </li>
          </ul>
<br />

        <h1 className="basictype-titles"> Primitive Data Types: </h1>
        <ul>
          <li className="basictype-list"><strong> Number: </strong> Represents numeric values - integers and floating-point numbers. </li>
          <div className="num-data-img">
           <img src={numdata} alt="" />
          </div>
          <li className="basictype-list"><strong> String: </strong> Represents text or character sequences.</li>
          <div className="str-data-img">
           <img src={strdata} alt="" />
          </div>
          <li className="basictype-list"><strong> Boolean: </strong> Represents true or false values. </li>
          <div className="boo-data-img">
           <img src={booldata} alt="" />
          </div>
          <li className="basictype-list"><strong> Undefined: </strong> Represents a variable that has been declared but not assigned a value.</li>
          <div className="un-data-img">
           <img src={undedata} alt="" />
          </div>
          <li className="basictype-list"><strong> Null: </strong> Represents the intentional absence of any object value.</li>
          <div className="null-data-img">
           <img src={nulldata} alt="" />
          </div>
          <li className="basictype-list"><strong> Symbol ES6: </strong> Represents unique and immutable values, often used as object property keys.</li>
          <div className="symbol-data-img">
           <img src={symdata} alt="" />
          </div>
          <div className="m-symbol-data-img">
           <img src={msymdata} alt="" />
          </div>
        </ul>

<br />

        <h1 className="reference-title"> Reference Data Types: </h1>
        <ul>
          <li className="reference-list"><strong> Object: </strong> Represents collections of key-value pairs, which can include functions and nested objects. </li>
          <div className="js-object-img">
           <img src={objedata} alt="" />
          </div>
          <div className="m-js-object-img">
           <img src={mobjedata} alt="" />
          </div>
          <li className="reference-list"><strong> Array: </strong> A specialized object for storing lists of values, accessible by index. </li>
          <div className="js-array-img">
          <img src={arrdata} alt="" />
          </div>
          <div className="m-js-array-img">
          <img src={marrdata} alt="" />
          </div>
          <li className="reference-list"><strong> Function: </strong> Represents reusable blocks of code.</li>
          <div className="js-function-img">
          <img src={funcdata} alt="" />
          </div>
         </ul>
        </p>
      </div>
    </div>
  )
}

export default JsVarPost;