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
         <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div>

         <main> 
         <p className="selectors-main"> 
          A CSS selector is a pattern that specifies which HTML elements to
          style. Selectors tell the browser which elements to apply a particular set of CSS rules 
          to. CSS selectors can be based on elements' names, IDs, classes, attributes, and 
          their relationships within the HTML document.
         <br />
         <br />
          The first thing that must be done is to connect css to html. There are three 
          primary ways to complete this task: <strong> Inline, Embedded, and External Linking </strong>
          <br />
          <br />

          <strong> Note: Inline and Embedded style block are both internal ways to connect css </strong>

          <br />
          <br />
          
        <div className="link-main"> <strong> External CSS: </strong>
        This is the most common and recommended method for linking CSS to HTML. In this
        approach, you create a index.html and styles.css files. then link the styles.css file
        to your index.html file/document using the link element.
        </div>


         <div className="eselector-img">
            <img src={externallink} alt="" />
          </div>

          <div className="eselector1-img">
            <img src={mexternallink} alt="" />
          </div>  

        <div className="link-main"> <strong> Inline CSS: </strong>
        Inline CSS is applied directly to individual HTML elements using the style attribute.
        While this approach is straightforward, it's not recommended for large-scale projects
        due to its lack of reusability.

        <br />
        <br /> 

        You can also apply CSS styles directly to individual HTML elements using the style
        attribute. This is not recommended for general use because it mixes content with 
        presentation and can make your HTML harder to read and maintain.

        <div className="inline-selector-img">
            <img src={inlineselector} alt="" />
          </div>

          <div className="m-inline-selector-img">
            <img src={minlineselector} alt="" />
          </div>   
        </div>


        <div className="link-main"> <strong> Embedded Style Block: </strong>
        An embedded style block refers to CSS styles that are placed directly within an 
        HTML document, typically within the style element in the head section of the 
        HTML. These styles are specific to that HTML document and are not external 
        stylesheets.

        <br />
        <br /> 

        <div className="embed-selector-img">
            <img src={embedblock} alt="" />
          </div>

          <div className="m-inline-selector-img">
            <img src={membedblock} alt="" />
          </div>   
        </div>


        <hr />
        <h1 className="selectors-title"> Selectors Type: </h1>
        <hr />
        <p className="selector-type-main"> 
        <strong> Element Selector: </strong>
        The simplest selector targets all instances of a specific HTML element/tag type.
        This targets the h1 and body tags, and applies color and background.
        Note: This example is the same as the embedded style block example.
        </p>
        <div className="inline-selector-img">
            <img src={embedblock} alt="" />
          </div>

          <div className="m-inline-selector-img">
            <img src={membedblock} alt="" />
          </div>   


          <h1 className="selector-title"> Class Selector: </h1>
        <p className="selector-type-main"> 
        Class selectors are used to target and style HTML elements that share a common class attribute. Use a . with the tag to target.
        Class selectors can be applied to multiple elements, allowing you
        to style them consistently.
        </p>
        <div className="inline-selector-img">
            <img src={selectorclass} alt="" />
          </div>

          <div className="m-inline-selector-img">
            <img src={mselectorclass} alt="" />
          </div>  


        <h1 className="selector-title"> ID Selector: </h1>
        <p className="selector-type-main"> 
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

        <div className="inline-selector-img">
            <img src={idselector} alt="" />
          </div>

          <div className="m-inline-selector-img">
            <img src={midselector} alt="" />
          </div>  


          <h1 className="selector-title"> Descendant Selector: </h1>
        <p className="selector-type-main"> 
        Selects elements that are descendants of a specified element.
        This will add margin to all p elements inside an element with the class "container."
        </p>
        <div className="inline-selector-img">
            <img src={descenselector} alt="" />
          </div>

          <div className="m-inline-selector-img">
            <img src={mdescenselector} alt="" />
          </div>  

          <h1 className="selector-title"> Child Selector </h1>
        <p className="selector-type-main"> 
        Selects elements that are direct children of a specified element.
        This will change the font color to yellow and increase the font size of the list items
        that are direct children of a ul element.
        </p>
        <div className="inline-selector-img">
            <img src={childselector} alt="" />
          </div>

          <div className="m-inline-selector-img">
            <img src={mchildselector} alt="" />
          </div>  

          <h1 className="selector-title"> Attribute Selector </h1>
        <p className="selector-type-main"> 
        Selects elements based on their attributes.
        </p>
        <div className="inline-selector-img">
            <img src={attrselector} alt="" />
          </div>

          <div className="m-inline-selector-img">
            <img src={mattrselector} alt="" />
          </div>  


    <hr className="pseduo-line" />
    <h1 className="pseduo-title"> Pseudo-classes and Pseudo-elements </h1>
    <hr />

    <p className="pseduo-intro"> CSS selectors go beyond simple element, class, and ID selections. 
    Pseudo-class selectors, ( often indicated by a colon : ) allows you to select elements based on
    their state or position within the document. Unlike traditional selectors that match elements 
    by their tag name, class, or ID attributes, pseudo-class selectors provide a dynamic way to
    style elements.</p>
    <br />
    <br />

      <h1 className="selector-pseduo-title"> Common Pseudo Selectors: </h1>
        <p className="selector-type-main"> 
        <strong className='hover'> :hover </strong>
        The :hover pseudo-class selects an element when the user hovers their mouse
        pointer over the element. This is often used to create interactive effects like changing 
        the color or background of a button, or a link when the user hovers over.
        </p>
        <div className="inline-selector-img">
            <img src={hoverpseduo} alt="" />
          </div>
          <div className="m-inline-selector-img">
            <img src={mhoverpseduo} alt="" />
          </div>  


        <p className="selector-type-focus"> 
        <strong className='hover'> :focus </strong>
        The :focus pseudo-class selects an element when it gains focus, typically through 
        keyboard navigation or clicking with a mouse. It's often used for styling form input
        fields to provide visual feedback when they are active.
        </p>
         <div className="inline-selector-img">
            <img src={focuselector} alt="" />
          </div>
          <div className="m-inline-selector-img">
            <img src={mfocuselector} alt="" />
          </div>  


        <p className="selector-type-main"> 
        <strong className='hover'> :first-child and :last-child</strong>
        These pseudo-classes select the first and last child elements of a parent element. 
        They can be useful for styling the first and last items in a list differently.
        </p>
        <div className="inline-selector-img">
            <img src={flchildselector} alt="" />
          </div>
          <div className="m-inline-selector-img">
            <img src={mflchildselector} alt="" />
          </div>  


        <p className="selector-type-main"> 
        <strong className='hover'> :nth-of-type(n) </strong>
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
        <div className="inline-selector-img">
            <img src={nthselector} alt="" />
          </div>

          <div className="m-inline-selector-img">
            <img src={mnthselector} alt="" />
          </div>  

            </p>
            </main>

        </div>
    
    </div>
     
  )
}

export default Selectors;