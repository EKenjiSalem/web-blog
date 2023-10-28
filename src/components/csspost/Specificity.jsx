import React from 'react';
import './csspost.css';


const Specificity = () => {
  return (
    <div className="css-post">
        <div className="css-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="css-post-title"> Specificity </h1>
         {/* <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div> */}

          <p className="specific-main"> 
          Specificity in CSS is a mechanism used to determine which styles are applied to an HTML
           element when there are conflicting or competing CSS rules. It defines the rules that 
           dictate which style takes precedence over others, helping to resolve conflicts and maintain 
           a structured approach to styling web pages.
<br />
<br />

            <h1 className="specificity-title"> How Specificity Is Calculated: </h1> 
            Specificity is calculated based on the combination of selectors used to target an element.
            Each selector has a specific weight, and the sum of these weights determines the specificity 
            of a rule. Here's a breakdown of selector specificity, from least specific to most specific:
<br />
<br />
            <strong> Inline styles: </strong> are the most specific because they are directly applied to an individual element.
            They have the highest weight.
<br />
<br />
            <strong> ID selectors: </strong> have a higher weight than class selectors, making them more specific.
<br />
<br />
            <strong> Class selector: </strong> are more specific than type selectors. They have a higher weight.
<br />
<br />
            <strong> Type selectors: </strong> these selectors are the least specific and have the lowest
            weight.
<br />
<br />
            <strong> !important: </strong> adding !important to a CSS rule gives it the highest specificity and overrides 
            all other conflicting styles.
<br />
<br />
            When multiple styles target the same element, CSS calculates their specificity and determines 
            which one to apply. In most cases, the style with the highest specificity wins. If two rules
            have the same specificity, the one that appears last in the CSS file will be applied.
<br />
<br />
          {/* <div className="ul-img">
            <img src={ul} alt="" />
          </div>
          <div className="m-ul-img">
            <img src={ul} alt="" />
          </div>  
        */}
            </p>
        </div>
    
    </div>
  )
}

export default Specificity;