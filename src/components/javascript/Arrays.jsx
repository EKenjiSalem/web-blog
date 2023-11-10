import React from 'react';
import './javascript.css';
import arrayliteral from '../../images/arrayliteral.png';
import arrconstructor from '../../images/arrconstructor.png';
import marrayliteral from '../../images/rsz_arrayliteral.png';
import marrconstructor from '../../images/rsz_arrconstructor.png';
import arrayempty from '../../images/arrayempty.png';
import arraypush from '../../images/arraybasic.png';
import marraypush from '../../images/rsz_arraybasic.png';
import arraypop from '../../images/arraypop.png';
import marraypop from '../../images/m_arraypop.png';
import arrayshift from '../../images/arrayshift.png';
import marrayshift from '../../images/m_1arrayshift.png';
import arrayunshift from '../../images/arrayunshift.png';
import marrayunshift from '../../images/m_arrayunshift.png';
import arrayconcat from '../../images/arrayconcat.png';
import marrayconcat from '../../images/rsz_arrayconcat.png';
import arraysort from '../../images/arraysort.png';
import marraysort from '../../images/rsz_arraysort.png';
import arraysplice from '../../images/arraysplice.png';
import marraysplice from '../../images/rsz_arraysplice.png';
import arrayslice from '../../images/arrayslice.png';
import marrayslice from '../../images/m_arrayslice.png';
import arraylength from '../../images/rsz_arraylengths.png';
import marraylength from '../../images/m_arraylengths.png';
import arrayloop from '../../images/arrayloop.png';
import marrayloop from '../../images/m_arrayloop.png';
import arrayforof from '../../images/arrayforof.png';
import marrayforof from '../../images/m_arrayforof.png';
import foreacharray from '../../images/foreacharray.png';
import mforeacharray from '../../images/m_foreacharray.png';
import arrayzero from '../../images/arrayzer.png';
import marrayzero from '../../images/m_arrayzer.png';
import arrayex from '../../images/rsz_arrayex.png';
import marrayex from '../../images/m_arrayex.png';
import arraydestruct from '../../images/rsz_arraydestruct.png';
import marraydestruct from '../../images/m_arraydestruct.png';
import multiarray from '../../images/multiarray.png';
import accessmulti from '../../images/accessmulti.png';
import maccessmulti from '../../images/m_accessmulti.png';
import modifymulti from '../../images/modifymulti.png';
import mmodifymulti from '../../images/m_modifymulti.png';
import multiloop from '../../images/multiloop.png';
import mmultiloop from '../../images/m_multiloop.png';
import threedarray from '../../images/three-darray.png';
import mutable from '../../images/mutable.png';
import mmutable from '../../images/rsz_mutable.png';
import immutable from '../../images/immutable.png';
import mimmutable from '../../images/rsz_immutable.png';
import spreadimmute from '../../images/spreadimmute.png';
import copyspread from '../../images/CopySpread.png';
import mcopyspread from '../../images/rsz_copyspread.png';
import mergespread from '../../images/MergeSpread.png';
import mmergespread from '../../images/rsz_mergespread.png';
import spreadfunction from '../../images/SpreadFunction.png';
import mspreadfunction from '../../images/rsz_spreadfunction.png';
import addspread from '../../images/AddSpread.png';
import maddspread from '../../images/rsz_addspread.png';

import convertspread from '../../images/ConvertSpread.png';
import mconvertspread from '../../images/rsz_convertspread.png';

const Arrays = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Arrays </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
         <p className="arrays-main"> 
         An array is a data structure that allows you to store and manipulate a 
         collection of values, such as numbers, strings, objects, or even other arrays. Arrays are
          commonly used to organize and work with data in a structured way.
<br />
<br />

         <strong> Key Characteristics of Arrays: </strong> 
    <ul> 
        <li className="array-list"> <strong> Ordered Collection: </strong> Arrays are ordered, meaning that the elements are stored in a specific sequence, and you can access them by their position or index.</li>
        <li className="array-list"> <strong> Zero-Based Indexing:  </strong> JavaScript arrays use zero-based indexing, which means the first element is accessed using index 0, the second with index 1, and so on.</li>
        <li className="array-list"> <strong> Dynamic Size:</strong> Unlike some other programming languages, JavaScript arrays are dynamic, which means they can grow or shrink in size as needed. You can add or remove elements from an array dynamically. </li>
        <li className="array-list"> <strong> Mixed Data Types: </strong> Arrays in JavaScript can hold elements of different data types. You can have a mix of numbers, strings, objects, functions, and other values in a single array.</li>
        <li className="array-list"> <strong> Methods and Properties: </strong> JavaScript provides a variety of methods and properties for working with arrays, making it easy to perform operations like adding, removing, sorting, and searching for elements within an array.</li>
    </ul>

 <br />
 <br />

 

        <hr />
         <h1 className="array-create-title"> Creating Arrays: </h1>
        <hr />
