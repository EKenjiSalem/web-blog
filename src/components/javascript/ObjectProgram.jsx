import React from 'react';
import './javascript.css';
import oopbasics from '../../images/oop.png';
import oopaccess from '../../images/rsz_oopaccess.png';
import oopupdate from '../../images/rsz_oopupdate.png';
import oopmethod from '../../images/rsz_oopmethod.png';
import classes from '../../images/rsz_classvsconstr.png';
import instance from '../../images/rsz_instance1.png';
import minstance from '../../images/rsz_1instance2.png';
import indepen from '../../images/rsz_indepen.png';
import classinher from '../../images/rsz_1classinher.png';
import encaps from '../../images/rsz_encaps.png';


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
          behavior. OOP in JavaScript is based on the concept of objects, which are instances 
          of classes (or prototypes), and it allows you to model real-world entities and their
          interactions in a structured and modular way.
   
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
      When you create an instance of a class, you're essentially making a copy of that
      class with its own set of data and behavior. Each instance is unique and 
      separate from others.
<br />
<br />
      Instances have their own set of data or attributes, which can be different from 
      the data in other instances of the same class. For example, if you have 
      a Person class, each instance (e.g., a person object) may have its own name,
      age, and other attributes.

<br />
<br />
        <div className="var-img">
          <img src={instance} alt="" />
        </div>
<br />
<br />
      <strong> Methods (Behavior): </strong> Instances of a class can also have
     access to the methods defined in the class. These methods can perform
      actions or calculations based on the instance's data.

      <div className="var-img">
          <img src={minstance} alt="" />
        </div>
<br />
<br />

       Instances are independent of each other. Changes made to one instance's data do not
       affect the data of other instances. Each instance maintains its own state.
      <div className="var-img">
          <img src={indepen} alt="" />
        </div>
<br />
<br />

      <strong> Inheritance: </strong>
      Inheritance is a mechanism that allows one class (or constructor function) to inherit
      properties and methods from another class. 

<br />
<br />
      <strong> Here's how class inheritance works in JavaScript: </strong>
<br />
<br />
      <strong> Parent Class: </strong> You define a base class (also called a parent class) using
       the class keyword. This class can have properties and methods.
<br />
<br />
      <strong> Child Class: </strong>  You create a derived class (also called a child class) using 
      the class keyword as well. The derived class extends the base class using the extends keyword.
       It can also have its own properties and methods.
<br />
<br />
       <strong> Super Keyword: </strong> Inside the constructor of the derived class, you use the
        super keyword to call the constructor of the base class. This initializes the inherited 
        properties and methods.
<br />
<br />
        In this example, Dog is a derived class that inherits from the Animal base class. 
        The super(name) call in the Dog constructor invokes the constructor of the Animal class
         to set the name property, and Dog adds its own breed property and a bark method.

      <div className="var-img">
          <img src={classinher} alt="" />
        </div>

<br />
<br />

        <strong> Encapsulation: </strong>
<br />
<br />
        Encapsulation is one of the fundamental principles of object-oriented programming (OOP), and it refers to the concept of bundling an object's data (attributes or properties) and methods (functions or behaviors) that operate on that data into a single unit or "capsule." In JavaScript, which is a flexible and dynamic language, encapsulation can be achieved using various techniques.
<br />
<br />
       <strong> Key Encapsulation Concepts: </strong>
<br />
<br />
       <strong> Private and Public Members: </strong> 
<br />
<br />
        Encapsulation allows you to distinguish between a class's public interface (methods and properties
        accessible from outside the class) and its private implementation details (methods and properties 
        that are not meant to be accessed directly from outside the class).
<br />
<br />        
        <strong> Closure for Private Members: </strong> 
<br />
<br />
        JavaScript's closures allow you to create private members within a constructor function or class.
        These private members are accessible only within the constructor function or class itself.
<br />
<br />
       
        In this example, The privateVar is a private variable, and the getPrivateVar method allows you
        to access it through a closure. The name property is a public property that you can access 
        directly.

        <div className="var-img">
          <img src={encaps} alt="" />
        </div>

    



            </p>

        </div>
    </div>
  )
}

export default ObjectProgram;