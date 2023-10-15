import React from 'react';
import './react.css';
import reactfunccomp from '../../images/component-function.png';
import reactfuncdynam from '../../images/component-dynamic.png';
import reactclassfunc from '../../images/class-component.png';
import resusecomp from '../../images/rsz_reusecomp.png';



const Components = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Components </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>
     
         <p className="react-main"> 
          <h1 className="component-title"> What are Components? </h1>
          In React, components are the building blocks of a user interface. They are reusable 
          and self-contained pieces of code that represent a part of the user interface. Components
          are the core concept in React and are used to create UI elements, manage the state of those 
          elements, and define the behavior and structure of the application.
<br />
<br />
        <strong className="type-title"> There are two main types of components in React: </strong>
<br />
<br />
       <strong> Function Components: </strong> These are stateless, functional components that are defined as 
        JavaScript functions. They are mainly used for simpler UI elements and don't have their
         own internal state or lifecycle methods. <strong> Function components are highly encouraged in 
         modern React development due to the introduction of hooks, which allow you to manage 
         state and side effects in functional components. </strong>
            <div className="jsx-img">
              <img src={reactfunccomp} />
            </div>

<br />

       <strong>  Using a function component to display a fixed greeting </strong>
        <div className="jsx-img">
              <img src={reactfuncdynam} />
            </div>



<br />
<br /> 
       <strong> Class Components: </strong> These components are defined as JavaScript classes 
       that extend React.Component. They offer more features, including the ability to manage 
       internal state, lifecycle methods (such as componentDidMount and componentDidUpdate), 
       and more complex logic.
<br />
<br />  
       Class components also provide a set of lifecycle methods that allow you to perform actions
       at different points in a component's lifecycle, such as when it's created, updated, or 
       unmounted. These methods can be used for tasks like data fetching, setting up timers, or
       cleaning up resources.
       <div className="jsx-img">
          <img src={reactclassfunc } />
         </div>


<br />
<br />  

        <h1 className="resuse-title"> Reusability and Composition </h1>
        React components are designed to be reusable. This means you can define a component 
        once and use it in multiple places within your application. For example, you could 
        create a Header component and use it on various pages of your website.
<br />
<br /> 
        This reusability makes your code more maintainable and reduces duplication.
<br />
<br /> 
        Additionally, components can be composed by nesting them within one another. This allows 
        you to build complex UI structures from simpler, smaller components. This concept of 
        composition is one of the key advantages of React.

<br />
<br /> 

        In this example, the ReusableComponent is a functional component that doesn't 
        accept any props. It's a self-contained component that can be used as is, and it 
        displays a consistent message and structure each time it's used.
        <div className="jsx-img">
          <img src={resusecomp} />
         </div>

  









            </p>

        </div>
    </div>
  )
}

export default Components;