<br />  
         <p className="array-main-create">
         There are several ways to declare and initialize arrays in JavaScript:
         </p>
<br />
<br />
      <strong> Array Literals: </strong> involves enclosing a comma-separated list of values within
        square brackets []:
            <div className="arrliteral-img">
              <img src={arrayliteral} alt="" />
            </div>
            <div className="m-arrliteral-img">
              <img src={marrayliteral} alt="" />
            </div>
<br />
         <strong> Array Constructor: </strong> can take a fixed number of arguments to initialize the array:
               <div className="arrconstructor-img">
              <img src={arrconstructor} alt="" />
            </div> 
            <div className="m-arrconstructor-img">
              <img src={marrconstructor} alt="" />
            </div> 
<br />
         Creating an empty array and then adding elements to it:
           <div className="arrempty-img">
              <img src={arrayempty} alt="" />
            </div>
<br />


        <hr />
         <h1 className="array-methods-title"> Array Methods and Properties: </h1>
        <hr />
         <div className="arrmethods-main">
         Array methods in JavaScript are built-in functions that you can use to perform various operations
         on arrays. These methods make it easier to manipulate and work with array data.
         </div>
<br />
<br />
        <strong> Here are some commonly used array methods that add, copy, modify, and remove array elements: </strong>
<br />
<br />
       <strong> push(): </strong> Adds one or more elements to the end of an array and returns the new length of the array.
            <div className="arrpush-img">
              <img src={arraypush} alt="" />
            </div> 
            <div className="m-arrpush-img">
              <img src={marraypush} alt="" />
            </div> 
<br />
        <strong> pop(): </strong> Removes the last element from an array and returns that element.
            <div className="arrpop-img">
              <img src={arraypop} alt="" />
            </div> 
            <div className="m-arrpop-img">
              <img src={marraypop} alt="" />
            </div> 
<br />  
       <strong> shift(): </strong> Removes the first element from an array and returns that element, shifting all other
        elements to a lower index.    
           <div className="arrshift-img">
              <img src={arrayshift} alt="" />
            </div> 
            <div className="m-arrshift-img">
              <img src={marrayshift} alt="" />
            </div> 
<br />
       <strong> unshift():</strong>  Adds one or more elements to the beginning of an array and returns the new length of
        the array.  
           <div className="arrunshift-img">
              <img src={arrayunshift} alt="" />
            </div>
            <div className="m-arrunshift-img">
              <img src={marrayunshift} alt="" />
            </div>
<br />
       <strong> sort(): </strong>  Sorts the elements of an array in place, converting elements to strings and using their
         UTF-16 code units' values.
             <div className="arrsort-img">
              <img src={arraysort} alt="" />
            </div> 
            <div className="m-arrsort-img">
              <img src={marraysort} alt="" />
            </div> 
<br />

         <strong> concat(): </strong>  Combines two or more arrays and returns a new array.
           <div className="arrconcat-img">
              <img src={arrayconcat} alt="" />
            </div>
            <div className="m-arrconcat-img">
              <img src={marrayconcat} alt="" />
            </div> 
<br />
      <strong> slice(): </strong>  Creates a shallow copy of an array by extracting a portion of it.
           <div className="arrslice-img">
              <img src={arrayslice} alt="" />
            </div>
            <div className="m-arrslice-img">
              <img src={marrayslice} alt="" />
            </div>
<br />
        <strong> splice(): </strong> Adds or removes elements from an array at a specified index. 
           <div className="arrsplice-img">
              <img src={arraysplice} alt="" />
            </div>
            <div className="m-arrsplice-img">
              <img src={marraysplice} alt="" />
            </div>
<br />

            <hr />
             <h1 className="array-data-title"> Data manipulation in Arrays </h1>
            <hr />
        
            <div className="arrdata-main">
            Arrays in various operations, including iterating through arrays using loops, utilizing array
            methods like forEach, map, and filter, and modifying arrays using splice and concat. Let's explore 
            these concepts in more detail:
            </div>
       

<br />
<br />

        <strong> Array Properties: </strong>
        length: The length property returns the number of elements in an array. It is read-write,
        meaning you can change its value to truncate or extend the array.
            <div className="arrlength-img">
              <img src={arraylength} alt="" />
            </div>
            <div className="m-arrlength-img">
              <img src={marraylength} alt="" />
            </div>
