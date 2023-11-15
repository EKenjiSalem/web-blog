import React from 'react';
import './react.css';
import stateintro from "../../images/stateintro.png";
import mstateintro from "../../images/rsz_stateintro.png";
import stateupdate from "../../images/stateupdate.png"
import mstateupdate from "../../images/rsz_stateupdate.png"
import prevstate from "../../images/rsz_prevstate.png";
import mprevstate from "../../images/m_prevstate.png";
import noliftex from "../../images/rsz_nolift.png";
import mnoliftex from "../../images/m_nolift.png";
import stateliftex from "../../images/rsz_exstatelift.png";
import mstateliftex from "../../images/m_exstatelift.png";



const State = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> State </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
         <p className="react-state-main"> 
         State is a fundamental concept in react that allows you to create dynamic and 
         interactive user interfaces. State" refers to an object that holds data that
         influences a component's behavior and rendering. State is used to store and manage 
         information that can change over time, such as user input, data fetched from an 
         API, or the results of user interactions.

         <div className="">
          <ul>
            <h1 className="keypoints-react-title"> Key State Features: </h1> 

            <li className="state-list"><strong> Component-Specific: </strong> State is specific to a particular component.
             Each component can have its own state, and it's isolated from other components. 
             This makes it easier to manage and reason about the data that a component
              depends on. </li> 

            <li className="state-list"><strong> Mutable: </strong> Unlike props, which are read-only and passed from parent to
             child, state can be changed within a component. React components can re-render
              when their state changes, allowing the user interface to update dynamically.</li>

               <li className="state-list"><strong> Initialization: </strong> You typically initialize state in a class component's 
               constructor or, in functional components, using the useState hook. For 
               example, in a functional component: </li>

               <li className="state-list"><strong> Dynamic Updates: </strong> State enables components 
               to be dynamic by allowing them to update and re-render based on changes to the data.
                When the state changes, React efficiently re-renders the component to reflect the 
                updated state in the UI. </li>

                <li className="state-list"><strong> useState Hook: </strong> In function components, 
                the useState hook is used to declare state variables and their initial values. It 
                returns an array with the current state value and a function to update that state.</li>

                  <li className="state-list"><strong> Controlled Components: </strong> In forms and user 
                   input scenarios, state is often used to create controlled components. The component's
                    state controls the input fields, and updates to the input trigger changes to the state,
                    creating a two-way binding. </li>

                <li className="state-list"><strong> Asynchronous State Updates: </strong> State updates 
                using setState can be asynchronous. React may batch multiple setState calls for performance
                 reasons. To perform actions based on the updated state, you can use the optional callback
                  function provided by setState. </li>
              
                  <li className="state-list"><strong> Conditional Rendering:</strong> State is often used 
                  for conditional rendering. Components can render different content based on the current
                   state values, allowing you to create dynamic user interfaces. </li>

                   <li className="state-list"><strong> Event Handling: </strong> State is frequently used 
                   in conjunction with event handlers. User interactions, such as button clicks or form 
                   submissions, can trigger changes to the state, leading to updates in the UI.. </li>
           </ul>
          </div>  
<br />
<br />
          <h1 className="state-intro-title"> Creating State: </h1>
              In this example, count is the state variable, setCount is the function used
               to update its value, 0 is the initial state value.
               <div className="createstate-img">
                 <img src={stateintro} />
              </div>
              <div className="m-createstate-img">
                 <img src={mstateintro} />
              </div>
<br />
            <strong> Updating State: </strong> You should not directly modify state; 
            instead, you use the state updater function - setCount - in the example.
            React will then re-render the component to reflect th updated state.
            <div className="updatestate-img">
              <img src={stateupdate} />
            </div>
            <div className="m-updatestate-img">
              <img src={mstateupdate} />
            </div>
<br />
         <strong> Asynchronous Updates: </strong>

         State updates in React are asynchronous. If you need to perform an action after a 
         state update, you should use the callback form of the state updater or useEffect
          hooks.
<br />
<br />
         When updating state using functions like setState in class components 
         or the state updater function provided by the useState hook in functional components,
        it's a good practice to use the previous state, often referred to as prevState or prev
         state. This allows you to safely update state based on its previous value, ensuring
          that you're working with the most up-to-date state.
<br />
<br />
          The use of prevState is important because state updates in React are asynchronous
           and can be batched by React for performance reasons. This means that when you call 
           setState or the state updater function, it doesn't guarantee an immediate state 
           update. React may merge multiple state updates into a single update or delay them.
<br />
<br />
         <strong> Here's how you typically use prevState: </strong>
          <div className="prevstate-img">
              <img src={prevstate} />
            </div>
            <div className="m-prevstate-img">
              <img src={mprevstate} />
            </div>
<br />
<br />
          <hr />
            <h1 className="lift-state-title"> Lifting Up State </h1>
          <hr />

          <div className="liftstate-main">
          "Lifting state up" is a common pattern in React used to manage and share state 
          between components, especially when you have a hierarchy of components that need
          access to the same data. It involves moving the state from a lower-level child 
          component to a higher-level parent component, thus making the state available to
           multiple child components.
          </div>
<br />
         <strong> The main reasons for "lifting state up" are: </strong> 
          <ul> 
            <li className="state-list" > <strong> Sharing State: </strong> 
            When multiple components need access to the
            same piece of state data, you can avoid prop drilling (passing the state through
            multiple levels of components) by moving the state to a common ancestor. This 
            reduces the complexity of passing props down the component tree.  </li> 

            <li className="state-list"> <strong> Simplifying Components: </strong>
            By moving state up, child components become more focused and less dependent on 
            specific data. This separation of concerns can make your code more maintainable
            and easier to reason about.</li> 
          </ul>
<br />
              In this example, you can have components with their own local 
              state without the need to lift state up to a common ancestor.
             <div className="liftstate-img">
               <img src={noliftex} />
            </div>
            <div className="m-liftstate-img">
               <img src={mnoliftex} />
            </div>
<br />
              In this example of lifting state up, the count state is managed in the 
              higher-level ParentComponent, and its state and state updater are shared 
              with multiple child components that need access to the same data.
             <div className="statelift-img">
               <img src={stateliftex} />
            </div>
            <div className="m-statelift-img">
               <img src={mstateliftex} />
            </div>
<br />
<br />
            </p>

        </div>
    </div>
  )
}

export default State;