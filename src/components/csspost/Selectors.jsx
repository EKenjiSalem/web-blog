import React from 'react';
import './csspost.css';
import inlineselector from "../../images/rsz_inlineselector.png";
import minlineselector from "../../images/rsz_1inlineselector.png";
import externallink from "../../images/rsz_exlink.png";
import mexternallink from "../../images/rsz_1exlink.png";
import embedblock from "../../images/rsz_2embed.png";
import membedblock from "../../images/rsz_12embed.png";
import selectorclass from "../../images/rsz_7class.png";
import mselectorclass from "../../images/rsz_1class.png";
import idselector from "../../images/rsz_1idselector.png";
import midselector from "../../images/rsz_21idselector.png";
import descenselector from "../../images/rsz_descen.png";
import mdescenselector from "../../images/rsz_1descen.png";
import childselector from "../../images/child.png";
import mchildselector from "../../images/rsz_12child.png";
import attrselector from "../../images/rsz_1attrselect.png";
import mattrselector from "../../images/rsz_attrselect.png";
import hoverpseduo from "../../images/hover.png";
import mhoverpseduo from "../../images/rsz_hover.png";
import focuselector from "../../images/focus.png";
import mfocuselector from "../../images/rsz_focus.png";
import nthselector from "../../images/nth.png";
import mnthselector from "../../images/rsz_nth.png";
import flchildselector from "../../images/flchild.png";
import mflchildselector from "../../images/rsz_flchild.png";


