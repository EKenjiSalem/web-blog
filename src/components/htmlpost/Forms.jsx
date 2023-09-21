import React from 'react';
import './htmlpost.css';
import forms from '../../images/rsz_forms.png';
import mforms from '../../images/rsz_1forms.png';

function Forms() {
  return (
    <div className="html-post">
        <div className="html-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="html-post-title"> User Forms and Inputs </h1>
         <div className="html-post-info">
            <span className="html-post-author"> Author: <b> Elias </b> </span>
            <span className="html-post-date"> 1 hour ago </span>
         </div>
         <p className="form-post-main">
         HTML forms are a crucial component of web development that allow users to input data and interact with a website. 
         They are used to gather information from users, such as text, numbers, selections, and more, which can then be submitted 
         to a server for processing. Forms are a fundamental way to create interactive and 
         dynamic web applications, such as login pages, search bars, registration forms,
          and feedback surveys.
         <br />
         <br />
         <h1 className="form-post-title">The Key Components and Concepts Associated with HTML Forms:</h1>
          <p className="form-list">
           <strong className="form-list-title" > Form Element Form: </strong> 
          <br /> 
          The form element is used to define an HTML form. It encapsulates all the form controls and input
          HTML forms are defined using the form element. This element acts as a container for various form controls
          and defines the structure of the form. The <strong> action </strong> specifies where the form data 
          will be sent. The <strong> method </strong> specifiesthe HTTP method to be used, usually "GET" or "POST". </p>
        <br />
        <br />


        <h1 className="form-label-title"> Form Label: </h1>
         <div className="form-label"> 
         Labels: are used to provide a description for form controls. 
         They improve accessibility and user experience by associating
         a label with its corresponding control.
        </div>

        <h1 className="form-control-title"> Form Controls: </h1>
         <div className="form-controls"> 
         Form controls are the elements within a form that allow users to input data or make selections. Common form controls include:
       <ul> 
        <li> Input - for text input, checkboxes, radio buttons, etc. </li>
        <li> Textarea - for multiline text input.</li>
        <li> Select -  for dropdown menus.</li>
        <li> Button - for buttons to trigger actions. </li>
        </ul>
        </div>

        <h1 className="form-submission-title"> Form Submission: </h1>
         <div className="form-submission"> 
         When a user submits a form, the data entered into 
         the form controls is sent to the server specified in the action
          attribute of the form element. The HTTP method specified in the
           method attribute determines how the data is sent either in the URL 
           for "GET" or in the request body for "POST".
        </div>


        <h1 className="form-validation-title"> Form Validation: </h1>
         <div className="form-validation">
         Forms can include client-side validation using HTML5 attributes 
         like <strong> required </strong>, pattern, and JavaScript to ensure that user input meets
          certain criteria. Server-side validation is also essential to validate
           data on the server and enhance security.
        </div>
        </p>

        <h1 className="placeholder-title"> PlaceHolder Attribute: </h1>
         <p className="placeholder">
         Refers to a text or visual cue that is temporarily displayed within
          an input field or textarea to provide an example or hint to the 
          user about the type of information expected in that field. 
          Placeholders are typically used to improve the user experience 
          by providing context or instructions, but they are not actual 
          input values and are usually replaced when the user starts typing.
        </p>

          <div className="forms-img">
            <img src={forms} alt="" className="form-img"/>
          </div>
          <div className="m-forms-img">
            <img src={mforms} alt="" className="form-img"/>
          </div>  
        </div>
    </div>
  )
}

export default Forms;