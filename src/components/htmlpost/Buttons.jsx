import React from 'react';
import './htmlpost.css';
import blogbutton from '../../images/rsz_button.png';
import mblogbtn from '../../images/rsz_1mobtn.png';
import attrimg from '../../images/rsz_attr.png';
import mattrimg from '../../images/rsz_mobattr.png';
import nameattrimg from '../../images/rsz_nameattr.png';
import nattr from '../../images/rsz_nattr.png';
import inputimg from '../../images/input-btn.png';
import minputimg from '../../images/rsz_input-btn.png';
import imgbtn from '../../images/img-btn.png';
import mimgbtn from '../../images/rsz_img-btn.png';

function Buttons() {  

  return (
    <div className="html-post">
        <div className="html-post-wrapper">

        <h1 className="html-post-title"> Buttons </h1>
         <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Elias </b> </span>
            <span className="html-post-date"> 1 hour ago </span>
         </div>

         <p className="html-blog-post">
         HTML buttons are interactive elements used in web development to create 
         clickable actions or triggers on a webpage. They allow users to initiate 
         various actions when clicked, such as submitting forms, navigating to 
         other pages, executing JavaScript functions, or simply providing a means 
         for user interaction.</p>
         <div className="blog-button">
          <img src={blogbutton} alt="" />
         </div>
         <div className="m-blog-button">
          <img src={mblogbtn} alt="" />
         </div>


         <h1 className="btn-attr-title"> Button Attributes: </h1> 
          <p className="btn-attr">
           HTML buttons come with a range of attributes that allow you to customize their appearance 
           and behavior. Let's explore some of the most common attributes:
        <br />
        <br />
       <h1 className="type-attr-title"> Type Attribute:</h1> 
        The type attribute specifies the type of button. The most commonly used values are:
        <br />
        <br />
        <strong> submit:</strong> Submits a form when clicked.
        <br />
        <br />
        <strong> resets: </strong> Resets form fields to their initial values.
        <br />
        <br />
        <strong> button:</strong> A generic button with no predefined behavior.
         </p>
         <div className="attr-img">
          <img src={attrimg} alt="" />
         </div>
         <div className="m-attr-img">
          <img src={mattrimg} alt="" />
         </div>

        <h1 className="attr-title">  Name and Value Attributes:</h1>
         <p className="name-attr-main"> These attributes are often used in forms
         to define the name and value associated with the button when the form 
         is submitted. </p>

         <div className="name-attr-img">
          <img src={nameattrimg} alt="" />
         </div>
         <div className="m-name-attr-img">
          <img src={nattr} alt="" />
         </div>


         <h1 className="input-btn-title"> Input Element as Button: </h1>
         <p className="input-btn-main"> The input element can also be used to create buttons. 
         In this case, you use the type attribute with a value of "button" to create a button input.
         Buttons created with the input element are usually submit and reset buttons are commonly found 
         in HTML forms. When the submit button is clicked, they submit the form's data to the server for processing. 
         When the reset button is clicked form resets to its initial values and the form's fields are cleared.
      </p>

         <div className="input-btn-img">
          <img src={inputimg} alt="" />
         </div>
         <div className="m-input-btn-img">
          <img src={minputimg} alt="" />
         </div>

       <h1 className="onclick-title"> OnClick Attribute: </h1> 
        <p className="onclick-attr"> The onclick attribute allows you to 
         specify JavaScript code to execute when the button is clicked. </p>

         <div className="click-attr-img">
          <img src={nameattrimg} alt="" />
         </div>
         <div className="m-click-attr-img">
          <img src={nattr} alt="" />
         </div>

         <h1 className="img-btn-title"> Images in Buttons: </h1> 
        <p className="img-btn-main"> You can use an img element within a button
         element to create a button with an image. This is often done when you 
         want the image itself to serve as the clickable element. </p>

         <div className="img-btn">
          <img src={imgbtn} alt="" />
         </div>
         <div className="m-img-btn">
          <img src={mimgbtn} alt="" />
         </div>
  
  




 
        </div>
    
    </div>
  )
  }
export default Buttons;