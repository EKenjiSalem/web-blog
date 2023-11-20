import React from 'react';
import './react.css';
import reactternary from "../../images/react-ternary.png";
import mreactternary from "../../images/rsz_react-ternary.png";
import nullish from "../../images/nullish.png";
import mnullish from "../../images/rsz_nullish.png";
import externary from "../../images/externary.png";
import mexternary from "../../images/rsz_externary.png";
import logical from "../../images/react-logical.png";
import mlogical from "../../images/rsz_react-logical.png";
import reactspread from "../../images/reactspreadoperator.png";
import mreactspread from "../../images/rsz_reactspreadoperator.png";
import destruct from "../../images/destruct.png";
import mdestruct from "../../images/rsz_destruct.png";
import mapfunc from "../../images/reactmapfunc.png";
import mmapfunc from "../../images/rsz_reactmapfunc.png";



const Operators = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> React Operators </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
         <p className="react-main"> 
          <div className="react-operators">
           In the context of React, "operators" typically refer to JavaScript operators that
           are commonly used when working with React components and their state or props.
            React itself doesn't introduce any special operators; react primarily relies on 
            JavaScript for handling operations. This is why knowledge of javascript is crucial
            for working with react.  By mastering them, you can efficiently manage your React
            components, manipulate data, and create dynamic user interfaces.
          </div>
<br />
          <h1 className="operators-title"> Common JavaScript Operators Used In React: </h1>
          <h1 className="ternary-react-title"> Conditional (Ternary) Operator: </h1> You can use the conditional (ternary) operator to
          render different content based on a condition within your JSX.

            <div className="reactternary-img">
              <img src={reactternary} />
             </div>
             <div className="m-reactternary-img">
              <img src={mreactternary} />
             </div>
<br />
           In this code, the UserProfile component will be displayed if isLoggedIn is true, otherwise,
          the LoginButton component will be rendered.
          <div className="externary-img">
              <img src={externary} />
             </div>
             <div className="m-externary-img">
              <img src={mexternary} />
             </div>
<br />
         <h1 className="nullish-react-title"> Nullish Coalescing Operator (??): </h1>  This operator is useful for providing default 
          values when working with potentially null or undefined values.
<br />
<br />
          In this example, username will be set to "Guest" if user.name is null or undefined.
            <div className="nullish-img">
              <img src={nullish} />
             </div>
             <div className="m-nullish-img">
              <img src={mnullish} />
             </div>
<br />
         <h1 className="logical-react-title"> Logical Operators (&& and ||): </h1> You can use logical operators to conditionally
          render or execute code in JSX.
<br />
          The AdminPanel component will only be displayed if isAdmin is true, and the
          OfflineMessage will be shown if isOnline is false.
            <div className="reactlogical-img">
              <img src={logical} />
             </div>
             <div className="m-reactlogical-img">
              <img src={mlogical} />
             </div>
<br />
         <h1 className="spread-react-title"> Spread Operator (...):  </h1> is commonly used for spreading props or 
          state to child components, or when updating object properties in the state.
<br />
<br />
          In this code, the ChildComponent receives the name and age props as if they were
          passed explicitly. The spread operator is also useful when updating state:
            <div className="reactspread-img">
              <img src={reactspread} />
             </div>
             <div className="m-reactspread-img">
              <img src={mreactspread} />
             </div>

<br />
           <h1 className="destructure-react-title"> Destructuring Assignment:  </h1> You can destructure props or state
            to access specific values. 
       
<br />
<br />
            This code extracts the name and age properties from this.props, making them easily accessible within the component.
            <div className="destruct-img">
              <img src={destruct} />
             </div>
             <div className="m-destruct-img">
              <img src={mdestruct} />
             </div>
<br />
           <h1 className="map-react-title"> Map Function:  </h1> The map function is a staple when working with arrays in React.
            Map allows you to iterate through an array and create lists of components. 
<br />
<br />
            Here, the map function generates a list of ListItem components based on the 
            items array.
            <div className="mapfunc-img">
              <img src={mapfunc} />
             </div>
             <div className="m-mapfunc-img">
              <img src={mmapfunc} />
             </div>
<br />
<br />

            </p>

        </div>
    </div>
  )
}

export default Operators;