<br />
<br />
          <h1 className="array-loops-title"> Looping through Arrays: </h1> 
          You can use various types of loops to iterate through arrays and perform operations on
          their elements. Here are some common loop constructs used for this purpose:
<br />
<br />  
           <strong> Using a for Loop: </strong> 
           The for loop is a traditional loop that is often used for iterating through arrays. 
           You can use it to specify the start and end conditions for the loop.

           This for loop example, iterates through the array and logs each element green, orange, yellow 
           to the console, one element per line.

           <div className="arrloop-img">
              <img src={arrayloop} alt="" />
            </div>
            <div className="m-arrloop-img">
              <img src={marrayloop} alt="" />
            </div>
<br />    
           <strong> Using a for...of Loop: </strong> 
          The for...of loop is a more modern and concise way to iterate through the elements 
          of an array. It directly iterates over the values of the array elements without the
          need for an index variable:
            <div className="arrforof-img">
              <img src={arrayforof} alt="" />
            </div>
            <div className="m-arrforof-img">
              <img src={marrayforof} alt="" />
            </div>
  <br />
          <strong> forEach() Method: </strong>
          Arrays in JavaScript have a built-in forEach() method that allows you to iterate through
          each element in the array and perform a callback function on each element:
            <div className="arrforeach-img">
              <img src={foreacharray} alt="" />
            </div>
            <div className="m-arrforeach-img">
              <img src={mforeacharray} alt="" />
            </div>
  <br />
  <br />
          <hr />
           <h1 className="array-zero-title"> Zero-Based Indexing: </h1>
          <hr />

          <div className="arrindex-main">
           JavaScript arrays use zero-based indexing, which means the first element in the array is accessed
            using an index of 0, the second element with an index of 1, and so on. For example:
          </div>

            <div className="arrindex-img">
                <img src={arrayzero} alt="" />
              </div> 
              <div className="m-arrindex-img">
                <img src={marrayzero} alt="" />
              </div> 
  <br />
  <br />
          <hr />
           <h1 className="array-destructing-title"> Array Destructuring: </h1>
          <hr />
          
           <div className="arrdestructoring-main">
           Array destructuring is a feature in many programming languages that
          allows you to extract values from an array and assign them to individual
          variables in a single statement. This can make your code more concise 
           and readable.
           </div>
   
           <div className="arrdest-img">
              <img src={arraydestruct} alt="" />
            </div>
            <div className="m-arrdest-img">
              <img src={marraydestruct} alt="" />
            </div>

  <br />
  <br />
          <hr />
           <h1 className="multi-array-title"> Multi-dimensional Arrays: </h1>
          <hr />

          <div className="arrmulti-main">
          Multi-dimensional arrays are implemented as arrays of arrays. JavaScript doesn't have
          true multi-dimensional arrays like some other programming languages, but you can create 
          arrays that simulate multi-dimensional behavior by nesting arrays within arrays.
          </div>
  <br />
  <br />  
         <strong> Creating a Two-Dimensional Array: </strong> 
          You can create a two-dimensional array in JavaScript like this:
          This creates a 3x3 matrix with rows and columns.
           <div className="arrmulti-img">
              <img src={multiarray} alt="" />
            </div>
  <br />
  <br />      
            <strong> Accessing Elements: </strong> 
            To access elements in a two-dimensional array, you can use square brackets for 
            each dimension:
           <div className="accesselement-img">
              <img src={accessmulti} alt="" />
            </div>
            <div className="m-accesselement-img">
              <img src={maccessmulti} alt="" />
            </div>
  <br />
  <br />
            <strong> Modifying Elements: </strong> 
            You can modify elements in the array in the same way:
           <div className="modifyelements-img">
              <img src={modifymulti} alt="" />
            </div>
            <div className="m-modifyelements-img">
              <img src={mmodifymulti} alt="" />
            </div>
<br />
<br />
            <strong> Iterating through a Two-Dimensional Array: </strong> 
            You can use nested loops to iterate through all the elements in a two-dimensional array:
           <div className="loopthroughelements-img">
              <img src={multiloop} alt="" />
            </div>
            <div className="m-loopthroughelements-img">
              <img src={mmultiloop} alt="" />
            </div>

<br />
<br />
            <strong> Creating Higher-Dimensional Arrays: </strong> 
            You can create arrays with more than two dimensions by nesting arrays further:
           <div className="higherdimension-img">
              <img src={threedarray} alt="" />
            </div>
            <div className="m-higherdimension-img">
              <img src={threedarray} alt="" />
            </div>