const Selectors = () => {
  return (
    <div className="css-post">
        <div className="css-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="css-post-title"> Selectors </h1>
         {/* <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div> */}

         <p className="selectors-main"> 
          A CSS selector is a pattern that specifies which HTML elements to
          style. Selectors tell the browser which elements to apply a particular set of CSS rules 
          to. CSS selectors can be based on elements' names, IDs, classes, attributes, and 
          their relationships within the HTML document.
<br />
<br />
          The first thing that must be done is to connect css to html. There are three 
          primary ways to complete this task: <br /> <strong> Inline, Embedded, and External Linking </strong>
<br />
<br />
          <strong> Note: Inline and Embedded style block are both internal ways to connect css </strong>
          </p>

        <h1 className="external-title"> External Linking CSS: </h1>
        <p className="external-main">
        This is the most common and recommended method for linking CSS to HTML. In this
        approach, you create a index.html and styles.css files. then link the styles.css file
        to your index.html file/document using the link element.
        </p>


         <div className="eselector-img">
            <img src={externallink} alt="" />
          </div>

          <div className="eselector1-img">
            <img src={mexternallink} alt="" />
          </div>  

        <h1 className="inline-title"> Inline CSS: </h1>
        <p className="inline-main"> 
        Inline CSS is applied directly to individual HTML elements using the style attribute.
        While this approach is straightforward, it's not recommended for large-scale projects
        due to its lack of reusability.
<br />
<br /> 
        You can also apply CSS styles directly to individual HTML elements using the style
        attribute. This is not recommended for general use because it mixes content with 
        presentation and can make your HTML harder to read and maintain.
       </p>

        <div className="inline-img">
            <img src={inlineselector} alt="" />
          </div>

          <div className="m-inline-img">
            <img src={minlineselector} alt="" />
          </div>   

        <h1 className="embedded-title"> Embedded Style Block: </h1>
        <p className="embedded-main"> 
        An embedded style block refers to CSS styles that are placed directly within an 
        HTML document, typically within the style element in the head section of the 
        HTML. These styles are specific to that HTML document and are not external 
        stylesheets.
        </p>

  <br />
  <br /> 

         <div className="embedded-img">
            <img src={embedblock} alt="" />
          </div>

          <div className="m-embedded-img">
            <img src={membedblock} alt="" />
          </div>   



        <hr className="selector-line" />
         <h1 className="selector-type-title"> Selectors Type </h1>
        <hr className="selector-line"  />

        <h1 className="element-title"> Element Selector: </h1> 
        <p className="element-selector-main"> 
        The simplest selector targets all instances of a specific HTML element/tag type.
        This targets the h1 and body tags, and applies color and background.
        Note: This example is the same as the embedded style block example.
        </p>

        <div className="element-img">
            <img src={embedblock} alt="" />
          </div>

          <div className="m-element-img">
            <img src={membedblock} alt="" />
          </div>   


          <h1 className="class-selector-title"> Class Selector: </h1>
        <p className="class-selector-main"> 
        Class selectors are used to target and style HTML elements that share a common class attribute. Use a . with the tag to target.
        Class selectors can be applied to multiple elements, allowing you
        to style them consistently.
        </p>
        <div className="class-selector-img">
            <img src={selectorclass} alt="" />
          </div>

          <div className="m-class-selector-img">
            <img src={mselectorclass} alt="" />
          </div>  


        <h1 className="id-selector-title"> ID Selector: </h1>
        <p className="id-selector-main"> 
        ID selectors are used to target and style a specific
        HTML element with a unique identifier ID. They are written 
        using the # symbol followed by the ID name. 
<br />
<br /> 
        It's important to note that ID selectors should be used 
        sparingly. Each ID should be unique within a single HTML 
        document, meaning that you should not have multiple elements
        with the same ID. Overusing IDs can lead to specificity
        issues and make your CSS less maintainable. In most cases, 
        it's more common to use class selectors to target and style 
        groups of elements with shared styles, reserving ID selectors
        for unique, one-of-a-kind elements that require special styling.
        </p>

         <div className="id-selector-img">
            <img src={idselector} alt="" />
          </div>

          <div className="m-id-selector-img">
            <img src={midselector} alt="" />
          </div>  


        <h1 className="descendant-selector-title"> Descendant Selector: </h1>
        <p className="descendant-selector-main"> 
        Selects elements that are descendants of a specified element.
        This will add margin to all p elements inside an element with the class "container."
        </p>

         <div className="descendant-selector-img">
            <img src={descenselector} alt="" />
          </div>

          <div className="m-descendant-selector-img">
            <img src={mdescenselector} alt="" />
          </div>  

        <h1 className="child-selector-title"> Child Selector: </h1>
        <p className="child-selector-main"> 
        Selects elements that are direct children of a specified element.
        This will change the font color to yellow and increase the font size of the list items
        that are direct children of a ul element.
        </p>
        <div className="child-selector-img">
            <img src={childselector} alt="" />
          </div>

          <div className="m-child-selector-img">
            <img src={mchildselector} alt="" />
          </div>  
<br />
<br />
        <h1 className="attr-selector-title"> Attribute Selector: </h1>
        <p className="attr-selector-main"> 
         Selects elements based on their attributes.
        </p>
         <div className="attr-selector-img">
            <img src={attrselector} alt="" />
          </div>

          <div className="m-attr-selector-img">
            <img src={mattrselector} alt="" />
          </div>  

<br />
<br />

          <hr className="selector-line"  />
           <h1 className="pseduo-ce-title"> Pseudo-classes and Pseudo-elements </h1>
          <hr className="selector-line" />

          <p className="pseduo-intro"> CSS selectors go beyond simple element, class, and ID selections. 
          Pseudo-class selectors, ( often indicated by a colon : ) allows you to select elements based on
          their state or position within the document. Unlike traditional selectors that match elements 
          by their tag name, class, or ID attributes, pseudo-class selectors provide a dynamic way to
          style elements.</p>
<br />
<br />
         <h1 className="selector-pseduo-title"> Common Pseudo Selectors: </h1>

         <h1 className="pseduo-hover-title"> :hover </h1>
          <p className="pseduo-intro"> 
          The :hover pseudo-class selects an element when the user hovers their mouse
          pointer over the element. This is often used to create interactive effects like changing 
          the color or background of a button, or a link when the user hovers over.
          </p>
          <div className="pseduo-selector-img">
              <img src={hoverpseduo} alt="" />
            </div>
            <div className="m-pseduo-selector-img">
              <img src={mhoverpseduo} alt="" />
            </div>  
<br />
<br />
        <h1 className="pseduo-focus-title"> :focus </h1>
        <p className="selector-type-focus">
        The :focus pseudo-class selects an element when it gains focus, typically through 
        keyboard navigation or clicking with a mouse. It's often used for styling form input
        fields to provide visual feedback when they are active.
        </p>
         <div className="focus-selector-img">
            <img src={focuselector} alt="" />
          </div>
          <div className="m-focus-selector-img">
            <img src={mfocuselector} alt="" />
          </div>  

        <h1 className="pseduo-fl-title"> first-child and :last-child </h1>
        <p className="fl-selector-main"> 
        These pseudo-classes select the first and last child elements of a parent element. 
        They can be useful for styling the first and last items in a list differently.
        </p>
        <div className="fl-selector-img">
            <img src={flchildselector} alt="" />
          </div>
          <div className="m-fl-selector-img">
            <img src={mflchildselector} alt="" />
          </div>  

        <h1 className="pseduo-nth-title"> :nth-of-type(n) </h1>
        <p className="nth-selector-main"> 
        Allows you to select elements based on their position within their parent element, 
        considering only elements of the same type. Here's an example that selects every 2nd 
        paragraph and applies a different background color:
<br />
<br />
        In this example, every third p element will have a background color orange
        creating a pattern of styled paragraphs. The 2n parameter means every 2nd element
         (2, 4, 6, and so on). You can adjust this parameter to create different patterns 
         based on the nth element you want to select.
        </p>
        <div className="nth-selector-img">
            <img src={nthselector} alt="" />
          </div>

          <div className="m-nth-selector-img">
            <img src={mnthselector} alt="" />
          </div>  
<br />
<br />
        </div>    
    </div>
     
  )
}

export default Selectors;