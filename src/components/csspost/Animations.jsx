import React from 'react';
import './csspost.css';
import transitions from '../../images/transitions.png';
import keyframes from '../../images/rsz_keyframe.png';
import animeprops from '../../images/rsz_animeprops.png';
import rotation from '../../images/rsz_1rotate.png';

const Selectors = () => {
  return (
    <div className="css-post">
        <div className="css-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="css-post-title"> Animations </h1>
         <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div>
         <p className="animations-main"> 

          CSS animations are a great way to add motion and interactivity to web 
          pages without relying on JavaScript or other scripting languages. They
          allow you to create smooth and visually appealing transitions and 
          animations for various elements on a webpage. CSS animations are defined 
          using CSS rules and properties, making them non-difficult to apply and control.
        <br />
        <br />
          <strong>Here are some key aspects of CSS animations: </strong>
        <br />
        <br />

          <strong> Keyframes: </strong> CSS animations are typically defined using keyframes.
           Keyframes specify how an element should look at various points 
           in an animation sequence. You define keyframes using the @keyframes
            rule, specifying the animation's name and a series of percentages 
            (0%, 25%, 50%, 75%, and 100%) or specific points in time 
            (from 0% to 100%).
         
           <div className="keyword-img">
            <img src={keyframes} alt="" />
          </div>
  
      <br />
      <br />

      <strong>Animation Properties: </strong>  CSS provides several properties for controlling animations,
      <ul>
       <li> animation-name: Specifies the name of the keyframes animation to apply. </li> 
       <li> animation-duration: Sets the time it takes for one cycle of the animation to complete (e.g., 2s for 2 seconds).</li> 
       <li> animation-timing-function: Defines the timing curve or pace of the animation (e.g., ease-in, ease-out, linear).</li> 
       <li> animation-delay: Sets a delay before the animation starts (e.g., 1s for 1 second).</li> 
       <li> animation-iteration-count: Specifies how many times the animation should repeat (infinite for continuous loops).</li> 
       <li> animation-direction: Determines whether the animation should run forwards, backward, or alternate between both (normal, reverse, alternate, alternate-reverse).</li> 
       <li> animation-fill-mode: Defines what styles are applied to the element before and after the animation (forwards, backwards, both, none).</li>
      </ul>
  <br />
  <br />

        <div className="keyword-img">
         <img src={animeprops} alt="" />
        </div>

<strong> Transitions </strong> 
CSS transitions arent quite animation, yet are used for gradual state changes, such as when you want 
to smoothly change an element's style when a user interacts with it 
(e.g., on hover). Transitions are simpler to set up compared to animations
 and are ideal for one-off, simple effects.

 <div className="keyword-img">
         <img src={transitions} alt="" />
        </div>

<br />
<br />

  <h1 className="anime-run-title"> Running an Animation: </h1>

  <div className="keyword-img">
    <img src={rotation} alt="" />
  </div>

 

          
            </p>
        </div>
    
    </div>
  )
}

export default Selectors;