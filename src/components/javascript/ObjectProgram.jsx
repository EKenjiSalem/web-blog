import React from 'react';
import './javascript.css';
import oopbasics from '../../images/oop.png';
import oopaccess from '../../images/rsz_oopaccess.png';
import oopupdate from '../../images/rsz_oopupdate.png';
import oopmethod from '../../images/rsz_oopmethod.png';
import constr from '../../images/rsz_2constr.png';
import constructors from '../../images/constructors.png';
import classes from '../../images/classes.png';


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
   
        <strong> Let's explore what an object is: </strong> A "key/property-value pair" refers to
        the basic structure of an object. JavaScript objects are collections of key-value 
        pairs, where the keys are the property names (also known as attributes) and the values
         are the associated data or values of those properties. This key-value pair structure 
         allows you to define and store information within an object.
<br />
<br />
    
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

    Constructors and Classes serve similar purposes, but they are not exactly the same. Both 
    are used to create objects and define their properties and methods, but they differ in
    syntax and some underlying concepts: 

<br />
<br />

   <strong> Constructors: </strong> are functions that are used to create objects. They are defined
    using regular JavaScript functions and typically start with a capital letter by convention.
     Inside the constructor function, you use the this keyword to set properties and methods 
     of the object.
     
    Note: Constructor functions, while still functional, have a somewhat older
    and less readable syntax. They are used less frequently in modern JavaScript codebases.


    <div className="var-img">
      <img src={constructors} alt="" />
    </div>

<br />
<br />

   <strong> Classes: </strong> provide a more straightforward way to define and extend classes, thanks
    to the extends keyword. Subclasses can inherit properties and methods from parent
     classes without manual prototype assignments.

    Note: Classes offer a more modern and concise syntax
    for defining object constructors and methods. They are considered more user-friendly and
    are widely used in modern JavaScript development.
    <div className="var-img">
      <img src={classes} alt="" />
    </div>

<br />
<br />
   <strong> Instances: </strong>
    An instance of a class or constructor is a concrete, individual object created from a class. Each 
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
    <strong> In this example, the Person constructor sets the name and age properties of the instance being created. </strong>

    <div className="var-img">
        <img src={constr} alt="" />
    </div>

<br />
<br />
      <strong> Prototypes </strong>
        A prototype is an internal, special object property that every object has. It is used to implement
        inheritance and to share properties and methods between objects. The prototype chain is a fundamental
        concept in JavaScript's object-oriented programming model.
<br />
<br />         
        JavaScript uses prototype-based inheritance, where objects can inherit
         properties and methods from other objects. Each object has a prototype, and you can 
         extend and share behavior between objects by modifying their prototypes.
  
    <div className="var-img">
        <img src={constr} alt="" />
    </div>





            </p>

        </div>
    </div>
  )
}

export default ObjectProgram;