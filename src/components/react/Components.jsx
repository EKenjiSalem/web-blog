import React from 'react';
import './react.css';
import reactfunccomp from '../../images/component-function.png';
import mreactfunccomp from '../../images/rsz_component-function.png';
import reactfuncdynam from '../../images/component-dynamic.png';
import mreactfuncdynam from '../../images/rsz_component-dynamic.png';
import reactclassfunc from '../../images/class-component.png';
import mreactclassfunc from '../../images/rsz_class-component.png';
import resusecomp from '../../images/rsz_reusecomp.png';
import mresusecomp from '../../images/m_reusecomp.png';



const Components = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Components </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
         <p className="components-main"> 
          In React, components are the building blocks of a user interface. They are reusable 
          and self-contained pieces of code that represent a part of the user interface. Components
          are the core concept in React and are used to create UI elements, manage the state of those 
          elements, and define the behavior and structure of the application.
<br />
<br />
        <h1 className="type-title"> There are two main types of components in React: </h1>
<br />
<br />
       <h1 className="function-components-title"> Function Components: </h1> Functional components 
        are a way to define and encapsulate user interface elements in a more concise and modular manner.
        <strong> Function components are highly encouraged in modern React development due to the introduction
        of hooks, which allow you to manage state and side effects in functional components. </strong>
        <div className="func-components-img">
         <img src={reactfunccomp} />
        </div>
        <div className="m-func-components-img">
         <img src={mreactfunccomp} />
        </div>
<br />
       <strong>  Using a function component to display a fixed greeting </strong>
        <div className="reactfuncdynam-img">
         <img src={reactfuncdynam} />
        </div>
        <div className="m-reactfuncdynam-img">
         <img src={mreactfuncdynam} />
        </div>
<br />
<br />
       <h1 className="class-components-title"> Class Components: </h1> 
       These components are defined as JavaScript classes that extend React.Component.
       They offer more features, including the ability to manage internal state, lifecycle
       methods (such as componentDidMount and componentDidUpdate), and more complex logic.
<br />
<br />  
       Class components also provide a set of lifecycle methods that allow you to perform actions
       at different points in a component's lifecycle, such as when it's created, updated, or 
       unmounted. These methods can be used for tasks like data fetching, setting up timers, or
       cleaning up resources.
        <div className="classcomponent-img">
          <img src={reactclassfunc } />
        </div>
        <div className="m-classcomponent-img">
          <img src={mreactclassfunc } />
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
        <div className="reusecomp-img">
          <img src={resusecomp} />
         </div>
         <div className="m-reusecomp-img">
          <img src={mresusecomp} />
         </div>
<br />
<br /> 
            </p>
        </div>
    </div>
  )
}

export default Components;