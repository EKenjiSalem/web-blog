import React from 'react';
import './react.css';



const ReactIntro = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> React Intro </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>
     
         <p className="react-main"> 
        <h1 className="react-intro-title"> What is React? </h1>
         React.js is an open-source JavaScript library that simplifies the process of building user
        interfaces for web applications. It follows a component-based architecture, allowing developers 
        to create encapsulated, reusable UI components. These components can range from simple buttons
         and forms to complex interactive elements like carousels and data tables.

        <h1 className="react-key-title"> Key Concepts: </h1>
        Theses react concepts are more abstract knowledge that is good to know, yet are more 
        are under the hood concepts that won't require that you for them to work.
        <ul className="key-list-container"> 
          <li className="key-list"> 
            <strong> Component-Based Architecture: </strong>
            React's component-based architecture promotes the reusability and modularity of code.
             Developers can create independent components, which makes it easier to manage and 
             maintain large codebases.</li> 
             <li className="key-list"> 
            <strong> Virtual DOM: </strong>
            React introduces a virtual representation of the Document Object Model (DOM), known
             as the Virtual DOM. When a change occurs in the application, React updates the 
             Virtual DOM first, optimizing performance by minimizing unnecessary manipulations 
             of the actual DOM. This approach significantly improves rendering speed and overall 
             user experience.</li> 
             <li className="key-list"> 
            <strong> Declarative Syntax: </strong>
            React's declarative syntax allows developers to express how the UI should look at 
            any given time. You describe the desired UI state, and React takes care of updating
            the DOM to match that state. This results in more predictable code and simplified
             debugging.</li> 
             <li className="key-list"> 
            <strong> Unidirectional Data Flow: </strong>
            React enforces a one-way data flow, making it clear how data moves through the 
            application. This predictability simplifies debugging and ensures that changes 
            in the application's state are efficiently propagated to the UI.
            </li> 
            <li className="key-list"> 
            <strong> React Router: </strong>
            For building single-page applications with multiple views and dynamic URLs, React 
            Router is a popular choice. It enables client-side routing, ensuring smooth navigation
            between different parts of your application without requiring full-page reloads. Essentially,
            instead of using a href/anchor tags to connect pages, react uses router to connect components.
            </li> 
            <li className="key-list"> 
            <strong> Reconciliation: </strong>
            React efficiently updates the user interface by comparing the new Virtual DOM with 
            the previous one and applying the minimal set of changes required. This process 
            is known as reconciliation and is at the heart of React's performance optimization.
            </li> 
            <li className="key-list"> 
            <strong> Optimizations:  </strong>
            Understanding performance optimizations like shouldComponentUpdate (for class-based
            components) and React.memo (for functional components) is crucial to prevent
            unnecessary re-renders and improve the performance of your application.
            </li> 
        </ul>

        <h1 className="react-feature-title"> Key Features: </h1>
        These features are fundamental to building efficient and maintainable applications with React:
        <ul className="feature-container"> 
         <li className="feature-list"> 
            <strong> Components: </strong>
            Components are the building blocks of a React application. They can be thought of
            as self-contained, reusable UI elements. Components can be functional (stateless) 
            or class-based (stateful). Understanding how to create and manage components is 
            crucial.
            </li> 
            <li className="feature-list">
            <strong> JSX: </strong>
             React allows developers to write UI components using JSX, a syntax extension for
             JavaScript. JSX looks similar to HTML but allows developers to embed JavaScript 
             expressions within it, making it simple to create component templates.</li> 
            <li className="feature-list"> 
            <strong> Props (Properties):  </strong>
            Props are the inputs to a React component. They are used to pass data from a parent 
            component to a child component. Props are read-only, and they help make components 
            reusable and customizable.
            </li>  
            <li className="feature-list">
            <strong> State:  </strong>
            React components can have local state, which allows them to store and manage data
            that can change over time. State management is essential for building dynamic and 
            interactive user interfaces.
            </li> 
            <li className="feature-list"> 
            <strong> Context API:</strong>
            React's Context API allows you to manage global state that can be accessed by
            multiple components without having to pass data through props at every level of
            the component tree. It's useful for managing application-level state.
            </li> 
            <li className="feature-list"> 
            <strong> Hooks: </strong>
            React Hooks are functions that allow you to "hook into" React state and lifecycle 
            features in functional components. They were introduced in React 16.8 to provide
            state and other React features to functional components, which were previously only 
            available in class components. Hooks offer a more concise and readable way to manage
            state, perform side effects, and work with React's lifecycle in functional components.
            </li> 
            <li className="feature-list"> 
            <strong> Conditional Rendering: </strong>
            React allows you to conditionally render components or elements based on certain 
            conditions or user interactions. This is essential for creating dynamic user
            interfaces.
            </li> 
            <li className="feature-list"> 
            <strong> Event Handling: </strong>
            React applications involve handling user interactions, such as clicks and input 
            changes. Understanding how to use event handlers and manage component state in 
            response to these events is crucial.
            </li> 
        </ul>
            </p>
<br />
<br />
        </div>
    </div>
  )
}

export default ReactIntro;