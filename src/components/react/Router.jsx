import React from 'react';
import './react.css';
import install from '../../images/install.png';
import minstall from '../../images/m_install.png';
import routebasic from '../../images/rsz_routerbasic.png';
import mroutebasic from '../../images/m_router-basic.png';
import navroute from "../../images/navroute.png";
import mnavroute from "../../images/rsz_navroute.png";
import linkuse from "../../images/rsz_linkuse.png";
import mlinkuse from "../../images/m_linkuse.png";
import linkprogram from "../../images/rsz_linkprogram.png";
import mlinkprogram from "../../images/m_linkprogram.png";
import nestroute from "../../images/rsz_nestroute.png";
import mnestroute from "../../images/m_nestroute.png";


const Router = () => {
  return (
    <div className="js-post">
        <div className="js-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="js-post-title"> React Router </h1>
         {/* <div className="js-post-info">
            <span className="js-post-author"> Author: <b> Elias </b> </span>
            <span className="js-post-date"> 1 hour ago </span>
         </div> */}
     
         <p className="router-main"> 
          React Router is a JavaScript library specifically designed for managing 
          navigation and routing in React applications. It allows you to build SPAs 
          that offer smooth, seamless transitions between different views or components,
          all without the need for full page refreshes. Essentially, react router is the 
          way to connect components, instead of using a href/anchor tags to connect pages.

<br />
         <h1 className="route-concepts"> Key Concepts: </h1> 
<br />
          Before diving into how to use React Router, it's essential to grasp some fundamental concepts:
          <ul className="route-container"> 
            <li className="route-list"> <strong> Route: </strong> A route is a mapping between a URL and a component. When a user navigates to
             a specific URL, the associated component is rendered.</li>
            <li className="route-list"> <strong> Router: </strong> The BrowserRouter component is at the core of React Router. It listens for
             changes in the URL and renders the appropriate component based on the route configuration.</li>
            <li className="route-list"> <strong> Link: </strong> The Link component is used to create navigation links. It ensures that navigating
             between different parts of your application doesn't result in a full page reload. </li>
             <li className="route-list"> <strong> Route Parameters: </strong> React Router allows you to extract dynamic data from URLs using 
             route parameters. These parameters can be accessed within the rendered components. </li>
          </ul>

<br />

         <strong> Setting Up React Router: </strong> 
          To get started with React Router, you'll first need to install it. You can 
          use npm or yarn to add it to your project:

           <div className="router-img"> 
            <img src={install} />
          </div> 
          <div className="m-router-img"> 
            <img src={minstall} />
          </div> 

<br />
          <strong> Basic Configuration: </strong>
          Here's a simple example of setting up React Router in your application:
          
           <div className="routerbasic-img"> 
            <img src={routebasic} />
          </div> 
          <div className="m-routerbasic-img"> 
            <img src={mroutebasic} />
          </div> 
<br />
       <h1 className="nav-route-title">Navigating with React Router: </h1> 
        Linking Between Routes: To create links between different routes, use the Link component:

         <div className="navrouter-img"> 
            <img src={navroute} />
          </div> 
          <div className="m-navrouter-img"> 
            <img src={mnavroute} />
          </div> 
<br />
       <strong> Link in Action: </strong> 
       When the button is clicked, the router will navigate the to about component.
          <div className="actionrouter-img"> 
            <img src={linkuse} />
          </div> 
          <div className="m-actionrouter-img"> 
            <img src={mlinkuse} />
          </div> 
<br />
         <h1 className="router-navigation-title"> Programmatic Navigation: </h1> 
          You can also navigate programmatically using functions from the 
          react-router-dom library. For example, you can use history.push
          to change the URL: 
<br />
<br />
          <strong> In this example,  When a user clicks the "Go to About" button, the following happens: </strong>   
<br />
          <ul> 
            <li className="linkpro-list"> The handleClick function is executed. </li>
            <li className="linkpro-list"> Inside the handleClick function, the history.push('/about') method is called. </li>
            <li className="linkpro-list">  This method instructs React Router to programmatically navigate to the "/about" route. </li>
          </ul>
          <div className="linkrouter-img"> 
            <img src={linkprogram} />
          </div> 
          <div className="m-linkrouter-img"> 
            <img src={mlinkprogram} />
          </div> 

<br />
<br />

        <hr />
          <h1 className="nest-routes-title"> Nesting Routes </h1>
        <hr />

            <div className="nestedroutes-main">
            Nested routes are common requirements in web applications. 
            Nesting routes allows you to create complex page layouts with multiple levels,
            such as a dashboard with sub-pages. 
            </div>
<br />
          <strong> Nesting Routes:</strong>   
<br />
          In this example, we'll create a simple nested route structure for a user dashboard.
          The dashboard has a main layout and sub-pages for profile and settings:
<br />
<br />
          In this example, when the user visits "/dashboard," they see the main dashboard 
          page with links to the profile and settings. Nested routes are handled within the 
          Dashboard component. When the user clicks on "Profile" or "Settings," the 
          corresponding sub-page component is displayed while keeping the main dashboard 
          layout.
          <div className="nestrouter-img"> 
            <img src={nestroute} />
          </div> 
          <div className="m-nestrouter-img"> 
            <img src={mnestroute} />
          </div> 
<br />
<br />

      </p>


        </div>
    </div>
  )
}

export default Router;