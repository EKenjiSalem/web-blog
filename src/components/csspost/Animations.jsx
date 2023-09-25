import React from 'react';
import './csspost.css';
import transitions from '../../images/transitions.png';
import keyframes from '../../images/rsz_transformation.png';
import animeprops from '../../images/rsz_animeprops.png';
import rotation from '../../images/rsz_1rotate.png';
import rotating from '../../images/rsz_1rotating.png';
import transform from '../../images/rsz_transform.png';
import scale from '../../images/rsz_scale.png';
import skewing from '../../images/rsz_skewing.png';


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

      <br />
      <br />

     <strong> Transform: </strong> are uttlized inside the keyframe to manipulate the
      rendering of elements in 2D and 3D space. It allows you to apply various 
      transformations to elements, such as scaling, rotating, translating (moving),
      and skewing them. The transform property is often used within keyframes 
      animations to create dynamic visual effects.
         
           <div className="transform-img">
            <img src={keyframes} alt="" />
          </div>
  


   <strong className="transform-title"> Here are some common transformations you can apply using the transform property: </strong> 
         
    <br />
    <br />

      <strong>Translate: </strong>This moves an element along the X and Y axes (2D) 
      or X, Y, and Z axes (3D). For example:
      <div className="keyword-img">
        <img src={transform} alt="" />
      </div>

  

      <strong> Scale: </strong> Enlarges or shrinks an element. You can specify
       scaling factors for the X and Y axes (2D) or X, Y, and Z axes (3D). 
       <div className="keyword-img">
        <img src={scale} alt="" />
      </div>
      <br />
      <br />


      <strong> Rotate </strong> This rotates an element clockwise or 
      counterclockwise by a specified angle.
      <div className="keyword-img">
        <img src={rotating} alt="" />
      </div>

      <br />
      <br />

      <strong> Skew: </strong> This tilts an element along the X and Y axes
      <div className="keyword-img">
        <img src={skewing} alt="" />
      </div>

      <br />
      <br />

      <h1 className="anime-props"> Animation Properties: </h1>
     animation properties control the animation's behavior, including its duration, timing function, delay, and iteration count.
      <ul className="anime-list-container">
       <li className='anime-list'> <strong>animation-name: </strong> Specifies the name of the keyframes animation to apply. </li> 
       <li className='anime-list'> <strong>animation-duration: </strong> Sets the time it takes for one cycle of the animation to complete (e.g., 2s for 2 seconds).</li> 
       <li className='anime-list'> <strong>animation-timing-function: </strong> Defines the timing curve or pace of the animation (e.g., ease-in, ease-out, linear).</li> 
       <li className='anime-list'> <strong>animation-delay: </strong> Sets a delay before the animation starts (e.g., 1s for 1 second).</li> 
       <li className='anime-list'> <strong>animation-iteration-count: </strong> Specifies how many times the animation should repeat (infinite for continuous loops).</li> 
       <li className='anime-list'> <strong>animation-direction: </strong> Determines whether the animation should run forwards, backward, or alternate between both (normal, reverse, alternate, alternate-reverse).</li> 
       <li className='anime-list'> <strong>animation-fill-mode: </strong> Defines what styles are applied to the element before and after the animation (forwards, backwards, both, none).</li>
      </ul>
  <br />
  <br />

        <div className="keyword-img">
         <img src={animeprops} alt="" />
        </div>

<div className="transitions-container">
<strong> Transitions: </strong> 
CSS transitions arent quite animation, yet are used for gradual state changes, such as when you want 
to smoothly change an element's style when a user interacts with it 
(e.g., on hover). Transitions are simpler to set up compared to animations
 and are ideal for one-off, simple effects.

 <div className="keyword-img">
         <img src={transitions} alt="" />
        </div>

</div>


<br />
<br />

  <h1 className="anime-run-title"> Running an Animation: </h1>

  <div className="keyword-img">
    <img src={rotation} alt="" />
  </div>


  <br />
  <br />

    <h1 className='three-d-anime'> In addition to 2d animations, 3d animations can also be created: </h1>

     <strong> 3D Transforms: </strong>  In addition to 2D transforms, you can
      apply 3D transformations to elements, which include functions like rotateX(),
      rotateY(), rotateZ(), and translate3d().

      Here's an example of how you might use the transform property within a 
      CSS animation to make an element rotate and scale simultaneously:

      <div className="keyword-img">
        <img src={keyframes} alt="" />
      </div>

      <br />
      <br />

 

          
            </p>
        </div>
    
    </div>
  )
}

export default Selectors;