<br />
<br />
          <hr />
           <h1 className="mutable-arrays-title"> Mutable and Immutable Arrays: </h1>
          <hr />

         <div className="mutable-main">
         <strong> Mutable Arrays: </strong> 
          By default, arrays in JavaScript are mutable, meaning you can change their
          contents (add, remove, or modify elements) after they are created.
          </div>
<br />
<br />
          Mutable arrays can be modified freely, and any changes you make directly affect the 
          original array.

           <div className="arrmutable-img">
              <img src={mutable} alt="" />
            </div>
            <div className="m-arrmutable-img">
              <img src={mmutable} alt="" />
            </div>
<br />
<br />
          <strong> Immutable Arrays: </strong> 
          On the other hand, are not a built-in feature of JavaScript, but you can 
          create them using various techniques. An immutable array is an array that 
          cannot be changed once it is created. Instead of modifying an existing array,
          any operation on an immutable array creates a new array with the desired changes.
<br />
<br />
          Immutable arrays are useful in scenarios where you want to ensure that your data remains
          unchanged, which can help with predictable state management in applications, especially 
          in the context of functional programming principles.

  <br />
  <br />
         <strong> Using the map method to create a new array based on an existing one: </strong>
           <div className="arrimutable-img">
              <img src={immutable} alt="" />
            </div>
            <div className="m-arrimutable-img">
              <img src={mimmutable} alt="" />
            </div>
  <br />
  <br />
          <strong> Using the spread operator (...) to create a new array: </strong>  
            <div className="var-img">
              <img src={spreadimmute} alt="" />
            </div>        
<br />
<br />
          <hr />
           <h1 className="spread-array-title"> Spread Operator: </h1>
          <hr />

          <div className="spread-main">
          The spread operator (...) is a syntax feature that allows you to expand an iterable object,
          such as an array or a string, into individual elements or characters. When used with 
          arrays, it's often referred to as the "spread syntax" because it spreads the elements of 
          an array into a new array or function arguments.
          </div>
 
<br />
<br />
          The spread operator (...) is a versatile feature in JavaScript that simplifies working
          with arrays by allowing you to copy, combine, add elements, or convert array-like objects
          into arrays. It is widely used for manipulating arrays in a more concise and readable way.
<br />
<br />
         <strong> Here are some key usages for the spread operator</strong>
<br />
<br />
         <strong> Copying Arrays and Objects: </strong> 
         You can use the spread operator to create shallow copies of arrays and objects. 
         This allows you to duplicate the original data without modifying the original:
           <div className="arrspread-img">
              <img src={copyspread} alt="" />
            </div>
            <div className="m-arrspread-img">
              <img src={mcopyspread} alt="" />
            </div>
<br />
<br />
         <strong> Merging Arrays: </strong> 
         You can merge two or more arrays into a single new array using the spread operator:
           <div className="arrmergespread-img">
              <img src={mergespread} alt="" />
            </div>
            <div className="m-arrmergespread-img">
              <img src={mmergespread} alt="" />
            </div>
<br />
<br />
          <strong> Adding Elements to Arrays: </strong> 
          You can add elements to an existing array while creating a new array with the additional 
          elements:
          <div className="arraddspread-img">
              <img src={addspread} alt="" />
            </div>
               <div className="m-arraddspread-img">
              <img src={maddspread} alt="" />
            </div>
<br />
<br />

          <strong> Spreading Function Arguments: </strong> 
          When calling a function, you can spread an array to pass its elements as individual
          arguments to the function:
            <div className="arrfuncspread-img">
              <img src={spreadfunction} alt="" />
            </div>
            <div className="m-arrfuncspread-img">
              <img src={mspreadfunction} alt="" />
            </div>
<br />
<br />

          <strong> Converting Strings to Arrays: </strong> 
          You can convert a string into an array of characters using the spread operator:
               <div className="arrconvert-img">
              <img src={convertspread} alt="" />
            </div>
            <div className="m-arrconvert-img">
              <img src={mconvertspread} alt="" />
            </div>
<br />
<br />

          <hr />
           <h1 className="array-action-title"> Array in Action: </h1>
          <hr />

          <div className="arraction-main">
          In this example, we'll create an HTML page with a button, and when you click the button, 
          it will display the array elements in an ordered list - HTML ol element. We'll use the
           forEach() method to loop through the array.
          </div>
  
           <div className="arraction-img">
              <img src={arrayex} alt="" />
            </div>
            <div className="m-arraction-img">
              <img src={marrayex} alt="" />
            </div>



            </p>
<br />
<br />
        </div>
    </div>
  )
}

export default Arrays;