import React from 'react';
import './react.css';
import jsxbasic from '../../images/jsx-basic.png';
import embedded from '../../images/embedexpress.png';
import jsandjsx from '../../images/jsandjsx.png';
import jsxattr from '../../images/Jsxattr.png';



const Syntax = () => {

  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> JSX </h1>
         <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div>
     
         <p className="react-main"> 
          <h1 className="jsx-title"> What is JSX? </h1>
         JSX stands for "JavaScript XML." It is a syntax extension for JavaScript often used
         with React, a popular JavaScript library for building user interfaces. JSX allows
         developers to write HTML-like code within their JavaScript files, making it easier 
         to create and manipulate the structure of user interfaces in web applications.
  <br />
  <br />

        <strong> Basic JSX Element: </strong>
        We've defined a JSX element that represents an h1 heading with the
        text "Hello, JSX!".
         <div className="jsx-img">
          <img src={jsxbasic} />
         </div>
         <div className="m-jsx-img">
          <img src={jsxbasic} />
         </div>
  

<br />
<br />

        <strong> Embedding Expressions: </strong>
        You can embed JavaScript expressions within JSX using curly braces {}. 
<br />
<br />
        In this case, the value of the name variable is dynamically inserted into the JSX 
        element, resulting in "Hello, John!".
        
         <div className="jsx-img">
          <img src={embedded} />
         </div>
<br />
<br />
        <strong> JSX and JavaScript: </strong>
        JSX is not a separate language; it's an extension of JavaScript. You can use JavaScript
        expressions and logic within JSX elements. Here's an example of rendering a list of items 
        using JSX and JavaScript:
        
<br />
<br />
        In this example, we use the .map method to create a list of li elements from an array
        of items. We also include a key attribute for each li to help React efficiently update
        the DOM.
        
         <div className="jsx-img">
          <img src={jsandjsx} />
         </div>
<br />
<br />

          <strong> JSX Attributes and Components: </strong>
          In JSX, you can specify HTML attributes just like in regular HTML. Additionally,
          you can create and use React components to encapsulate and reuse parts of your UI.
<br />
<br />
          In this code, we define a Welcome component that takes a name prop. We then use this 
          component within the App component to render personalized greetings.
<br />
<br />
    

        <div className="jsx-img">
          <img src={jsxattr} />
         </div>




            </p>

        </div>
      </div>
  )
}

export default Syntax;