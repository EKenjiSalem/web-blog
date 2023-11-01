import React from 'react';
import './react.css';
import propsintro from "../../images/rsz_1props-intro.png"
import funcprops from "../../images/rsz_funcprops.png"



const Props = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Props </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
         <p className="props-main"> 
         In React, "props" is short for "properties," and they are a fundamental concept for
         passing data from one component to another. Props are a way to make your React components
         dynamic and reusable.
<br />

            <h1 className="props-concepts-title"> Key Concepts: </h1>
             <ul> 
              <li className="props-list"> <strong> Props are Read-Only: </strong> It's essential to understand
               that props are read-only. Child components cannot modify the data they 
               receive through props. This helps maintain data integrity and predictability
              in your application.</li> 
              <li className="props-list">  <strong> Dynamic and Reusable Components: </strong> Props make your
              components dynamic and reusable. You can use the same component structure
               with different data, allowing you to create versatile UI components.</li>
              <li className="props-list"> <strong> Customization and Configuration: </strong>  You can use 
              props to customize and configure components. For instance, you can pass
              different styles, behavior, or content to a component through props,
              making it highly adaptable. </li>
              <li className="props-list"> <strong> Unidirectional Flow:</strong> You can use props to customize
              and configure components. For instance, you can pass different styles,behavior, 
              or content to a component through props, making it highly adaptable.
              </li>
             </ul>
<br />
          <h1 className="props-title"> How to Use Props: </h1>

         <strong> Define a Parent Component: </strong> Create a parent component that needs to
          pass data to a child component.
<br />
<br />
          <strong> Pass Data: </strong> Within the parent component, pass the data you want
           to share with the child component as a prop. This is done by adding an attribute 
           to the child component element, where the attribute name represents the prop name
           and the value is the data you want to pass.
<br />
<br />
             In this example, ParentComponent passes the message as a prop to ChildComponent,
             and ChildComponent displays that message. Props allow you to create reusable and 
             configurable components by passing different data to the same component structure.
           <div className="props-img">
            <img src={propsintro} />
           </div>
<br />
<br />
          <h1 class="propfunc-title"> Functions as Props: </h1>

          You can pass functions as props from a parent component to a child 
          component. This allows you to enable communication between the two 
          components or trigger actions in the parent component based on events 
          in the child component. Here's an example of how to pass a function as 
          a prop:
<br />
<br />
          In this example, in the parent component, we'll define a function and pass it as
          a prop to the child component. In the child component, you can access and use
          the function passed as a prop. In this case, we'll use it as an onClick handler
          for a button element. We'll also create a button in the child component that when
          clicked, calls a function defined in the parent component.
          <div className="props-img">
            <img src={funcprops} />
          </div>
<br />
<br />
            </p>
        </div>
    </div>
  )
}

export default Props;