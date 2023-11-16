import React from 'react';
import './react.css';
import statehook from "../../images/statehook.png";
import mstatehook from "../../images/rsz_statehook.png";
import useeffecthook from "../../images/useeffecthook.png";
import museeffecthook from "../../images/rsz_useeffecthook.png";
import contexthook from "../../images/contexthook.png";
import mcontexthook from "../../images/rsz_contexthook.png";
import reducerhook from "../../images/reducerhook.png";
import mreducerhook from "../../images/rsz_reducerhook.png";
import refhook from "../../images/refhook.png";
import mrefhook from "../../images/rsz_refhook.png";
import hookcustom from "../../images/customhook.png";
import mhookcustom from "../../images/m_customhook.png";


const Hooks = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> Hooks </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
         <p className="react-main"> 
          <div className="hooks-info">
          React hooks are functions that allow you to "hook into" React state and lifecycle
           features from functional components. They were introduced in React 16.8 as a way 
           to use state and other React features in functional components, which were
            previously only possible in class components. React hooks provide a more concise
             and readable way to work with state, side-effects, and context in functional 
             components, making them a powerful addition to the React ecosystem.
             </div>
<br />
<br />

         <strong> Commonly Used React hooks: </strong> 
<br />
<br />
          <strong> useState:  </strong> useState allows you to add state to your functional components. It takes
           an initial state value and returns an array containing the current state and a 
           function to update that state.
           <div className="statehook-img">
            <img src={statehook} />
          </div>
          <div className="m-statehook-img">
            <img src={mstatehook} />
          </div>
<br />
          <strong> useEffect:  </strong> The useEffect hook in React is used to manage side
           effects in functional components. Side effects can include tasks like data 
           fetching, DOM manipulation, subscriptions, and more. The useEffect hook allows
            you to perform these tasks in a controlled and consistent way, similar to how
            lifecycle methods worked in class components.
             <div className="useEffecthook-img">
              <img src={useeffecthook} />
             </div>
             <div className="m-useEffecthook-img">
              <img src={museeffecthook} />
             </div>
<br />
          <strong> useContext: </strong> useContext is used to access and subscribe to a
           context's value within a component.
             <div className="context-img">
              <img src={contexthook} />
             </div>
             <div className="m-context-img">
              <img src={mcontexthook} />
             </div>
<br />
            <strong> useReducer: </strong> useReducer is a hook for managing more complex
             state logic. It is often used when state updates depend on the previous state 
             and when state transitions involve complex logic.
             <div className="useReducer-img">
              <img src={reducerhook} />
             </div>
             <div className="m-useReducer-img">
              <img src={mreducerhook} />
             </div>
<br />
            <strong> useRef: </strong> useRef allows you to create mutable ref objects that
             can be used to store and access mutable values, such as references to DOM 
             elements.  
             <div className="useRef-img">
              <img src={refhook} />
             </div>
             <div className="m-useRef-img">
              <img src={mrefhook} />
             </div>
<br />
            <strong> Custom Hooks:  </strong> You can create your own custom hooks to 
            encapsulate and reuse logic across multiple components. Custom hooks are 
            a way to abstract complex state management and side-effect logic into reusable 
            functions.
             <div className="hookcustom-img">
              <img src={hookcustom} />
             </div>
             <div className="m-hookcustom-img">
              <img src={mhookcustom} />
             </div>
<br />
<br />


            </p>

        </div>
    </div>
  )
}

export default Hooks;