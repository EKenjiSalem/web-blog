import React from 'react';
import './csspost.css';
import flexbox from '../../images/rsz_1flexbox.png';
import mflexbox from '../../images/rsz_2flexbox.png';
import grid from '../../images/rsz_grid.png';
import mgrid from '../../images/rsz_1grid.png';


const FlexBox = () => {
  return (
    <div className="css-post">
        <div className="css-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="flexbox-title"> FlexBox and the Grid </h1>
         {/* <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div> */}
          <p className="flexbox-main">
          Flexbox and CSS Grid are both powerful layout systems in CSS, but they serve
          different purposes and are best suited for different types of layouts.
          Here's a comparison of Flexbox and CSS Grid to help you understand when to use
          each one:
  <br />
  <br />
        <h1 className="flexbox-main-title"> FlexBox: </h1>
         Flexbox, short for Flexible Box Layout, is a One-Dimensional Layout designed 
         either in a row (horizontally) or in a column (vertically). FlexBox provides an
         efficient way to arrange and distribute space among items within a container,
         even when their size is unknown or dynamic. Flexbox is particularly useful
         for creating complex layouts and aligning content in a predictable and flexible 
         manner.
  <br />
  <br />
         <h1 className="grid-main-title"> Grid: </h1>
         Grid, is a powerful layout system that allows web developers to create
         Two-dimensional grid-based layouts for web pages. It provides precise control 
         over the placement and alignment of elements within rows and columns, making it 
         a valuable tool for designing complex and responsive web layouts.
  <br />
  <br />

        <h1 className="flexgrid-title"> When to Choose Flexbox or CSS Grid: </h1>
  <br />
         Use Flexbox when you need to align items along a single axis, such as aligning 
         items within a navigation bar or creating flexible card layouts with varying 
         content heights.
  <br />
  <br />
         Use CSS Grid when you need to create complex layouts with both rows and columns, 
         like magazine-style layouts, grids of images with captions, or responsive layouts
         that reorganize content across multiple breakpoints.

         In practice, many layouts benefit from using both Flexbox and CSS Grid within the 
         same project. Each layout system complements the other, and combining them can 
         provide the most flexibility and control over your designs.
  <br />
  <br />

        <hr />
         <h1 className="flexbox-key-title"> Key concepts and features of Flexbox: </h1> 
        <hr />

         <ul>
          <li className="flex-list"> <strong> Container:</strong> In a Flexbox layout, you have a container element and child items. The container is referred to as the "flex container," and the child items are referred to as "flex items." </li>
          <li className="flex-list"> <strong> Main Axis and Cross Axis: </strong> Flexbox works along two axes: the main axis and the cross axis. The main axis is defined by the flex-direction property, which can be set to row, row-reverse, column, or column-reverse. The cross axis is perpendicular to the main axis. </li>
          <li className="flex-list"> <strong> Justify Content:</strong> This property controls the alignment of flex items along the main axis. It determines how extra space in the container is distributed among the items.</li>
          <li className="flex-list"> <strong> Align Items and Align Content: </strong> These properties control the alignment of flex items along the cross axis. align-items defines how items are aligned individually, while align-content defines how space is distributed between multiple lines of items (when they wrap to multiple lines).</li>
          <li className="flex-list"> <strong> Flex Properties:</strong> Flexbox introduces three important properties for flex items: flex-grow, flex-shrink, and flex-basis. These properties control how items expand or shrink within the container, depending on available space.</li>
          <li className="flex-list"> <strong> Flex Wrap:</strong> By default, flex items are placed in a single line. You can enable flex wrapping using the flex-wrap property to allow items to wrap onto multiple lines if there isn't enough space in a single line.</li>
          <li className="flex-list"> <strong> Ordering:  </strong> Flexbox allows you to change the order in which flex items appear on the screen using the order property. This property accepts integer values, and items with lower values appear earlier in the order.</li>
         </ul>         
  
           <div className="flexbox-img">
            <img src={flexbox} alt="" />
          </div>
          <div className="m-flexbox-img">
            <img src={mflexbox} alt="" />
          </div>  


      <hr />
       <h1 className="grid-title"> Key features and concepts of CSS Grid: </h1> 
      <hr />

     <ul>
       <li className="grid-list"> <strong> Two-Dimensional Layout: </strong> Unlike Flexbox, which is designed for one-dimensional 
        layouts (either rows or columns), CSS Grid enables two-dimensional layouts. It allows
        you to define both rows and columns, creating a grid where elements can be positioned
        in both directions.</li>

        <li className="grid-list"> <strong> Grid Container </strong> In CSS Grid, you have a "grid container" and
        "grid items." The container is the parent element that becomes a grid, and the items
         are the child elements that are placed within the grid.</li>

         <li className="grid-list"> <strong> Grid Lines and Cells: </strong> Grid 
         lines define the horizontal and vertical lines that make up the grid. Grid cells
          are the spaces between these lines where you can place your content.</li>

          <li className="grid-list"> <strong> Explicit Grid and Implicit Grid: </strong> You can explicitly 
          define the size and placement of rows and columns using properties like 
          grid-template-rows and grid-template-columns. If you don't specify a size, 
          the grid will create "implicit" rows and columns to accommodate content
           automatically. </li>

           <li className="grid-list"> <strong> Grid Template: </strong> The grid-template property allows you
            to specify both row and column sizes and their placement in a concise manner.
            </li>
          
            <li className="grid-list"> <strong> Alignment and Spacing: </strong> CSS Grid provides powerful 
            alignment and spacing options, allowing you to control how items align within 
            grid cells. You can center items, align them to the start or end of a cell,
             and add gaps between rows and columns.
            </li>

            <li className="grid-list"> <strong> Responsive Design: </strong>  Grid layouts can easily adapt to 
            different screen sizes and orientations, making it a great choice for responsive
             web design.
            </li>

            <li className="grid-list"> <strong> Grid Areas: </strong> You can name areas of the grid and place items 
            into these named areas, providing a high level of organization and maintainability
            for complex layouts.
            </li>
          </ul>         
   
          <div className="grid-img">
          <img src={grid} alt="" />
          </div>
          <div className="m-grid-img">
          <img src={mgrid} alt="" />
          </div>  
          
            </p>
        </div>
    
    </div>
  )
}

export default FlexBox;