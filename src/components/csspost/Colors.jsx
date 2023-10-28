import React from 'react';
import './csspost.css';
import keyword from '../../images/rsz_keyword.png';
import mkeyword from '../../images/rsz_1keyword.png';
import rgbacolors from '../../images/rsz_rgba.png';
import mrgbacolors from '../../images/rsz_1rgba.png';
import hashtag from '../../images/rsz_hash.png';
import mhashtag from '../../images/rsz_1hash.png';
import named from '../../images/rsz_named.png';
import mnamed from '../../images/rsz_1named.png';
import colorrgb from '../../images/rsz_rgbcolor.png';
import mcolorrgb from '../../images/rsz_2rgbcolor.png';
import hslcolor from '../../images/rsz_hslcolor.png';
import mhslcolor from '../../images/rsz_1hslcolor.png';
import hslacolor from '../../images/hsla.png';
import mhslacolor from '../../images/rsz_1hslacolor.png';
import gradients from '../../images/rsz_gradients.png';
import mgradients from '../../images/rsz_1gradients.png';
import rgradients from '../../images/rsz_radialgradients.png';
import mrgradients from '../../images/rsz_1radialgradients.png';
import colorvar from '../../images/rsz_radialgradients.png';
import mcolorvar from '../../images/rsz_1radialgradients.png';
import varcolor from '../../images/rsz_varcolor.png';
import mvarcolor from '../../images/rsz_1varcolor.png';


