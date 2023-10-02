import React from 'react';
import './javascript.css';
import oopbasics from '../../images/oop.png';
import oopaccess from '../../images/rsz_oopaccess.png';
import oopupdate from '../../images/rsz_oopupdate.png';
import oopmethod from '../../images/rsz_oopmethod.png';
import constr from '../../images/rsz_2constr.png';
import constructors from '../../images/constructors.png';
import classes from '../../images/rsz_classvsconstr.png';


const ObjectProgram = () => {

  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Object Oriented Programming </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>
     
         <p className="js-main"> 
          Object-oriented programming (OOP) in JavaScript is a programming paradigm that focuses
          on organizing code into reusable, self-contained objects that encapsulate data and 
          behavior. JavaScript is a versatile programming language that supports both OOP and
          other paradigms like functional programming. OOP in JavaScript is based on the 
          concept of objects, which are instances of classes (or prototypes), and it allows 
          you to model real-world entities and their interactions in a structured and modular 
          way.
   
<br />
<br />
   
          In object-oriented programming (OOP), objects are fundamental constructs that represent 
          real-world entities or concepts. Objects are at the core of the language's design. Here's an overview of 
          objects in JavaScript:

          Objects as Collections of Key-Value Pairs: In JavaScript, objects are essentially collections
          of key-value pairs, where each key is a string (or symbol in modern JavaScript) that acts 
          as a property name, and each value can be of any data type, including other objects. This 
          key-value structure is sometimes referred to as a "dictionary" or "map."
<br />
<br />
          <strong> Creating Objects: </strong>
<br />
<br />
          <strong>Object Literals: </strong> are simplest way to create an object in JavaScript is by 
          using object literals.

    
        <div className="var-img">
         <img src={oopbasics} alt="" />
        </div>
<br />
<br />
        <strong> Accessing Properties and Values: </strong>
        You can access the values associated with these properties using dot notation or
         square bracket notation: 
 
        <div className="var-img">
         <img src={oopaccess} alt="" />
        </div>
        
<br />
<br />
        <strong> Adding, Updating, or Deleting </strong>
        You can also add, update, or delete property-value pairs in objects dynamically:
 
        <div className="var-img">
         <img src={oopupdate} alt="" />
        </div>
        
        Property-value pairs are the foundation of working with objects in JavaScript, allowing you to
         store and manipulate data in a structured way. Objects can have methods (functions) as values 
         as well, which enable you to encapsulate behavior along with data within objects, making them
          a powerful tool for building complex software systems.
   <br />
   <br />
        <strong> Methods </strong>
   <br />
   <br />   

        Methods are functions associated with an object. They define the object's behavior and
        operations that can be performed on the object's data. Methods can access and manipulate
        the object's attributes. Methods can also be added to an object dynamically, especially
        in languages like JavaScript.

        <div className="var-img">
         <img src={oopmethod} alt="" />
        </div>

        Note: the usage of the keyword "this" when accessing properties and values in 
        a method the "this" keyword must be applied. This refers to the object within 
        the method. 


    <hr />
        <strong> Constructor & Class Functions: </strong>
    <hr />

    Constructor & Class functions are both used to create objects and define their properties and methods.
    Essentially, classes are a more modern and syntactically convenient way to define constructors and
    work with object-oriented programming. Classes were introduced in ECMAScript 6 (ES6) to provide a more
    structured and familiar approach to creating constructors and managing objects compared to the older
    constructor function and prototype-based system. 
<br />
<br />

    A prototype is an internal, object property that every object has. It is used to implement inheritance
    and to share properties and methods between objects. In ES6 classes, the concept of prototypes is abstracted
    away, but under the hood, JavaScript still uses prototypes to implement class inheritance. When you define methods
     inside a class, they are added to the class's prototype automatically. You don't need to explicitly
      define a prototype as you did in the constructor function approach.

<br />
<br />

      <strong>Here are some reasons why classes are considered a more modern approach: </strong>
        <ul> 
          <li> <strong> Clearer Syntax:</strong> Classes offer a cleaner and more readable syntax for defining constructors, properties, and methods. This makes your code more understandable and maintainable.</li> 

          <li> <strong>Inheritance: </strong> Classes provide a straightforward way to implement inheritance using the extends keyword. Subclasses can easily inherit properties and methods from parent classes, simplifying the process of building complex class hierarchies.</li>

           <li> <strong>Encapsulation: </strong> Classes encourage better encapsulation by clearly defining the constructor and methods within a single block. This helps developers better organize and understand their code.</li> 
        </ul>

<br />
<br />
          <strong> Here's an example comparing the older constructor function approach with the modern class approach: </strong>


    <div className="var-img">
      <img src={classes} alt="" />
    </div>

<br />
<br />
   <strong> Instances: </strong>
    an instance of a class or constructor is an individual object created from a class. Each 
    instance has its own set of property values and can perform actions defined by the class's
    methods. Instances are separate and distinct from each other, even though they share the 
    same class definition.
<br />
<br />
    Creating instances from classes and/or constructors is a common practice in JavaScript for modeling and 
    working with objects. It allows you to create multiple objects with similar properties and 
    behavior based on the blueprint provided by the constructor function.
<br />
<br />





            </p>

        </div>
    </div>
  )
}

export default ObjectProgram;