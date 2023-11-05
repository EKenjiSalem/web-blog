import React from 'react';
import './csspost.css';
import transitions from '../../images/transitions.png';
import mobiletransitions from '../../images/mobile_transitions.png';
import keyframes from '../../images/rsz_transformation.png';
import mobilekeyframes from '../../images/mobile_transformation.png';
import animeprops from '../../images/rsz_animeprops.png';
import mobileanimeprops from '../../images/mobile_animeprops.png';
import rotation from '../../images/rsz_1rotate.png';
import mobilerotation from '../../images/mobile_rotate.png';
import rotating from '../../images/rsz_1rotating.png';
import mobilerotating from '../../images/mobile_rotating.png';
import transform from '../../images/rsz_transform.png';
import mobiletransform from '../../images/mobile_transform.png';
import scale from '../../images/rsz_scale.png';
import mobilescale from '../../images/mobile_scale.png';
import skewing from '../../images/rsz_skewing.png';
import mobileskewing from '../../images/mobile_skewing.png';
import threed from '../../images/rsz_1threed.png';
import mobilethreed from '../../images/mobile_threed.png';



const Animations = () => {
  
  return (
    <div className="css-post">
        <div className="css-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="css-post-title"> Animations </h1>
         {/* <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div> */}

         <p className="animations-main"> 
          CSS animations are a great way to add motion and interactivity to web 
          pages without relying on JavaScript or other scripting languages. They
          allow you to create smooth and visually appealing transitions and 
          animations for various elements on a webpage. CSS animations are created using a combination
          of keyframe, transform, and propertry elements that make them a breeze to apply and control.
<br />
<br />
          <strong> Here are some key aspects of CSS animations: </strong>
<br />

          <h1 className="keyframes-title"> Keyframes: </h1> 
           CSS animations are typically defined using keyframes.
           Keyframes specify how an element should look at various points 
           in an animation sequence. You define keyframes using the @keyframes
            rule, specifying the animation's name and a series of percentages 
            (0%, 25%, 50%, 75%, and 100%) or specific points in time 
            (from 0% to 100%).
<br />
        <h1 className="keyframes-title"> Transform: </h1> 
         are uttlized inside the keyframe to manipulate the
          rendering of elements in 2D and 3D space. It allows you to apply various 
          transformations to elements, such as scaling, rotating, translating (moving),
          and skewing them. The transform property is often used within keyframes 
          animations to create dynamic visual effects.
         
           <div className="transform-img">
            <img src={keyframes} alt="" />
           </div>
           <div className="m-transform-img">
            <img src={mobilekeyframes} alt="" />
           </div>
  


        <strong className="transform-title"> Here are some common transformations you can apply using the transform property: </strong>        
<br />
<br />
        <strong> Translate: </strong>This moves an element along the X and Y axes (2D) 
        or X, Y, and Z axes (3D).
        <div className="transform-img">
          <img src={transform} alt="" />
        </div>
        <div className="m-transform-img">
          <img src={mobiletransform} alt="" />
        </div>


        <strong> Scale: </strong> Enlarges or shrinks an element. You can specify
        scaling factors for the X and Y axes (2D) or X, Y, and Z axes (3D). 
        <div className="transform-img">
          <img src={scale} alt="" />
        </div>
        <div className="m-transform-img">
          <img src={mobilescale} alt="" />
        </div>


        <strong> Rotate: </strong> This rotates an element clockwise or 
        counterclockwise by a specified angle.
        <div className="transform-img">
          <img src={rotating} alt="" />
        </div>
        <div className="m-transform-img">
          <img src={mobilerotating} alt="" />
        </div>


       <strong> Skew: </strong> This tilts an element along the X and Y axes.
        <div className="transform-img">
          <img src={skewing} alt="" />
        </div>
        <div className="m-transform-img">
          <img src={mobileskewing} alt="" />
        </div>

<br />

          <h1 className="anime-props"> Animation Properties: </h1>
          Animation properties control the animation's behavior, including its duration, timing function, delay, and iteration count.
          <ul className="anime-list-container">
            <li className='anime-list'> <strong>animation-name: </strong> Specifies the name of the keyframes animation to apply. </li> 
            <li className='anime-list'> <strong>animation-duration: </strong> Sets the time it takes for one cycle of the animation to complete (e.g., 2s for 2 seconds).</li> 
            <li className='anime-list'> <strong>animation-timing-function: </strong> Defines the timing curve or pace of the animation (e.g., ease-in, ease-out, linear).</li> 
            <li className='anime-list'> <strong>animation-delay: </strong> Sets a delay before the animation starts (e.g., 1s for 1 second).</li> 
            <li className='anime-list'> <strong>animation-iteration-count: </strong> Specifies how many times the animation should repeat (infinite for continuous loops).</li> 
            <li className='anime-list'> <strong>animation-direction: </strong> Determines whether the animation should run forwards, backward, or alternate between both (normal, reverse, alternate, alternate-reverse).</li> 
            <li className='anime-list'> <strong>animation-fill-mode: </strong> Defines what styles are applied to the element before and after the animation (forwards, backwards, both, none).</li>
          </ul>
          <div className="animeprops-img">
            <img src={animeprops} alt="" />
          </div>
          <div className="m-animeprops-img">
            <img src={mobileanimeprops} alt="" />
          </div>
<br />
           <h1 className="transitions-title"> Transitions:  </h1> 
            <div className="transitions-container">
            CSS transitions arent quite animation, yet are used for gradual state changes, such as when you want 
            to smoothly change an element's style when a user interacts with it 
            (e.g., on hover). Transitions are simpler to set up compared to animations
            and are ideal for one-off, simple effects.

           <div className="transitions-img">
            <img src={transitions} alt="" />
           </div>
           <div className="m-transitions-img">
            <img src={mobiletransitions} alt="" />
           </div>
         </div>

<br />
<br />

          <hr className="anime-line" />
            <h1 className="anime-run-title"> Running Animations: </h1>
          <hr className="anime-line" />

          <div className="rotation-img">
            <img src={rotation} alt="" />
          </div>
          <div className="m-rotation-img">
            <img src={mobilerotation} alt="" />
          </div>

  <br />
  
        <h1 className='three-d-anime'> In addition to 2d animations, 3d animations can also be created: </h1>
         <strong> 3D Transforms: </strong>  In addition to 2D transforms, you can
          apply 3D transformations to elements, which include functions like rotateX(),
          rotateY(), rotateZ(), and translate3d().

          Here's an example of how you might use the transform property within a 
          CSS animation to make an element rotate and scale simultaneously:

          <div className="threed-img">
            <img src={threed} alt="" />
          </div>

          <div className="m-threed-img">
            <img src={mobilethreed} alt="" />
          </div>
<br />
<br />
            </p>
        </div>
    
    </div>
  )
}

export default Animations;