const Colors = () => {
  return (
    <div className="css-post">
        <div className="css-post-wrapper">
        {/* <img src={sidebar} className="single-post-img" alt="" /> */}
        <h1 className="css-post-title"> Colors </h1>
         {/* <div className="css-post-info">
            <span className="css-post-author"> Author: <b> Elias </b> </span>
            <span className="css-post-date"> 1 hour ago </span>
         </div> */}

         <p className="colors-title"> Colors are used to define the visual appearance of elements on a web page.
          CSS provides several ways to specify colors. </p>

         <p className="colors-main"> 
          <ul>
            
            <h1 className="keyword-colors-title"> Keyword Colors: </h1>
            <li className="color-list"> These are predefined color names that you can use in your
            CSS. Examples include red, blue, green, yellow.
          </li>
          <div className="keyword-img">
            <img src={keyword} alt="" />
          </div>
          <div className="m-keyword-img">
            <img src={mkeyword} alt="" />
          </div>

          <h1 className="color-names-title"> Color Names: </h1>
          <li className="color-list"> In addition to keyword colors,
           CSS also supports color names like aliceblue, coral, and sienna. These
           names represent specific colors and can be used in your stylesheets. 
          </li>

           <div className="keyword-img">
            <img src={named} alt="" />
          </div>

          <div className="m-keyword-img">
            <img src={mnamed} alt="" />
          </div>
                
           <h1 className="rgb-colors-title"> RGB Colors: </h1>
           <li className="color-list"> RGB stands for Red, Green, Blue, and allows you to specify
            a color by specifying the intensity of each of these three primary colors.
<br />
<br />
            
          <strong> Here's how RGB works: </strong>
<br />
<br />
          <strong> Red (R):</strong> This channel controls the intensity of red light. A value of 0 means no red, while a value of 255 means maximum red intensity. Intermediate values create varying shades of red.
<br />
<br />
          <strong>Green (G):</strong> This channel controls the intensity of green light, following the same principles as the red channel.
<br />
<br />
          <strong>Blue (B):</strong> This channel controls the intensity of blue light, again following the same principles as the red channel.
        </li>
<br />

           <strong> An Example:  </strong>
            <div className="rgb-img">
             <img src={colorrgb} alt="" />
            </div>

            <div className="m-rgb-img">
             <img src={mcolorrgb} alt="" />
            </div>

            <h1 className="rgba-colors-title"> RGBA Colors: </h1>
            <li className="color-list"> RGBA stands for 
             "Red, Green, Blue, Alpha," and it is a color representation model that is an 
             extension of the RGB color model. In addition to specifying the intensities of
             the red, green, and blue channels, RGBA also includes an alpha channel. The 
             alpha channel represents the level of transparency or opacity of the color, 
             allowing you to create colors with varying degrees of transparency.
<br />
<br />
           <strong>Here's how RGBA works: </strong> 
<br />
<br />
          <strong> Red (R):</strong> Controls the intensity of the red color component, just like in the RGB model.
<br />
<br />
          <strong>Green (G):</strong> Controls the intensity of the green color component, following the same principles as RGB.
<br />
<br />
           <strong>Blue (B):</strong>  Controls the intensity of the blue color component, also consistent with RGB.
<br />
<br />
          <strong>Alpha (A): </strong> Controls the transparency or opacity of the color. It is specified as a value between 0 (completely transparent) and 1 (completely opaque). Values between 0 and 1 allow you to control the degree of transparency for the color.
        </li>
<br />
          <strong> An Example:  </strong>
            <div className="rgb-img">
             <img src={rgbacolors} alt="" />
            </div>
            <div className="m-rgba-img">
             <img src={mrgbacolors} alt="" />
            </div>

             <h1 className="hsl-colors-title"> HSL Colors:  </h1>
             <li className="color-list"> HSL stands for Hue,
              Saturation, and Lightness, that is used to define colors for elements on a web 
              page. HSL colors provide a more intuitive way to describe and manipulate colors 
              compared to other color models like RGB (Red, Green, Blue) or hexadecimal.
<br />
<br />
              <h1 className="hsl-title"> An explanation of each HSL component: </h1> 
              <strong> Hue (H): </strong> This represents the type of color itself, such as red, blue, or green. It's measured in degrees on a color wheel, with 0 degrees being red, 120 degrees for green, and 240 degrees for blue, with the spectrum blending smoothly between them.
<br />
<br />
              <strong> Saturation (S): </strong> Saturation determines how vivid or muted a color is. A saturation of 100% results in a fully saturated, vibrant color, while a saturation of 0% results in grayscale (no color). Values between 0% and 100% control the intensity of the color.
<br />
<br />
              <strong> Lightness (L): </strong> Lightness determines how light or dark the color is. A lightness of 0% is completely black, and 100% is completely white. Values between 0% and 100% control the brightness of the color.
<br />
<br />
             <strong> To define an HSL color in CSS, you can use the hsl() function, like this: </strong>
            </li>

            <div className="hsl-img">
             <img src={hslcolor} alt="" />
            </div> 

            <div className="m-hsl-img">
             <img src={mhslcolor} alt="" />
            </div> 

            <h1 className="hsla-colors-title"> HSLA Colors: </h1>
            <li className="color-list"> HSLA colors are a 
            variation of HSL (Hue, Saturation, Lightness) colors in CSS that include an 
            additional alpha channel to control the opacity or transparency of the color. 
            The "A" in HSLA stands for "Alpha," and it allows you to specify how transparent 
            or opaque the color should be. This is particularly useful for creating 
            translucent or semi-transparent colors, which can be applied to elements like
             text, backgrounds, or overlays.
<br />
<br />
              <h1 className="hsla-title"> An explanation of each HSLA component: </h1>
              <strong> Hue (H): </strong> Represents the type of color on the color wheel, as explained in the
               previous answer.         
<br />
<br />
              <strong> Saturation (S): </strong> Controls the vividness or intensity of the color, also as 
              explained earlier.
<br />
<br />
              <strong> Lightness (L): </strong>  Determines the brightness or darkness of the color,
               as previously described.
<br />
<br />
               <strong> Alpha (A): </strong> This is the transparency value, and it's specified as a number
               between 0 (completely transparent) and 1 (completely opaque). Values between 
               0 and 1 allow you to control the degree of transparency for the color. For
                example, 0.5 would make the color halfway transparent.
            </li>
<br />
            
           <strong> To define an HSLA color in CSS, you can use the hsla() function, like this: </strong> 
            <div className="keyword-img">
             <img src={hslacolor} alt="" />
            </div>

            <div className="m-keyword-img">
             <img src={mhslacolor} alt="" />
            </div>
         </ul>

        <hr />
         <h1 className="gradient-title"> Gradients: </h1>
        <hr />

        Color gradients, often referred to simply as gradients, are a gradual transition 
        between two or more colors or shades. Gradients are used in various design elements,
        including backgrounds, buttons, text, and illustrations, to create visually appealing 
        and dynamic effects. They can be applied in both print and digital media. Here are 
        some key aspects of color gradients:
<br />
<br />
        <h1 class="linear-title"> Linear Gradient: </h1>  
       In a linear gradient, colors transition in a straight line 
        from one point to another. This creates a smooth gradient effect in a 
        specific direction, such as from left to right, top to bottom, or diagonally.

           <div className="linear-img">
             <img src={gradients} alt="" />
           </div>

            <div className="m-linear-img">
             <img src={mgradients} alt="" />
            </div>

         <h1 class="radial-title"> Radial Gradient: </h1>  Radial gradients 
         emanate from a central point and transition outward in a circular or 
         elliptical pattern. This creates a spotlight or vignette effect, with colors
         radiating from the center.

            <div className="radial-img">
             <img src={rgradients} alt="" />
            </div>

            <div className="m-radial-img">
             <img src={mrgradients} alt="" />
            </div>
<br />
<br />

        <hr />
         <h1 className="var-color-title"> Color Variables: </h1>
        <hr />

         Variable colors, also known as color variables or custom properties in CSS, allow
         you to define reusable color values that you can apply consistently throughout 
         your stylesheet. Using variables for colors makes your CSS more maintainable and
         flexible, especially in larger projects where you may need to update colors in 
         multiple places.
  <br />
  <br />       
          <strong> An Example: </strong>
          <div className="var-img">
            <img src={varcolor} alt="" />
          </div>

          <div className="m-var-img">
            <img src={mvarcolor} alt="" />
          </div>  
            </p>
<br />
<br />
        </div>
    </div>
  )
}

export default Colors;