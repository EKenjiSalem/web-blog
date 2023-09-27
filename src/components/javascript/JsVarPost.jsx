import React from 'react';
import './javascript.css';
import vars from '../../images/vars.png';
import addopers from '../../images/addopers.png';
import assign from '../../images/assign.png';
import comped from '../../images/comp.png';
import logical from '../../images/logical.png';
import unary from '../../images/unary-op.png';
import ternary from '../../images/ternary.png';
import numdata from '../../images/numdata.png';
import strdata from '../../images/strdata.png';
import booldata from '../../images/booldata.png';
import undedata from '../../images/undedata.png';
import nulldata from '../../images/nulldata.png';
import symdata from '../../images/symdata.png';
import objedata from '../../images/objedata.png';
import arrdata from '../../images/arrdata.png';
import funcdata from '../../images/funcdata.png';



function JsVarPost() {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Variables, Operators, Data Types </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>

         <p className="js-main"> 
        JavaScript, often hailed as the "language of the web," is a versatile programming language that
         plays a pivotal role in web development. Whether you're a beginner or an experienced developer, 
         understanding the core concepts of variables, operators, and data types is essential to harness
          the full power of JavaScript. In this blog post, we'll take a deep dive into these fundamental 
          concepts, shedding light on how they work and how you can leverage them in your coding endeavors.

        <br />
        <br />
      <hr />
        <strong>Variables: The Building Blocks: </strong>
      <hr />
      <ul>
        <li>  Variables are used to store and manage data in JavaScript.</li>
        <li>   They are like containers or placeholders for values that can change during the execution of a program. </li>
        <li>    Variables are declared using keywords like var, let, or const, followed by a variable name </li>
        <li>    You can assign values of various types (data types) to variables. </li>
      </ul>

           <div className="var-img">
             <img src={vars} alt="" />
            </div>

         <br />
         <br />

        <hr />
        <strong>Operators: Performing Operations: </strong> 
        <hr />

        <ul> 
         <li> Operators in JavaScript are used to perform operations on variables and values.</li>
         <li>They enable you to manipulate and work with data in various ways.</li>
         <li> There are different types of operators in JavaScript, including arithmetic, assignment, comparison, logical, and more.</li>
        </ul>
   <br />
       <strong> Arithmetic Operators:</strong>
       <br />
       <br />

       <ul>
        <li>+ (Addition): Adds two values. </li>
        <li>- (Subtraction): Subtracts the right operand from the left operand. </li>
        <li> * (Multiplication): Multiplies two values.</li>
        <li>/ (Division): Divides the left operand by the right operand. </li>
        <li> % (Modulus): Returns the remainder of the division of the left operand by the right operand.</li>
        <li> ** (Exponentiation, ES6+): Raises the left operand to the power of the right operand.</li>
       </ul>

        <div className="var-img">
             <img src={addopers} alt="" />
            </div>

        <br />
        <br />

       <strong> Assignment Operators:</strong>
       <br />
       <br />
       <ul>
        <li> = (Assignment): Assigns a value to a variable. </li>
        <li> +=,  -=,  *=,  /=,  %= (Compound Assignment): <br /> Performs an 
        operation and assigns the result to a variable in one step. </li>
       </ul>

        <div className="var-img">
          <img src={assign} alt="" />
        </div>

        <br />
        <br />


      <strong> Comparison Operators: </strong>
      <ul>
        <li> ==  <strong> Equality: </strong> Checks if two values are equal.</li>
        <li> === <strong> Strict Equality: </strong> Checks if two values are equal without type coercion.</li>
        <li> !=  <strong> Inequality: </strong> Checks if two values are not equal. </li>
        <li> !== <strong> Strict Inequality: </strong> Checks if two values are not equal without type coercion.  </li>
        <li> {">"} <strong> Greater Than: </strong> Checks if the left operand is greater than the right operand. </li>
        <li> {"<"}  <strong> Less Than: </strong> Checks if the left operand is less than the right operand </li>
        <li> {">="} <strong> Greater Than or Equal to: </strong>Greater Than or Equal To: Checks if the left operand is greater than or equal to the right operand.</li>
        <li> {"<="} <strong> Less Than or Equal to: </strong> Checks if the left operand is less than or equal to the right operand.</li>
      </ul>


      <div className="var-img">
        <img src={comped} alt="" />
        </div>

<br />

    <strong> Logical Operators: </strong>
    <ul>
    <li>&& (Logical AND): Returns true if both operands are true. </li>
    <li>|| (Logical OR): Returns true if at least one operand is true. </li>
    <li> ! (Logical NOT): Returns the opposite of the operand's value.</li>
    </ul>
    <br />

    <div className="var-img">
      <img src={logical} alt="" />
    </div>

<br />
<br />


  <strong> Unary Operators: </strong>
    <ul>
    <li> + (Unary Plus): Converts its operand into a number.</li>
    <li> |- (Unary Minus): Converts its operand into a negative number. </li>
    <li> ++ (Increment): Increases the value of a variable by 1.</li>
    <li> -- (Decrement): Decreases the value of a variable by 1. </li>
    </ul>
    <br />

    <div className="var-img">
      <img src={unary} alt="" />
    </div>


    <strong> Conditional (Ternary) Operator: </strong>
    <ul>
    <li> condition ? expression1 : expression2: 
    <br />
    Evaluates a condition 
    and returns expression1 if true, or expression2 if false.</li>
    </ul>
    <br />

    <div className="var-img">
      <img src={ternary} alt="" />
    </div>

    <br />
    <br />


      <hr />
       <strong>Data Types: </strong> 
      <hr />

       <ul>  
         <li>Data types in JavaScript define the type of data that can be stored in variables.
          JavaScript has two main categories of data types: </li>
       </ul>
       <br />

        <strong> Primitive Data Types: </strong>
        <ul>
          <li> Number: Represents numeric values - integers and floating-point numbers. </li>
          <div className="var-img">
          <img src={numdata} alt="" />
          </div>
          <li> String: Represents text or character sequences.</li>
          <div className="var-img">
          <img src={strdata} alt="" />
          </div>
          <li> Boolean: Represents true or false values. </li>
          <div className="var-img">
          <img src={booldata} alt="" />
          </div>
          <li> Undefined: Represents a variable that has been declared but not assigned a value.</li>
          <div className="var-img">
          <img src={undedata} alt="" />
          </div>
          <li> Null: Represents the intentional absence of any object value.</li>
          <div className="var-img">
          <img src={nulldata} alt="" />
          </div>
          <li> Symbol ES6: Represents unique and immutable values, often used as object property keys.</li>
          <div className="var-img">
          <img src={symdata} alt="" />
          </div>
        </ul>

        <br />

        <strong> Reference Data Types: </strong>
        <ul>
          <li> Object: Represents collections of key-value pairs, which can include functions and nested objects. </li>
          <div className="var-img">
           <img src={objedata} alt="" />
          </div>
          <li> Array: A specialized object for storing lists of values, accessible by index. </li>
          <div className="var-img">
          <img src={arrdata} alt="" />
          </div>
          <li> Function: Represents reusable blocks of code.</li>
          <div className="var-img">
          <img src={funcdata} alt="" />
          </div>

        </ul>

    
        </p>


       
       

        </div>
    
    </div>
  )
}

export default JsVarPost;