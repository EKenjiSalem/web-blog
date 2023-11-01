import React from 'react';
import './react.css';
import stateintro from "../../images/stateintro.png";
import stateupdate from "../../images/stateupdate.png"
import prevstate from "../../images/rsz_prevstate.png";
import noliftex from "../../images/rsz_nolift.png";
import stateliftex from "../../images/rsz_exstatelift.png";



const State = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> React State </h1>
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
            <h1 className="keypoints-react-title"> Here are some key points about state in React: </h1> 

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
           </ul>
          </div>
          
<br />
<br />
          <h1 className="state-intro-title"> Creating State: </h1>
              In this example, count is the state variable, setCount is the function used
               to update its value, 0 is the initial state value.
               <div className="props-img">
                 <img src={stateintro} />
              </div>
<br />
            <strong> Updating State: </strong> You should not directly modify state; 
            instead, you use the state updater function - setCount - in the example.
            React will then re-render the component to reflect th updated state.
            <div className="props-img">
              <img src={stateupdate} />
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
          <div className="props-img">
              <img src={prevstate} />
            </div>
<br />
<br />
          <hr />
            <h1 className="lift-state-title"> Lifting Up State </h1>
          <hr />


          "Lifting state up" is a common pattern in React used to manage and share state 
          between components, especially when you have a hierarchy of components that need
          access to the same data. It involves moving the state from a lower-level child 
          component to a higher-level parent component, thus making the state available to
           multiple child components.
<br />
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
             <div className="props-img">
               <img src={noliftex} />
            </div>
<br />
              In this example of lifting state up, the count state is managed in the 
              higher-level ParentComponent, and its state and state updater are shared 
              with multiple child components that need access to the same data.
             <div className="props-img">
               <img src={stateliftex} />
            </div>
<br />
<br />
            </p>

        </div>
    </div>
  )
}

export default State;